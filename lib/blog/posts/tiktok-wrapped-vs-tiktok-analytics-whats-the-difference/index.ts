import type { BlogPost } from '@/lib/blog/types'
import { content as en } from './en'
import { content as pl } from './pl'
import { content as es } from './es'
import { content as pt } from './pt'
import { content as fr } from './fr'
import { content as it } from './it'
import { content as de } from './de'
import { content as uk } from './uk'
import { content as sv } from './sv'
import { content as cs } from './cs'
import { content as el } from './el'

export const post: BlogPost = {
  slug: 'tiktok-wrapped-vs-tiktok-analytics-whats-the-difference',
  date: '2026-01-04',
  translations: { en, pl, es, pt, fr, it, de, uk, sv, cs, el },
}
