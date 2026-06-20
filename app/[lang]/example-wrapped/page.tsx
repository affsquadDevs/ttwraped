import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { toLocale, localizedPath } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { pageMetadata } from '@/lib/i18n/metadata'
import RichText from '@/app/components/RichText'

// Numeric sample values (locale-independent); text labels come from the dictionary.
const N = {
  followers: '1,284',
  following: '612',
  videosWatched: '48,920',
  hours: '408',
  days: '17',
  liked: '6,540',
  favorites: '412',
  comments: '388',
  shares: '1,205',
  byYear: [
    { year: '2025', count: '11,860' },
    { year: '2024', count: '15,420' },
    { year: '2023', count: '13,430' },
    { year: '2022', count: '8,210' },
  ],
  activeMonthCount: '2,140',
  avgPerDay: '36',
  searchCounts: [142, 118, 96, 88, 73, 65, 51, 47, 39, 34],
  shareCounts: ['548', '331', '212', '114'],
  favoriteSounds: '193',
  favoriteEffects: '41',
  favoriteHashtags: '267',
  totalSearches: '1,940',
  chats: '37',
  messages: '4,318',
  sent: '2,015',
  received: '2,303',
  devices: [
    { device: 'iPhone 14', count: '612' },
    { device: 'iPad Air', count: '88' },
  ],
  networkCounts: ['540', '160'],
  livesWatched: '214',
  liveComments: '76',
  peakHour: '22:00 – 23:00',
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  return pageMetadata({ locale, path: '/example-wrapped', title: dict.meta.example.title, description: dict.meta.example.description })
}

export default async function ExampleWrappedPage({ params }: { params: { lang: string } }) {
  const locale = toLocale(params.lang)
  const dict = await getDictionary(locale)
  const r = dict.analyze.results
  const e = dict.example
  const s = e.sample
  const lp = (p: string) => localizedPath(p, locale)

  return (
    <div className="container">
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <Link href={lp('/')} style={{ color: '#f59e0b', textDecoration: 'none', fontSize: '1rem' }}>
          {dict.cta.backToHome}
        </Link>
        <h1 style={{ marginTop: '1rem', fontSize: '2.5rem' }}>{e.title}</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>{e.subtitle}</p>
      </div>

      <div className="card" style={{ borderLeft: '3px solid #f59e0b' }}>
        <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, margin: 0 }}>
          <RichText text={e.introText} locale={locale} />
        </p>
      </div>

      <div className="card profile-card">
        <div className="profile-header">
          <div>
            <h2 className="profile-name">{s.displayName}</h2>
            <p className="profile-username">@sample.user</p>
          </div>
        </div>
        <div className="user-info">
          <div className="info-item">
            <div className="info-label">{r.followers}</div>
            <div className="info-value">{N.followers}</div>
          </div>
          <div className="info-item">
            <div className="info-label">{r.following}</div>
            <div className="info-value">{N.following}</div>
          </div>
          <div className="info-item full-width">
            <div className="info-label">{r.interests}</div>
            <div className="interests">
              {s.interests.map((interest) => (
                <span key={interest} className="interest-tag">{interest}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card highlight-card stats-casino">
        <h2 className="section-title">{r.yourStats}</h2>
        <div className="stats-grid">
          <div className="stat-item big">
            <div className="stat-value">{N.videosWatched}</div>
            <div className="stat-label">{r.videosWatched}</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{N.hours}</div>
            <div className="stat-label">{r.hoursOnTikTok}</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{N.days}</div>
            <div className="stat-label">{r.daysOfWatching}</div>
          </div>
        </div>
      </div>

      <div className="card rank-card">
        <div className="slot-machine">
          <div className="slot-container">
            <div className="slot-window revealed">
              <div className="slot-rank" style={{ color: '#a855f7', textShadow: '0 0 30px #a855f7' }}>
                🔱 Main Character
              </div>
            </div>
            <div className="slot-label">{r.yourRank}</div>
          </div>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1.25rem', fontSize: '0.95rem' }}>
          {e.rankExplanation}
        </p>
      </div>

      <div className="card">
        <h2 className="section-title">{r.whenActive}</h2>
        <div className="user-info">
          <div className="info-item highlight">
            <div className="info-label">{r.peakHour}</div>
            <div className="info-value">{N.peakHour}</div>
          </div>
          <div className="info-item highlight">
            <div className="info-label">{r.mostActiveDay}</div>
            <div className="info-value">{s.activeDay}</div>
          </div>
          <div className="info-item">
            <div className="info-label">{r.firstWatch}</div>
            <div className="info-value small">{s.firstWatch}</div>
          </div>
          <div className="info-item">
            <div className="info-label">{r.lastWatch}</div>
            <div className="info-value small">{s.lastWatch}</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">{r.engagement}</h2>
        <div className="user-info">
          <div className="info-item"><div className="info-label">{r.videosLiked}</div><div className="info-value">{N.liked}</div></div>
          <div className="info-item"><div className="info-label">{r.favorites}</div><div className="info-value">{N.favorites}</div></div>
          <div className="info-item"><div className="info-label">{r.comments}</div><div className="info-value">{N.comments}</div></div>
          <div className="info-item"><div className="info-label">{r.shares}</div><div className="info-value">{N.shares}</div></div>
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">{r.activityByYear}</h2>
        <div className="user-info">
          {N.byYear.map((row) => (
            <div key={row.year} className="info-item">
              <div className="info-label">{r.year} {row.year}</div>
              <div className="info-value">{row.count} {r.videos}</div>
            </div>
          ))}
        </div>
        <div className="active-month-box">
          <span>🏆 <strong>{r.mostActiveMonth}:</strong> {s.activeMonth} ({N.activeMonthCount} {r.videos})</span>
        </div>
        <div style={{ marginTop: '0.75rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
          {r.avgPerDayPrefix} <strong style={{ color: '#f59e0b' }}>{N.avgPerDay}</strong> {r.avgPerDaySuffix}
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">{r.topSearches}</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>{r.totalSearches}: {N.totalSearches}</p>
        <div className="search-terms">
          {s.searches.map((term, index) => (
            <div key={term} className="search-term">
              <span className="term-rank">#{index + 1}</span>
              <span className="term-text">{term}</span>
              <span className="term-count">{N.searchCounts[index]}x</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">{r.shareDestinations}</h2>
        <div className="share-methods">
          {s.shareMethods.map((method, i) => (
            <div key={method} className="share-method">
              <span className="method-name">{method}</span>
              <span className="method-count">{N.shareCounts[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">{r.favoritesTitle}</h2>
        <div className="user-info">
          <div className="info-item"><div className="info-label">{r.favoriteSounds}</div><div className="info-value">{N.favoriteSounds}</div></div>
          <div className="info-item"><div className="info-label">{r.favoriteEffects}</div><div className="info-value">{N.favoriteEffects}</div></div>
          <div className="info-item"><div className="info-label">{r.favoriteHashtags}</div><div className="info-value">{N.favoriteHashtags}</div></div>
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">{r.messages}</h2>
        <div className="user-info">
          <div className="info-item"><div className="info-label">{r.chats}</div><div className="info-value">{N.chats}</div></div>
          <div className="info-item"><div className="info-label">{r.messagesLabel}</div><div className="info-value">{N.messages}</div></div>
          <div className="info-item"><div className="info-label">{r.sent}</div><div className="info-value">{N.sent}</div></div>
          <div className="info-item"><div className="info-label">{r.received}</div><div className="info-value">{N.received}</div></div>
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">{r.devicesNetworks}</h2>
        <div className="devices-grid">
          <div>
            <h3 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>{r.devices}</h3>
            {N.devices.map((item) => (
              <div key={item.device} className="device-item">
                <span className="device-name">{item.device}</span>
                <span className="device-count">{item.count}</span>
              </div>
            ))}
          </div>
          <div>
            <h3 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>{r.networks}</h3>
            {s.networks.map((network, i) => (
              <div key={network} className="device-item">
                <span className="device-name">{network}</span>
                <span className="device-count">{N.networkCounts[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="section-title">{r.tiktokLive}</h2>
        <div className="user-info">
          <div className="info-item"><div className="info-label">{r.livesWatched}</div><div className="info-value">{N.livesWatched}</div></div>
          <div className="info-item"><div className="info-label">{r.liveComments}</div><div className="info-value">{N.liveComments}</div></div>
        </div>
      </div>

      <div className="card demo-card">
        <h2 className="section-title" style={{ justifyContent: 'center' }}>{e.ctaTitle}</h2>
        <p className="demo-description">{e.ctaDescription}</p>
        <div style={{ textAlign: 'center' }}>
          <Link
            href={lp('/analyze-wrapped')}
            style={{
              display: 'inline-block', padding: '0.9rem 2.2rem',
              background: 'linear-gradient(135deg, #7c3aed 0%, #f59e0b 100%)',
              color: '#fff', textDecoration: 'none', borderRadius: '50px', fontWeight: 700, fontSize: '1.05rem',
            }}
          >
            {e.ctaButton}
          </Link>
        </div>
        <p className="demo-cta" style={{ marginTop: '1.5rem' }}>
          <RichText text={e.ctaLearn} locale={locale} />
        </p>
      </div>
    </div>
  )
}
