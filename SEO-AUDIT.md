# SEO Audit Report — ttwrapper.com

**Site:** https://ttwrapper.com
**Repo:** `/Users/illiachukin/ttwrapped-repo` (Next.js, App Router)
**Audit date:** 2026-06-20
**Audience:** Site owner / developer

---

## 1. Executive Summary

ttwrapper.com has a **competent SEO baseline** that is undermined by a handful of high-leverage defects, two of which can materially affect indexing and ranking of the site's most important pages.

What's already right:
- `metadataBase` is set, `robots: index/follow` is correct, OpenGraph/Twitter cards exist, and every **server-rendered** page carries a correct per-page canonical.
- `robots.txt`, `ads.txt`, and `sitemap.xml` are valid; sitemap slugs exactly match the filesystem routes (no drift).
- Seven genuinely unique 800–900 word blog posts provide real editorial substance.

The problems cluster in three places:

1. **The two most valuable pages are client components** (`'use client'`) and therefore cannot export `Metadata`. The homepage and — critically — `/analyze-wrapped` (the primary tool page, and the exact page an AdSense reviewer lands on) both inherit the **absolute** root canonical `https://ttwrapper.com`. This means `/analyze-wrapped` **explicitly tells Google it is a duplicate of the homepage**, risking de-indexation of the site's key conversion URL. This is the single most damaging finding.

2. **Structured data is inconsistent and partially client-injected.** Only 2 of 7 blog posts emit server-rendered `BlogPosting` + `BreadcrumbList`. The other 5 ship only a `FAQPage` via `next/script strategy="afterInteractive"`, which is not in the initial HTML. Publisher logos 404, the OG image is a 512×512 favicon mislabeled as 1200×630, and there is no `WebSite` entity anywhere.

3. **A 31MB `.mov` autoplays on the landing page.** `public/Screen Recording 2025-12-13 at 19.58.29.mov` (32,508,550 bytes) is embedded via a raw `<video>` on `/analyze-wrapped` (and the homepage), in a QuickTime container most browsers won't decode, with a fake MP4 fallback pointing at the same `.mov`. Core Web Vitals is a confirmed page-experience ranking input; this is a severe LCP/INP risk on mobile.

### Overall SEO Health Verdict: **C / "At Risk"**

The foundation is B-grade, but the self-canonical bug on the primary tool page and the 31MB media payload are serious enough to drag the live, ranking-relevant health to **C**. None of these are hard to fix — the critical and high items are an afternoon of focused work and would lift the site to a solid **B+**.

---

## 2. Prioritized Findings

| Severity | Issue | Impact | Effort |
|---|---|---|---|
| **Critical** | `/analyze-wrapped` self-canonicalizes to homepage + inherits homepage title/description | De-indexation risk of the primary tool/landing page; duplicate-content signal | Low |
| **High** | 5 of 7 blog posts have no server-rendered `BlogPosting`/`BreadcrumbList`; FAQ is client-injected (`afterInteractive`) | Forfeits Article/Breadcrumb rich results; schema invisible to first-pass crawl | Medium |
| **High** | 31MB autoplay `.mov` on landing page via raw `<video>` + fake MP4 fallback | Severe LCP/INP failure on mobile; wasted crawl budget; video won't play in most browsers | Medium |
| **Medium** | `og-image.png` is 512×512 but declared 1200×630 (`summary_large_image`) | Cropped/downgraded social cards → lower referral CTR | Low |
| **Medium** | `BlogPosting publisher.logo` → `/logo.png` returns 404 | Invalid `ImageObject`; Rich Results Test warning; weakens Article eligibility | Low |
| **Medium** | Blog posts set no `og:image`, `og:type:'article'`, or `article:published_time` | Posts share as `website`, no publish-date signal, no image | Low |
| **Medium** | Homepage H1 is the logo wordmark, not a descriptive keyword phrase | Wastes the strongest on-page topical signal | Low |
| **Low** | Global `WebApplication`/`Organization` JSON-LD use `afterInteractive` | Schema not in initial HTML; internal inconsistency vs blog pattern | Low |
| **Low** | `manifest.json` references `/icon-192.png` & `/icon-512.png` (both 404) | PWA/Lighthouse hygiene; minor quality signal | Low |
| **Low** | `sitemap.xml` has no `<lastmod>` | Loses freshness/re-crawl hinting | Low |
| **Low** | `Organization` schema: empty `sameAs`, SVG logo | No entity reconciliation; non-raster logo | Low |
| **Low** | `BlogPosting.headline` ≠ page title (what-data-does-tiktok-collect) | Reduced trust in markup | Low |
| **Low** | `BreadcrumbList` on only 2 posts, inconsistent final-item URL | Forfeits breadcrumb SERP feature on 5 posts | Low |
| **Low** | No custom `app/not-found.tsx` | UX/crawl-recovery gap (no indexation bug — status is correct 404) | Low |
| **Low** | No `WebSite` JSON-LD entity | Weaker site-name/brand association in SERPs | Low |
| **Low** | AdSense/GTM loaded as raw `<script>` in `<head>` | Render-blocking contention with LCP; CSP friction | Low |
| **Low** | Homepage + analyzer share identical inherited title/description | Duplicate metadata (resolved by the canonical fix) | Low |
| **Info** | No `www → apex` 308 redirect (www is NXDOMAIN) | Preventive only; no live duplicate host today | Low |
| **Info** | `next.config.js` lacks security headers / image config / `poweredByHeader:false` | Trust/hygiene signal, not a ranking factor | Low |
| **Info** | `package.json` name `ttwraped` misspelled | Internal only; zero SEO effect | Low |

---

## 3. Detailed Findings

### A. Technical / Indexability

---

#### A1. `/analyze-wrapped` self-canonicalizes to the homepage — **CRITICAL**

**Evidence:**
- `app/analyze-wrapped/page.tsx:1` — `'use client'`, with **no** `metadata` / `alternates` / `canonical` export anywhere in the file.
- `app/layout.tsx:75` — `canonical: 'https://ttwrapper.com'` (an **absolute** URL).
- `app/layout.tsx:11` (title) and `:13–14` (description) are likewise inherited.

**Why it matters:** Next.js metadata inheritance stamps every child route lacking its own canonical with the root's. Because the canonical is **absolute** (not even the relative `/` that would still be wrong but path-derived), `/analyze-wrapped` ships `<link rel="canonical" href="https://ttwrapper.com">`. That is an explicit instruction to Google to **consolidate `/analyze-wrapped` into the homepage and drop it from the index** — for the site's single most important conversion/landing URL, and the exact page an AdSense reviewer evaluates. Per Google's "Consolidate duplicate URLs" guidance, a canonical pointing to a non-equivalent URL invites de-indexing. It also duplicates the homepage title/description, violating the unique-metadata principle.

**Fix:** Add a **server-component** `app/analyze-wrapped/layout.tsx` (keep `page.tsx` as the `'use client'` child). A relative canonical resolves against `metadataBase`:

```tsx
// app/analyze-wrapped/layout.tsx  (NEW — server component, no 'use client')
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analyze Your TikTok Data Export | TikTok Wrapped',
  description:
    'Upload your TikTok data export and instantly see your watch time, top searches, favorite creators, and a personalized activity breakdown. Private and free.',
  alternates: { canonical: '/analyze-wrapped' },
}

export default function AnalyzeLayout({ children }: { children: React.ReactNode }) {
  return children
}
```

This single change fixes both the canonical bug **and** the duplicate title/description.

---

#### A2. `manifest.json` references icons that 404 — **Low**

**Evidence:** `public/manifest.json` lists `/icon-192.png` and `/icon-512.png` (`purpose: "any maskable"`); `public/` contains only `favicon.ico`, `favicon.png`, `apple-touch-icon.png`, `og-image.png`, `icon.svg` (confirmed via `ls public/`).

**Why it matters:** PWA-installability / Lighthouse hygiene; a sloppiness signal for an AdSense reviewer. Negligible direct organic-ranking impact.

**Fix:** Generate real 192×192 and 512×512 PNGs into `public/`, or repoint the manifest entries to existing assets with correct declared sizes.

---

#### A3. `sitemap.xml` has no `<lastmod>` — **Low**

**Evidence:** `public/sitemap.xml` contains only `<loc>` entries for all 14 URLs; no `lastmod`/`changefreq`/`priority`.

**Why it matters:** `<lastmod>` (when trustworthy) helps Google prioritize re-crawl. Google ignores `changefreq`/`priority`.

**Fix:** Replace the static file with a generated `app/sitemap.ts` that derives URLs from routes (so it can't drift) and emits `lastModified` from each post's publish date:

```ts
// app/sitemap.ts
import type { MetadataRoute } from 'next'

const BASE = 'https://ttwrapper.com'
const posts = [
  { slug: 'what-data-does-tiktok-collect', date: '2025-12-01' },
  // ...all 7, date-stamped
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date() },
    { url: `${BASE}/analyze-wrapped`, lastModified: new Date() },
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.date),
    })),
  ]
}
```

Delete `public/sitemap.xml` once this is live (App Router serves `/sitemap.xml` from the route).

---

#### A4. No custom 404 page — **Low**

**Evidence:** No `app/not-found.tsx` or `app/error.tsx` exists. Next.js serves its default 404 **with a correct HTTP 404 status** — so there is no soft-404 indexation bug, only a UX/crawl-recovery and brand gap.

**Fix:** Add `app/not-found.tsx` with branded copy and internal links (home, blog, analyzer) to aid crawl recovery and recover lost visitors.

---

#### A5. No `www → apex` redirect — **Info**

**Evidence:** All canonicals/sitemap use the apex; `www.ttwrapper.com` is NXDOMAIN, so there is no live duplicate host today. Purely defensive.

**Fix:** Add `www.ttwrapper.com` as a **308** redirect to the apex in Vercel domains — cheap insurance against future inbound `www` links splitting signals.

---

#### A6. `next.config.js` lacks security headers / image config — **Info**

**Evidence:** `next.config.js` sets only `reactStrictMode` and a `headers()` block scoped to `/ads.txt`. No global security headers, no `images` config, no `poweredByHeader:false`. These are security/quality hygiene signals, **not** ranking factors.

**Fix:**

```js
// next.config.js
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
      // ...existing /ads.txt block
    ]
  },
}
```

---

#### A7. `package.json` name typo — **Info**

**Evidence:** `package.json:2` — `"name": "ttwraped"`. Never emitted to served HTML; zero SEO effect. Rename to `ttwrapper` for consistency.

---

### B. Structured Data & Social

---

#### B1. 5 of 7 posts have no server-rendered `BlogPosting`/`BreadcrumbList`; FAQ is client-injected — **High**

**Evidence:**
- `lib/structured-data/` contains modules for **only** `what-data-does-tiktok-collect.ts` and `is-it-safe-to-upload-tiktok-data-online.ts`, registered in `blog-head-json-ld.ts` and rendered server-side in `<head>` via `dangerouslySetInnerHTML` (`app/layout.tsx:132–138`).
- The other 5 posts (`how-to-analyze-tiktok-data-safely-privacy-first-guide`, `how-to-download-analyze-tiktok-data`, `tiktok-wrapped-explained-what-it-is-how-it-works`, `tiktok-wrapped-vs-tiktok-analytics-whats-the-difference`, `what-your-tiktok-usage-says-about-your-digital-habits`) emit only a `FAQPage` via `<Script strategy="afterInteractive">` (e.g. `id="faq-structured-data"` in the vs-analytics post). They carry **no** `BlogPosting` and **no** `BreadcrumbList`.

**Why it matters:** `afterInteractive` emits JSON-LD only after hydration, so it is absent from the raw server HTML and depends on Google rendering JS — parsed less reliably than markup in the initial HTML (Google "JavaScript SEO basics"). Article/Breadcrumb rich-result eligibility requires valid, crawlable schema. These 5 posts forfeit Article and breadcrumb SERP features entirely.

**Fix:** Create per-post modules (`blogPostingSchema` + `breadcrumbListSchema` + `faqPageSchema`) for the 5 remaining posts, register them in `blog-head-json-ld.ts` keyed by pathname, render them in `<head>` server-side exactly like the two working posts, and **remove the inline `afterInteractive` FAQ `<Script>`** to avoid duplication. Do this together with B6/B7 (shared breadcrumb generator).

---

#### B2. `publisher.logo` → `/logo.png` returns 404 — **Medium**

**Evidence:** `lib/structured-data/what-data-does-tiktok-collect.ts:93` and `is-it-safe-to-upload-tiktok-data-online.ts:81` both use `https://ttwrapper.com/logo.png`; `public/` has no `logo.png` (confirmed via `ls`).

**Why it matters:** Google's Article guidance requires `publisher.logo` to be a fetchable raster `ImageObject`; a 404 invalidates the property and is flagged by the Rich Results Test. It weakens (not categorically suppresses) Article eligibility — hence Medium, not High.

**Fix:** Point `publisher.logo.url` to an existing raster asset (e.g. `https://ttwrapper.com/favicon.png`, which is 512×512 raster) or add a purpose-built `/logo.png` (≥112px tall, raster, light background). Apply the same value when creating the 5 missing schemas (B1).

---

#### B3. `og-image.png` is 512×512 but declared 1200×630 — **Medium**

**Evidence:** `file public/og-image.png` → `512 x 512`, and it is byte-identical to `favicon.png` (47,570 bytes each) — the square favicon reused. `app/layout.tsx:51–52` declares `width: 1200 / height: 630`, and `:60` declares `twitter.card: 'summary_large_image'`.

**Why it matters:** `summary_large_image` expects ~1.91:1 (1200×630). A square asset declared as 1200×630 produces cropped/letterboxed or downgraded cards, lowering social referral CTR (an indirect traffic signal).

**Fix:** Create a true **1200×630** branded landscape `og-image.png` (preferred, since `summary_large_image` is already declared). Alternatively, correct the declared dimensions to 512×512 and switch to `twitter.card: 'summary'`.

---

#### B4. Blog posts set no `og:image`, `og:type:'article'`, or `article:published_time` — **Medium**

**Evidence:** Each post's `openGraph` (e.g. `app/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference/page.tsx:15–19`) defines only `title`/`description`/`url`. With `openGraph.type` unset at post level, Next falls back to the root default `type: 'website'` — so posts share as `website`, not `article`, with no reliable `og:image` and no `article:published_time`/`authors`.

**Why it matters:** `og:type='article'` + `article:published_time`/`author` improve social rendering and surface publish-date signals. Metadata completeness is itself a quality signal.

**Fix:** Centralize via a helper so all 7 posts stay consistent:

```ts
// lib/build-article-metadata.ts
import type { Metadata } from 'next'

export function buildArticleMetadata(
  slug: string, title: string, description: string, date: string,
): Metadata {
  const url = `https://ttwrapper.com/blog/${slug}`
  return {
    title, description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article', url, title, description,
      publishedTime: date,
      authors: ['TikTok Wrapped'],
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}
```

---

#### B5. Global `WebApplication`/`Organization` JSON-LD use `afterInteractive` — **Low**

**Evidence:** `app/layout.tsx:163–164` renders `WebApplication` (`@type` at `:168`) via `<Script strategy="afterInteractive">`; `Footer.tsx:68+` renders `Organization` the same way. Both appear in the rendered DOM but not the initial server HTML.

**Why it matters:** Reliability/consistency. The codebase already uses the correct server-`<head>` pattern for blog schemas; these globals diverge from it. Low (not Medium) because Google does render JS and these are global entity schemas, not the higher-impact per-page Article markup.

**Fix:** Move both into the server-rendered `<head>` as plain `<script type="application/ld+json" dangerouslySetInnerHTML={...}>`, matching the `blogHeadJsonLd` pattern at `app/layout.tsx:132–138`.

---

#### B6. `Organization` schema: empty `sameAs` + SVG logo — **Low**

**Evidence:** `Footer.tsx` sets `logo: 'https://ttwrapper.com/icon.svg'` and `sameAs: []`.

**Why it matters:** Empty `sameAs` gives no Knowledge-Graph entity-reconciliation signal; Google's Organization logo guidance prefers a fetchable **raster** logo over SVG.

**Fix:** Point `Organization.logo` to the same raster PNG used for `publisher.logo` (B2), and populate `sameAs` with real owned profiles — at minimum the `@tiktokwrapped` X profile already referenced in `twitter.creator` (`app/layout.tsx:64`):

```ts
sameAs: ['https://x.com/tiktokwrapped'],
logo: 'https://ttwrapper.com/favicon.png',
```

---

#### B7. `BlogPosting.headline` ≠ page title — **Low**

**Evidence:** `lib/structured-data/what-data-does-tiktok-collect.ts:81` headline = `'What Data Does TikTok Collect About You? A Clear Explanation'`, but `app/blog/what-data-does-tiktok-collect/page.tsx:18` title = `'...Explained Clearly'`. The `is-it-safe` post's headline matches its own page — isolated inconsistency.

**Fix:** Make `BlogPosting.headline` exactly equal the page `<title>`/H1 (`'...Explained Clearly'`); derive both from one shared constant.

---

#### B8. `BreadcrumbList` inconsistent and missing on 5 posts — **Low**

**Evidence:** `what-data-does-tiktok-collect.ts` breadcrumb position 3 **includes** an `item` URL; `is-it-safe-to-upload-tiktok-data-online.ts` position 3 **omits** it. The other 5 posts have no `BreadcrumbList`.

**Why it matters:** Consistent `BreadcrumbList` across a section yields breadcrumb SERP features; ad-hoc/missing markup forfeits them. (Omitting the last `item` is technically valid but signals ad-hoc authoring.)

**Fix:** Standardize one shared `BreadcrumbList` generator (`Home > Blog > Post`) that **always** includes the self item URL, applied to all 7 posts in the same work as B1.

---

#### B9. No `WebSite` JSON-LD entity — **Low**

**Evidence:** Grep across `app/`, `components/`, `lib/` finds `WebApplication`, `Organization`, and per-path `BlogPosting`/`Breadcrumb`/`FAQPage`, but no `'@type': 'WebSite'`.

**Why it matters:** A `WebSite` entity strengthens site-name/brand association in SERPs.

**Fix:** Add a `WebSite` JSON-LD to the server-rendered `<head>` alongside `Organization`/`WebApplication`. **Omit** `potentialAction`/`SearchAction` — there is no on-site search:

```json
{ "@context": "https://schema.org", "@type": "WebSite",
  "name": "TikTok Wrapped", "url": "https://ttwrapper.com" }
```

---

### C. On-page & Content

---

#### C1. Homepage H1 is the logo wordmark, not a keyword phrase — **Medium**

**Evidence:** `app/page.tsx:9–13` — the only H1 is `<h1 className="logo-text">` containing only `Tik`/`Tok`/`Wrapped` spans; descriptive copy lives in adjacent `<p>` tags (`:15`, `:17`). Note: `/analyze-wrapped`'s H1 is a plain `<h1>` reading "TikTok Wrapped" (it carries brand + near-keyword, so it is **not** a defect of the same magnitude — this is scoped mainly to the homepage).

**Why it matters:** A single descriptive H1 is a strong topical-relevance signal; a brand-only H1 forfeits keyword targeting. Brand-as-H1 is common and not a high-severity ranking defect (Google reads body copy for topicality) — hence Medium.

**Fix:** Make the homepage H1 descriptive while keeping the colored spans, e.g. "TikTok Wrapped — Your TikTok Year in Review". For `/analyze-wrapped`, promote "Analyze Your TikTok Data Export" into the H1 text rather than a subordinate `<p>`. Preserve wordmark styling via CSS.

---

#### C2. Homepage + analyzer share identical inherited title/description — **Low**

**Evidence:** Both `app/page.tsx:1` and `app/analyze-wrapped/page.tsx:1` are `'use client'` with no `metadata` export, so both render the `layout.tsx` title/description. The homepage owning root metadata is correct; the analyzer duplicating it is the metadata-uniqueness half of the canonical bug (A1).

**Fix:** Resolved by the `app/analyze-wrapped/layout.tsx` split in **A1** — give the analyzer its own unique title/description, keep root metadata as the homepage's.

---

### D. Performance / Core Web Vitals

---

#### D1. 31MB autoplay `.mov` on the landing page — **High**

**Evidence:**
- `public/Screen Recording 2025-12-13 at 19.58.29.mov` = **32,508,550 bytes (~31MB)** (confirmed via `ls -la public/`).
- `app/analyze-wrapped/page.tsx` embeds a raw `<video>` (~line 1037) plus raw `<img>` instruction screenshots (~lines 913–946) with no `next/image`. The same `.mov` autoplays on the homepage.
- The first `<source>` is declared `type="video/quicktime"` (which Chrome/Firefox/Edge will not decode), and the fallback `<source>` is the **same `.mov` file relabeled `video/mp4`** — not a real MP4 fallback.

**Why it matters:** A 31MB media payload on the core tool page is a severe LCP/INP risk on mobile, and Core Web Vitals is a confirmed Google page-experience ranking input. The fake fallback means the video also **fails to play** in most browsers — a UX defect on top of the CWV hit. It also wastes crawl budget. (The raw finding set deferred this to "the performance dimension," but no standalone performance finding existed — surfacing it here so it isn't lost.)

**Fix:**
1. Transcode the recording to compressed **MP4 (H.264)** and **WebM** (target **<2–3MB**), with a real per-format `<source>`, a `poster` image, and `preload="none"` (or lazy-load on intersection).
2. Serve it from a CDN / external host, not the Next `public/` bundle.
3. Convert instruction screenshots to `next/image` (or at least correctly-sized WebP).
4. Confirm the LCP element on `/analyze-wrapped` is **not** the video after the change.

```tsx
<video poster="/video-poster.webp" preload="none" muted playsInline loop autoPlay>
  <source src="https://cdn.ttwrapper.com/demo.webm" type="video/webm" />
  <source src="https://cdn.ttwrapper.com/demo.mp4"  type="video/mp4" />
</video>
```

---

### E. Crawl / Render & Build

---

#### E1. AdSense + GTM loaded as raw `<script>` in `<head>` — **Low**

**Evidence:** `app/layout.tsx:112` injects the AdSense loader (`pagead2.googlesyndication.com/.../adsbygoogle.js`) as a raw `<script async>` directly in `<head>`; `:101` bootstraps GTM inline via `next/script` `afterInteractive`. Mixing a raw third-party ad script into `<head>` with the rest of the metadata contends with LCP and complicates a future CSP.

**Why it matters:** Loading strategy affects page-experience signals. The ad code itself is expected for AdSense review; the **synchronous head placement** is the issue.

**Fix:** Load AdSense and GTM via `next/script` with `strategy="afterInteractive"` (or `lazyOnload` for ads where acceptable) so they don't compete with critical rendering and stay out of the synchronous head path.

```tsx
<Script
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2980943706375055"
  strategy="afterInteractive"
  crossOrigin="anonymous"
/>
```

---

## 4. Action Plan

### Quick wins (do this week)

1. **[Critical] Add `app/analyze-wrapped/layout.tsx`** with unique title/description + relative canonical (A1). Fixes the de-indexation risk and the duplicate metadata (C2) in one move.
2. **[High] Transcode the 31MB `.mov`** to compressed MP4/WebM with real fallbacks, a poster, and lazy load; move it off the `public/` bundle (D1).
3. **[Medium] Fix `publisher.logo` 404** → point to `/favicon.png` or add a real `/logo.png` (B2).
4. **[Medium] Replace the OG image** with a true 1200×630 asset (or downgrade declared dims to 512×512 + `summary` card) (B3).
5. **[Medium] Make the homepage H1 descriptive** while keeping the colored spans (C1).
6. **[Low] Fix the manifest icon 404s** (A2) and **align the headline string** for the what-data post (B7) — both trivial.
7. **[Low] Move AdSense/GTM to `next/script afterInteractive`** out of the head path (E1).

### Larger projects

1. **Unify and complete structured data (B1, B4, B6, B8, B9).** Build a shared `lib/build-article-metadata.ts` + a shared `BreadcrumbList`/`BlogPosting` generator; create per-post modules for the 5 missing posts; register them in `blog-head-json-ld.ts`; render server-side; remove the `afterInteractive` FAQ scripts. Add the `WebSite` entity and move `WebApplication`/`Organization` (B5) into the server `<head>` in the same pass.
2. **Generated sitemap (A3).** Replace `public/sitemap.xml` with `app/sitemap.ts` that derives URLs from routes and emits `lastmod` from post dates.
3. **Site-quality hardening.** Add `app/not-found.tsx` (A4), global security headers + `poweredByHeader:false` (A6), the `www → apex` 308 (A5), and rename the package (A7).
4. **Image pipeline.** Migrate instruction screenshots and any remaining raster assets to `next/image` with correctly sized WebP (part of D1).

---

**Bottom line:** Fix A1 and D1 this week — they are the only two findings capable of suppressing or de-ranking the site's primary pages, and both are low-to-medium effort. The structured-data cleanup is the highest-value larger project for unlocking rich results across the blog.

Key files referenced: `/Users/illiachukin/ttwrapped-repo/app/layout.tsx`, `/Users/illiachukin/ttwrapped-repo/app/analyze-wrapped/page.tsx`, `/Users/illiachukin/ttwrapped-repo/app/page.tsx`, `/Users/illiachukin/ttwrapped-repo/lib/structured-data/`, `/Users/illiachukin/ttwrapped-repo/app/components/Footer.tsx`, `/Users/illiachukin/ttwrapped-repo/public/`.

---

## Appendix — Auditor's Verified Corrections & Additions

These items were verified directly against the repo after the main report (folding in a completeness-critic pass):

- **Branding/icon assets are broader than listed.** `app/icon.png` (Next.js App Router auto-serves it as the favicon) is the **verbatim TikTok music-note glyph**, identical to `public/og-image.png` / `public/favicon.png`. The full replace list is: `public/og-image.png`, `public/favicon.png`, `public/favicon.ico`, `public/apple-touch-icon.png`, **and `app/icon.png`**. `public/icon.svg` uses TikTok's exact `#fe2c55`/`#25f4ee` colors (with a 📊 emoji, not the glyph) — recolor it for consistency.
- **The 4 JPGs in `public/images/` are TikTok-app instructional screenshots, not Wrapped results.** They show TikTok's own Settings menu for the "download your data" how-to, so they **cannot** double as the example-results poster — but they are raw `<img>` and should move to `next/image` (with descriptive `alt`) regardless. (Audit the in-page `<img>` alt text while doing this.)
- **The blog index (`app/blog/page.tsx`) is healthy.** It renders all 7 posts via `<Link href={\`/blog/${slug}\`}>` template literals; no broken-list issue.
- **og-image reconciliation:** the single corrected asset must be **both** original (non-TikTok) art **and** a true **1200×630** landscape — don't ship a 1200×630 image that still contains the TikTok glyph.
- **Blog word counts:** measured ~600–800 words/post (~795 for the longest). Corpus is "real but small (7 posts)"; the structured-data and content-expansion recommendations stand.
- **Sitemap/robots:** robots.txt only disallows AI scrapers (Amazonbot, Applebot-Extended, Bytespider, CCBot) and Allows everything else, so Googlebot/AdSense crawlers are unblocked. ✅
- **`/about` FAQPage JSON-LD is `afterInteractive`** (same server-render gap as the blog posts) — convert it to server-rendered `<head>` JSON-LD in the structured-data unification pass (finding B1).
