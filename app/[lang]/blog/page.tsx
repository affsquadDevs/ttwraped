import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { toLocale, localizedPath, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { pageMetadata } from '@/lib/i18n/metadata'
import { posts } from '@/lib/blog/registry'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  return pageMetadata({ locale, path: '/blog', title: dict.meta.blog.title, description: dict.meta.blog.description })
}

export default async function BlogIndexPage({ params }: { params: { lang: string } }) {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)

  return (
    <div className="container">
      <div className="card">
        <h1 className="section-title">{dict.blog.indexTitle}</h1>
        <p className="blog-intro">{dict.blog.indexIntro}</p>
      </div>

      <div className="blog-posts">
        {posts.map((post) => {
          const c = post.translations[locale as Locale] ?? post.translations.en!
          const formatted = new Date(post.date).toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
          return (
            <article key={post.slug} className="card blog-post-card">
              <Link href={localizedPath(`/blog/${post.slug}`, locale)} className="blog-post-link">
                <h2 className="blog-post-title">{c.title}</h2>
                <p className="blog-post-description">{c.description}</p>
                <div className="blog-post-meta">
                  <time dateTime={post.date} className="blog-post-date">{formatted}</time>
                </div>
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
