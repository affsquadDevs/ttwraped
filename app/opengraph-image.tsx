import { ImageResponse } from 'next/og'

export const alt =
  'TikTok Wrapped — an independent, unofficial tool for analyzing your TikTok data export'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Original branded OG card generated at build time (no third-party logos/marks).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'linear-gradient(135deg, #0f0a1e 0%, #1b1033 55%, #2a1248 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        {/* logo mark: three ascending bars */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, marginBottom: 44 }}>
          <div style={{ width: 34, height: 56, borderRadius: 8, background: '#7c3aed' }} />
          <div style={{ width: 34, height: 96, borderRadius: 8, background: '#a855f7' }} />
          <div style={{ width: 34, height: 136, borderRadius: 8, background: '#f59e0b' }} />
        </div>
        <div style={{ display: 'flex', fontSize: 84, fontWeight: 800, letterSpacing: -2 }}>
          <span style={{ color: '#f59e0b' }}>TikTok</span>
          <span style={{ color: '#ffffff' }}>&nbsp;Wrapped</span>
        </div>
        <div style={{ display: 'flex', fontSize: 36, marginTop: 20, color: 'rgba(255,255,255,0.82)' }}>
          Understand your TikTok data export — private &amp; free
        </div>
        <div style={{ display: 'flex', fontSize: 24, marginTop: 40, color: 'rgba(255,255,255,0.55)' }}>
          Independent &amp; unofficial · not affiliated with TikTok or ByteDance Ltd.
        </div>
      </div>
    ),
    { ...size },
  )
}
