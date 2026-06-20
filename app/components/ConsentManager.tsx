'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import RichText from './RichText'
import type { Locale } from '@/lib/i18n/config'

const GTM_ID = 'GTM-53GDGKBZ'
const ADSENSE_CLIENT = 'ca-pub-2980943706375055'
const STORAGE_KEY = 'ttw-cookie-consent'

type Choice = 'granted' | 'denied'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

interface ConsentDict {
  ariaLabel: string
  text: string
  accept: string
  reject: string
}

/**
 * Cookie-consent banner wired to Google Consent Mode v2. The default consent
 * (all denied) is set in <head> before any tag loads (app/layout.tsx). GTM +
 * AdSense are injected only after consent is granted.
 */
export default function ConsentManager({
  locale,
  dict,
}: {
  locale: Locale
  dict: ConsentDict
}) {
  const [choice, setChoice] = useState<Choice | null>(null)
  const [open, setOpen] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let stored: Choice | null = null
    try {
      const v = localStorage.getItem(STORAGE_KEY)
      if (v === 'granted' || v === 'denied') stored = v
    } catch {
      /* ignore */
    }
    setChoice(stored)
    setOpen(stored === null)
    setReady(true)
    if (stored) applyConsent(stored)

    const reopen = () => setOpen(true)
    window.addEventListener('open-cookie-settings', reopen)
    return () => window.removeEventListener('open-cookie-settings', reopen)
  }, [])

  function applyConsent(value: Choice) {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: value,
        analytics_storage: value,
        ad_user_data: value,
        ad_personalization: value,
      })
    }
  }

  function decide(value: Choice) {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore */
    }
    applyConsent(value)
    setChoice(value)
    setOpen(false)
  }

  return (
    <>
      {ready && choice === 'granted' && (
        <>
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
          <Script
            id="adsbygoogle-init"
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          />
        </>
      )}

      {open && (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label={dict.ariaLabel}>
          <div className="cookie-banner-inner">
            <div className="cookie-banner-text">
              <RichText text={dict.text} locale={locale} />
            </div>
            <div className="cookie-banner-actions">
              <button type="button" className="cookie-btn cookie-btn-secondary" onClick={() => decide('denied')}>
                {dict.reject}
              </button>
              <button type="button" className="cookie-btn cookie-btn-primary" onClick={() => decide('granted')}>
                {dict.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
