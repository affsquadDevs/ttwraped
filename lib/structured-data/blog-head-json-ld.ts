import {
  IS_SAFE_UPLOAD_BLOG_PATH,
  blogPostingSchema as safeUploadBlogPosting,
  breadcrumbListSchema as safeUploadBreadcrumb,
  faqPageSchema as safeUploadFaq,
} from '@/lib/structured-data/is-it-safe-to-upload-tiktok-data-online'
import {
  WHAT_DATA_DOES_TIKTOK_COLLECT_PATH,
  blogPostingSchema as whatDataBlogPosting,
  breadcrumbListSchema as whatDataBreadcrumb,
  faqPageSchema as whatDataFaq,
} from '@/lib/structured-data/what-data-does-tiktok-collect'

const blogHeadSchemasByPath: Record<string, readonly [object, object, object]> =
  {
    [IS_SAFE_UPLOAD_BLOG_PATH]: [
      safeUploadFaq,
      safeUploadBreadcrumb,
      safeUploadBlogPosting,
    ],
    [WHAT_DATA_DOES_TIKTOK_COLLECT_PATH]: [
      whatDataFaq,
      whatDataBreadcrumb,
      whatDataBlogPosting,
    ],
  }

export function blogHeadJsonLdTriples(
  pathname: string,
): readonly object[] | null {
  const triple = blogHeadSchemasByPath[pathname]
  return triple ? triple : null
}
