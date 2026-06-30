// ─── Daily blog generator ─────────────────────────────────────────────────────
// Generates N brand-new blog posts with the Claude API, matching the existing
// posts' voice, structure, length, and on-page SEO, then writes them into this
// repo's TypeScript-module blog system:
//
//   lib/blog/posts/<slug>/en.ts          (English PostContent — the default)
//   lib/blog/posts/<slug>/<locale>.ts    (one per non-default locale)
//   lib/blog/posts/<slug>/index.ts       (slug + date + translations map)
//   lib/blog/registry.ts                 (import + prepend to the posts array)
//
// generateStaticParams (app/[lang]/blog/[slug]/page.tsx) and the sitemap
// (app/sitemap.xml/route.ts) both derive from the registry's `posts` array, so
// a registered post appears on the site and in the sitemap automatically. A push
// of these changes to `main` triggers the Vercel deploy and IndexNow ping.
//
// Usage:
//   node scripts/generate-blog.mjs              # generate 2 posts, write files
//   node scripts/generate-blog.mjs --count 1    # generate 1 post
//   node scripts/generate-blog.mjs --no-write   # generate + print, write nothing
//
// Env:
//   ANTHROPIC_API_KEY   required — the Claude API key
//   ANTHROPIC_MODEL     optional — defaults to "claude-opus-4-8"
//
// Dependency-free: Node 20+ global fetch, no npm packages (like indexnow.mjs).

import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "lib/blog/posts");
const REGISTRY = path.join(ROOT, "lib/blog/registry.ts");

// Keep in sync with lib/i18n/config.ts. `en` is the default and lives in en.ts;
// the rest are translations. Order here drives the translations map order.
const DEFAULT_LOCALE = "en";
const LOCALES = ["en", "pl", "es", "pt", "fr", "it", "de", "uk", "sv", "cs", "el"];
const TRANSLATION_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);
const LOCALE_NAMES = {
    pl: "Polish", es: "Spanish", pt: "Portuguese", fr: "French", it: "Italian",
    de: "German", uk: "Ukrainian", sv: "Swedish", cs: "Czech", el: "Greek",
};

const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-4-8";
const API_KEY = process.env.ANTHROPIC_API_KEY;

const args = process.argv.slice(2);
const countArg = Number(args[args.indexOf("--count") + 1]);
const COUNT = args.includes("--count") && countArg > 0 ? countArg : 2;
const NO_WRITE = args.includes("--no-write");

// ─── PostContent schema (mirrors lib/blog/types.ts) ───────────────────────────
// A body block is one of the typed variants below. Text fields may contain
// [[token]] / [[token:Label]] / [[/path:Label]] inline links (see RichText.tsx).
const BLOCK_SCHEMA = {
    type: "object",
    properties: {
        type: { type: "string", enum: ["p", "h2", "h3", "ul", "ol", "note", "step", "table"] },
        text: { type: "string", description: "Used by p, h2, h3, note." },
        items: { type: "array", items: { type: "string" }, description: "Used by ul, ol, step." },
        title: { type: "string", description: "Used by step." },
        headers: { type: "array", items: { type: "string" }, description: "Used by table." },
        rows: { type: "array", items: { type: "array", items: { type: "string" } }, description: "Used by table." },
    },
    required: ["type"],
};

const CONTENT_PROPS = {
    title: { type: "string" },
    description: { type: "string" },
    intro: { type: "string" },
    blocks: { type: "array", items: BLOCK_SCHEMA },
    faq: {
        type: "array",
        items: {
            type: "object",
            properties: { q: { type: "string" }, a: { type: "string" } },
            required: ["q", "a"],
        },
    },
};

// Generated English post object = a slug + the PostContent fields.
const POST_SCHEMA = {
    type: "object",
    properties: { slug: { type: "string" }, ...CONTENT_PROPS },
    required: ["slug", "title", "description", "intro", "blocks", "faq"],
};

// Translated post object = same minus a slug (slug carried over from English).
const TRANSLATION_SCHEMA = {
    type: "object",
    properties: { slug: { type: "string" }, ...CONTENT_PROPS },
    required: ["title", "description", "intro", "blocks", "faq"],
};

const generationTool = {
    name: "submit_posts",
    description: "Submit the finished blog post objects.",
    input_schema: {
        type: "object",
        properties: { posts: { type: "array", items: POST_SCHEMA } },
        required: ["posts"],
    },
};

const translationTool = {
    name: "submit_posts",
    description: "Submit the translated blog post objects.",
    input_schema: {
        type: "object",
        properties: { posts: { type: "array", items: TRANSLATION_SCHEMA } },
        required: ["posts"],
    },
};

// ─── Anthropic Messages API (tool use → structured, valid JSON) ───────────────
async function claudePosts(prompt, tool, maxTokens = 16000) {
    if (!API_KEY) throw new Error("ANTHROPIC_API_KEY is not set");
    const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
            "x-api-key": API_KEY,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        },
        body: JSON.stringify({
            model: MODEL,
            max_tokens: maxTokens,
            tools: [tool],
            tool_choice: { type: "tool", name: "submit_posts" },
            messages: [{ role: "user", content: prompt }],
        }),
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Anthropic API ${res.status}: ${text.slice(0, 500)}`);
    }
    const data = await res.json();
    const block = (data.content || []).find((b) => b.type === "tool_use");
    if (!block || !Array.isArray(block.input?.posts)) {
        throw new Error(`Model did not return posts (stop_reason: ${data.stop_reason})`);
    }
    return block.input.posts;
}

// ─── Discover existing slugs (every directory under lib/blog/posts) ───────────
async function existingSlugs() {
    const entries = await readdir(POSTS_DIR, { withFileTypes: true });
    return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

// Load a couple of recent English posts as the style reference.
async function sampleEnglishPosts(slugs) {
    const picks = slugs.slice(0, 2);
    const samples = [];
    for (const slug of picks) {
        try {
            const src = await readFile(path.join(POSTS_DIR, slug, "en.ts"), "utf8");
            const obj = parseContentExport(src);
            if (obj) samples.push({ slug, ...obj, faq: (obj.faq || []).slice(0, 2) });
        } catch { /* skip unreadable sample */ }
    }
    return samples;
}

// Pull the PostContent object literal out of an en.ts file. The file is
//   export const content: PostContent = { ... }
// We slice from the first "{" after the assignment to the matching closing "}"
// and eval it as JS (object literal, no external refs) to get a plain object.
function parseContentExport(src) {
    const anchor = src.indexOf("content: PostContent =");
    const braceStart = src.indexOf("{", anchor < 0 ? 0 : anchor);
    if (braceStart < 0) return null;
    let depth = 0, end = -1, inStr = null, prev = "";
    for (let i = braceStart; i < src.length; i++) {
        const c = src[i];
        if (inStr) {
            if (c === inStr && prev !== "\\") inStr = null;
        } else if (c === '"' || c === "'" || c === "`") {
            inStr = c;
        } else if (c === "{") depth++;
        else if (c === "}") { depth--; if (depth === 0) { end = i; break; } }
        prev = c;
    }
    if (end < 0) return null;
    const literal = src.slice(braceStart, end + 1);
    // eslint-disable-next-line no-new-func
    return Function(`"use strict"; return (${literal});`)();
}

// ─── Prompts ──────────────────────────────────────────────────────────────────
function generationPrompt(samples, slugs) {
    return `You are a senior writer for TikTok Wrapped (ttwrapper.com), a privacy-first tool that turns a user's TikTok data export into readable insights about their watch history, screen time, and habits. Write ${COUNT} brand-new English blog post(s).

Match the EXISTING posts exactly in voice, depth, structure, length (~1300-1800 words), and on-page SEO. Here are ${samples.length} real examples — study their calm, practical, privacy-conscious tone, their block structure, and their FAQ style:

${JSON.stringify(samples, null, 2)}

Each post is a structured object with these fields:
- "slug": short, kebab-case, unique. MUST NOT be any of these existing slugs: ${JSON.stringify(slugs)}
- "title": specific and useful (not clickbait), like the samples.
- "description": 1-2 sentences for the blog index card AND the meta description.
- "intro": a 1-2 sentence direct-answer lead paragraph (rendered above the body).
- "blocks": an ordered array of typed blocks. Each block is one of:
    { "type": "p", "text": "..." }                        paragraph
    { "type": "h2", "text": "..." }                       section heading
    { "type": "h3", "text": "..." }                       sub-heading
    { "type": "ul", "items": ["...", "..."] }             bullet list
    { "type": "ol", "items": ["...", "..."] }             numbered list
    { "type": "note", "text": "..." }                     callout/note
    { "type": "step", "title": "...", "items": ["..."] }  a step block
    { "type": "table", "headers": ["...","..."], "rows": [["...","..."]] }
  Use 18-30 blocks: a couple of intro paragraphs, several h2 sections (some with
  h3 sub-sections), bullet lists, and at least one note. Plain text only inside
  text/items — NO markdown headings, NO "- " bullets, NO ** inside text.
- "faq": array of 4-5 {"q","a"} objects, substantive answers (3-5 sentences).

INLINE LINKS: inside any text/items string you may use these tokens (and only
these), exactly as written:
- [[home:visible label]]        → the homepage
- [[analyze:visible label]]     → the analyze-wrapped page
- [[example:visible label]]     → the example-wrapped page
- [[blog:visible label]]        → the blog index
- [[/blog/<existing-slug>:visible label]] → link to another existing post
Use 2-4 inline links per post where natural (e.g. point readers to analyze their
own export, or to a related existing post). Never invent other tokens or raw URLs.

Pick fresh, non-overlapping topics NOT already covered by the existing slugs.
Each post must be on a distinct topic. Call submit_posts with exactly ${COUNT} post object(s).`;
}

function translationPrompt(localeName, posts) {
    return `Translate the following ${posts.length} blog post object(s) from English into ${localeName} for TikTok Wrapped (ttwrapper.com).

RULES:
- Translate naturally and idiomatically: "title", "description", "intro", every block's "text" / "items" / "title" / "headers" / "rows", and "faq" (both q and a).
- Preserve the EXACT block structure: same number of blocks, same "type" for each, same array lengths. Do not add, drop, reorder, or merge blocks.
- Keep every inline link token EXACTLY as in the English (e.g. [[analyze:LABEL]], [[/blog/some-slug:LABEL]]) — translate ONLY the visible label after the colon, never the token before it. Keep tokens with no colon (e.g. [[home]]) unchanged.
- Keep the brand name "TikTok Wrapped" and "TikTok" untranslated.
- Each translated object must carry the SAME "slug" as its English source.

English posts:
${JSON.stringify(posts, null, 2)}

Call submit_posts with exactly ${posts.length} translated post object(s).`;
}

// ─── Serialize a PostContent object into a <locale>.ts module ─────────────────
function contentModule(content) {
    const ordered = {
        title: content.title,
        description: content.description,
        intro: content.intro,
        blocks: content.blocks,
        faq: content.faq,
    };
    const body = JSON.stringify(ordered, null, 2);
    return `import type { PostContent } from '@/lib/blog/types'\n\nexport const content: PostContent = ${body}\n`;
}

function indexModule(slug, date) {
    const imports = LOCALES.map((l) => `import { content as ${l} } from './${l}'`).join("\n");
    const map = LOCALES.join(", ");
    return `import type { BlogPost } from '@/lib/blog/types'
${imports}

export const post: BlogPost = {
  slug: '${slug}',
  date: '${date}',
  translations: { ${map} },
}
`;
}

// camelCase identifier for the registry import alias.
function aliasFor(slug) {
    return "post_" + slug.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

// Insert imports + prepend entries (newest first) into registry.ts.
function updateRegistry(src, newSlugs) {
    const importLines = newSlugs
        .map((slug) => `import { post as ${aliasFor(slug)} } from './posts/${slug}'`)
        .join("\n");
    // Add imports right after the last existing post import.
    const lastImportRe = /import \{ post as [^\n]+\n/g;
    let lastImportEnd = 0;
    let m;
    while ((m = lastImportRe.exec(src)) !== null) lastImportEnd = m.index + m[0].length;
    if (lastImportEnd === 0) throw new Error("Could not locate post imports in registry.ts");
    let out = src.slice(0, lastImportEnd) + importLines + "\n" + src.slice(lastImportEnd);

    // Prepend entries to the posts array (newest first): insert right after the
    // array's opening "[". Anchor on "= [" so we don't match the "[" in
    // "BlogPost[]" (the type annotation).
    const arrAnchor = "export const posts: BlogPost[] = [";
    const arrIdx = out.indexOf(arrAnchor);
    if (arrIdx < 0) throw new Error("Could not locate posts array in registry.ts");
    const insertAt = arrIdx + arrAnchor.length;
    const entries = "\n" + newSlugs.map((slug) => `  ${aliasFor(slug)},`).join("\n");
    out = out.slice(0, insertAt) + entries + out.slice(insertAt);
    return out;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
    const slugs = await existingSlugs();
    const samples = await sampleEnglishPosts(slugs);

    console.log(`→ Generating ${COUNT} new English post(s) with ${MODEL}…`);
    const generated = await claudePosts(generationPrompt(samples, slugs), generationTool);

    const today = new Date().toISOString().slice(0, 10);
    const seen = new Set(slugs);
    const newPosts = [];
    for (const p of generated) {
        if (!p || !p.slug || !Array.isArray(p.blocks) || !p.blocks.length) {
            console.warn("  ⚠ skipping malformed post", p?.slug);
            continue;
        }
        if (seen.has(p.slug)) {
            console.warn(`  ⚠ duplicate slug "${p.slug}" — skipping`);
            continue;
        }
        seen.add(p.slug);
        newPosts.push(p);
    }
    if (!newPosts.length) throw new Error("Model returned no usable new posts");
    console.log(`  ✓ ${newPosts.length} post(s): ${newPosts.map((p) => p.slug).join(", ")}`);

    // translations[slug][locale] = PostContent
    const translations = {};
    for (const p of newPosts) translations[p.slug] = { en: p };

    for (const loc of TRANSLATION_LOCALES) {
        console.log(`→ Translating to ${LOCALE_NAMES[loc]} (${loc})…`);
        const arr = await claudePosts(translationPrompt(LOCALE_NAMES[loc], newPosts), translationTool);
        newPosts.forEach((en, i) => {
            const tr = arr.find((t) => t && t.slug === en.slug) || arr[i] || {};
            translations[en.slug][loc] = { ...tr, slug: en.slug };
        });
    }

    if (NO_WRITE) {
        console.log("\n--no-write: nothing written. Generated English posts:\n");
        console.log(JSON.stringify(newPosts, null, 2));
        return;
    }

    // Write each post directory: en.ts + <locale>.ts + index.ts.
    for (const p of newPosts) {
        const dir = path.join(POSTS_DIR, p.slug);
        await mkdir(dir, { recursive: true });
        for (const loc of LOCALES) {
            await writeFile(path.join(dir, `${loc}.ts`), contentModule(translations[p.slug][loc]));
        }
        await writeFile(path.join(dir, "index.ts"), indexModule(p.slug, today));
        console.log(`  ✓ wrote lib/blog/posts/${p.slug}/ (${LOCALES.length} locales + index)`);
    }

    // Register the new posts (imports + prepend to the posts array, newest first).
    const registrySrc = await readFile(REGISTRY, "utf8");
    await writeFile(REGISTRY, updateRegistry(registrySrc, newPosts.map((p) => p.slug)));
    console.log(`  ✓ registered ${newPosts.length} post(s) in lib/blog/registry.ts`);

    console.log("\n✅ Done.");
}

main().catch((err) => {
    console.error("❌", err.message);
    process.exit(1);
});
