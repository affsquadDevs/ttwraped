import React from 'react'
import type { Metadata } from 'next'
import { toLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { pageMetadata } from '@/lib/i18n/metadata'
import LegalSections from '@/app/components/LegalSections'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  return pageMetadata({ locale, path: '/terms', title: dict.meta.terms.title, description: dict.meta.terms.description })
}

export default async function TermsPage({ params }: { params: { lang: string } }) {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  const t = dict.terms

  return (
    <div className="container">
      <div className="card">
        <h1 className="section-title">{t.title}</h1>
        <div className="terms-content">
          <p className="terms-updated">
            <strong>{t.lastUpdatedLabel}</strong> {t.lastUpdatedDate}
          </p>
          <p className="terms-intro">{t.intro}</p>
          <LegalSections locale={locale} variant="terms" sections={t.sections} />
        </div>
      </div>
    </div>
  )
}
