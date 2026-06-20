import 'server-only'
import type { Locale } from './config'
import type { Dictionary } from './dictionaries/en'

// Each locale ships its own dictionary module. Non-English files start as
// re-exports of English and are replaced with real translations.
const loaders: Record<Locale, () => Promise<{ dictionary: Dictionary }>> = {
  en: () => import('./dictionaries/en'),
  pl: () => import('./dictionaries/pl'),
  es: () => import('./dictionaries/es'),
  pt: () => import('./dictionaries/pt'),
  fr: () => import('./dictionaries/fr'),
  it: () => import('./dictionaries/it'),
  de: () => import('./dictionaries/de'),
  uk: () => import('./dictionaries/uk'),
  sv: () => import('./dictionaries/sv'),
  cs: () => import('./dictionaries/cs'),
  el: () => import('./dictionaries/el'),
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const load = loaders[locale] ?? loaders.en
  const mod = await load()
  return mod.dictionary
}
