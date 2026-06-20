import React from 'react'
import Link from 'next/link'
import CookieSettingsLink from './CookieSettingsLink'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/dictionaries/en'

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const currentYear = new Date().getFullYear()
  const f = dict.footer
  const lp = (p: string) => localizedPath(p, locale)

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="cyan">Tik</span><span className="pink">Tok</span>
              <span className="white">Wrapped</span>
            </h3>
            <p className="footer-description">{f.description}</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div className="footer-nav-column">
              <h4 className="footer-nav-title">{f.productTitle}</h4>
              <ul className="footer-nav-list">
                <li><Link href={lp('/')} className="footer-link">{f.links.home}</Link></li>
                <li><Link href={lp('/analyze-wrapped')} className="footer-link">{f.links.analyze}</Link></li>
                <li><Link href={lp('/example-wrapped')} className="footer-link">{f.links.example}</Link></li>
                <li><Link href={lp('/about')} className="footer-link">{f.links.about}</Link></li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <h4 className="footer-nav-title">{f.legalTitle}</h4>
              <ul className="footer-nav-list">
                <li><Link href={lp('/privacy')} className="footer-link">{f.links.privacy}</Link></li>
                <li><Link href={lp('/terms')} className="footer-link">{f.links.terms}</Link></li>
                <li><Link href={lp('/contact')} className="footer-link">{f.links.contact}</Link></li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <h4 className="footer-nav-title">{f.resourcesTitle}</h4>
              <ul className="footer-nav-list">
                <li><Link href={lp('/blog')} className="footer-link">{f.links.blog}</Link></li>
                <li><Link href={lp('/example-wrapped')} className="footer-link">{f.links.exampleWrapped}</Link></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>{f.copyright.replace('{year}', String(currentYear))}</p>
            <p className="footer-disclaimer">{f.disclaimer}</p>
          </div>
          <div className="footer-meta">
            <Link href={lp('/privacy')} className="footer-meta-link">{f.privacy}</Link>
            <span className="footer-separator">•</span>
            <Link href={lp('/terms')} className="footer-meta-link">{f.terms}</Link>
            <span className="footer-separator">•</span>
            <CookieSettingsLink label={f.cookieSettings} />
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'TikTok Wrapped',
            url: 'https://ttwrapper.com',
            logo: 'https://ttwrapper.com/icon.svg',
            description:
              'Independent, unofficial tool for analyzing your TikTok data export. Not affiliated with TikTok or ByteDance Ltd.',
            sameAs: ['https://x.com/tiktokwrapped'],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              email: 'hello@affsquad.com',
              url: 'https://ttwrapper.com/contact',
            },
          }),
        }}
      />
    </footer>
  )
}
