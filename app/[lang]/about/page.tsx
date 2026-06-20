import React from 'react'
import type { Metadata } from 'next'
import { toLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { pageMetadata } from '@/lib/i18n/metadata'
import RichText from '@/app/components/RichText'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  return pageMetadata({ locale, path: '/about', title: dict.meta.about.title, description: dict.meta.about.description })
}

export default async function AboutPage({ params }: { params: { lang: string } }) {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  const a = dict.about

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: a.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="section-title">{a.title}</h1>
        <div className="about-content">
          {a.paragraphs.map((p, i) => (
            <p key={i} className="about-text">
              <RichText text={p} locale={locale} />
            </p>
          ))}
        </div>
      </div>

      <div className="card faq-card" id="faq">
        <h2 className="section-title">{a.faqTitle}</h2>
        <div className="faq-container">
          {a.faq.map((item, i) => (
            <div key={i} className="faq-item">
              <h3 className="faq-question">{item.q}</h3>
              <p className="faq-answer">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  )
}
