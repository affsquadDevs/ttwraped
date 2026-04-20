import './globals.css'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { headers } from 'next/headers'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { blogHeadJsonLdTriples } from '@/lib/structured-data/blog-head-json-ld'

export const metadata: Metadata = {
  metadataBase: new URL('https://ttwrapper.com'),
  title: 'TikTok Wrapped - Discover Your TikTok Stats & Personality',
  description:
    'Upload your TikTok data and discover your watching habits, get a fun rank based on your screen time, see your top searches, favorite content, and more. Your personal TikTok year in review!',
  keywords: [
    'TikTok Wrapped',
    'TikTok Stats',
    'TikTok Analytics',
    'TikTok Data',
    'Screen Time',
    'TikTok Year Review',
    'TikTok Personality',
    'Social Media Analytics',
    'Watch History',
    'TikTok Recap',
    'FYP Analytics',
  ],
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TikTok Wrapped',
    title: 'TikTok Wrapped - Discover Your TikTok Stats',
    description:
      'Find out how much time you spent on TikTok, get your personality rank, and see your complete TikTok story. Fun, private, and free!',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TikTok Wrapped - Your TikTok Year in Review',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Wrapped - Discover Your TikTok Stats',
    description:
      'Find out how much time you spent on TikTok and get your personality rank! 🎰',
    images: ['/og-image.png'],
    creator: '@tiktokwrapped',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://ttwrapper.com',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fe2c55' },
    { media: '(prefers-color-scheme: dark)', color: '#030014' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = (headers().get('x-pathname') ?? '').replace(/\/$/, '')
  const blogHeadJsonLd = blogHeadJsonLdTriples(pathname)

  return (
    <html lang="en">
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-53GDGKBZ');

          `}
        </Script>

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2980943706375055"
          crossOrigin="anonymous"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <meta name="application-name" content="TikTok Wrapped" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="TikTok Wrapped" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        {blogHeadJsonLd
          ? blogHeadJsonLd.map((schema, index) => (
              <script
                key={index}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(schema),
                }}
              />
            ))
          : null}
      </head>

      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-53GDGKBZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />

        {children}

        <Footer />

        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'TikTok Wrapped',
              description:
                'Discover your TikTok watching habits, get a fun personality rank, and see your complete TikTok story.',
              url: 'https://ttwrapper.com',
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'Web Browser',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              featureList: [
                'TikTok data analysis',
                'Watch time statistics',
                'Personality ranks',
                'Search history analysis',
                'Private & secure processing',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
