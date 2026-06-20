'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import JSZip from 'jszip'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/dictionaries/en'

declare global {
  interface Window {
    dataLayer?: any[]
  }
}

function SlotNumber({ value, delay = 0 }: { value: number; delay?: number }) {
  const [phase, setPhase] = useState<'waiting' | 'spinning' | 'slowing' | 'done'>('waiting')
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    const finalValue = value.toLocaleString('en-US')
    const delayTimer = setTimeout(() => {
      setPhase('spinning')
      let spinCount = 0
      const maxSpins = 15 + Math.floor(Math.random() * 10)
      const spinInterval = setInterval(() => {
        spinCount++
        const digits = finalValue.replace(/,/g, '').length
        setDisplayValue(Math.floor(Math.random() * Math.pow(10, digits)).toLocaleString('en-US'))
        if (spinCount >= maxSpins) {
          clearInterval(spinInterval)
          setPhase('slowing')
          let slowCount = 0
          const slowInterval = setInterval(() => {
            slowCount++
            setDisplayValue(Math.floor(Math.random() * Math.pow(10, digits)).toLocaleString('en-US'))
            if (slowCount >= 5) {
              clearInterval(slowInterval)
              setPhase('done')
              setDisplayValue(finalValue)
            }
          }, 150 + slowCount * 50)
        }
      }, 50)
    }, delay)
    return () => clearTimeout(delayTimer)
  }, [value, delay])

  return <span className={`slot-number ${phase}`}>{displayValue}</span>
}

function AnimatedNumber({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const startTime = useRef<number | null>(null)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    startTime.current = null
    const animate = (currentTime: number) => {
      if (startTime.current === null) startTime.current = currentTime
      const progress = Math.min((currentTime - startTime.current) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setDisplayValue(Math.floor(easeOutQuart * value))
      if (progress < 1) rafId.current = requestAnimationFrame(animate)
      else setDisplayValue(value)
    }
    rafId.current = requestAnimationFrame(animate)
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [value, duration])

  return <span className="animated-number">{displayValue.toLocaleString('en-US')}</span>
}

// Rank titles are internet-culture meme terms kept untranslated across locales.
const RANKS = [
  { minHours: 0, title: '🐣 NPC Energy', color: '#94a3b8' },
  { minHours: 10, title: '🗿 Average Enjoyer', color: '#78716c' },
  { minHours: 50, title: '😎 Certified Scroller', color: '#3b82f6' },
  { minHours: 100, title: '🐺 Sigma Grindset', color: '#6366f1' },
  { minHours: 250, title: '🔱 Main Character', color: '#a855f7' },
  { minHours: 500, title: '🥶 Built Different', color: '#06b6d4' },
  { minHours: 750, title: '🦇 Thomas Shelby Mode', color: '#1e293b' },
  { minHours: 1000, title: '👑 Gigachad Energy', color: '#f59e0b' },
  { minHours: 1500, title: '💀 No Maidens?', color: '#dc2626' },
  { minHours: 2000, title: '🗣️ Skibidi Toilet Brain', color: '#ec4899' },
  { minHours: 2500, title: '🐐 Absolute Unit', color: '#22c55e' },
  { minHours: 3000, title: '😈 Patrick Bateman Arc', color: '#ef4444' },
  { minHours: 4000, title: '🌌 Interdimensional Being', color: '#8b5cf6' },
  { minHours: 5000, title: '☠️ Touch Grass Immediately', color: '#14b8a6' },
  { minHours: 7500, title: '🤡 Society Did This', color: '#f97316' },
  { minHours: 10000, title: '👽 No Life Speedrun WR', color: '#10b981' },
]

function getRank(hours: number) {
  let rank = RANKS[0]
  for (const r of RANKS) if (hours >= r.minHours) rank = r
  return rank
}

function SlotMachine({ hours, label }: { hours: number; label: string }) {
  const [isSpinning, setIsSpinning] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [finalRank, setFinalRank] = useState(getRank(hours))
  const spinCount = useRef(0)

  useEffect(() => {
    setFinalRank(getRank(hours))
    setIsSpinning(true)
    spinCount.current = 0
    const spinInterval = setInterval(() => {
      spinCount.current++
      setCurrentIndex(Math.floor(Math.random() * RANKS.length))
      if (spinCount.current > 20) {
        clearInterval(spinInterval)
        let slowIndex = 0
        const slowInterval = setInterval(() => {
          slowIndex++
          setCurrentIndex(Math.floor(Math.random() * RANKS.length))
          if (slowIndex > 5) {
            clearInterval(slowInterval)
            setTimeout(() => setIsSpinning(false), 300)
          }
        }, 200)
      }
    }, 80)
    return () => clearInterval(spinInterval)
  }, [hours])

  const displayRank = isSpinning ? RANKS[currentIndex] : finalRank

  return (
    <div className="slot-machine">
      <div className="slot-container">
        <div className={`slot-window ${isSpinning ? 'spinning' : 'revealed'}`}>
          <div className="slot-rank" style={{ color: displayRank.color, textShadow: isSpinning ? 'none' : `0 0 30px ${displayRank.color}` }}>
            {displayRank.title}
          </div>
        </div>
        {!isSpinning && (
          <div className="slot-celebration">
            <span className="sparkle">✨</span>
            <span className="sparkle">🎉</span>
            <span className="sparkle">✨</span>
          </div>
        )}
      </div>
      <div className="slot-label">{label}</div>
    </div>
  )
}

interface UserData {
  username?: string
  displayName?: string
  profilePhoto?: string
  followerCount?: number
  followingCount?: number
  interests?: string
  totalVideosWatched?: number
  mostActiveWatchingHour?: number
  mostActiveDay?: string
  estimatedWatchHours?: number
  estimatedWatchDays?: number
  firstVideoDate?: string
  lastVideoDate?: string
  avgVideosPerDay?: number
  favoriteVideosCount?: number
  likedVideosCount?: number
  collectionsCount?: number
  collections?: string[]
  favoriteSoundsCount?: number
  favoriteEffectsCount?: number
  favoriteHashtagsCount?: number
  totalSearches?: number
  topSearchTerms?: Array<{ term: string; count: number }>
  totalComments?: number
  recentComments?: Array<{ date?: string; text?: string }>
  avgCommentLength?: number
  totalShares?: number
  shareMethods?: Array<{ method: string; count: number }>
  totalLogins?: number
  deviceUsage?: Array<{ device: string; count: number }>
  networkUsage?: Array<{ network: string; count: number }>
  uniqueIPs?: number
  totalChats?: number
  totalDirectMessages?: number
  topChats?: Array<{ name: string; count: number }>
  sentMessages?: number
  receivedMessages?: number
  watchedLiveStreams?: number
  liveCommentsCount?: number
  blockedUsersCount?: number
  blockedUsers?: string[]
  recentFollowers?: string[]
  activityByYear?: Record<number, number>
  mostActiveMonth?: string
  mostActiveMonthCount?: number
}

function parseDate(s?: string): Date | null {
  if (!s) return null
  try {
    return new Date(s)
  } catch {
    return null
  }
}

function monthly(items?: Array<{ Date?: string; date?: string }>): Record<string, number> {
  const stats: Record<string, number> = {}
  ;(items ?? []).forEach((item) => {
    const d = parseDate(item.Date || item.date)
    if (d) {
      const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
      stats[k] = (stats[k] || 0) + 1
    }
  })
  return stats
}

function hourly(items?: Array<{ Date?: string }>): Record<number, number> {
  const stats: Record<number, number> = {}
  ;(items ?? []).forEach((item) => {
    const d = parseDate(item.Date)
    if (d) stats[d.getHours()] = (stats[d.getHours()] || 0) + 1
  })
  return stats
}

function dayOfWeek(items?: Array<{ Date?: string }>): Record<string, number> {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const stats: Record<string, number> = {}
  ;(items ?? []).forEach((item) => {
    const d = parseDate(item.Date)
    if (d) stats[days[d.getDay()]] = (stats[days[d.getDay()]] || 0) + 1
  })
  return stats
}

function maxKey<T extends string | number>(stats: Record<T, number>): T | null {
  let best: T | null = null
  let max = 0
  ;(Object.entries(stats) as [string, number][]).forEach(([k, c]) => {
    if (c > max) {
      max = c
      best = k as T
    }
  })
  return best
}

function analyzeTikTokData(data: any): UserData {
  const result: UserData = {}
  const profile = data.Profile?.['Profile Info']?.ProfileMap
  if (profile) {
    result.username = profile.userName
    result.displayName = profile.displayName
    result.profilePhoto = profile.profilePhoto
    result.followerCount = profile.followerCount
    result.followingCount = profile.followingCount
  }
  const settings = data['App Settings']?.Settings?.SettingsMap
  if (settings) result.interests = settings.Interests

  const watch = data['Your Activity']?.['Watch History']?.VideoList
  if (Array.isArray(watch)) {
    result.totalVideosWatched = watch.length
    const byHour = hourly(watch)
    const byDay = dayOfWeek(watch)
    const mh = maxKey(byHour)
    result.mostActiveWatchingHour = mh === null ? undefined : Number(mh)
    result.mostActiveDay = maxKey(byDay) ?? undefined
    const secs = watch.length * 30
    result.estimatedWatchHours = Math.round(secs / 3600)
    result.estimatedWatchDays = Math.round((result.estimatedWatchHours / 24) * 10) / 10
    const yearStats: Record<number, number> = {}
    watch.forEach((item: any) => {
      const d = parseDate(item.Date)
      if (d) yearStats[d.getFullYear()] = (yearStats[d.getFullYear()] || 0) + 1
    })
    result.activityByYear = yearStats
    const byMonth = monthly(watch)
    const mMonth = maxKey(byMonth)
    if (mMonth) {
      result.mostActiveMonth = mMonth as string
      result.mostActiveMonthCount = byMonth[mMonth as string]
    }
    const sorted = [...watch].sort((a: any, b: any) => {
      const da = parseDate(a.Date)
      const db = parseDate(b.Date)
      return !da || !db ? 0 : da.getTime() - db.getTime()
    })
    result.firstVideoDate = sorted[0]?.Date
    result.lastVideoDate = sorted[sorted.length - 1]?.Date
    const fd = parseDate(sorted[0]?.Date)
    const ld = parseDate(sorted[sorted.length - 1]?.Date)
    if (fd && ld) {
      const days = Math.max(1, Math.ceil((ld.getTime() - fd.getTime()) / 86400000))
      result.avgVideosPerDay = Math.round(watch.length / days)
    }
  }

  const fav = data['Your Activity']?.['Favorite Videos']?.FavoriteVideoList
  if (Array.isArray(fav)) result.favoriteVideosCount = fav.length
  const favSounds = data['Your Activity']?.['Favorite Sounds']?.FavoriteSoundList
  if (Array.isArray(favSounds)) result.favoriteSoundsCount = favSounds.length
  const favEffects = data['Your Activity']?.['Favorite Effects']?.FavoriteEffectsList
  if (Array.isArray(favEffects)) result.favoriteEffectsCount = favEffects.length
  const favHash = data['Your Activity']?.['Favorite Hashtags']?.FavoriteHashtagList
  if (Array.isArray(favHash)) result.favoriteHashtagsCount = favHash.length
  const favCol = data['Your Activity']?.['Favorite Collection']?.FavoriteCollectionList
  if (Array.isArray(favCol)) {
    result.collectionsCount = favCol.length
    result.collections = favCol.slice(0, 20).map((c: any) => c.FavoriteCollection)
  }
  const likes = data['Your Activity']?.['Like List']?.ItemFavoriteList
  if (Array.isArray(likes)) result.likedVideosCount = likes.length
  const followers = data['Your Activity']?.Follower?.FansList
  if (Array.isArray(followers)) {
    result.followerCount = followers.length
    result.recentFollowers = followers.slice(0, 10).map((f: any) => f.UserName)
  }
  const following = data['Your Activity']?.Following?.Following
  if (Array.isArray(following)) result.followingCount = following.length

  const searches = data['Your Activity']?.Searches?.SearchList
  if (Array.isArray(searches)) {
    result.totalSearches = searches.length
    const counts: Record<string, number> = {}
    searches.forEach((item: any) => {
      if (item.SearchTerm) {
        const t = item.SearchTerm.toLowerCase().trim()
        counts[t] = (counts[t] || 0) + 1
      }
    })
    result.topSearchTerms = Object.entries(counts).map(([term, count]) => ({ term, count })).sort((a, b) => b.count - a.count).slice(0, 20)
  }

  const comments = data.Comment?.Comments?.CommentsList
  if (Array.isArray(comments)) {
    result.totalComments = comments.length
    result.recentComments = comments.slice(0, 10).map((c: any) => ({ date: c.date, text: c.comment?.substring(0, 150) }))
    const total = comments.reduce((s: number, c: any) => s + (c.comment?.length || 0), 0)
    result.avgCommentLength = Math.round(total / comments.length)
  }

  const shares = data['Your Activity']?.['Share History']?.ShareHistoryList
  if (Array.isArray(shares)) {
    result.totalShares = shares.length
    const counts: Record<string, number> = {}
    shares.forEach((item: any) => {
      if (item.Method) counts[item.Method] = (counts[item.Method] || 0) + 1
    })
    result.shareMethods = Object.entries(counts).map(([method, count]) => ({ method, count })).sort((a, b) => b.count - a.count)
  }

  const logins = data['Your Activity']?.['Login History']?.LoginHistoryList
  if (Array.isArray(logins)) {
    result.totalLogins = logins.length
    const devices: Record<string, number> = {}
    const networks: Record<string, number> = {}
    const ips = new Set<string>()
    logins.forEach((l: any) => {
      if (l.DeviceModel) devices[l.DeviceModel] = (devices[l.DeviceModel] || 0) + 1
      if (l.NetworkType) networks[l.NetworkType] = (networks[l.NetworkType] || 0) + 1
      if (l.IP) ips.add(l.IP)
    })
    result.uniqueIPs = ips.size
    result.deviceUsage = Object.entries(devices).map(([device, count]) => ({ device, count })).sort((a, b) => b.count - a.count).slice(0, 5)
    result.networkUsage = Object.entries(networks).map(([network, count]) => ({ network, count })).sort((a, b) => b.count - a.count)
  }

  const chat = data['Direct Message']?.['Direct Messages']?.ChatHistory
  if (chat && typeof chat === 'object') {
    result.totalChats = Object.keys(chat).length
    let total = 0
    let sent = 0
    let received = 0
    const stats: Array<{ name: string; count: number }> = []
    Object.entries(chat).forEach(([name, msgs]) => {
      if (Array.isArray(msgs)) {
        total += msgs.length
        stats.push({ name: name.replace('Chat History with ', '').replace(':', ''), count: msgs.length })
        msgs.forEach((m: any) => (m.From === result.username ? sent++ : received++))
      }
    })
    result.totalDirectMessages = total
    result.sentMessages = sent
    result.receivedMessages = received
    result.topChats = stats.sort((a, b) => b.count - a.count).slice(0, 10)
  }

  const live = data['Tiktok Live']?.['Watch Live History']?.WatchLiveMap
  if (live && typeof live === 'object') {
    result.watchedLiveStreams = Object.keys(live).length
    let lc = 0
    Object.values(live).forEach((l: any) => {
      if (Array.isArray(l.Comments)) lc += l.Comments.length
    })
    result.liveCommentsCount = lc
  }

  const block = data['App Settings']?.['Block List']?.BlockList
  if (Array.isArray(block)) {
    result.blockedUsersCount = block.length
    result.blockedUsers = block.slice(0, 10).map((b: any) => b.UserName)
  }
  return result
}

export default function AnalyzeClient({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.analyze
  const r = t.results
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [progress, setProgress] = useState('')

  const selectFile = (f: File) => {
    const isZip = f.type.includes('zip') || f.name.endsWith('.zip')
    const isJson = f.type === 'application/json' || f.name.endsWith('.json')
    if (isZip || isJson) {
      setFile(f)
      setError(null)
    } else setError(t.fileTypeError)
  }

  const handleAnalyze = async () => {
    if (!file) {
      setError(t.selectFileError)
      return
    }
    setLoading(true)
    setError(null)
    setUserData(null)
    setProgress(t.progress.reading)
    try {
      let text: string
      const isZip = file.type.includes('zip') || file.name.endsWith('.zip')
      if (isZip) {
        setProgress(t.progress.extracting)
        const zip = await new JSZip().loadAsync(file)
        let jsonFile: any = null
        let jsonName = ''
        for (const name of Object.keys(zip.files)) {
          if (name.endsWith('.json') && !zip.files[name].dir) {
            if (name.includes('user_data')) {
              jsonFile = zip.files[name]
              jsonName = name
              break
            }
            if (!jsonFile) {
              jsonFile = zip.files[name]
              jsonName = name
            }
          }
        }
        if (!jsonFile) throw new Error(t.jsonNotFound)
        setProgress(t.progress.readingFile.replace('{name}', jsonName))
        text = await jsonFile.async('string')
      } else {
        text = await file.text()
      }
      setProgress(t.progress.parsing)
      text = text.replace(/,\s*]/g, ']').replace(/,\s*}/g, '}')
      const data = JSON.parse(text)
      setProgress(t.progress.analyzing)
      setUserData(analyzeTikTokData(data))
      setProgress('')
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: 'wrapped_requested', fileType: isZip ? 'zip' : 'json' })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t.genericError)
    } finally {
      setLoading(false)
    }
  }

  const fmt = (n?: number) => (n === undefined ? '0' : n.toLocaleString('en-US'))
  const fmtHour = (h?: number | null) => (h === null || h === undefined ? '—' : `${h}:00 - ${h + 1}:00`)
  const fmtDate = (s?: string) => {
    if (!s) return '—'
    try {
      return new Date(s).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' })
    } catch {
      return s
    }
  }

  return (
    <div className="container">
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <Link href={localizedPath('/', locale)} style={{ color: '#f59e0b', textDecoration: 'none', fontSize: '1rem' }}>
          {dict.cta.backToHome}
        </Link>
        <h1 style={{ marginTop: '1rem', fontSize: '2.5rem' }}>
          <span style={{ color: '#f59e0b' }}>Tik</span><span style={{ color: '#7c3aed' }}>Tok</span>
          <span style={{ color: '#fff' }}> Wrapped</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>{t.subtitle}</p>
        <p className="page-disclaimer" style={{ marginTop: '1rem' }}>{dict.disclaimer.underH1}</p>
      </div>

      {!userData && (
        <div className="card instruction-card" id="how-to-get-data">
          <h2 className="section-title">{t.howToTitle}</h2>
          <div className="instruction-notice">
            <div className="notice-icon">⏰</div>
            <div className="notice-content">
              <strong>{t.importantLabel}</strong> {t.importantText}
            </div>
          </div>
          <div className="steps-container">
            {t.steps.map((step, i) => (
              <div key={i} className="step">
                <div className="step-number">{i + 1}</div>
                <div className="step-image">
                  <img src={`/images/2025-12-13%2019.2${[2, 3, 3, 3][i]}.${['57', '02', '06', '09'][i]}.jpg`} alt={step.alt} loading="lazy" decoding="async" />
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="instruction-footer">
            {t.footerSteps.map((step, i) => (
              <div key={i} className="footer-step">
                <span className="footer-icon">{['📧', '📥', '🎉'][i]}</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="card" id="upload-section">
        <div
          className={`upload-area ${isDragging ? 'dragover' : ''}`}
          onDrop={(e) => {
            e.preventDefault()
            setIsDragging(false)
            if (e.dataTransfer.files?.[0]) selectFile(e.dataTransfer.files[0])
          }}
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={(e) => {
            e.preventDefault()
            setIsDragging(false)
          }}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>
            {file ? `✅ ${file.name}` : t.dropPrompt}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>{t.dropHint}</p>
          <input id="file-input" type="file" accept=".json,.zip" onChange={(e) => e.target.files?.[0] && selectFile(e.target.files[0])} />
          <button className="upload-button" onClick={(e) => { e.stopPropagation(); handleAnalyze() }} disabled={!file || loading}>
            {loading ? t.analyzingBtn : t.analyzeBtn}
          </button>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '1.5rem', textAlign: 'center', padding: '0 1rem' }}>
            {t.privacyNote}
          </p>
        </div>

        {error && <div className="error">❌ {error}</div>}
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            {progress || t.progress.processing}
          </div>
        )}
        {!userData && !loading && (
          <a href="#how-to-get-data" className="how-to-link">{t.howToLink}</a>
        )}
      </div>

      {!userData && (
        <div className="card demo-card">
          <h2 className="section-title">{dict.home.demoTitle}</h2>
          <p className="demo-description">{dict.home.demoDescription}</p>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <Link
              href={localizedPath('/example-wrapped', locale)}
              style={{ display: 'inline-block', padding: '0.9rem 2.2rem', background: 'linear-gradient(135deg, #7c3aed 0%, #f59e0b 100%)', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontWeight: 700, fontSize: '1.05rem' }}
            >
              {dict.home.demoButton}
            </Link>
          </div>
          <div className="more-stats">
            <p className="more-stats-title">{dict.home.moreStatsTitle}</p>
            <div className="stats-preview">
              {dict.home.statTags.map((tag, i) => (
                <span key={i} className="stat-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {userData && (
        <>
          {(userData.username || userData.displayName) && (
            <div className="card profile-card">
              <div className="profile-header">
                {userData.profilePhoto && (
                  <img src={userData.profilePhoto} alt="Profile" className="profile-photo" onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')} />
                )}
                <div>
                  <h2 className="profile-name">{userData.displayName || userData.username}</h2>
                  {userData.username && <p className="profile-username">@{userData.username}</p>}
                </div>
              </div>
              <div className="user-info">
                {userData.followerCount !== undefined && (
                  <div className="info-item"><div className="info-label">{r.followers}</div><div className="info-value"><AnimatedNumber value={userData.followerCount} /></div></div>
                )}
                {userData.followingCount !== undefined && (
                  <div className="info-item"><div className="info-label">{r.following}</div><div className="info-value"><AnimatedNumber value={userData.followingCount} /></div></div>
                )}
                {userData.interests && (
                  <div className="info-item full-width">
                    <div className="info-label">{r.interests}</div>
                    <div className="interests">
                      {userData.interests.split('|').map((it, i) => (<span key={i} className="interest-tag">{it}</span>))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="card highlight-card stats-casino">
            <h2 className="section-title">{r.yourStats}</h2>
            <div className="stats-grid">
              {userData.totalVideosWatched !== undefined && (
                <div className="stat-item big casino-stat"><div className="stat-value"><SlotNumber value={userData.totalVideosWatched} delay={0} /></div><div className="stat-label">{r.videosWatched}</div></div>
              )}
              {userData.estimatedWatchHours !== undefined && (
                <div className="stat-item casino-stat"><div className="stat-value"><SlotNumber value={userData.estimatedWatchHours} delay={500} /></div><div className="stat-label">{r.hoursOnTikTok}</div></div>
              )}
              {userData.estimatedWatchDays !== undefined && (
                <div className="stat-item casino-stat"><div className="stat-value"><SlotNumber value={Math.round(userData.estimatedWatchDays * 10) / 10} delay={1000} /></div><div className="stat-label">{r.daysOfWatching}</div></div>
              )}
            </div>
          </div>

          {userData.estimatedWatchHours !== undefined && (
            <div className="card rank-card"><SlotMachine hours={userData.estimatedWatchHours} label={r.yourRank} /></div>
          )}

          <div className="card">
            <h2 className="section-title">{r.whenActive}</h2>
            <div className="user-info">
              {userData.mostActiveWatchingHour !== undefined && (
                <div className="info-item highlight"><div className="info-label">{r.peakHour}</div><div className="info-value">{fmtHour(userData.mostActiveWatchingHour)}</div></div>
              )}
              {userData.mostActiveDay && (
                <div className="info-item highlight"><div className="info-label">{r.mostActiveDay}</div><div className="info-value">{userData.mostActiveDay}</div></div>
              )}
              {userData.firstVideoDate && (
                <div className="info-item"><div className="info-label">{r.firstWatch}</div><div className="info-value small">{fmtDate(userData.firstVideoDate)}</div></div>
              )}
              {userData.lastVideoDate && (
                <div className="info-item"><div className="info-label">{r.lastWatch}</div><div className="info-value small">{fmtDate(userData.lastVideoDate)}</div></div>
              )}
            </div>
          </div>

          <div className="card">
            <h2 className="section-title">{r.engagement}</h2>
            <div className="user-info">
              {userData.likedVideosCount !== undefined && (<div className="info-item"><div className="info-label">{r.videosLiked}</div><div className="info-value"><AnimatedNumber value={userData.likedVideosCount} /></div></div>)}
              {userData.favoriteVideosCount !== undefined && (<div className="info-item"><div className="info-label">{r.favorites}</div><div className="info-value"><AnimatedNumber value={userData.favoriteVideosCount} /></div></div>)}
              {userData.totalComments !== undefined && (<div className="info-item"><div className="info-label">{r.comments}</div><div className="info-value"><AnimatedNumber value={userData.totalComments} /></div></div>)}
              {userData.totalShares !== undefined && (<div className="info-item"><div className="info-label">{r.shares}</div><div className="info-value"><AnimatedNumber value={userData.totalShares} /></div></div>)}
            </div>
          </div>

          {userData.activityByYear && Object.keys(userData.activityByYear).length > 0 && (
            <div className="card">
              <h2 className="section-title">{r.activityByYear}</h2>
              <div className="user-info">
                {Object.entries(userData.activityByYear).sort(([a], [b]) => parseInt(b) - parseInt(a)).map(([year, count]) => (
                  <div key={year} className="info-item"><div className="info-label">{r.year} {year}</div><div className="info-value">{fmt(count)} {r.videos}</div></div>
                ))}
              </div>
              {userData.mostActiveMonth && (
                <div className="active-month-box"><span>🏆 <strong>{r.mostActiveMonth}:</strong> {userData.mostActiveMonth} ({fmt(userData.mostActiveMonthCount)} {r.videos})</span></div>
              )}
              {userData.avgVideosPerDay !== undefined && (
                <div style={{ marginTop: '0.75rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>{r.avgPerDayPrefix} <strong style={{ color: '#f59e0b' }}>{userData.avgVideosPerDay}</strong> {r.avgPerDaySuffix}</div>
              )}
            </div>
          )}

          {userData.collections && userData.collections.length > 0 && (
            <div className="card">
              <h2 className="section-title">{r.collections} ({userData.collectionsCount})</h2>
              <div className="collections">{userData.collections.map((c, i) => (<span key={i} className="collection-tag">{c}</span>))}</div>
            </div>
          )}

          {(userData.favoriteSoundsCount || userData.favoriteEffectsCount || userData.favoriteHashtagsCount) ? (
            <div className="card">
              <h2 className="section-title">{r.favoritesTitle}</h2>
              <div className="user-info">
                {!!userData.favoriteSoundsCount && (<div className="info-item"><div className="info-label">{r.favoriteSounds}</div><div className="info-value">{fmt(userData.favoriteSoundsCount)}</div></div>)}
                {!!userData.favoriteEffectsCount && (<div className="info-item"><div className="info-label">{r.favoriteEffects}</div><div className="info-value">{fmt(userData.favoriteEffectsCount)}</div></div>)}
                {!!userData.favoriteHashtagsCount && (<div className="info-item"><div className="info-label">{r.favoriteHashtags}</div><div className="info-value">{fmt(userData.favoriteHashtagsCount)}</div></div>)}
              </div>
            </div>
          ) : null}

          {userData.topSearchTerms && userData.topSearchTerms.length > 0 && (
            <div className="card">
              <h2 className="section-title">{r.topSearches}</h2>
              {userData.totalSearches !== undefined && (<p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>{r.totalSearches}: {fmt(userData.totalSearches)}</p>)}
              <div className="search-terms">
                {userData.topSearchTerms.map((item, i) => (
                  <div key={i} className="search-term"><span className="term-rank">#{i + 1}</span><span className="term-text">{item.term}</span><span className="term-count">{item.count}x</span></div>
                ))}
              </div>
            </div>
          )}

          {userData.shareMethods && userData.shareMethods.length > 0 && (
            <div className="card">
              <h2 className="section-title">{r.shareDestinations}</h2>
              <div className="share-methods">{userData.shareMethods.map((item, i) => (<div key={i} className="share-method"><span className="method-name">{item.method}</span><span className="method-count">{fmt(item.count)}</span></div>))}</div>
            </div>
          )}

          {userData.recentComments && userData.recentComments.length > 0 && (
            <div className="card">
              <h2 className="section-title">{r.yourComments}</h2>
              {userData.totalComments !== undefined && (
                <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>{r.totalComments}: {fmt(userData.totalComments)}{userData.avgCommentLength ? ` (${r.avgChars.replace('{n}', String(userData.avgCommentLength))})` : ''}</p>
              )}
              <div className="comments-list">{userData.recentComments.map((c, i) => (<div key={i} className="comment-item"><div className="comment-text">{c.text}</div><div className="comment-date">{fmtDate(c.date)}</div></div>))}</div>
            </div>
          )}

          {(userData.totalChats !== undefined || userData.totalDirectMessages !== undefined) && (
            <div className="card">
              <h2 className="section-title">{r.messages}</h2>
              <div className="user-info">
                {userData.totalChats !== undefined && (<div className="info-item"><div className="info-label">{r.chats}</div><div className="info-value">{fmt(userData.totalChats)}</div></div>)}
                {userData.totalDirectMessages !== undefined && (<div className="info-item"><div className="info-label">{r.messagesLabel}</div><div className="info-value">{fmt(userData.totalDirectMessages)}</div></div>)}
                {userData.sentMessages !== undefined && (<div className="info-item"><div className="info-label">{r.sent}</div><div className="info-value">{fmt(userData.sentMessages)}</div></div>)}
                {userData.receivedMessages !== undefined && (<div className="info-item"><div className="info-label">{r.received}</div><div className="info-value">{fmt(userData.receivedMessages)}</div></div>)}
              </div>
              {userData.topChats && userData.topChats.length > 0 && (
                <>
                  <p style={{ color: 'rgba(255,255,255,0.5)', margin: '1rem 0 0.5rem', fontSize: '0.9rem' }}>{r.topChats}</p>
                  <div className="top-chats">{userData.topChats.map((c, i) => (<div key={i} className="chat-item"><span className="chat-name">@{c.name}</span><span className="chat-count">{c.count} {r.messagesCountSuffix}</span></div>))}</div>
                </>
              )}
            </div>
          )}

          {userData.recentFollowers && userData.recentFollowers.length > 0 && (
            <div className="card">
              <h2 className="section-title">{r.recentFollowers}</h2>
              <div className="followers-list">{userData.recentFollowers.map((f, i) => (<span key={i} className="follower-tag">@{f}</span>))}</div>
            </div>
          )}

          {userData.deviceUsage && userData.deviceUsage.length > 0 && (
            <div className="card">
              <h2 className="section-title">{r.devicesNetworks}</h2>
              {userData.totalLogins !== undefined && (<p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>{r.totalLogins}: {fmt(userData.totalLogins)}</p>)}
              <div className="devices-grid">
                <div>
                  <h3 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>{r.devices}</h3>
                  {userData.deviceUsage.map((item, i) => (<div key={i} className="device-item"><span className="device-name">{item.device}</span><span className="device-count">{item.count}</span></div>))}
                </div>
                {userData.networkUsage && userData.networkUsage.length > 0 && (
                  <div>
                    <h3 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>{r.networks}</h3>
                    {userData.networkUsage.map((item, i) => (<div key={i} className="device-item"><span className="device-name">{item.network}</span><span className="device-count">{item.count}</span></div>))}
                  </div>
                )}
              </div>
            </div>
          )}

          {userData.watchedLiveStreams !== undefined && userData.watchedLiveStreams > 0 && (
            <div className="card">
              <h2 className="section-title">{r.tiktokLive}</h2>
              <div className="user-info">
                <div className="info-item"><div className="info-label">{r.livesWatched}</div><div className="info-value">{fmt(userData.watchedLiveStreams)}</div></div>
                {!!userData.liveCommentsCount && (<div className="info-item"><div className="info-label">{r.liveComments}</div><div className="info-value">{fmt(userData.liveCommentsCount)}</div></div>)}
              </div>
            </div>
          )}

          {userData.blockedUsersCount !== undefined && userData.blockedUsersCount > 0 && (
            <div className="card">
              <h2 className="section-title">{r.blocked} ({userData.blockedUsersCount})</h2>
              {userData.blockedUsers && userData.blockedUsers.length > 0 && (
                <div className="followers-list">{userData.blockedUsers.map((u, i) => (<span key={i} className="follower-tag" style={{ background: 'rgba(255,100,100,0.15)', color: '#ff6b6b' }}>@{u}</span>))}</div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}
