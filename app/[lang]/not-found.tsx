import React from 'react'
import Link from 'next/link'
import { headers } from 'next/headers'
import { toLocale, localizedPath } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'

export default async function NotFound() {
  const locale = toLocale(headers().get('x-locale') ?? 'en')
  const dict = await getDictionary(locale)
  const nf = dict.notFound
  const lp = (p: string) => localizedPath(p, locale)
  const linkStyle = { padding: '0.6rem 1.2rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 50 }

  return (
    <div className="container">
      <div className="card" style={{ textAlign: 'center' }}>
        <h1 className="section-title" style={{ justifyContent: 'center', fontSize: '2.5rem' }}>{nf.title}</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: 520, margin: '0 auto 2rem' }}>{nf.text}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          <Link href={lp('/')} className="footer-link" style={linkStyle}>{nf.links.home}</Link>
          <Link href={lp('/analyze-wrapped')} className="footer-link" style={linkStyle}>{nf.links.analyze}</Link>
          <Link href={lp('/example-wrapped')} className="footer-link" style={linkStyle}>{nf.links.example}</Link>
          <Link href={lp('/blog')} className="footer-link" style={linkStyle}>{nf.links.blog}</Link>
        </div>
      </div>
    </div>
  )
}
