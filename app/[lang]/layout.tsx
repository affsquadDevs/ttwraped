import React from 'react'
import { notFound } from 'next/navigation'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import ConsentManager from '@/app/components/ConsentManager'
import { locales, isLocale, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  if (!isLocale(params.lang)) notFound()
  const locale = params.lang as Locale
  const dict = await getDictionary(locale)

  return (
    <>
      <ConsentManager locale={locale} dict={dict.consent} />
      <Header locale={locale} dict={dict} />
      {children}
      <Footer locale={locale} dict={dict} />
    </>
  )
}
