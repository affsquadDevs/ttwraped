'use client'

// Footer link that reopens the cookie-consent banner (handled by ConsentManager).
export default function CookieSettingsLink({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="footer-meta-link cookie-settings-link"
      onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
    >
      {label}
    </button>
  )
}
