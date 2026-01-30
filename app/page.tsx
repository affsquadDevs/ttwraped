'use client'

export default function Home() {
  return (
    <div className="container">
      <div className="hero-section">
        <h1 className="logo-text">
          <span className="cyan">Tik</span><span className="pink">Tok</span> 
          <span className="white">Wrapped</span>
        </h1>
        
        <p className="hero-tagline">Your Year on TikTok, Revealed 🎬</p>
        <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
        An independent platform for understanding personal TikTok activity data.
      </div>
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

     

      <div className="card">
        <h2 className="section-title">Learn More About TikTok Data</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          TikTok allows users to download a detailed export of their personal activity data, but this information is often delivered in a technical format that can be difficult to interpret. TikTok Wrapped helps users understand how their data works, what it contains, and how it can be analyzed responsibly. Through educational guides and explanations, we focus on transparency, privacy, and clarity - helping users make sense of their own data without assumptions or platform access.
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

      <div className="card">
        <h2 className="section-title">What TikTok Data Can Reveal</h2>
        <ul className="learn-more-list" style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ marginRight: '0.75rem', fontSize: '1.5rem' }}>📊</span>
            <span>Usage frequency and activity trends over time</span>
          </li>
          <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ marginRight: '0.75rem', fontSize: '1.5rem' }}>⏰</span>
            <span>Time-of-day engagement patterns</span>
          </li>
          <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ marginRight: '0.75rem', fontSize: '1.5rem' }}>💬</span>
            <span>General interaction behavior (likes, comments, shares)</span>
          </li>
          <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ marginRight: '0.75rem', fontSize: '1.5rem' }}>📈</span>
            <span>Long-term changes in app usage habits</span>
          </li>
        </ul>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '1.5rem', fontStyle: 'italic' }}>
          All insights are based on user-owned data exports and are intended for informational and personal understanding only.
        </p>
      </div>

      <div className="card">
        <h2 className="section-title">How TikTok Wrapped Works</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: '1.6' }}>
          TikTok Wrapped works by analyzing official TikTok data exports that users choose to download themselves. The platform focuses on summarizing and organizing this information into readable insights without accessing user accounts or collecting additional data. Detailed instructions and analysis tools are available on a separate page for users who wish to explore their data further.
        </p>
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <a href="/analyze-wrapped" style={{ 
            display: 'inline-block',
            padding: '0.75rem 2rem',
            backgroundColor: '#25f4ee',
            color: '#000',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1rem',
            transition: 'background-color 0.3s'
          }}>Analyze Your TikTok Data →</a>
        </div>
      </div>

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
            <span className="stat-tag">📤 Share History</span>
            <span className="stat-tag">🔴 Live Streams</span>
          </div>
        </div>
        
        <p className="demo-cta">
          Ready to discover your stats? <a href="/analyze-wrapped" className="demo-link">Analyze your data now! →</a>
        </p>
      </div>
    </div>
  )
}
