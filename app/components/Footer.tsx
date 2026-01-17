import React from 'react'
import Script from 'next/script'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="cyan">Tik</span><span className="pink">Tok</span> 
              <span className="white">Wrapped</span>
            </h3>
            <p className="footer-description">
              Discover your TikTok watching habits, get a fun personality rank, 
              and see your complete TikTok story. Your personal TikTok year in review!
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div className="footer-nav-column">
              <h4 className="footer-nav-title">Product</h4>
              <ul className="footer-nav-list">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/#how-to-get-data" className="footer-link">How It Works</a></li>
                <li><a href="/about" className="footer-link">About</a></li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <h4 className="footer-nav-title">Legal</h4>
              <ul className="footer-nav-list">
                <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
                <li><a href="/terms" className="footer-link">Terms of Service</a></li>
                <li><a href="/contact" className="footer-link">Contact</a></li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <h4 className="footer-nav-title">Resources</h4>
              <ul className="footer-nav-list">
                <li><a href="/blog" className="footer-link">Blog</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} TikTok Wrapped. All rights reserved.
            </p>
            <p className="footer-disclaimer">
              TikTok Wrapped is not affiliated with TikTok Inc. This is an independent tool 
              for analyzing your TikTok data export.
            </p>
          </div>
          <div className="footer-meta">
            <a href="/privacy" className="footer-meta-link">Privacy</a>
            <span className="footer-separator">•</span>
            <a href="/terms" className="footer-meta-link">Terms</a>
          </div>
        </div>
      </div>

      <Script
        id="organization-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'TikTok Wrapped',
            url: 'https://ttwrapper.com',
            logo: 'https://ttwrapper.com/icon.svg',
            description: 'Discover your TikTok watching habits, get a fun personality rank, and see your complete TikTok story.',
            sameAs: [],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              url: 'https://ttwrapper.com/contact',
            },
          }),
        }}
      />
    </footer>
  )
}

