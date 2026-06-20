import type { Metadata } from 'next'
import {
  localizedUrl,
  alternateLanguages,
  hreflangByLocale,
  type Locale,
} from './config'

// Build per-page metadata with correct canonical + hreflang alternates.
// `path` is the locale-agnostic path, e.g. '/', '/about', '/blog/foo'.
export function pageMetadata(opts: {
  locale: Locale
  path: string
  title: string
  description: string
  ogType?: 'website' | 'article'
}): Metadata {
  const { locale, path, title, description, ogType = 'website' } = opts
  return {
    title,
    description,
    alternates: {
      canonical: localizedUrl(path, locale),
      languages: alternateLanguages(path),
    },
    openGraph: {
      type: ogType,
      url: localizedUrl(path, locale),
      title,
      description,
      siteName: 'TikTok Wrapped',
      locale: hreflangByLocale[locale],
    },
  }
}
