import React from 'react'
import type { Metadata } from 'next'
import { toLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { pageMetadata } from '@/lib/i18n/metadata'
import LegalSections from '@/app/components/LegalSections'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  return pageMetadata({ locale, path: '/privacy', title: dict.meta.privacy.title, description: dict.meta.privacy.description })
}

export default async function PrivacyPage({ params }: { params: { lang: string } }) {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  const p = dict.privacy

  return (
    <div className="container">
      <div className="card">
        <h1 className="section-title">{p.title}</h1>
        <div className="privacy-content">
          <p className="privacy-updated">
            <strong>{p.lastUpdatedLabel}</strong> {p.lastUpdatedDate}
          </p>
          <p className="privacy-intro">{p.intro}</p>
          <LegalSections locale={locale} variant="privacy" sections={p.sections} cookieTable={p.cookieTable} />
        </div>
      </div>
    </div>
  )
}
