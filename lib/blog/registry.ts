import type { BlogPost } from './types'
import { post as notWorkingFixes } from './posts/tiktok-data-export-not-working-fixes'
import { post as platformCompare } from './posts/tiktok-vs-instagram-youtube-data-export'
import { post as deleteData } from './posts/delete-tiktok-data-account'
import { post as screenTime } from './posts/tiktok-screen-time-reduce'
import { post as watchHistoryJson } from './posts/read-tiktok-watch-history-json'
import { post as foldersExplained } from './posts/tiktok-data-export-folders-explained'
import { post as whatDataCollect } from './posts/what-data-does-tiktok-collect'
import { post as isSafeUpload } from './posts/is-it-safe-to-upload-tiktok-data-online'
import { post as digitalHabits } from './posts/what-your-tiktok-usage-says-about-your-digital-habits'
import { post as vsAnalytics } from './posts/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference'
import { post as analyzeSafely } from './posts/how-to-analyze-tiktok-data-safely-privacy-first-guide'
import { post as wrappedExplained } from './posts/tiktok-wrapped-explained-what-it-is-how-it-works'
import { post as howToDownload } from './posts/how-to-download-analyze-tiktok-data'

// Newest first (drives blog index ordering).
export const posts: BlogPost[] = [
  notWorkingFixes,
  platformCompare,
  deleteData,
  screenTime,
  watchHistoryJson,
  foldersExplained,
  whatDataCollect,
  isSafeUpload,
  digitalHabits,
  vsAnalytics,
  analyzeSafely,
  wrappedExplained,
  howToDownload,
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function postSlugs(): string[] {
  return posts.map((p) => p.slug)
}
