import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

// Original app icon generated at build time (no third-party logos/marks).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: 10,
          paddingBottom: 52,
          background: '#0f0a1e',
        }}
      >
        <div style={{ width: 22, height: 36, borderRadius: 5, background: '#7c3aed' }} />
        <div style={{ width: 22, height: 60, borderRadius: 5, background: '#a855f7' }} />
        <div style={{ width: 22, height: 86, borderRadius: 5, background: '#f59e0b' }} />
      </div>
    ),
    { ...size },
  )
}
