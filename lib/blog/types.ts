import type { Locale } from '@/lib/i18n/config'

// A blog post body is an ordered list of typed blocks. Text fields may contain
// [[token]] / [[/path:Label]] inline links (rendered by RichText).
export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'note'; text: string }
  | { type: 'step'; title: string; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }

export interface PostContent {
  title: string
  description: string
  intro: string
  blocks: Block[]
  faq: { q: string; a: string }[]
}

export interface BlogPost {
  slug: string
  date: string // ISO publish date, e.g. '2026-02-10'
  translations: Partial<Record<Locale, PostContent>>
}
