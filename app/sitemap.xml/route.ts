import { locales, localizedUrl, alternateLanguages } from '@/lib/i18n/config'
import { posts } from '@/lib/blog/registry'

export const dynamic = 'force-static'

const STATIC_PATHS = ['/', '/analyze-wrapped', '/example-wrapped', '/blog', '/about', '/contact', '/privacy', '/terms']
// Stamped at build time (force-static) so each production deploy refreshes the
// <lastmod> of the static pages, signalling Google to recrawl the changes.
const BUILD_DATE = new Date().toISOString().slice(0, 10)

function urlEntries(path: string, lastmod: string): string {
  const languages = alternateLanguages(path)
  const alts = Object.entries(languages)
    .map(([hreflang, href]) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`)
    .join('\n')
  return locales
    .map((locale) => {
      const loc = localizedUrl(path, locale)
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alts}\n  </url>`
    })
    .join('\n')
}

export function GET() {
  const blocks: string[] = []
  for (const path of STATIC_PATHS) blocks.push(urlEntries(path, BUILD_DATE))
  for (const post of posts) blocks.push(urlEntries(`/blog/${post.slug}`, post.date))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${blocks.join('\n')}
</urlset>
`
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
