// Internationalization configuration.
// English is the default locale and is served at the site root (no /en prefix).
// All other locales are served under their sub-path (/pl, /es, ...).

export const defaultLocale = 'en' as const

export const locales = [
  'en',
  'pl',
  'es',
  'pt',
  'fr',
  'it',
  'de',
  'uk',
  'sv',
  'cs',
  'el',
] as const

export type Locale = (typeof locales)[number]

// Native language names shown in the language switcher.
export const localeNames: Record<Locale, string> = {
  en: 'English',
  pl: 'Polski',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  it: 'Italiano',
  de: 'Deutsch',
  uk: 'Українська',
  sv: 'Svenska',
  cs: 'Čeština',
  el: 'Ελληνικά',
}

// hreflang attribute value per locale (BCP-47).
export const hreflangByLocale: Record<Locale, string> = {
  en: 'en',
  pl: 'pl',
  es: 'es',
  pt: 'pt',
  fr: 'fr',
  it: 'it',
  de: 'de',
  uk: 'uk',
  sv: 'sv',
  cs: 'cs',
  el: 'el',
}

export const SITE_URL = 'https://ttwrapper.com'

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function toLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale
}

/** Remove a leading locale prefix from a pathname, returning the base path. */
export function stripLocalePrefix(pathname: string): string {
  const seg = pathname.split('/')[1] ?? ''
  if ((locales as readonly string[]).includes(seg) && seg !== defaultLocale) {
    return pathname.slice(seg.length + 1) || '/'
  }
  return pathname || '/'
}

/** Build a path for a locale: English has no prefix, others are prefixed. */
export function localizedPath(path: string, locale: Locale): string {
  const clean = path === '/' ? '' : path
  return locale === defaultLocale ? clean || '/' : `/${locale}${clean || ''}` || `/${locale}`
}

/** Absolute URL for a path in a locale. */
export function localizedUrl(path: string, locale: Locale): string {
  const p = localizedPath(path, locale)
  return `${SITE_URL}${p === '/' ? '/' : p}`
}

/**
 * alternates.languages map for Next metadata, covering every locale + x-default.
 * `path` is the locale-agnostic path, e.g. '/about' or '/' or '/blog/foo'.
 */
export function alternateLanguages(path: string): Record<string, string> {
  const map: Record<string, string> = {}
  for (const locale of locales) {
    map[hreflangByLocale[locale]] = localizedUrl(path, locale)
  }
  map['x-default'] = localizedUrl(path, defaultLocale)
  return map
}
