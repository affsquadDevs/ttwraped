# AdSense Policy & Approval Audit Report

**Site:** https://ttwrapper.com
**Repo:** `/Users/illiachukin/ttwrapped-repo` (Next.js App Router)
**Publisher ID:** `ca-pub-2980943706375055`
**Status:** Rejected by Google AdSense
**Audit date:** 2026-06-20

---

## 1. Verdict

**How far from approval:** Mid-distance. This is **not** a "burn it down" situation — the underlying blog content is original, `ads.txt` is correct, and the trust pages exist. But the site currently fails AdSense on **three independent critical axes at once** (no readable product value for a reviewer, brand impersonation of TikTok, and missing ad-cookie/consent compliance), and any one of them is sufficient for rejection. Expect **roughly 1–2 weeks of focused work** (one new feature page, an icon/branding pass, a privacy-policy rewrite + CMP, and 4–6 new articles) before a credible resubmission.

**The single biggest blocker:** The reviewer's primary destination — the core tool at `/analyze-wrapped` — **renders no content until a personal TikTok data export is uploaded**, and that export "takes a few hours up to 3 days" to obtain. Every results block is gated behind `{userData && (...)}`. A reviewer who will not (and cannot) upload personal data sees only a how-to card, an upload box, and a 31 MB autoplay `.mov` that Googlebot cannot read. To a reviewer this reads as an **under-construction page with no publisher content** — a textbook "Low value content" / "Valuable inventory" rejection.

**The fix that unblocks the most:** ship a public, no-upload **`/example-wrapped`** page that renders the full results UI with realistic sample data. It simultaneously fixes the #1 blocker, gives Googlebot readable proof of value, and doubles as a marketing landing page.

---

## 2. Why it was likely rejected — ranked root causes

| Rank | Likely Google reason (policy label) | Evidence | Confidence |
|------|-------------------------------------|----------|------------|
| 1 | **Low value content** / Minimum content — Valuable Inventory ("no ads on under-construction / no-content screens") | `app/analyze-wrapped/page.tsx` is `'use client'`; all stats blocks gated behind `{userData && (...)}` (real results UI at line 1068+). Pre-upload, the page is only a how-to card (897–970), an upload box (972–1028), and a demo card whose only proof is a 31 MB autoplay muted `.mov` (1037–1047). Copy admits the export takes "a few hours up to 3 days." Googlebot can't read the video. No static sample-results route exists. | **High** |
| 2 | **Low value content** — duplicate / templated metadata | `analyze-wrapped/page.tsx` is `'use client'` and exports no metadata, so it inherits `app/layout.tsx`'s `alternates.canonical = https://ttwrapper.com/` plus the homepage title/description. Live HTML confirms the tool page self-declares `/` as canonical — telling Google the most important interactive page is a duplicate of the homepage. | **High** |
| 3 | **Misrepresentation** — false affiliation / impersonation | Favicon, Apple touch icon, **and OG share image are the verbatim TikTok music-note glyph** with TikTok's cyan/magenta offset (`/public/og-image.png`, referenced `layout.tsx` 49–72). Product name is "**TikTok Wrapped**," the H1 is a split-color TikTok-style wordmark, the palette clones TikTok's exact `#fe2c55`/`#25f4ee`, and the non-affiliation disclaimer is footer-only. Collectively reads as a quasi-official TikTok feature. | **High** |
| 4 | **Site does not comply with Google policies** — privacy / ad-cookie disclosure | `app/privacy/page.tsx` Third-Party Services (70–78) is one boilerplate sentence. No DoubleClick cookie, no "ads based on prior visits," no links to `policies.google.com/technologies/partner-sites`, `adssettings.google.com`, or `aboutads.info/choices`. GTM-53GDGKBZ (layout 101–110) and Analytics are undisclosed. ~230 words; no GDPR/CCPA rights, cookie table, retention, or controller identity. | **Medium** |
| 5 | **Low value content** — thin / narrow corpus | Exactly 7 blog posts (verified), all variations on "export your TikTok data" (~577–785 words each), + 6 utility pages = ~14 sitemap URLs. `/contact` ~150 words (mailto only), `/privacy` ~230, `/terms` ~210 (no governing law/changes clause; inconsistent dates). A thin corpus circling one narrow topic attached to a tool with no standalone output reads as insufficient unique value. | **Medium** |
| 6 | **Site does not comply with Google policies** — EU consent / CMP | `layout.tsx` fires GTM (101–110) and the AdSense loader (112) unconditionally in `<head>`. Repo-wide grep for `consent|cookiebot|onetrust|cmp|funding-choices|googlefc|__tcfapi` → zero implementation. A Google-certified IAB-TCF CMP has been mandatory for EEA/UK ad serving since 2024-01-16. More often enforced post-approval (blocks EU serving) than as the first-pass reason — hence lower rank, but a real citable gap. | **Low** |

---

## 3. Compliance findings (grouped)

### A. Content value & minimum-content

| Finding | Severity | Maps to | Concrete fix |
|---------|----------|---------|--------------|
| **Core tool shows zero output without a personal upload** — reads as "under construction." | Critical | Google Publisher Policies — *Minimum content / Valuable Inventory* (no ads on under-construction / no-content screens); AdSense *Low value content* | Build indexable **`/example-wrapped`** (server-rendered) showing the FULL results UI with hardcoded realistic sample data. Refactor gated results JSX into a shared `<WrappedResults data={...}/>` reused by the live tool and the example page. Link prominently from homepage and `/analyze-wrapped` ("See an example — no upload needed") and add to `sitemap.xml`. |
| **Homepage "See It In Action" payoff is a 31 MB autoplay `.mov` only** — crawlers/reviewers can't read it; harms LCP. | Medium | AdSense *Low value content*; Google *Page Experience / Core Web Vitals (LCP)* | Replace/supplement the `.mov` with a **static screenshot** of a real results screen + a text link to `/example-wrapped`. If the video stays: drop autoplay, add `preload="none"` + `poster`, transcode to compressed **mp4 < 3 MB**. |
| **Small overall footprint (7 posts), all one narrow topic.** | Medium | AdSense *Low value content* / Minimum content; Webmaster Quality Guidelines | Add **4–6 original 800–1200-word guides** broadening topical coverage (build list in §4). Prioritize after `/example-wrapped`. |

### B. Required / legal pages & consent

| Finding | Severity | Maps to | Concrete fix |
|---------|----------|---------|--------------|
| **Privacy Policy omits ALL required Google/AdSense ad-cookie disclosures.** | Critical | AdSense Help — *Privacy Policy / Required content* (third-party & Google ad cookies, DoubleClick/DART, prior-visit serving, opt-out) | Expand Third-Party Services to state Google (a third-party vendor) uses cookies incl. the **DoubleClick cookie** to serve ads **based on prior visits to this and other sites**; that other ad networks may serve ads; link **policies.google.com/technologies/partner-sites**, **adssettings.google.com**, **aboutads.info/choices**. Disclose **GTM/Analytics** and the data they collect (cookies, IP, usage). |
| **No GDPR/CCPA rights, cookie table, retention period, controller identity, or `/contact` link in Privacy.** | High | AdSense Privacy Policy / Required content; EU User Consent Policy | Add **Your Rights** (GDPR access/rectification/erasure/objection/portability via hello@affsquad.com), **California Privacy Rights** (uploaded TikTok data never sold/shared), a **cookie table** (name/provider/purpose/duration), a concrete **retention** statement, **controller identity**, and a `/contact` link. Target ~600+ words. |
| **No cookie-consent / CMP** — GTM + AdSense fire before any consent decision. | Critical | Google *EU User Consent Policy* + certified-CMP requirement (IAB TCF mandatory since 2024-01-16) | Enable Google's **Privacy & messaging (Funding Choices)** consent message in the AdSense account, or integrate a certified CMP (Cookiebot/OneTrust). Gate GTM init + the `adsbygoogle` loader behind **Consent Mode** (default-denied → update on accept). Add a persistent **"Cookie settings"** link in `Footer.tsx`. |
| **Terms missing governing law, changes-to-terms, contact ref; inconsistent date format** (`29.12.2025` vs privacy's `29/12/2025`). | Medium | AdSense *Low value content*; Webmaster Quality Guidelines | Add **Governing Law & Jurisdiction**, **Changes to These Terms** (with effective date), a **Contact** line to `/contact`, optionally **Acceptable Use**. Standardize date format across Privacy and Terms. |
| **Contact page is mailto-only (~150 words).** | Low | AdSense eligibility — reachable contact method (satisfied; form optional) | Optional but preferred: add a simple name/email/message **form** to a serverless endpoint, name the **operator/business**, set a **response-time expectation**. Keep mailto as fallback. |

### C. Trademark / brand risk

| Finding | Severity | Maps to | Concrete fix |
|---------|----------|---------|--------------|
| **Favicon, Apple touch icon, and OG image are TikTok's actual logo glyph.** | Critical | Google Publisher Policies — *Misrepresentation* (false affiliation/impersonation); Google Ads Misrepresentation | Replace **all four assets** (`og-image.png`, `favicon.png`, `favicon.ico`, `apple-touch-icon.png`) with **original artwork** — no TikTok note glyph. Base it on the existing `/public/icon.svg` chart concept; make the OG a text-led card ("Wrapped — independent TikTok data analyzer"). |
| **Brand name, app name, and domain built on the TikTok mark + Spotify's "Wrapped."** | High | Google Publisher Policies — *Misrepresentation* (false implication of official status) | Reframe as descriptive: "**Wrapped for TikTok — Independent Data Export Analyzer**," or add "**Unofficial**/**Independent**" adjacent to the name in `<title>`, manifest name, and H1. Long-term: own-brand product name with "for TikTok" descriptor; domain change is highest-effort and can be deferred. |
| **"Not affiliated with TikTok" disclaimer is footer-only / below the fold; wording inconsistent** ("TikTok Inc." vs "TikTok or ByteDance Ltd."). | High | Google Publisher / Ads *Misrepresentation* (prominent disclaimer required when referencing a brand) | Add a **visible disclaimer directly under the H1** on `page.tsx` and at top of `analyze-wrapped`: "Independent tool — not affiliated with, endorsed by, or connected to TikTok or ByteDance Ltd." Standardize on that wording site-wide; keep the footer copy too. |
| **Visual identity clones TikTok's exact brand colors + split-wordmark trade dress** (`#fe2c55`/`#25f4ee`, themeColor, split "Tik"/"Tok"). | Medium | Google Publisher / Ads *Misrepresentation* (trade-dress imitation) | Move to a **distinct palette**; drop the cyan/magenta split-text wordmark treatment. Pair with the original-icon + prominent-disclaimer fixes so the identity no longer reads as TikTok's. |

### D. Technical AdSense setup

| Finding | Severity | Maps to | Concrete fix |
|---------|----------|---------|--------------|
| **`/analyze-wrapped` inherits the homepage canonical** (`https://ttwrapper.com/`). | High | Google canonicalization best practices; AdSense *Low value content* (duplicate signals) | Add **`app/analyze-wrapped/layout.tsx`** (server component) exporting unique `title` ("Analyze Your TikTok Data Export | TikTok Wrapped"), unique `description`, and `alternates.canonical: '/analyze-wrapped'`; keep the `'use client'` page as its child. Verify served HTML carries the page-specific canonical/title (curl as Googlebot). |
| **`publisher.logo` 404** (`/logo.png`) and 5 of 7 posts missing JSON-LD. | (from must-fix) | Google Rich Results / structured-data guidance | Add a real raster **`/public/logo.png`** (≥112px tall) or point `publisher.logo.url` at an existing PNG. Add server-rendered **BlogPosting + BreadcrumbList + FAQPage** JSON-LD to the 5 posts missing it; validate in Rich Results Test. |
| **`ads.txt` correct.** | Info | AdSense *ads.txt* guidance | `public/ads.txt` = `google.com, pub-2980943706375055, DIRECT, f08c47fec0942fa0`, matches the loader. **No change.** Keep in sync if partners are added. |
| **AdSense loader present but no ad units** (`<ins>/adsbygoogle.push` → zero matches). | Info | AdSense Auto Ads / ad-placement | Implies **Auto Ads** (account-side). Fine — but the **consent-gating fix must cover the loader itself**, since Auto Ads inject units dynamically post-approval. Confirm Auto Ads vs manual intent; keep any future manual units within content, never on the thin pre-upload state. |

### E. UX / navigation / broken links

| Finding | Severity | Maps to | Concrete fix |
|---------|----------|---------|--------------|
| **Homepage & tool H1 is the bare "TikTok Wrapped" wordmark**, not a descriptive phrase. | (from must-fix) | Webmaster Quality Guidelines (descriptive headings); reinforces Misrepresentation when combined with the styled wordmark | Make the H1 a **descriptive keyword phrase** (e.g. "Analyze Your TikTok Data Export — Independent Wrapped-Style Stats"), not just the styled wordmark. |
| **Publisher logo 404** is also a broken-asset UX signal. | — | (see Technical) | Resolve `/logo.png` 404 (see §D). |
| **No prominent path to a working demo** — homepage links to a tool that shows nothing pre-upload. | — | AdSense *Low value content* (navigation to value) | Add prominent links from homepage and `/analyze-wrapped` to **`/example-wrapped`**. |

---

## 4. Pages & content to ADD before resubmitting

> Build in this order. Item 1 is the highest-leverage single change in the entire audit.

### 1. `/example-wrapped` — *Example TikTok Wrapped (Sample Results)*  **[CRITICAL]**
**Title:** "See an Example TikTok Wrapped — No Upload Needed"
**Purpose:** The #1 fix. A public, no-upload page rendering the real product output so reviewers and Googlebot see the tool delivers readable value. Doubles as a high-converting demo/landing page.
**Outline:**
- H1 "See an Example TikTok Wrapped — No Upload Needed"; intro noting figures are illustrative sample data.
- Full `<WrappedResults>` render: personality rank card (e.g. "The Midnight Scroller"), total videos watched, total hours, avg daily minutes; Top Searches list; Activity-by-Year chart; Peak Hours heatmap; Likes & Comments and Share History stats; favorite creators/sounds; a short "what this means" paragraph per section.
- CTA "Make your own — upload your TikTok export" → `/analyze-wrapped`.
- Footer note: figures are sample data; tool processes files locally.
- **Unique metadata + `alternates.canonical: '/example-wrapped'`; add to `sitemap.xml`.**

### 2. `/blog/tiktok-data-export-folders-explained` — *What Each Folder in the TikTok Data Export ZIP Means*
**Purpose:** Genuine information-gain; high-intent, ad-friendly.
**Outline:** Intro on export structure → section per top-level folder/JSON (Activity, Video, Comments, Direct Messages, Profile, Ads & Data, App Settings) → table mapping folder → data type → what the tool reads → privacy callout → FAQ block (FAQPage JSON-LD) → internal links to `/analyze-wrapped` and `/example-wrapped`.

### 3. `/blog/read-tiktok-watch-history-json` — *How to Read Your TikTok Watch History JSON*
**Purpose:** Practical original how-to differentiating from generic "download your data" posts.
**Outline:** What the watch-history file is / where it lives → annotated JSON snippet walkthrough → counting videos/sessions manually vs. with the tool → gotchas (date formats, partial history, regional differences) → FAQ + JSON-LD → CTA to `/example-wrapped`.

### 4. `/blog/tiktok-screen-time-reduce` — *TikTok Screen Time: How to See It and Reduce It*
**Purpose:** Expands into digital wellbeing (high volume, strong ad relevance), reducing the "one narrow topic" signal.
**Outline:** Finding screen time (in-app Digital Wellbeing + via export) → what "healthy" usage looks like with cited ranges → reduction tactics (limits, grayscale, notifications, replacement habits) → how Wrapped reveals patterns → FAQ + JSON-LD → internal links.

### 5. `/blog/delete-tiktok-data-account` — *How to Delete Your TikTok Data and Account*
**Purpose:** Adds trust/safety breadth; reinforces privacy-first positioning and E-E-A-T.
**Outline:** Difference between clearing data, deactivating, deleting → step-by-step deletion with screenshots → what data is retained and for how long → downloading a final export before deleting → privacy considerations → FAQ + JSON-LD.

### 6. `/blog/tiktok-vs-instagram-youtube-data-export` — *TikTok Data Export vs Instagram and YouTube Exports*
**Purpose:** Comparison content with clear information gain; broadens beyond TikTok-only; earns links.
**Outline:** Why platforms differ → side-by-side table (request method, delivery time, JSON/HTML format, granularity, watch-history availability) → what each reveals about habits → which is easiest to analyze → where Wrapped fits → FAQ + JSON-LD.

### 7. `/about` — *About / How It Works (expand existing)*
**Purpose:** Strengthen E-E-A-T and legitimacy — reviewers inspect About.
**Outline:** Who we are (operator/company name, contact) → the problem we solve → how client-side analysis works (data never leaves your browser) → independence disclaimer (not affiliated with TikTok or ByteDance Ltd.) → how we make money (ads — link to privacy/cookie policy) → contact CTA.

---

## 5. Pre-resubmission checklist

**Content value**
- [ ] `/example-wrapped` is live, indexable (200 to Googlebot, in `sitemap.xml`, unique canonical) and shows full sample results with **no upload required**.
- [ ] Homepage and `/analyze-wrapped` link **prominently** to `/example-wrapped`.
- [ ] The 31 MB `.mov` is removed or replaced with a static results screenshot; any remaining video is **sub-3 MB mp4, non-autoplay, `preload="none"`, with a `poster`**.
- [ ] At least **4–6 new original guides** published (total ~12–15 substantive posts) covering more than "download your data."

**Technical / SEO**
- [ ] `/analyze-wrapped` serves its **own** title, description, and `canonical: /analyze-wrapped` in raw HTML (verify via curl as Googlebot).
- [ ] `publisher.logo` resolves (no `/logo.png` 404); all 7 blog posts have server-rendered **BlogPosting + BreadcrumbList + FAQPage** JSON-LD (validate in Rich Results Test).
- [ ] Homepage/tool **H1 is a descriptive keyword phrase**, not just the wordmark.
- [ ] `ads.txt` still matches the publisher ID (already correct).

**Legal / consent**
- [ ] Privacy Policy includes full **Google/AdSense ad-cookie disclosures + opt-out links** (partner-sites, adssettings, aboutads.info), **GTM/Analytics disclosure**, **cookie table**, **GDPR/CCPA rights**, **retention**, **controller identity**, and a `/contact` link.
- [ ] Terms include **governing law**, **changes-to-terms**, and a **contact reference**; Privacy and Terms use a consistent date format.
- [ ] Contact page **names the operator** and sets a **response-time expectation** (form optional but preferred).
- [ ] A Google-certified **CMP / Funding Choices** consent message is configured; **GTM and `adsbygoogle` are consent-gated** (Consent Mode default-denied → update on accept) and do **not** fire before a consent decision for EEA/UK/CH visitors; a persistent "Cookie settings" link is in the footer.

**Brand / misrepresentation**
- [ ] `og-image.png`, `favicon.png`, `favicon.ico`, `apple-touch-icon.png` **replaced with original artwork** (no TikTok note glyph).
- [ ] Name reframed as **independent/unofficial** ("Wrapped for TikTok — Independent…") in `<title>`, manifest, and H1.
- [ ] **Prominent non-affiliation disclaimer directly under the H1** on the homepage and `/analyze-wrapped`; wording standardized to "TikTok or ByteDance Ltd." site-wide.
- [ ] Visual identity moved **off TikTok's exact `#fe2c55`/`#25f4ee`** palette and the split-color wordmark treatment.

---

### Key file references
- Tool page (gated, no metadata): `/Users/illiachukin/ttwrapped-repo/app/analyze-wrapped/page.tsx` — gating at lines ~896/1023/1030, results at ~1068; `.mov` demo card ~1037–1047.
- Root layout (GTM 101–110, AdSense loader 112, canonical 75, icons 49–72, themeColor 85): `/Users/illiachukin/ttwrapped-repo/app/layout.tsx`
- Privacy (thin, ~230 words, third-party 70–78): `/Users/illiachukin/ttwrapped-repo/app/privacy/page.tsx`
- Terms (~210 words, no governing law): `/Users/illiachukin/ttwrapped-repo/app/terms/page.tsx`
- Contact (mailto only): `/Users/illiachukin/ttwrapped-repo/app/contact/page.tsx`
- Footer (only non-affiliation disclaimer): `/Users/illiachukin/ttwrapped-repo/components/Footer.tsx`
- TikTok-logo assets: `/Users/illiachukin/ttwrapped-repo/public/og-image.png`, `favicon.png`, `favicon.ico`, `apple-touch-icon.png`
- Brand colors: `/Users/illiachukin/ttwrapped-repo/app/globals.css`
- Correct ads.txt: `/Users/illiachukin/ttwrapped-repo/public/ads.txt`
- 7 existing blog posts: `/Users/illiachukin/ttwrapped-repo/app/blog/`

---

## Appendix — Auditor's Verified Corrections & Additions

Verified directly against the repo after the main report (completeness-critic pass):

- **Misrepresentation fix is broader than the four assets listed.** `app/icon.png` is ALSO the verbatim TikTok glyph (Next.js auto-serves it as the site favicon). Replace **five** assets, not four: `public/og-image.png`, `public/favicon.png`, `public/favicon.ico`, `public/apple-touch-icon.png`, **and `app/icon.png`**. Recolor `public/icon.svg` off TikTok's `#fe2c55`/`#25f4ee` too. This strengthens the rank-3 (Misrepresentation) remediation — the TikTok logo is currently the site's favicon, OG share image, and PWA icon simultaneously.
- **Existing `public/images/` JPGs do NOT solve the "no readable value" blocker.** They are screenshots of TikTok's own app (the data-export how-to), not sample Wrapped results. The `/example-wrapped` page must still render purpose-built sample results — there is no existing results screenshot to reuse.
- **Disclaimer is not strictly "footer-only."** It also appears in the `/about` body and inside blog posts. The precise gap: it is **missing from the homepage and `/analyze-wrapped` hero (above the fold)**, and the wording is inconsistent — `Footer.tsx` says "TikTok Inc." while bodies say "TikTok or ByteDance Ltd." Standardize on "TikTok or ByteDance Ltd." everywhere and add it under the H1 on the two client pages.
- **`/about` is moderately substantive** (~280 words + a 5-question FAQ) — not a thin-page liability on its own, but it is the right place to add **operator/company legal identity** (needed for the GDPR controller-identity gap and E-E-A-T). Its FAQ JSON-LD is `afterInteractive` — make it server-rendered.
- **AdSense crawler access is fine.** robots.txt disallows only AI scrapers; Mediapartners-Google and AdsBot-Google have full access. ✅
- **Consent Mode specificity:** implement **Google Consent Mode v2** (default-denied `ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization`; update on accept) and gate BOTH the GTM init (`layout.tsx:101`) and the `adsbygoogle` loader (`layout.tsx:112`) behind it — currently both fire unconditionally in `<head>`. Pair with Google's Funding Choices (Privacy & messaging) message in the AdSense account.
- **`public/e083f51d274941ad9159099eec5644a3.txt`** is a site-verification token (single hash line); harmless — leave it in place.
