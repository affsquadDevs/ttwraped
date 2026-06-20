import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found (404) - TikTok Wrapped',
  description:
    'The page you are looking for could not be found. Explore TikTok Wrapped — analyze your TikTok data export, see an example, or read our guides.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="container">
      <div className="card" style={{ textAlign: 'center' }}>
        <h1 className="section-title" style={{ justifyContent: 'center', fontSize: '2.5rem' }}>
          404 — Page Not Found
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: 520, margin: '0 auto 2rem' }}>
          Sorry, we couldn&apos;t find that page. It may have moved or no longer exists.
          Here are some places to pick up where you left off:
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
          }}
        >
          <Link href="/" className="footer-link" style={{ padding: '0.6rem 1.2rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 50 }}>
            Home
          </Link>
          <Link href="/analyze-wrapped" className="footer-link" style={{ padding: '0.6rem 1.2rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 50 }}>
            Analyze your data
          </Link>
          <Link href="/example-wrapped" className="footer-link" style={{ padding: '0.6rem 1.2rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 50 }}>
            See an example
          </Link>
          <Link href="/blog" className="footer-link" style={{ padding: '0.6rem 1.2rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 50 }}>
            Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
