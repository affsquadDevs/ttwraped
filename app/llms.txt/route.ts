import { posts } from '@/lib/blog/registry'

// Serves /llms.txt (llmstxt.org standard) — a curated, LLM-friendly overview of
// the site. The blog list is generated from the registry so it stays current as
// new posts are published.
export const dynamic = 'force-static'

const SITE = 'https://ttwrapper.com'

export function GET() {
  const blog = posts
    .map((p) => {
      const c = p.translations.en!
      return `- [${c.title}](${SITE}/blog/${p.slug}): ${c.description}`
    })
    .join('\n')

  const body = `# TikTok Wrapped

> TikTok Wrapped (${SITE}) is a free, privacy-first web app that turns your official TikTok data export into a visual "year in review" — watch time, top searches, favorite creators, peak activity hours, engagement stats, and a playful personality rank. It is an independent, unofficial project and is NOT affiliated with, endorsed by, or connected to TikTok or ByteDance Ltd.

TikTok Wrapped is a client-side analysis tool. A user downloads their own data export from TikTok (in the TikTok app: Settings and privacy → Account → Download your data → choose the JSON format), then uploads the resulting ZIP or JSON file to the site. All analysis happens locally in the browser: the file is never uploaded to a server, stored, sold, or used for advertising, and no account, login, or personal information is required. The service is free and supported by advertising.

## Key facts

- **What it does:** Reads an official TikTok data export and summarizes it into readable stats and a shareable "Wrapped"-style recap (like Spotify Wrapped, but for TikTok, and unofficial).
- **Price:** Free. No login, no signup, no payment.
- **Privacy:** The TikTok export is processed entirely in the visitor's browser and never leaves their device. Uploaded data is not stored, sold, or used for ads. See the Privacy Policy for cookies/analytics/advertising details.
- **Independence:** Independent and unofficial. Not affiliated with, endorsed by, or connected to TikTok or ByteDance Ltd. "TikTok" is a trademark of its respective owner.
- **Is it safe / a virus?** No. It is a browser-based tool that only reads a file the user chooses to open locally; nothing is installed and no TikTok login is requested.
- **Languages:** Available in 11 languages. English is served at the root (e.g. ${SITE}/about); the others use a locale prefix — pl, es, pt, fr, it, de, uk, sv, cs, el (e.g. ${SITE}/de/about).
- **Tech:** Next.js app hosted on Vercel; content processing is fully client-side.
- **Contact:** hello@ttwrapper.com
- **Operator:** AffSquad.

## Core pages

- [TikTok Wrapped — Home](${SITE}/): What the tool is, how it works, and what a TikTok data export can reveal.
- [Analyze your TikTok data](${SITE}/analyze-wrapped): Upload a TikTok data export (ZIP or JSON) to generate your stats, with step-by-step instructions for downloading the data from TikTok.
- [Example TikTok Wrapped (sample results — no upload needed)](${SITE}/example-wrapped): A complete, real-looking example of the output built from sample data, so you can see what you get before uploading anything.
- [Blog](${SITE}/blog): Independent, educational guides about TikTok data, privacy, and analysis.

## Guides & articles

${blog}

## About & legal

- [About](${SITE}/about): What TikTok Wrapped is, who operates it, the independence/non-affiliation disclaimer, and a short FAQ.
- [Contact](${SITE}/contact): How to reach the team (hello@ttwrapper.com).
- [Privacy Policy](${SITE}/privacy): How data, cookies, analytics (Google Tag Manager) and advertising (Google AdSense, with Consent Mode v2) are handled, plus GDPR/UK-GDPR and CCPA/CPRA rights, retention, and opt-out choices.
- [Terms of Service](${SITE}/terms): Terms for using the service, acceptable use, disclaimers, and governing law.

## Optional

- [Sitemap](${SITE}/sitemap.xml): Every indexable URL across all 11 languages, with hreflang alternates.
- Localized homepages: ${SITE}/pl, ${SITE}/es, ${SITE}/pt, ${SITE}/fr, ${SITE}/it, ${SITE}/de, ${SITE}/uk, ${SITE}/sv, ${SITE}/cs, ${SITE}/el
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
