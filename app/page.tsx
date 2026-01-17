'use client'

import { useState, useEffect, useRef } from 'react'
import JSZip from 'jszip'

declare global {
  interface Window {
    dataLayer?: any[]
  }
}

function SlotNumber({ value, delay = 0 }: { value: number; delay?: number }) {
  const [isSpinning, setIsSpinning] = useState(true)
  const [displayValue, setDisplayValue] = useState('0')
  const [phase, setPhase] = useState<'waiting' | 'spinning' | 'slowing' | 'done'>('waiting')
  
  useEffect(() => {
    const finalValue = value.toLocaleString('en-US')
    
    const delayTimer = setTimeout(() => {
      setPhase('spinning')
      
      let spinCount = 0
      const maxSpins = 15 + Math.floor(Math.random() * 10)
      
      const spinInterval = setInterval(() => {
        spinCount++
        const digits = finalValue.replace(/,/g, '').length
        const randomNum = Math.floor(Math.random() * Math.pow(10, digits))
        setDisplayValue(randomNum.toLocaleString('en-US'))
        
        if (spinCount >= maxSpins) {
          clearInterval(spinInterval)
          setPhase('slowing')
          
          let slowCount = 0
          const slowInterval = setInterval(() => {
            slowCount++
            const randomNum = Math.floor(Math.random() * Math.pow(10, digits))
            setDisplayValue(randomNum.toLocaleString('en-US'))
            
            if (slowCount >= 5) {
              clearInterval(slowInterval)
              setPhase('done')
              setDisplayValue(finalValue)
              setIsSpinning(false)
            }
          }, 150 + slowCount * 50)
        }
      }, 50)
      
    }, delay)
    
    return () => clearTimeout(delayTimer)
  }, [value, delay])
  
  return (
    <span className={`slot-number ${phase}`}>
      {displayValue}
    </span>
  )
}

function AnimatedNumber({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const startTime = useRef<number | null>(null)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    startTime.current = null
    
    const animate = (currentTime: number) => {
      if (startTime.current === null) {
        startTime.current = currentTime
      }
      
      const elapsed = currentTime - startTime.current
      const progress = Math.min(elapsed / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * value)
      
      setDisplayValue(current)
      
      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }
    
    rafId.current = requestAnimationFrame(animate)
    
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [value, duration])

  return <span className="animated-number">{displayValue.toLocaleString('en-US')}</span>
}

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
  for (const r of RANKS) {
    if (hours >= r.minHours) {
      rank = r
    }
  }
  return rank
}

function SlotMachine({ hours }: { hours: number }) {
  const [isSpinning, setIsSpinning] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [finalRank, setFinalRank] = useState(getRank(hours))
  const spinCount = useRef(0)
  
  useEffect(() => {
    const targetRank = getRank(hours)
    setFinalRank(targetRank)
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
            setTimeout(() => {
              setIsSpinning(false)
            }, 300)
          }
        }, 200)
      }
    }, 80)
    
    return () => {
      clearInterval(spinInterval)
    }
  }, [hours])
  
  const displayRank = isSpinning ? RANKS[currentIndex] : finalRank
  
  return (
    <div className="slot-machine">
      <div className="slot-container">
        <div className={`slot-window ${isSpinning ? 'spinning' : 'revealed'}`}>
          <div 
            className="slot-rank"
            style={{ 
              color: displayRank.color,
              textShadow: isSpinning ? 'none' : `0 0 30px ${displayRank.color}` 
            }}
          >
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
      <div className="slot-label">Your TikTok Rank</div>
    </div>
  )
}

interface UserData {
  username?: string
  displayName?: string
  email?: string
  phoneNumber?: string
  bioDescription?: string
  birthDate?: string
  profilePhoto?: string
  followerCount?: number
  followingCount?: number
  likesReceived?: number
  
  interests?: string
  appLanguage?: string
  privateAccount?: boolean
  allowDownload?: string
  personalizingAds?: string
  whoCanMessage?: string
  whoCanDuet?: string
  whoCanStitch?: string
  whoCanComment?: string
  filterComments?: boolean
  
  totalVideosWatched?: number
  browsingByMonth?: Record<string, number>
  browsingByHour?: Record<number, number>
  browsingByDay?: Record<string, number>
  mostActiveWatchingHour?: number
  mostActiveDay?: string
  estimatedWatchHours?: number
  estimatedWatchDays?: number
  firstVideoDate?: string
  lastVideoDate?: string
  avgVideosPerDay?: number
  
  favoriteVideosCount?: number
  likedVideosCount?: number
  likesByMonth?: Record<string, number>
  collectionsCount?: number
  collections?: string[]
  favoriteSoundsCount?: number
  favoriteEffectsCount?: number
  favoriteHashtagsCount?: number
  
  totalSearches?: number
  topSearchTerms?: Array<{ term: string; count: number }>
  searchesByMonth?: Record<string, number>
  
  totalComments?: number
  commentsByMonth?: Record<string, number>
  recentComments?: Array<{ date?: string; text?: string }>
  avgCommentLength?: number
  
  totalShares?: number
  shareMethods?: Array<{ method: string; count: number }>
  sharesByMonth?: Record<string, number>
  
  totalLogins?: number
  deviceUsage?: Array<{ device: string; count: number }>
  systemUsage?: Array<{ system: string; count: number }>
  networkUsage?: Array<{ network: string; count: number }>
  carrierUsage?: Array<{ carrier: string; count: number }>
  uniqueIPs?: number
  
  postedVideosCount?: number
  totalLikesOnVideos?: number
  
  totalChats?: number
  totalDirectMessages?: number
  topChats?: Array<{ name: string; count: number }>
  messagesByMonth?: Record<string, number>
  sentMessages?: number
  receivedMessages?: number
  
  watchedLiveStreams?: number
  liveCommentsCount?: number
  
  blockedUsersCount?: number
  blockedUsers?: string[]
  
  offTikTokActivity?: number
  offTikTokEvents?: Array<{ event: string; count: number }>
  
  recentFollowers?: string[]
  followersByMonth?: Record<string, number>
  
  appVersions?: string[]
  resolution?: string
  
  activityByYear?: Record<number, number>
  
  mostActiveMonth?: string
  mostActiveMonthCount?: number
}

function parseDate(dateString: string | undefined): Date | null {
  if (!dateString) return null
  try {
    return new Date(dateString)
  } catch {
    return null
  }
}

function getMonthlyStats(items: Array<{ Date?: string; date?: string }> | undefined): Record<string, number> {
  if (!items || !Array.isArray(items)) return {}
  
  const stats: Record<string, number> = {}
  items.forEach(item => {
    const date = parseDate(item.Date || item.date)
    if (date) {
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
      stats[monthKey] = (stats[monthKey] || 0) + 1
    }
  })
  return stats
}

function getHourlyStats(items: Array<{ Date?: string; date?: string }> | undefined): Record<number, number> {
  if (!items || !Array.isArray(items)) return {}
  
  const stats: Record<number, number> = {}
  items.forEach(item => {
    const date = parseDate(item.Date || item.date)
    if (date) {
      const hour = date.getHours()
      stats[hour] = (stats[hour] || 0) + 1
    }
  })
  return stats
}

function getDayOfWeekStats(items: Array<{ Date?: string; date?: string }> | undefined): Record<string, number> {
  if (!items || !Array.isArray(items)) return {}
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const stats: Record<string, number> = {}
  
  items.forEach(item => {
    const date = parseDate(item.Date || item.date)
    if (date) {
      const day = days[date.getDay()]
      stats[day] = (stats[day] || 0) + 1
    }
  })
  return stats
}

function getMostActiveHour(hourlyStats: Record<number, number>): number | null {
  let maxHour: number | null = null
  let maxCount = 0
  
  Object.entries(hourlyStats).forEach(([hour, count]) => {
    if (count > maxCount) {
      maxCount = count
      maxHour = parseInt(hour)
    }
  })
  
  return maxHour
}

function getMostActiveDay(dayStats: Record<string, number>): string | null {
  let maxDay: string | null = null
  let maxCount = 0
  
  Object.entries(dayStats).forEach(([day, count]) => {
    if (count > maxCount) {
      maxCount = count
      maxDay = day
    }
  })
  
  return maxDay
}

function getTopSearchTerms(searchHistory: Array<{ SearchTerm?: string }> | undefined, limit: number = 10): Array<{ term: string; count: number }> {
  if (!searchHistory || !Array.isArray(searchHistory)) return []
  
  const termCounts: Record<string, number> = {}
  searchHistory.forEach(item => {
    if (item.SearchTerm) {
      const term = item.SearchTerm.toLowerCase().trim()
      termCounts[term] = (termCounts[term] || 0) + 1
    }
  })
  
  return Object.entries(termCounts)
    .map(([term, count]) => ({ term, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
}

function getShareMethods(shareHistory: Array<{ Method?: string }> | undefined): Array<{ method: string; count: number }> {
  if (!shareHistory || !Array.isArray(shareHistory)) return []
  
  const methodCounts: Record<string, number> = {}
  shareHistory.forEach(item => {
    if (item.Method) {
      methodCounts[item.Method] = (methodCounts[item.Method] || 0) + 1
    }
  })
  
  return Object.entries(methodCounts)
    .map(([method, count]) => ({ method, count }))
    .sort((a, b) => b.count - a.count)
}

function calculateWatchTime(videoCount: number): { hours: number; days: number } {
  const avgVideoSeconds = 30
  const totalSeconds = videoCount * avgVideoSeconds
  const hours = Math.round(totalSeconds / 3600)
  const days = Math.round((hours / 24) * 10) / 10
  return { hours, days }
}

function analyzeTikTokData(data: any): UserData {
  const result: UserData = {}

  const profileInfo = data.Profile?.['Profile Info']?.ProfileMap
  if (profileInfo) {
    result.username = profileInfo.userName
    result.displayName = profileInfo.displayName
    result.email = profileInfo.emailAddress
    result.phoneNumber = profileInfo.telephoneNumber
    result.bioDescription = profileInfo.bioDescription
    result.birthDate = profileInfo.birthDate
    result.profilePhoto = profileInfo.profilePhoto
    result.followerCount = profileInfo.followerCount
    result.followingCount = profileInfo.followingCount
    
    if (profileInfo.likesReceived && profileInfo.likesReceived !== 'None') {
      result.likesReceived = parseInt(profileInfo.likesReceived) || 0
    }
  }

  const settings = data['App Settings']?.Settings?.SettingsMap
  if (settings) {
    result.interests = settings.Interests
    result.appLanguage = settings['App Language']
    result.privateAccount = settings['Private Account'] === 'Enabled'
    result.allowDownload = settings['Allow DownLoad']
    result.personalizingAds = settings['Personalized Ads']
    result.whoCanMessage = settings['Who Can Send Me Message']
    result.whoCanDuet = settings['Who Can Duet With Me']
    result.whoCanStitch = settings['Who Can Stitch with your videos']
    result.whoCanComment = settings['Who Can Post Comments']
    result.filterComments = settings['Filter Comments'] === 'Enabled'
  }

  const watchHistory = data['Your Activity']?.['Watch History']?.VideoList
  if (watchHistory && Array.isArray(watchHistory)) {
    result.totalVideosWatched = watchHistory.length
    result.browsingByMonth = getMonthlyStats(watchHistory)
    result.browsingByHour = getHourlyStats(watchHistory)
    result.browsingByDay = getDayOfWeekStats(watchHistory)
    result.mostActiveWatchingHour = getMostActiveHour(result.browsingByHour) ?? undefined
    result.mostActiveDay = getMostActiveDay(result.browsingByDay) ?? undefined
    
    const watchTime = calculateWatchTime(watchHistory.length)
    result.estimatedWatchHours = watchTime.hours
    result.estimatedWatchDays = watchTime.days
    
    const yearStats: Record<number, number> = {}
    watchHistory.forEach((item: any) => {
      const date = parseDate(item.Date)
      if (date) {
        const year = date.getFullYear()
        yearStats[year] = (yearStats[year] || 0) + 1
      }
    })
    result.activityByYear = yearStats
    
    if (result.browsingByMonth) {
      let maxMonth = ''
      let maxCount = 0
      Object.entries(result.browsingByMonth).forEach(([month, count]) => {
        if (count > maxCount) {
          maxCount = count
          maxMonth = month
        }
      })
      result.mostActiveMonth = maxMonth
      result.mostActiveMonthCount = maxCount
    }
    
    if (watchHistory.length > 0) {
      const sorted = [...watchHistory].sort((a: any, b: any) => {
        const dateA = parseDate(a.Date)
        const dateB = parseDate(b.Date)
        if (!dateA || !dateB) return 0
        return dateA.getTime() - dateB.getTime()
      })
      result.firstVideoDate = sorted[0]?.Date
      result.lastVideoDate = sorted[sorted.length - 1]?.Date
      
      const firstDate = parseDate(sorted[0]?.Date)
      const lastDate = parseDate(sorted[sorted.length - 1]?.Date)
      if (firstDate && lastDate) {
        const days = Math.max(1, Math.ceil((lastDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24)))
        result.avgVideosPerDay = Math.round(watchHistory.length / days)
      }
    }
  }

  const favoriteVideos = data['Your Activity']?.['Favorite Videos']?.FavoriteVideoList
  if (favoriteVideos && Array.isArray(favoriteVideos)) {
    result.favoriteVideosCount = favoriteVideos.length
  }

  const favoriteSounds = data['Your Activity']?.['Favorite Sounds']?.FavoriteSoundList
  if (favoriteSounds && Array.isArray(favoriteSounds)) {
    result.favoriteSoundsCount = favoriteSounds.length
  }

  const favoriteEffects = data['Your Activity']?.['Favorite Effects']?.FavoriteEffectsList
  if (favoriteEffects && Array.isArray(favoriteEffects)) {
    result.favoriteEffectsCount = favoriteEffects.length
  }

  const favoriteHashtags = data['Your Activity']?.['Favorite Hashtags']?.FavoriteHashtagList
  if (favoriteHashtags && Array.isArray(favoriteHashtags)) {
    result.favoriteHashtagsCount = favoriteHashtags.length
  }

  const favoriteCollections = data['Your Activity']?.['Favorite Collection']?.FavoriteCollectionList
  if (favoriteCollections && Array.isArray(favoriteCollections)) {
    result.collectionsCount = favoriteCollections.length
    result.collections = favoriteCollections.slice(0, 20).map((c: any) => c.FavoriteCollection)
  }

  const likeList = data['Your Activity']?.['Like List']?.ItemFavoriteList
  if (likeList && Array.isArray(likeList)) {
    result.likedVideosCount = likeList.length
    result.likesByMonth = getMonthlyStats(likeList)
  }

  const followers = data['Your Activity']?.Follower?.FansList
  if (followers && Array.isArray(followers)) {
    result.followerCount = followers.length
    result.recentFollowers = followers.slice(0, 10).map((f: any) => f.UserName)
    result.followersByMonth = getMonthlyStats(followers)
  }

  const following = data['Your Activity']?.Following?.Following
  if (following && Array.isArray(following)) {
    result.followingCount = following.length
  }

  const searchHistory = data['Your Activity']?.Searches?.SearchList
  if (searchHistory && Array.isArray(searchHistory)) {
    result.totalSearches = searchHistory.length
    result.topSearchTerms = getTopSearchTerms(searchHistory, 20)
    result.searchesByMonth = getMonthlyStats(searchHistory)
  }

  const comments = data.Comment?.Comments?.CommentsList
  if (comments && Array.isArray(comments)) {
    result.totalComments = comments.length
    result.commentsByMonth = getMonthlyStats(comments)
    result.recentComments = comments.slice(0, 10).map((c: any) => ({
      date: c.date,
      text: c.comment?.substring(0, 150)
    }))
    
    const totalLength = comments.reduce((sum: number, c: any) => {
      return sum + (c.comment?.length || 0)
    }, 0)
    result.avgCommentLength = Math.round(totalLength / comments.length)
  }

  const shareHistory = data['Your Activity']?.['Share History']?.ShareHistoryList
  if (shareHistory && Array.isArray(shareHistory)) {
    result.totalShares = shareHistory.length
    result.shareMethods = getShareMethods(shareHistory)
    result.sharesByMonth = getMonthlyStats(shareHistory)
  }

  const loginHistory = data['Your Activity']?.['Login History']?.LoginHistoryList
  if (loginHistory && Array.isArray(loginHistory)) {
    result.totalLogins = loginHistory.length
    
    const devices: Record<string, number> = {}
    const systems: Record<string, number> = {}
    const networks: Record<string, number> = {}
    const carriers: Record<string, number> = {}
    const ips = new Set<string>()
    
    loginHistory.forEach((login: any) => {
      if (login.DeviceModel) {
        devices[login.DeviceModel] = (devices[login.DeviceModel] || 0) + 1
      }
      if (login.DeviceSystem) {
        systems[login.DeviceSystem] = (systems[login.DeviceSystem] || 0) + 1
      }
      if (login.NetworkType) {
        networks[login.NetworkType] = (networks[login.NetworkType] || 0) + 1
      }
      if (login.Carrier) {
        carriers[login.Carrier] = (carriers[login.Carrier] || 0) + 1
      }
      if (login.IP) {
        ips.add(login.IP)
      }
    })
    
    result.uniqueIPs = ips.size
    
    result.deviceUsage = Object.entries(devices)
      .map(([device, count]) => ({ device, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5)
    
    result.systemUsage = Object.entries(systems)
      .map(([system, count]) => ({ system, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5)
    
    result.networkUsage = Object.entries(networks)
      .map(([network, count]) => ({ network, count }))
      .sort((a, b) => b.count - a.count)
    
    result.carrierUsage = Object.entries(carriers)
      .map(([carrier, count]) => ({ carrier, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3)
  }

  const userVideos = data.Post?.Posts?.VideoList
  if (userVideos && Array.isArray(userVideos)) {
    result.postedVideosCount = userVideos.length
    
    const totalLikes = userVideos.reduce((sum: number, video: any) => {
      return sum + (parseInt(video.Likes || '0') || 0)
    }, 0)
    if (totalLikes > 0) {
      result.totalLikesOnVideos = totalLikes
    }
  }

  const chatHistory = data['Direct Message']?.['Direct Messages']?.ChatHistory
  if (chatHistory && typeof chatHistory === 'object') {
    const chats = Object.keys(chatHistory)
    result.totalChats = chats.length
    
    let totalMessages = 0
    let sentMessages = 0
    let receivedMessages = 0
    const chatStats: Array<{ name: string; count: number }> = []
    const allMessages: Array<{ Date?: string }> = []
    
    Object.entries(chatHistory).forEach(([chatName, messages]) => {
      if (Array.isArray(messages)) {
        totalMessages += messages.length
        const name = chatName.replace('Chat History with ', '').replace(':', '')
        chatStats.push({ name, count: messages.length })
        
        messages.forEach((msg: any) => {
          allMessages.push({ Date: msg.Date })
          if (msg.From === result.username) {
            sentMessages++
          } else {
            receivedMessages++
          }
        })
      }
    })
    
    result.totalDirectMessages = totalMessages
    result.sentMessages = sentMessages
    result.receivedMessages = receivedMessages
    result.topChats = chatStats.sort((a, b) => b.count - a.count).slice(0, 10)
    result.messagesByMonth = getMonthlyStats(allMessages)
  }

  const watchLive = data['Tiktok Live']?.['Watch Live History']?.WatchLiveMap
  if (watchLive && typeof watchLive === 'object') {
    result.watchedLiveStreams = Object.keys(watchLive).length
    
    let liveComments = 0
    Object.values(watchLive).forEach((live: any) => {
      if (live.Comments && Array.isArray(live.Comments)) {
        liveComments += live.Comments.length
      }
    })
    result.liveCommentsCount = liveComments
  }

  const blockList = data['App Settings']?.['Block List']?.BlockList
  if (blockList && Array.isArray(blockList)) {
    result.blockedUsersCount = blockList.length
    result.blockedUsers = blockList.slice(0, 10).map((b: any) => b.UserName)
  }

  const offTikTok = data['Ads and data']?.['Off TikTok Activity']?.OffTikTokActivityDataList
  if (offTikTok && Array.isArray(offTikTok)) {
    result.offTikTokActivity = offTikTok.length
    
    const eventCounts: Record<string, number> = {}
    offTikTok.forEach((item: any) => {
      if (item.Event) {
        eventCounts[item.Event] = (eventCounts[item.Event] || 0) + 1
      }
    })
    result.offTikTokEvents = Object.entries(eventCounts)
      .map(([event, count]) => ({ event, count }))
      .sort((a, b) => b.count - a.count)
  }

  const statusList = data['Your Activity']?.Status?.['Status List']
  if (statusList && Array.isArray(statusList)) {
    const versions = new Set<string>()
    statusList.forEach((s: any) => {
      if (s['App Version'] && s['App Version'] !== '') {
        versions.add(s['App Version'])
      }
    })
    result.appVersions = Array.from(versions).slice(0, 5)
    
    if (statusList[0]?.Resolution) {
      result.resolution = statusList[0].Resolution
    }
  }

  return result
}

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [progress, setProgress] = useState<string>('')

  const handleFileSelect = (selectedFile: File) => {
    const isZip = selectedFile.type === 'application/zip' || 
                  selectedFile.type === 'application/x-zip-compressed' ||
                  selectedFile.name.endsWith('.zip')
    const isJson = selectedFile.type === 'application/json' || 
                   selectedFile.name.endsWith('.json')
    
    if (selectedFile && (isZip || isJson)) {
      setFile(selectedFile)
      setError(null)
    } else {
      setError('Please select a ZIP or JSON file')
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0])
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0])
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleAnalyze = async () => {
    if (!file) {
      setError('Please select a file')
      return
    }

    setLoading(true)
    setError(null)
    setUserData(null)
    setProgress('Reading file...')

    try {
      let text: string
      
      const isZip = file.type === 'application/zip' || 
                    file.type === 'application/x-zip-compressed' ||
                    file.name.endsWith('.zip')
      
      if (isZip) {
        setProgress('Extracting ZIP archive...')
        const zip = new JSZip()
        const zipContent = await zip.loadAsync(file)
        
        let jsonFile: JSZip.JSZipObject | null = null
        let jsonFileName: string = ''
        
        for (const fileName of Object.keys(zipContent.files)) {
          if (fileName.endsWith('.json') && !zipContent.files[fileName].dir) {
            if (fileName.includes('user_data')) {
              jsonFile = zipContent.files[fileName]
              jsonFileName = fileName
              break
            }
            if (!jsonFile) {
              jsonFile = zipContent.files[fileName]
              jsonFileName = fileName
            }
          }
        }
        
        if (!jsonFile) {
          throw new Error('JSON file not found in archive')
        }
        
        setProgress(`Reading ${jsonFileName}...`)
        text = await jsonFile.async('string')
      } else {
        text = await file.text()
      }
      
      setProgress('Parsing JSON...')
      
      text = text.replace(/,\s*]/g, ']')
      text = text.replace(/,\s*}/g, '}')
      
      const data = JSON.parse(text)
      setProgress('Analyzing data...')
      
      const result = analyzeTikTokData(data)
      setUserData(result)
      setProgress('')
      
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || []
        
        window.dataLayer.push({
          event: 'wrapped_requested',
          timestamp: new Date().toISOString(),
          fileType: isZip ? 'zip' : 'json',
          fileName: file.name
        })
        
        console.log('wrapped_requested event sent to dataLayer:', {
          event: 'wrapped_requested',
          timestamp: new Date().toISOString(),
          fileType: isZip ? 'zip' : 'json',
          fileName: file.name
        })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while processing the file')
    } finally {
      setLoading(false)
    }
  }

  const formatNumber = (num: number | undefined): string => {
    if (num === undefined) return '0'
    return num.toLocaleString('en-US')
  }

  const formatHour = (hour: number | null | undefined): string => {
    if (hour === null || hour === undefined) return 'Unknown'
    return `${hour}:00 - ${hour + 1}:00`
  }

  const formatDate = (dateStr: string | undefined): string => {
    if (!dateStr) return 'Unknown'
    try {
      const date = new Date(dateStr)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    } catch {
      return dateStr
    }
  }

  return (
    <div className="container">
      <div className="hero-section">
        <h1 className="logo-text">
          <span className="cyan">Tik</span><span className="pink">Tok</span> 
          <span className="white">Wrapped</span>
        </h1>
        
        <p className="hero-tagline">Your Year on TikTok, Revealed 🎬</p>
        
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">🎰</span>
            <span>Get your personality rank</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📊</span>
            <span>See detailed watch stats</span>
          </div>
        </div>
        
        <p className="hero-description">
          TikTok Wrapped is an independent online tool that helps you understand your personal TikTok activity using your official TikTok data export.
          When you request your data from TikTok, it is delivered as a ZIP or JSON file containing raw activity information. TikTok Wrapped analyzes this file and converts it into clear summaries and visual insights, such as usage patterns, activity timelines, and general engagement statistics.
          The service works only with data you choose to upload and is intended for informational and personal analysis purposes.
        </p>
      </div>

      {!userData && (
        <div className="card">
          <h2 className="section-title">Learn More About TikTok Data</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            We publish in-depth guides about TikTok data exports, privacy, and usage analysis.
            Explore how your data works, what it contains, and how to analyze it responsibly.
          </p>
          <ul className="learn-more-list">
            <li>
              <a href="/blog/tiktok-wrapped-explained-what-it-is-how-it-works" className="learn-more-link">
                <span>•</span>
                <span>TikTok Wrapped Explained: What It Is & How It Works</span>
              </a>
            </li>
            <li>
              <a href="/blog/how-to-download-analyze-tiktok-data" className="learn-more-link">
                <span>•</span>
                <span>How to Download and Analyze TikTok Data</span>
              </a>
            </li>
            <li>
              <a href="/blog/what-your-tiktok-usage-says-about-your-digital-habits" className="learn-more-link">
                <span>•</span>
                <span>What Your TikTok Usage Says About Your Digital Habits</span>
              </a>
            </li>
            <li>
              <a href="/blog/how-to-analyze-tiktok-data-safely-privacy-first-guide" className="learn-more-link">
                <span>•</span>
                <span>How to Analyze TikTok Data Safely</span>
              </a>
            </li>
          </ul>
        </div>
      )}

      {!userData && (
        <div className="card instruction-card" id="how-to-get-data">
          <h2 className="section-title">📱 How to Get Your TikTok Data</h2>
          
          <div className="instruction-notice">
            <div className="notice-icon">⏰</div>
            <div className="notice-content">
              <strong>Important:</strong> TikTok provides your data only upon request. 
              After submitting a request, it may take <strong>a few hours up to 3 days</strong> for 
              your data to be ready. Make sure to select <strong>&quot;JSON&quot;</strong> format when requesting!
            </div>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-image">
                <img src="/images/2025-12-13%2019.22.57.jpg" alt="Step 1: Open Settings" />
              </div>
              <div className="step-content">
                <h3>Open Settings</h3>
                <p>Go to your Profile → tap the <strong>☰ menu</strong> → select <strong>Settings</strong></p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-image">
                <img src="/images/2025-12-13%2019.23.02.jpg" alt="Step 2: Go to Account" />
              </div>
              <div className="step-content">
                <h3>Go to Account</h3>
                <p>In Settings and Privacy, find and tap <strong>Account</strong></p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-image">
                <img src="/images/2025-12-13%2019.23.06.jpg" alt="Step 3: Download your data" />
              </div>
              <div className="step-content">
                <h3>Download Your Data</h3>
                <p>Scroll down and tap <strong>&quot;Download your data&quot;</strong></p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-image">
                <img src="/images/2025-12-13%2019.23.09.jpg" alt="Step 4: Request data" />
              </div>
              <div className="step-content">
                <h3>Request Data (JSON)</h3>
                <p>Change format to <strong>&quot;JSON&quot;</strong>, select <strong>&quot;All data&quot;</strong>, then tap <strong>&quot;Request data&quot;</strong></p>
              </div>
            </div>
          </div>
          
          <div className="instruction-footer">
            <div className="footer-step">
              <span className="footer-icon">📧</span>
              <span>You&apos;ll get a notification when your data is ready</span>
            </div>
            <div className="footer-step">
              <span className="footer-icon">📥</span>
              <span>Download the ZIP file from the &quot;Download data&quot; tab</span>
            </div>
            <div className="footer-step">
              <span className="footer-icon">🎉</span>
              <span>Upload it here and enjoy your stats!</span>
            </div>
          </div>
        </div>
      )}

      <div className="card" id="upload-section">
        <div
          className={`upload-area ${isDragging ? 'dragover' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>
            {file ? `✅ ${file.name}` : 'Drop your ZIP or JSON file here'}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
            TikTok → Settings → Privacy → Download Data
          </p>
          <input
            id="file-input"
            type="file"
            accept=".json,.zip"
            onChange={handleFileChange}
          />
          <button
            className="upload-button"
            onClick={(e) => {
              e.stopPropagation()
              handleAnalyze()
            }}
            disabled={!file || loading}
          >
            {loading ? '⏳ Analyzing...' : '🔍 Analyze'}
          </button>
          <p style={{ 
            color: 'rgba(255,255,255,0.7)', 
            fontSize: '0.9rem', 
            marginTop: '1.5rem',
            textAlign: 'center',
            padding: '0 1rem'
          }}>
            Your file is processed only to generate your results. We do not sell, share, or use uploaded data for advertising.
          </p>
        </div>

        {error && <div className="error">❌ {error}</div>}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            {progress || 'Processing data...'}
          </div>
        )}
        
        {!userData && !loading && (
          <a href="#how-to-get-data" className="how-to-link">
            Don&apos;t have your data? Learn how to download it ↓
          </a>
        )}
      </div>

      {!userData && (
        <div className="card demo-card">
          <h2 className="section-title">🎬 See It In Action</h2>
          <p className="demo-description">
            Here&apos;s what your TikTok Wrapped will look like! Watch the demo to see all the cool stats and ranks you&apos;ll discover.
          </p>
          <div className="video-container">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="demo-video"
            >
              <source src="/Screen%20Recording%202025-12-13%20at%2019.58.29.mov" type="video/quicktime" />
              <source src="/Screen%20Recording%202025-12-13%20at%2019.58.29.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="more-stats">
            <p className="more-stats-title">✨ And so much more awaits you...</p>
            <div className="stats-preview">
              <span className="stat-tag">🔍 Top Searches</span>
              <span className="stat-tag">📅 Activity by Year</span>
              <span className="stat-tag">⏰ Peak Hours</span>
              <span className="stat-tag">❤️ Likes & Comments</span>
              <span className="stat-tag">📤 Share History</span>              <span className="stat-tag">🔴 Live Streams</span>
            </div>
          </div>
          
          <p className="demo-cta">
            Ready to discover your stats? <a href="#upload-section" className="demo-link">Upload your data above! ↑</a>
          </p>
        </div>
      )}

      {userData && (
        <>
          {(userData.username || userData.displayName) && (
            <div className="card profile-card">
              <div className="profile-header">
                {userData.profilePhoto && (
                  <img 
                    src={userData.profilePhoto} 
                    alt="Profile" 
                    className="profile-photo"
                    onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                  />
                )}
                <div>
                  <h2 className="profile-name">{userData.displayName || userData.username}</h2>
                  {userData.username && <p className="profile-username">@{userData.username}</p>}
                </div>
              </div>
              <div className="user-info">
                {userData.followerCount !== undefined && (
                  <div className="info-item">
                    <div className="info-label">Followers</div>
                    <div className="info-value">
                      <AnimatedNumber value={userData.followerCount} duration={1500} />
                    </div>
                  </div>
                )}
                {userData.followingCount !== undefined && (
                  <div className="info-item">
                    <div className="info-label">Following</div>
                    <div className="info-value">
                      <AnimatedNumber value={userData.followingCount} duration={1500} />
                    </div>
                  </div>
                )}
                {userData.interests && (
                  <div className="info-item full-width">
                    <div className="info-label">Interests</div>
                    <div className="interests">
                      {userData.interests.split('|').map((interest, i) => (
                        <span key={i} className="interest-tag">{interest}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="card highlight-card stats-casino">
            <h2 className="section-title">🎰 Your Stats</h2>
            <div className="stats-grid">
              {userData.totalVideosWatched !== undefined && (
                <div className="stat-item big casino-stat">
                  <div className="stat-value">
                    <SlotNumber value={userData.totalVideosWatched} delay={0} />
                  </div>
                  <div className="stat-label">Videos Watched</div>
                </div>
              )}
              {userData.estimatedWatchHours !== undefined && (
                <div className="stat-item casino-stat">
                  <div className="stat-value">
                    <SlotNumber value={userData.estimatedWatchHours} delay={500} />
                  </div>
                  <div className="stat-label">Hours on TikTok</div>
                </div>
              )}
              {userData.estimatedWatchDays !== undefined && (
                <div className="stat-item casino-stat">
                  <div className="stat-value">
                    <SlotNumber value={Math.round(userData.estimatedWatchDays * 10) / 10} delay={1000} />
                  </div>
                  <div className="stat-label">Days of Watching</div>
                </div>
              )}
            </div>
          </div>

          {userData.estimatedWatchHours !== undefined && (
            <div className="card rank-card">
              <SlotMachine hours={userData.estimatedWatchHours} />
            </div>
          )}

          <div className="card">
            <h2 className="section-title">⏰ When You're Most Active</h2>
            <div className="user-info">
              {userData.mostActiveWatchingHour !== null && userData.mostActiveWatchingHour !== undefined && (
                <div className="info-item highlight">
                  <div className="info-label">Peak Hour</div>
                  <div className="info-value">{formatHour(userData.mostActiveWatchingHour)}</div>
                </div>
              )}
              {userData.mostActiveDay && (
                <div className="info-item highlight">
                  <div className="info-label">Most Active Day</div>
                  <div className="info-value">{userData.mostActiveDay}</div>
                </div>
              )}
              {userData.firstVideoDate && (
                <div className="info-item">
                  <div className="info-label">First Watch</div>
                  <div className="info-value small">{formatDate(userData.firstVideoDate)}</div>
                </div>
              )}
              {userData.lastVideoDate && (
                <div className="info-item">
                  <div className="info-label">Last Watch</div>
                  <div className="info-value small">{formatDate(userData.lastVideoDate)}</div>
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <h2 className="section-title">❤️ Engagement</h2>
            <div className="user-info">
              {userData.likedVideosCount !== undefined && (
                <div className="info-item">
                  <div className="info-label">Videos Liked</div>
                  <div className="info-value">
                    <AnimatedNumber value={userData.likedVideosCount} duration={1800} />
                  </div>
                </div>
              )}
              {userData.favoriteVideosCount !== undefined && (
                <div className="info-item">
                  <div className="info-label">Favorites</div>
                  <div className="info-value">
                    <AnimatedNumber value={userData.favoriteVideosCount} duration={1600} />
                  </div>
                </div>
              )}
              {userData.totalComments !== undefined && (
                <div className="info-item">
                  <div className="info-label">Comments</div>
                  <div className="info-value">
                    <AnimatedNumber value={userData.totalComments} duration={1400} />
                  </div>
                </div>
              )}
              {userData.totalShares !== undefined && (
                <div className="info-item">
                  <div className="info-label">Shares</div>
                  <div className="info-value">
                    <AnimatedNumber value={userData.totalShares} duration={1200} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {userData.activityByYear && Object.keys(userData.activityByYear).length > 0 && (
            <div className="card">
              <h2 className="section-title">📅 Activity by Year</h2>
              <div className="user-info">
                {Object.entries(userData.activityByYear)
                  .sort(([a], [b]) => parseInt(b) - parseInt(a))
                  .map(([year, count]) => (
                    <div key={year} className="info-item">
                      <div className="info-label">Year {year}</div>
                      <div className="info-value">{formatNumber(count)} videos</div>
                    </div>
                  ))}
              </div>
              {userData.mostActiveMonth && (
                <div className="active-month-box">
                  <span>🏆 <strong>Most Active Month:</strong> {userData.mostActiveMonth} ({formatNumber(userData.mostActiveMonthCount)} videos)</span>
                </div>
              )}
              {userData.avgVideosPerDay !== undefined && (
                <div style={{ marginTop: '0.75rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                  Average <strong style={{ color: '#25f4ee' }}>{userData.avgVideosPerDay}</strong> videos per day
                </div>
              )}
            </div>
          )}

          {userData.collections && userData.collections.length > 0 && (
            <div className="card">
              <h2 className="section-title">📂 Your Collections ({userData.collectionsCount})</h2>
              <div className="collections">
                {userData.collections.map((collection, i) => (
                  <span key={i} className="collection-tag">{collection}</span>
                ))}
              </div>
            </div>
          )}

          {(userData.favoriteSoundsCount || userData.favoriteEffectsCount || userData.favoriteHashtagsCount) && (
            <div className="card">
              <h2 className="section-title">⭐ Favorites</h2>
              <div className="user-info">
                {userData.favoriteSoundsCount !== undefined && userData.favoriteSoundsCount > 0 && (
                  <div className="info-item">
                    <div className="info-label">Favorite Sounds</div>
                    <div className="info-value">{formatNumber(userData.favoriteSoundsCount)}</div>
                  </div>
                )}
                {userData.favoriteEffectsCount !== undefined && userData.favoriteEffectsCount > 0 && (
                  <div className="info-item">
                    <div className="info-label">Favorite Effects</div>
                    <div className="info-value">{formatNumber(userData.favoriteEffectsCount)}</div>
                  </div>
                )}
                {userData.favoriteHashtagsCount !== undefined && userData.favoriteHashtagsCount > 0 && (
                  <div className="info-item">
                    <div className="info-label">Favorite Hashtags</div>
                    <div className="info-value">{formatNumber(userData.favoriteHashtagsCount)}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {userData.topSearchTerms && userData.topSearchTerms.length > 0 && (
            <div className="card">
              <h2 className="section-title">🔍 Top Searches</h2>
              {userData.totalSearches !== undefined && (
                <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
                  Total searches: {formatNumber(userData.totalSearches)}
                </p>
              )}
              <div className="search-terms">
                {userData.topSearchTerms.map((item, index) => (
                  <div key={index} className="search-term">
                    <span className="term-rank">#{index + 1}</span>
                    <span className="term-text">{item.term}</span>
                    <span className="term-count">{item.count}x</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {userData.shareMethods && userData.shareMethods.length > 0 && (
            <div className="card">
              <h2 className="section-title">📤 Share Destinations</h2>
              <div className="share-methods">
                {userData.shareMethods.map((item, index) => (
                  <div key={index} className="share-method">
                    <span className="method-name">{item.method}</span>
                    <span className="method-count">{formatNumber(item.count)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {userData.recentComments && userData.recentComments.length > 0 && (
            <div className="card">
              <h2 className="section-title">💭 Your Comments</h2>
              {userData.totalComments !== undefined && (
                <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
                  Total comments: {formatNumber(userData.totalComments)}
                  {userData.avgCommentLength ? ` (avg ${userData.avgCommentLength} chars)` : ''}
                </p>
              )}
              <div className="comments-list">
                {userData.recentComments.map((comment, index) => (
                  <div key={index} className="comment-item">
                    <div className="comment-text">{comment.text}</div>
                    <div className="comment-date">{formatDate(comment.date)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(userData.totalChats !== undefined || userData.totalDirectMessages !== undefined) && (
            <div className="card">
              <h2 className="section-title">💬 Messages</h2>
              <div className="user-info">
                {userData.totalChats !== undefined && (
                  <div className="info-item">
                    <div className="info-label">Chats</div>
                    <div className="info-value">{formatNumber(userData.totalChats)}</div>
                  </div>
                )}
                {userData.totalDirectMessages !== undefined && (
                  <div className="info-item">
                    <div className="info-label">Messages</div>
                    <div className="info-value">{formatNumber(userData.totalDirectMessages)}</div>
                  </div>
                )}
                {userData.sentMessages !== undefined && (
                  <div className="info-item">
                    <div className="info-label">Sent</div>
                    <div className="info-value">{formatNumber(userData.sentMessages)}</div>
                  </div>
                )}
                {userData.receivedMessages !== undefined && (
                  <div className="info-item">
                    <div className="info-label">Received</div>
                    <div className="info-value">{formatNumber(userData.receivedMessages)}</div>
                  </div>
                )}
              </div>
              {userData.topChats && userData.topChats.length > 0 && (
                <>
                  <p style={{ color: 'rgba(255,255,255,0.5)', margin: '1rem 0 0.5rem', fontSize: '0.9rem' }}>
                    Top Chats:
                  </p>
                  <div className="top-chats">
                    {userData.topChats.map((chat, index) => (
                      <div key={index} className="chat-item">
                        <span className="chat-name">@{chat.name}</span>
                        <span className="chat-count">{chat.count} messages</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {userData.recentFollowers && userData.recentFollowers.length > 0 && (
            <div className="card">
              <h2 className="section-title">👥 Recent Followers</h2>
              <div className="followers-list">
                {userData.recentFollowers.map((follower, index) => (
                  <span key={index} className="follower-tag">@{follower}</span>
                ))}
              </div>
            </div>
          )}

          {userData.deviceUsage && userData.deviceUsage.length > 0 && (
            <div className="card">
              <h2 className="section-title">📱 Devices & Networks</h2>
              {userData.totalLogins !== undefined && (
                <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
                  Total logins: {formatNumber(userData.totalLogins)}
                </p>
              )}
              <div className="devices-grid">
                <div>
                  <h3 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Devices</h3>
                  {userData.deviceUsage.map((item, index) => (
                    <div key={index} className="device-item">
                      <span className="device-name">{item.device}</span>
                      <span className="device-count">{item.count}</span>
                    </div>
                  ))}
                </div>
                {userData.networkUsage && userData.networkUsage.length > 0 && (
                  <div>
                    <h3 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Networks</h3>
                    {userData.networkUsage.map((item, index) => (
                      <div key={index} className="device-item">
                        <span className="device-name">{item.network}</span>
                        <span className="device-count">{item.count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {userData.watchedLiveStreams !== undefined && userData.watchedLiveStreams > 0 && (
            <div className="card">
              <h2 className="section-title">🔴 TikTok Live</h2>
              <div className="user-info">
                <div className="info-item">
                  <div className="info-label">Lives Watched</div>
                  <div className="info-value">{formatNumber(userData.watchedLiveStreams)}</div>
                </div>
                {userData.liveCommentsCount !== undefined && userData.liveCommentsCount > 0 && (
                  <div className="info-item">
                    <div className="info-label">Live Comments</div>
                    <div className="info-value">{formatNumber(userData.liveCommentsCount)}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {userData.blockedUsersCount !== undefined && userData.blockedUsersCount > 0 && (
            <div className="card">
              <h2 className="section-title">🚫 Blocked ({userData.blockedUsersCount})</h2>
              {userData.blockedUsers && userData.blockedUsers.length > 0 && (
                <div className="followers-list">
                  {userData.blockedUsers.map((user, index) => (
                    <span key={index} className="follower-tag" style={{ background: 'rgba(255,100,100,0.15)', color: '#ff6b6b' }}>@{user}</span>
                  ))}
                </div>
              )}
            </div>
          )}

        </>
      )}
    </div>
  )
}
