// Submit the site's URLs to IndexNow (Bing, Yandex, Seznam, etc.).
//
// IndexNow lets search engines know which URLs changed so they recrawl quickly.
// The key file must be live at KEY_LOCATION (public/<key>.txt) for submissions
// to be authorized.
//
// Usage:
//   node scripts/indexnow.mjs            # submit every URL in the live sitemap
//   node scripts/indexnow.mjs <url> ...  # submit only the given URL(s)

const KEY = '117daa045884493984f3ea383b23a5cb'
const HOST = 'ttwrapper.com'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`
const SITEMAP = `https://${HOST}/sitemap.xml`
const ENDPOINT = 'https://api.indexnow.org/indexnow'

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP)
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

async function main() {
  const cliUrls = process.argv.slice(2)
  const urlList = cliUrls.length ? cliUrls : await urlsFromSitemap()
  if (!urlList.length) {
    console.error('No URLs to submit.')
    process.exit(1)
  }
  console.log(`Submitting ${urlList.length} URL(s) to IndexNow…`)

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  })
  const text = await res.text()
  console.log(`IndexNow response: ${res.status} ${res.statusText}`)
  if (text.trim()) console.log(text)
  // 200/202 = accepted. Anything else is a failure worth surfacing.
  if (res.status !== 200 && res.status !== 202) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
