'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  locales,
  localeNames,
  localizedPath,
  stripLocalePrefix,
  type Locale,
} from '@/lib/i18n/config'

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || '/'
  const base = stripLocalePrefix(pathname)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        type="button"
        className={`lang-switcher-toggle ${open ? 'open' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="lang-switcher-globe" aria-hidden="true">🌐</span>
        <span className="lang-switcher-label">{localeNames[locale]}</span>
        <span className="lang-switcher-caret" aria-hidden="true" />
      </button>
      {open && (
        <ul className="lang-switcher-menu" role="listbox">
          {locales.map((l) => (
            <li key={l}>
              <Link
                href={localizedPath(base, l)}
                hrefLang={l}
                role="option"
                aria-selected={l === locale}
                className={`lang-switcher-item ${l === locale ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                <span>{localeNames[l]}</span>
                {l === locale && (
                  <span className="lang-switcher-check" aria-hidden="true">✓</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
