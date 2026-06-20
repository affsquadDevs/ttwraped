import React from 'react'
import type { Metadata } from 'next'
import { toLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { pageMetadata } from '@/lib/i18n/metadata'
import AnalyzeClient from '@/app/components/AnalyzeClient'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  return pageMetadata({ locale, path: '/analyze-wrapped', title: dict.meta.analyze.title, description: dict.meta.analyze.description })
}

export default async function AnalyzeWrappedPage({ params }: { params: { lang: string } }) {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  return <AnalyzeClient dict={dict} locale={locale} />
}
