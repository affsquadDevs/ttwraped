import React from 'react'
import Link from 'next/link'
import RichText from './RichText'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { Block, PostContent } from '@/lib/blog/types'

function renderBlock(block: Block, locale: Locale, i: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i} className="blog-post-section-title">{block.text}</h2>
    case 'h3':
      return <h3 key={i} className="blog-post-step-title">{block.text}</h3>
    case 'p':
      return (
        <p key={i} className="blog-post-text">
          <RichText text={block.text} locale={locale} />
        </p>
      )
    case 'ul':
      return (
        <ul key={i} className="blog-post-list">
          {block.items.map((it, j) => (
            <li key={j}><RichText text={it} locale={locale} /></li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={i} className="blog-post-list">
          {block.items.map((it, j) => (
            <li key={j}><RichText text={it} locale={locale} /></li>
          ))}
        </ol>
      )
    case 'note':
      return (
        <div key={i} className="instruction-notice">
          <div className="notice-icon">💡</div>
          <div className="notice-content"><RichText text={block.text} locale={locale} /></div>
        </div>
      )
    case 'step':
      return (
        <div key={i} className="blog-post-step">
          <h3 className="blog-post-step-title">{block.title}</h3>
          <ul className="blog-post-list">
            {block.items.map((it, j) => (
              <li key={j}><RichText text={it} locale={locale} /></li>
            ))}
          </ul>
        </div>
      )
    case 'table':
      return (
        <div key={i} className="blog-comparison-table">
          <table className="comparison-table">
            <thead>
              <tr>{block.headers.map((h, j) => <th key={j}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j}>
                  {row.map((cell, k) => (
                    <td key={k}>{k === 0 ? <strong>{cell}</strong> : <RichText text={cell} locale={locale} />}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

export default function BlogArticle({
  content,
  locale,
  date,
  backLabel,
  faqHeading,
}: {
  content: PostContent
  locale: Locale
  date: string
  backLabel: string
  faqHeading: string
}) {
  const formattedDate = new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="container">
      <div className="card blog-post">
        <Link href={localizedPath('/blog', locale)} className="blog-back-link">{backLabel}</Link>

        <header className="blog-post-header">
          <h1 className="blog-post-main-title">{content.title}</h1>
          <time dateTime={date} className="blog-post-date">{formattedDate}</time>
        </header>

        <div className="blog-post-content">
          <p className="blog-post-intro">
            <RichText text={content.intro} locale={locale} />
          </p>
          {content.blocks.map((b, i) => renderBlock(b, locale, i))}
        </div>
      </div>

      {content.faq.length > 0 && (
        <div className="card faq-card" id="faq">
          <h2 className="section-title">{faqHeading}</h2>
          <div className="faq-container">
            {content.faq.map((item, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{item.q}</h3>
                <p className="faq-answer">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
