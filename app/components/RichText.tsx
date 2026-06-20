import React from 'react'
import Link from 'next/link'
import { localizedPath, type Locale } from '@/lib/i18n/config'

// Inline-link tokens usable inside translatable strings as [[token]] or
// [[token:Visible label]]. Internal tokens are locale-aware; external tokens
// open in a new tab. Keeping URLs here means translators only touch labels.
const INTERNAL: Record<string, string> = {
  home: '/',
  analyze: '/analyze-wrapped',
  example: '/example-wrapped',
  blog: '/blog',
  privacy: '/privacy',
  terms: '/terms',
  contact: '/contact',
}

const EXTERNAL: Record<string, string> = {
  email: 'mailto:hello@affsquad.com',
  adsSettings: 'https://adssettings.google.com',
  aboutAds: 'https://www.aboutads.info/choices',
  yourChoices: 'https://www.youronlinechoices.eu',
  partnerSites: 'https://policies.google.com/technologies/partner-sites',
}

const TOKEN_RE = /\[\[([a-zA-Z0-9/_-]+)(?::([^\]]+))?\]\]/g

export default function RichText({
  text,
  locale,
  className,
}: {
  text: string
  locale: Locale
  className?: string
}) {
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0
  TOKEN_RE.lastIndex = 0

  while ((match = TOKEN_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const token = match[1]
    const label = match[2] ?? token

    if (token in INTERNAL || token.startsWith('/')) {
      const path = token.startsWith('/') ? token : INTERNAL[token]
      parts.push(
        <Link key={key++} href={localizedPath(path, locale)} className="home-inline-cta">
          {label}
        </Link>,
      )
    } else if (token === 'email') {
      parts.push(
        <a key={key++} href={EXTERNAL.email} className="home-inline-cta">
          {label}
        </a>,
      )
    } else if (token in EXTERNAL) {
      parts.push(
        <a
          key={key++}
          href={EXTERNAL[token]}
          target="_blank"
          rel="noopener noreferrer"
          className="home-inline-cta"
        >
          {label}
        </a>,
      )
    } else {
      parts.push(match[0])
    }
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))

  return <span className={className}>{parts}</span>
}
