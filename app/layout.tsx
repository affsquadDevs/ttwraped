import './globals.css'
import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import React from 'react'
import { defaultLocale, isLocale } from '@/lib/i18n/config'

// Root layout: renders <html>/<body> and all site-wide <head> tags.
// The locale is provided by middleware via the x-locale header; per-page
// titles/descriptions/hreflang are set by each route's generateMetadata.
export const metadata: Metadata = {
  metadataBase: new URL('https://ttwrapper.com'),
  title: 'TikTok Wrapped — Analyze Your TikTok Data & Stats',
  description:
    'TikTok Wrapped is an independent, unofficial tool that analyzes your official TikTok data export to reveal your watch time, top searches, favorite content and a fun personality rank. Private, free, and not affiliated with TikTok or ByteDance Ltd.',
  authors: [{ name: 'TikTok Wrapped' }],
  creator: 'TikTok Wrapped',
  publisher: 'TikTok Wrapped',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Favicons are provided by the file-based conventions: app/favicon.ico,
  // app/icon.svg, and app/apple-icon.tsx.
  manifest: '/manifest.json',
  category: 'technology',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#7c3aed' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0a1e' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headerLocale = headers().get('x-locale') ?? defaultLocale
  const lang = isLocale(headerLocale) ? headerLocale : defaultLocale

  return (
    <html lang={lang}>
      <head>
        {/* Google Consent Mode v2 — default everything to denied BEFORE any tag
            loads. GTM and the AdSense loader are injected only after consent. */}
        <script
          id="consent-default"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                ad_storage: 'denied',
                analytics_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });
              gtag('set', 'url_passthrough', true);
            `,
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <meta name="application-name" content="TikTok Wrapped" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TikTok Wrapped" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Site-wide structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'TikTok Wrapped',
              url: 'https://ttwrapper.com',
              description:
                'Independent, unofficial tool for analyzing your TikTok data export.',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'TikTok Wrapped',
              description:
                'Independent, unofficial tool to analyze your TikTok data export: watch time, top searches, favorite content and a personality rank.',
              url: 'https://ttwrapper.com',
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'Web Browser',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            }),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  )
}
