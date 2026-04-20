/** JSON-LD for /blog/is-it-safe-to-upload-tiktok-data-online — rendered in root layout <head>. */

export const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it safe to upload TikTok data online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It can be safe when the platform clearly explains how data is processed, limits usage to analysis only, and provides transparent privacy policies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does TikTok data export include sensitive information?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TikTok data exports may include detailed activity records but do not include passwords. Sensitivity depends on how the data is handled after download.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I upload my TikTok data to any tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only upload data to services that clearly explain their data handling practices and avoid requesting unnecessary permissions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I analyze TikTok data without uploading it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, files can be reviewed locally, but TikTok data exports are often difficult to interpret without summarization or analysis tools.',
      },
    },
  ],
}

export const breadcrumbListSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://ttwrapper.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://ttwrapper.com/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Is It Safe to Upload TikTok Data Online?',
    },
  ],
}

export const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Is It Safe to Upload TikTok Data Online? What Users Should Know',
  description:
    'An in-depth guide explaining whether uploading TikTok data online is safe, what risks to consider, and how to evaluate data analysis tools responsibly.',
  author: {
    '@type': 'Organization',
    name: 'TikTok Wrapped',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TikTok Wrapped',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ttwrapper.com/logo.png',
    },
  },
  datePublished: '2026-01-14',
  dateModified: '2026-01-14',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ttwrapper.com/blog/is-it-safe-to-upload-tiktok-data-online',
  },
}

export const IS_SAFE_UPLOAD_BLOG_PATH = '/blog/is-it-safe-to-upload-tiktok-data-online'
