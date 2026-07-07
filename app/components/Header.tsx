'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { localizedPath, stripLocalePrefix, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/dictionaries/en'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header({ locale, nav }: { locale: Locale; nav: Dictionary['nav'] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const base = stripLocalePrefix(pathname || '/')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { base: '/', href: localizedPath('/', locale), label: nav.home },
    { base: '/analyze-wrapped', href: `${localizedPath('/analyze-wrapped', locale)}#upload-section`, label: nav.analyze },
    { base: '/example-wrapped', href: localizedPath('/example-wrapped', locale), label: nav.example },
    { base: '/about', href: localizedPath('/about', locale), label: nav.about },
    { base: '/blog', href: localizedPath('/blog', locale), label: nav.blog },
    { base: '/contact', href: localizedPath('/contact', locale), label: nav.contact },
  ]

  const isActive = (linkBase: string) => {
    if (linkBase === '/') return base === '/'
    return base === linkBase || base.startsWith(`${linkBase}/`)
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link href={localizedPath('/', locale)} className="header-logo" onClick={closeMenu}>
          <span className="cyan">Tik</span>
          <span className="pink">Tok</span>
          <span className="white">Wrapped</span>
        </Link>

        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="header-nav-list">
            {navLinks.map((link) => (
              <li key={link.base}>
                <Link
                  href={link.href}
                  className={`header-link ${isActive(link.base) ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="header-lang-item">
              <LanguageSwitcher locale={locale} />
            </li>
          </ul>
        </nav>

        <button
          className={`header-menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
