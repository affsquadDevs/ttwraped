import React from 'react'
import type { Metadata } from 'next'
import { toLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { pageMetadata } from '@/lib/i18n/metadata'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  return pageMetadata({ locale, path: '/contact', title: dict.meta.contact.title, description: dict.meta.contact.description })
}

export default async function ContactPage({ params }: { params: { lang: string } }) {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  const c = dict.contact

  return (
    <div className="container">
      <div className="card">
        <h1 className="section-title">{c.title}</h1>
        <div className="contact-content">
          <p className="contact-intro">{c.intro}</p>

          <section className="contact-section">
            <h2 className="contact-section-title">{c.welcomeTitle}</h2>
            <ul className="contact-list">
              {c.welcomeItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="contact-section">
            <h2 className="contact-section-title">{c.howToTitle}</h2>
            <div className="contact-method">
              <div className="contact-method-label">{c.emailLabel}</div>
              <a href="mailto:hello@affsquad.com" className="contact-email">
                hello@affsquad.com
              </a>
            </div>
            <p className="contact-note">{c.responseNote}</p>
          </section>

          <section className="contact-section">
            <h2 className="contact-section-title">{c.aboutTitle}</h2>
            <p className="contact-text">{c.aboutText1}</p>
            <p className="contact-text">{c.aboutText2}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
