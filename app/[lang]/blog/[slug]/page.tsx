import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales, toLocale, localizedUrl } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { pageMetadata } from '@/lib/i18n/metadata'
import { getPost, postSlugs } from '@/lib/blog/registry'
import BlogArticle from '@/app/components/BlogArticle'

export function generateStaticParams() {
  return locales.flatMap((lang) => postSlugs().map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: { params: { lang: string; slug: string } }): Promise<Metadata> {
  const locale = toLocale(params.lang)
  const post = getPost(params.slug)
  if (!post) return {}
  const content = post.translations[locale] ?? post.translations.en!
  const meta = pageMetadata({
    locale,
    path: `/blog/${params.slug}`,
    title: content.title,
    description: content.description,
    ogType: 'article',
  })
  meta.openGraph = { ...meta.openGraph, type: 'article', publishedTime: post.date, modifiedTime: post.date }
  return meta
}

export default async function BlogPostPage({ params }: { params: { lang: string; slug: string } }) {
  const locale = toLocale(params.lang)
  const post = getPost(params.slug)
  if (!post) notFound()
  const content = post.translations[locale] ?? post.translations.en!
  const dict = await getDictionary(locale)
  const url = localizedUrl(`/blog/${params.slug}`, locale)

  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: content.title,
    description: content.description,
    inLanguage: locale,
    author: { '@type': 'Organization', name: 'TikTok Wrapped' },
    publisher: {
      '@type': 'Organization',
      name: 'TikTok Wrapped',
      logo: { '@type': 'ImageObject', url: 'https://ttwrapper.com/icon.svg' },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.nav.home, item: localizedUrl('/', locale) },
      { '@type': 'ListItem', position: 2, name: dict.nav.blog, item: localizedUrl('/blog', locale) },
      { '@type': 'ListItem', position: 3, name: content.title, item: url },
    ],
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <BlogArticle
        content={content}
        locale={locale}
        date={post.date}
        backLabel={dict.blog.backToBlog}
        faqHeading={dict.blog.faqHeading}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {content.faq.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      )}
    </>
  )
}
