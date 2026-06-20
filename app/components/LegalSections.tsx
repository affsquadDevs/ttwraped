import React from 'react'
import RichText from './RichText'
import type { Locale } from '@/lib/i18n/config'

interface Section {
  title: string
  paragraphs?: readonly string[]
  list?: readonly string[]
  afterList?: readonly string[]
  hasCookieTable?: boolean
}

interface CookieTable {
  providerHeader: string
  purposeHeader: string
  typeHeader: string
  rows: readonly { provider: string; purpose: string; type: string }[]
}

export default function LegalSections({
  locale,
  variant,
  sections,
  cookieTable,
}: {
  locale: Locale
  variant: 'privacy' | 'terms'
  sections: readonly Section[]
  cookieTable?: CookieTable
}) {
  return (
    <>
      {sections.map((s, i) => (
        <section key={i} className={`${variant}-section`}>
          <h2 className={`${variant}-section-title`}>{s.title}</h2>
          {s.paragraphs?.map((p, j) => (
            <p key={j} className={`${variant}-text`}>
              <RichText text={p} locale={locale} />
            </p>
          ))}
          {s.list && (
            <ul className={`${variant}-list`}>
              {s.list.map((li, j) => (
                <li key={j}>
                  <RichText text={li} locale={locale} />
                </li>
              ))}
            </ul>
          )}
          {s.hasCookieTable && cookieTable && (
            <div className="blog-comparison-table">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>{cookieTable.providerHeader}</th>
                    <th>{cookieTable.purposeHeader}</th>
                    <th>{cookieTable.typeHeader}</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.rows.map((r, j) => (
                    <tr key={j}>
                      <td><strong>{r.provider}</strong></td>
                      <td>{r.purpose}</td>
                      <td>{r.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {s.afterList?.map((p, j) => (
            <p key={`a${j}`} className={`${variant}-text`}>
              <RichText text={p} locale={locale} />
            </p>
          ))}
        </section>
      ))}
    </>
  )
}
