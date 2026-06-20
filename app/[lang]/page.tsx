import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { toLocale, localizedPath } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { pageMetadata } from '@/lib/i18n/metadata'
import RichText from '@/app/components/RichText'

const REVEAL_ICONS = ['📊', '⏰', '💬', '📈']

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  return pageMetadata({ locale, path: '/', title: dict.meta.home.title, description: dict.meta.home.description })
}

export default async function Home({ params }: { params: { lang: string } }) {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  const h = dict.home
  const lp = (p: string) => localizedPath(p, locale)

  return (
    <div className="container">
      <div className="hero-section">
        <h1 className="logo-text">
          <span className="cyan">Tik</span>
          <span className="pink">Tok</span>
          <span className="white">Wrapped</span>
          <span className="logo-subtitle">{h.logoSubtitle}</span>
        </h1>

        <p className="hero-tagline">{h.heroTagline}</p>

        <p className="hero-disclaimer">{dict.disclaimer.underH1}</p>

        <p className="hero-platform-tagline">{h.heroPlatformTagline}</p>

        <div className="hero-features">
          {h.features.map((feat, i) => (
            <div key={i} className="feature">
              <span className="feature-icon">{i === 0 ? '🎰' : '📊'}</span>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <p className="hero-description">{h.heroDescription}</p>
      </div>

      <div className="card">
        <h2 className="section-title">{h.learnMoreTitle}</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          {h.learnMoreText}
        </p>
        <ul className="learn-more-list">
          {h.learnMoreLinks.map((link) => (
            <li key={link.slug}>
              <Link href={lp(`/blog/${link.slug}`)} className="learn-more-link">
                <span>•</span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2 className="section-title">{h.revealTitle}</h2>
        <ul className="home-reveal-list">
          {h.revealItems.map((item, i) => (
            <li key={i} className="home-reveal-item">
              <span className="home-reveal-icon" aria-hidden="true">{REVEAL_ICONS[i]}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="home-insights-disclaimer">{h.revealDisclaimer}</p>
      </div>

      <div className="card">
        <h2 className="section-title">{h.howItWorksTitle}</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.6' }}>
          <RichText text={h.howItWorksText} locale={locale} />
        </p>
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <Link
            href={lp('/analyze-wrapped')}
            style={{
              display: 'inline-block', padding: '0.75rem 2rem', backgroundColor: '#f59e0b',
              color: '#000', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem',
            }}
          >
            {h.analyzeButton}
          </Link>
        </div>
      </div>

      <div className="card demo-card">
        <h2 className="section-title">{h.demoTitle}</h2>
        <p className="demo-description">{h.demoDescription}</p>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <Link
            href={lp('/example-wrapped')}
            style={{
              display: 'inline-block', padding: '0.9rem 2.2rem',
              background: 'linear-gradient(135deg, #7c3aed 0%, #f59e0b 100%)',
              color: '#fff', textDecoration: 'none', borderRadius: '50px', fontWeight: 700, fontSize: '1.05rem',
            }}
          >
            {h.demoButton}
          </Link>
        </div>

        <div className="more-stats">
          <p className="more-stats-title">{h.moreStatsTitle}</p>
          <div className="stats-preview">
            {h.statTags.map((tag, i) => (
              <span key={i} className="stat-tag">{tag}</span>
            ))}
          </div>
        </div>

        <p className="demo-cta">
          <RichText text={h.demoCta} locale={locale} />
        </p>
      </div>
    </div>
  )
}
