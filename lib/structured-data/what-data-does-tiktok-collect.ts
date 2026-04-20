/** JSON-LD for /blog/what-data-does-tiktok-collect — rendered in root layout <head>. */

export const WHAT_DATA_DOES_TIKTOK_COLLECT_PATH =
  '/blog/what-data-does-tiktok-collect'

export const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What personal data does TikTok collect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TikTok collects account information, activity data, search interactions, and device-related technical data required to operate the platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does TikTok collect private messages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some message-related metadata may be collected, but full private message content is not always included in data exports and does not include passwords.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I see what data TikTok has about me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TikTok allows users to request a personal data export through its privacy and data settings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is all collected data included in the export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. Data exports may be limited by retention periods, regional regulations, and account activity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does TikTok collect user data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Data collection supports platform functionality, personalization, security, and overall performance.',
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
      name: 'What Data Does TikTok Collect About You?',
      item: 'https://ttwrapper.com/blog/what-data-does-tiktok-collect',
    },
  ],
}

export const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Data Does TikTok Collect About You? A Clear Explanation',
  description:
    'An in-depth explanation of what data TikTok collects, what appears in user data exports, and how transparency and privacy work.',
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
  datePublished: '2026-01-15',
  dateModified: '2026-01-15',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ttwrapper.com/blog/what-data-does-tiktok-collect',
  },
}
