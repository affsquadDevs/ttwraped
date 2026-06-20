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
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        type="button"
        className="lang-switcher-toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        🌐 {localeNames[locale]} ▾
      </button>
      {open && (
        <ul className="lang-switcher-menu" role="listbox">
          {locales.map((l) => (
            <li key={l}>
              <Link
                href={localizedPath(base, l)}
                hrefLang={l}
                className={`lang-switcher-item ${l === locale ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {localeNames[l]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
