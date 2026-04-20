'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (
      (pathname === '/' || pathname === '/analyze-wrapped') &&
      typeof window !== 'undefined' &&
      window.location.hash
    ) {
      const hash = window.location.hash
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          const headerHeight = 80
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({
            top: elementPosition - headerHeight,
            behavior: 'smooth',
          })
        }
      }, 100)
    }
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/analyze-wrapped#upload-section', label: 'Analyze' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const handleLinkClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu()
    
    if (href.startsWith('/#')) {
      e.preventDefault()
      const hash = href.substring(1)
      
      if (pathname === '/') {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        window.location.href = href
      }
    }
  }

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    const pathOnly = href.split('#')[0]
    if (pathOnly && pathOnly.length > 1) {
      return pathname === pathOnly || pathname?.startsWith(`${pathOnly}/`)
    }
    return pathname === href || pathname?.startsWith(href)
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link href="/" className="header-logo" onClick={closeMenu}>
          <span className="cyan">Tik</span>
          <span className="pink">Tok</span>
          <span className="white">Wrapped</span>
        </Link>

        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="header-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`header-link ${isActive(link.href) ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(link.href, e)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`header-menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
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

