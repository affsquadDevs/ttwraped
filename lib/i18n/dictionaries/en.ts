// English dictionary — the single source of truth for all non-blog UI/content.
// Inline links inside prose use [[token]] / [[token:Label]] (see RichText.tsx).
// {year} is interpolated at render time.

export const dictionary = {
  nav: {
    home: 'Home',
    analyze: 'Analyze',
    example: 'Example',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
  },

  langSwitcher: {
    label: 'Language',
  },

  cta: {
    analyzeData: 'Analyze your TikTok data →',
    viewExample: 'View an example TikTok Wrapped →',
    backToHome: '← Back to Home',
  },

  disclaimer: {
    underH1:
      'Independent & unofficial tool — not affiliated with, endorsed by, or connected to TikTok or ByteDance Ltd.',
  },

  consent: {
    ariaLabel: 'Cookie consent',
    text:
      'We value your privacy. We use cookies to run analytics (Google Tag Manager) and to show ads via Google AdSense, including for ad personalization. With your consent, Google and its partners may use cookies to personalize ads based on your visits to this and other sites. You can accept, reject, or change your choice anytime. See our [[privacy:Privacy Policy]].',
    accept: 'Accept all',
    reject: 'Reject non-essential',
  },

  footer: {
    description:
      'An independent, unofficial tool for understanding your TikTok data export — watch habits, a fun personality rank, and your complete TikTok story.',
    productTitle: 'Product',
    legalTitle: 'Legal',
    resourcesTitle: 'Resources',
    links: {
      home: 'Home',
      analyze: 'Analyze',
      example: 'Example',
      exampleWrapped: 'Example Wrapped',
      about: 'About',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact',
      blog: 'Blog',
    },
    copyright: '© {year} TikTok Wrapped. All rights reserved.',
    disclaimer:
      'TikTok Wrapped is an independent tool for analyzing your own TikTok data export. It is not affiliated with, endorsed by, or connected to TikTok or ByteDance Ltd. “TikTok” is a trademark of its respective owner.',
    privacy: 'Privacy',
    terms: 'Terms',
    cookieSettings: 'Cookie settings',
  },

  home: {
    trust: ["Free", "100% private", "No login"],
    logoSubtitle: 'Analyze Your TikTok Data Export',
    heroTagline: 'Your Year on TikTok, Revealed 🎬',
    heroPlatformTagline:
      'An independent platform for understanding personal TikTok activity data.',
    features: ['Get your personality rank', 'See detailed watch stats'],
    heroDescription:
      'TikTok Wrapped is an independent online tool that helps you understand your personal TikTok activity using your official TikTok data export. When you request your data from TikTok, it is delivered as a ZIP or JSON file containing raw activity information. TikTok Wrapped analyzes this file and converts it into clear summaries and visual insights, such as usage patterns, activity timelines, and general engagement statistics. The service works only with data you choose to upload and is intended for informational and personal analysis purposes.',
    learnMoreTitle: 'Learn More About TikTok Data',
    learnMoreText:
      'TikTok allows users to download a detailed export of their personal activity data, but this information is often delivered in a technical format that can be difficult to interpret. TikTok Wrapped helps users understand how their data works, what it contains, and how it can be analyzed responsibly. Through educational guides and explanations, we focus on transparency, privacy, and clarity — helping users make sense of their own data without assumptions or platform access.',
    learnMoreLinks: [
      { slug: 'tiktok-wrapped-explained-what-it-is-how-it-works', label: 'TikTok Wrapped Explained: What It Is & How It Works' },
      { slug: 'how-to-download-analyze-tiktok-data', label: 'How to Download and Analyze TikTok Data' },
      { slug: 'what-your-tiktok-usage-says-about-your-digital-habits', label: 'What Your TikTok Usage Says About Your Digital Habits' },
      { slug: 'how-to-analyze-tiktok-data-safely-privacy-first-guide', label: 'How to Analyze TikTok Data Safely' },
    ],
    revealTitle: 'What TikTok Data Can Reveal',
    revealItems: [
      'Usage frequency and activity trends over time',
      'Time-of-day engagement patterns',
      'General interaction behavior (likes, comments, shares)',
      'Long-term changes in app usage habits',
    ],
    revealDisclaimer:
      'All insights are based on user-owned data exports and are intended for informational and personal understanding only.',
    howItWorksTitle: 'How TikTok Wrapped Works',
    howItWorksText:
      'TikTok Wrapped works by analyzing official TikTok data exports that users choose to download themselves. The platform focuses on summarizing and organizing this information into readable insights without accessing user accounts or collecting additional data. Detailed instructions and analysis tools are available on a [[analyze:separate page]] for users who wish to explore their data further.',
    analyzeButton: 'Analyze Your TikTok Data →',
    demoTitle: '🎬 See It In Action',
    demoDescription:
      'Want to see what TikTok Wrapped produces before you start? Browse a complete, real-looking example built from sample data — no upload required.',
    demoButton: 'View an example TikTok Wrapped →',
    moreStatsTitle: '✨ And so much more awaits you...',
    statTags: [
      '🔍 Top Searches',
      '📅 Activity by Year',
      '⏰ Peak Hours',
      '❤️ Likes & Comments',
      '📤 Share History',
      '🔴 Live Streams',
    ],
    demoCta: 'Ready to discover your stats? [[analyze:Analyze your data now! →]]',
  },

  analyze: {
    subtitle: 'Analyze Your TikTok Data',
    howToTitle: '📱 How to Get Your TikTok Data',
    importantLabel: 'Important:',
    importantText:
      'TikTok provides your data only upon request. After submitting a request, it may take a few hours up to 3 days for your data to be ready. Make sure to select “JSON” format when requesting!',
    steps: [
      { title: 'Open Settings', text: 'Go to your Profile → tap the ☰ menu → select Settings', alt: 'Step 1: Open Settings' },
      { title: 'Go to Account', text: 'In Settings and Privacy, find and tap Account', alt: 'Step 2: Go to Account' },
      { title: 'Download Your Data', text: 'Scroll down and tap “Download your data”', alt: 'Step 3: Download your data' },
      { title: 'Request Data (JSON)', text: 'Change format to “JSON”, select “All data”, then tap “Request data”', alt: 'Step 4: Request data' },
    ],
    footerSteps: [
      'You’ll get a notification when your data is ready',
      'Download the ZIP file from the “Download data” tab',
      'Upload it here and enjoy your stats!',
    ],
    dropPrompt: 'Drop your ZIP or JSON file here',
    dropHint: 'TikTok → Settings → Privacy → Download Data',
    analyzeBtn: '🔍 Analyze',
    analyzingBtn: '⏳ Analyzing...',
    privacyNote:
      'Your file is processed only to generate your results. We do not sell, share, or use uploaded data for advertising.',
    howToLink: 'Don’t have your data? Learn how to download it ↓',
    selectFileError: 'Please select a file',
    fileTypeError: 'Please select a ZIP or JSON file',
    genericError: 'An error occurred while processing the file',
    jsonNotFound: 'JSON file not found in archive',
    progress: {
      reading: 'Reading file...',
      extracting: 'Extracting ZIP archive...',
      readingFile: 'Reading {name}...',
      parsing: 'Parsing JSON...',
      analyzing: 'Analyzing data...',
      processing: 'Processing data...',
    },
    results: {
      yourStats: '🎰 Your Stats',
      videosWatched: 'Videos Watched',
      hoursOnTikTok: 'Hours on TikTok',
      daysOfWatching: 'Days of Watching',
      yourRank: 'Your TikTok Rank',
      followers: 'Followers',
      following: 'Following',
      interests: 'Interests',
      whenActive: '⏰ When You’re Most Active',
      peakHour: 'Peak Hour',
      mostActiveDay: 'Most Active Day',
      firstWatch: 'First Watch',
      lastWatch: 'Last Watch',
      engagement: '❤️ Engagement',
      videosLiked: 'Videos Liked',
      favorites: 'Favorites',
      comments: 'Comments',
      shares: 'Shares',
      activityByYear: '📅 Activity by Year',
      year: 'Year',
      videos: 'videos',
      mostActiveMonth: 'Most Active Month',
      avgPerDayPrefix: 'Average',
      avgPerDaySuffix: 'videos per day',
      collections: '📂 Your Collections',
      favoritesTitle: '⭐ Favorites',
      favoriteSounds: 'Favorite Sounds',
      favoriteEffects: 'Favorite Effects',
      favoriteHashtags: 'Favorite Hashtags',
      topSearches: '🔍 Top Searches',
      totalSearches: 'Total searches',
      shareDestinations: '📤 Share Destinations',
      yourComments: '💭 Your Comments',
      totalComments: 'Total comments',
      avgChars: 'avg {n} chars',
      messages: '💬 Messages',
      chats: 'Chats',
      messagesLabel: 'Messages',
      sent: 'Sent',
      received: 'Received',
      topChats: 'Top Chats:',
      recentFollowers: '👥 Recent Followers',
      devicesNetworks: '📱 Devices & Networks',
      totalLogins: 'Total logins',
      devices: 'Devices',
      networks: 'Networks',
      tiktokLive: '🔴 TikTok Live',
      livesWatched: 'Lives Watched',
      liveComments: 'Live Comments',
      blocked: '🚫 Blocked',
      messagesCountSuffix: 'messages',
    },
  },

  example: {
    title: 'Example TikTok Wrapped',
    subtitle: 'A complete, real-looking example — no upload required',
    introText:
      'This page shows exactly what you get from [[home:TikTok Wrapped]] after analyzing a TikTok data export — without uploading anything. Every number below belongs to a fictional sample account and is for illustration only. When you [[analyze:analyze your own export]], the same breakdown is generated privately in your browser from your real file. TikTok Wrapped is an independent, unofficial tool and is not affiliated with or endorsed by TikTok or ByteDance Ltd.',
    rankExplanation:
      'Your rank is based on estimated watch time. This sample account’s 408 hours lands it in the “Main Character” tier — there are 16 ranks in total, from “NPC Energy” all the way up to “No Life Speedrun WR.”',
    ctaTitle: '🎬 Ready to see your own?',
    ctaDescription:
      'Your real TikTok Wrapped is generated entirely in your browser from your own data export — your file never leaves your device.',
    ctaButton: 'Analyze your TikTok data →',
    ctaLearn: 'New to data exports? [[blog:Learn how to download your TikTok data ↗]]',
    sample: {
      displayName: 'Sample User',
      interests: ['Comedy', 'Cooking', 'Travel', 'Fitness', 'Music'],
      activeDay: 'Sunday',
      activeMonth: 'November 2024',
      firstWatch: 'Mar 4, 2022',
      lastWatch: 'Dec 14, 2025',
      searches: [
        'easy dinner recipes',
        'marathon training',
        'travel hacks',
        'standup comedy',
        'home workout',
        'budget travel europe',
        'guitar tutorial',
        'meal prep ideas',
        'productivity tips',
        'street food',
      ],
      shareMethods: ['Direct Message', 'Copy Link', 'WhatsApp', 'Instagram'],
      networks: ['Wi-Fi', 'Cellular'],
    },
  },

  about: {
    title: 'About Us',
    paragraphs: [
      'TikTok Wrapped is an independent online service designed to help users better understand their personal TikTok activity data.',
      'TikTok allows users to download an official data export containing information about their activity on the platform. While this data belongs to the user, it is often delivered in a raw and unstructured format that is difficult to interpret. TikTok Wrapped provides tools that organize this data and present it in a clear, readable, and user-friendly way.',
      'The website allows users to upload their own TikTok data export and receive automated insights based solely on that file. The service focuses on summarization, visualization, and general analysis of usage patterns to help users gain a better understanding of their digital behavior.',
      'TikTok Wrapped does not create accounts, does not require registration, and does not provide social networking or content hosting features. The website exists solely as an informational tool that processes user-provided files at the user’s request.',
      'We aim to provide a simple, transparent, and privacy-focused experience. The website is free to use and supported by advertising; see our [[privacy:Privacy Policy]] for how cookies and ads work.',
      'TikTok Wrapped is operated by AffSquad and can be reached at [[email:hello@ttwrapper.com]]. It is an independent, unofficial tool and is not affiliated with, endorsed by, or connected to TikTok or ByteDance Ltd.',
    ],
    faqTitle: 'FAQ',
    faq: [
      { q: 'What is TikTok Wrapped?', a: 'TikTok Wrapped is an online tool that helps users analyze and better understand their personal TikTok activity using their official TikTok data export.' },
      { q: 'How do I get my TikTok data export?', a: 'You can request and download your data export from TikTok’s settings (Data / Privacy). Once you receive the ZIP file from TikTok, you can upload it to TikTok Wrapped.' },
      { q: 'Do you store my uploaded ZIP file?', a: 'Files are processed only to generate your requested insights. We do not store, sell uploaded data and do not use it for ad personalization.' },
      { q: 'Is TikTok Wrapped affiliated with TikTok?', a: 'No. TikTok Wrapped is an independent service and is not affiliated with or endorsed by TikTok or ByteDance.' },
      { q: 'Is TikTok Wrapped free to use?', a: 'The core functionality of the website is available without payment. The site may display advertisements to support ongoing development and hosting costs.' },
    ],
  },

  contact: {
    title: 'Contact Us',
    intro:
      'If you have questions about TikTok Wrapped, our website, or how the service works, you can reach us using the contact information below.',
    welcomeTitle: 'We welcome inquiries related to:',
    welcomeItems: [
      'general questions about the platform,',
      'privacy and data handling,',
      'technical issues or feedback,',
      'legal or policy-related matters.',
    ],
    howToTitle: 'How to Contact Us',
    emailLabel: 'Email:',
    responseNote: 'We aim to respond to all legitimate inquiries within 2–3 business days.',
    aboutTitle: 'About Communication',
    aboutText1:
      'TikTok Wrapped is an independent online service operated by AffSquad, focused on analyzing user-provided TikTok data exports. It is not affiliated with, endorsed by, or connected to TikTok or ByteDance Ltd. We do not offer customer support via social media, and we do not provide phone support at this time.',
    aboutText2:
      'Please do not send sensitive personal information by email unless it is necessary to address your request.',
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdatedLabel: 'Last updated:',
    lastUpdatedDate: 'June 20, 2026',
    intro:
      'This Privacy Policy explains how TikTok Wrapped (“TikTok Wrapped,” “we,” “us”) collects, uses, and protects information when you visit ttwrapper.com. TikTok Wrapped is an independent, unofficial tool and is not affiliated with, endorsed by, or connected to TikTok or ByteDance Ltd.',
    cookieTable: {
      providerHeader: 'Provider',
      purposeHeader: 'Purpose',
      typeHeader: 'Type',
      rows: [
        { provider: 'TikTok Wrapped', purpose: 'Remembers your cookie-consent choice', type: 'Essential' },
        { provider: 'Google Tag Manager / Analytics', purpose: 'Aggregated, anonymous usage statistics', type: 'Analytics (consent required)' },
        { provider: 'Google AdSense / DoubleClick', purpose: 'Serving and measuring ads, including personalized ads', type: 'Advertising (consent required)' },
      ],
    },
    sections: [
      { title: '1. Who We Are (Data Controller)', paragraphs: ['TikTok Wrapped is operated by AffSquad, the data controller responsible for this website. If you have any questions about this policy or how your data is handled, you can contact us at [[email:hello@ttwrapper.com]] or via our [[contact:Contact]] page.'] },
      { title: '2. Your Uploaded TikTok Data', paragraphs: ['When you use the analyzer, your TikTok data export (ZIP or JSON) is read and processed entirely within your own browser. The file is not uploaded to or stored on our servers, and we do not build profiles or databases from it. The analysis exists only in your browser tab and is gone when you close or refresh the page.', 'We do not require account creation, login, or personal identification to use the analyzer.'] },
      { title: '3. Information Collected Automatically', paragraphs: ['Like most websites, when you visit ttwrapper.com certain technical information may be collected through cookies and similar technologies by us and by third-party providers (such as Google), including:'], list: ['device and browser type, screen size, and operating system;', 'IP address (used to approximate general location and for security);', 'pages visited, referring URLs, and interaction events;', 'cookie identifiers used for analytics and advertising.'], afterList: ['This information is processed only where you have given consent or where we have a legitimate interest, as described below.'] },
      { title: '4. Cookies and Similar Technologies', paragraphs: ['We use cookies and similar technologies for essential functionality, analytics, and advertising. Non-essential cookies (analytics and advertising) are only set after you give consent through our cookie banner. The main categories are:'], hasCookieTable: true, afterList: ['You can change or withdraw your consent at any time using the “Cookie settings” link in the website footer.'] },
      { title: '5. Advertising (Google AdSense)', paragraphs: ['We use Google AdSense to display advertising. The following disclosures apply:'], list: ['Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website and other websites.', 'Google’s use of advertising cookies (including the DoubleClick cookie) enables it and its partners to serve ads to you based on your visits to this and/or other sites on the Internet.', 'You may opt out of personalized advertising by visiting [[adsSettings:Google Ads Settings]].', 'You can opt out of some third-party vendors’ use of cookies for personalized advertising at [[aboutAds:aboutads.info/choices]] or [[yourChoices:youronlinechoices.eu]].', 'Learn how Google uses information from sites that use its services at [[partnerSites:policies.google.com/technologies/partner-sites]].'], afterList: ['If you do not consent to personalized advertising, Google may still serve non-personalized ads based on general context rather than your browsing history.'] },
      { title: '6. Analytics', paragraphs: ['We use Google Tag Manager and Google analytics services to understand, in aggregate, how visitors use the site (for example, which pages are popular). These services may set cookies and process technical data such as your IP address. They load only after you consent to analytics cookies.'] },
      { title: '7. Consent Management', paragraphs: ['We use Google Consent Mode v2. By default, advertising and analytics storage are set to denied, and the related tags do not load until you make a choice in our cookie banner. You can reopen the banner and change your decision at any time through the “Cookie settings” link in the footer. Visitors in the European Economic Area, the United Kingdom, and Switzerland are asked for consent before any non-essential cookies are used.'] },
      { title: '8. How We Use Information', paragraphs: [], list: ['to operate, maintain, and secure the website;', 'to generate insights from the data you choose to analyze (in your browser);', 'to understand aggregate usage and improve the service;', 'to display advertising that helps fund the free service.'], afterList: ['We do not sell your personal information, and we do not use your uploaded TikTok export for advertising or profiling.'] },
      { title: '9. Data Sharing', paragraphs: ['We do not share your uploaded TikTok data with anyone. Technical and cookie data described above may be processed by our service providers, including Google (advertising and analytics) and our hosting provider (Vercel), each acting under their own privacy policies.'] },
      { title: '10. Data Retention', paragraphs: ['Your uploaded TikTok export is never stored by us, so there is nothing to retain or delete on our side. Aggregate analytics and advertising data held by our providers are retained according to their own retention periods (for example, Google’s standard retention settings).'] },
      { title: '11. Your Privacy Rights (GDPR/UK GDPR)', paragraphs: ['If you are in the EEA or the UK, you have the right to access, rectify, erase, restrict, or object to the processing of your personal data, and the right to data portability and to withdraw consent at any time. To exercise these rights, contact us at [[email:hello@ttwrapper.com]]. You also have the right to lodge a complaint with your local data protection authority.'] },
      { title: '12. California Privacy Rights (CCPA/CPRA)', paragraphs: ['California residents have the right to know what personal information is collected, to request deletion, and to opt out of the “sale” or “sharing” of personal information. We do not sell personal information. To exercise your rights, contact us at [[email:hello@ttwrapper.com]].'] },
      { title: '13. International Data Transfers', paragraphs: ['Our providers may process data on servers located outside your country, including the United States. Where required, such transfers are protected by appropriate safeguards such as the providers’ standard contractual clauses.'] },
      { title: '14. Children’s Privacy', paragraphs: ['TikTok Wrapped is not directed to children under 13, and we do not knowingly collect personal information from them. TikTok’s own minimum-age requirements apply to obtaining a data export.'] },
      { title: '15. Changes to This Policy', paragraphs: ['We may update this Privacy Policy from time to time. Material changes will be reflected by updating the “Last updated” date at the top of this page.'] },
      { title: '16. Contact', paragraphs: ['Questions about this Privacy Policy? Email [[email:hello@ttwrapper.com]] or use our [[contact:Contact]] page.'] },
    ],
  },

  terms: {
    title: 'Terms of Service',
    lastUpdatedLabel: 'Last updated:',
    lastUpdatedDate: 'June 20, 2026',
    intro:
      'By accessing or using TikTok Wrapped (ttwrapper.com), you agree to these Terms of Service. If you do not agree, please do not use the website.',
    sections: [
      { title: 'Service Description', paragraphs: ['TikTok Wrapped provides an automated, browser-based tool for analyzing a user’s own TikTok data export. The service is independent and is not affiliated with, endorsed by, or connected to TikTok or ByteDance Ltd. It is provided “as is” and for informational and personal use only.'] },
      { title: 'User Responsibilities', paragraphs: ['Users are responsible for:'], list: ['uploading only data they own or have the right to use,', 'ensuring that uploaded files originate from TikTok’s official data export feature.'] },
      { title: 'Acceptable Use', paragraphs: ['You agree not to:'], list: ['use the service for any unlawful purpose or in violation of any applicable law;', 'attempt to disrupt, overload, reverse engineer, or gain unauthorized access to the service;', 'upload files containing malware or data you are not authorized to use.'] },
      { title: 'No Guarantees', paragraphs: ['While we strive for accuracy, TikTok Wrapped does not guarantee that all insights are complete, error-free, or suitable for specific decisions. The results should not be considered professional, legal, or financial advice.'] },
      { title: 'Intellectual Property', paragraphs: ['The website design, original branding, text, and software logic of TikTok Wrapped belong to its operator unless otherwise stated. “TikTok” and related marks are trademarks of their respective owners and are used here only descriptively; we claim no rights in them. Users retain full ownership of their uploaded data.'] },
      { title: 'Limitation of Liability', paragraphs: ['TikTok Wrapped is not responsible for:'], list: ['decisions made based on generated insights,', 'data loss caused by user error,', 'interruptions or temporary unavailability of the service.'] },
      { title: 'Governing Law', paragraphs: ['These Terms are governed by and construed in accordance with applicable consumer-protection and general laws, without regard to conflict-of-law principles. Any disputes will be handled by the competent courts of the operator’s place of business.'] },
      { title: 'Changes to These Terms', paragraphs: ['We may update these Terms from time to time. Changes take effect when posted, and the “Last updated” date above will reflect the latest version. Continued use of the website after changes constitutes acceptance of the updated Terms.'] },
      { title: 'Contact', paragraphs: ['Questions about these Terms? Email [[email:hello@ttwrapper.com]] or use our [[contact:Contact]] page.'] },
    ],
  },

  notFound: {
    title: '404 — Page Not Found',
    text: 'Sorry, we couldn’t find that page. It may have moved or no longer exists. Here are some places to pick up where you left off:',
    links: { home: 'Home', analyze: 'Analyze your data', example: 'See an example', blog: 'Blog' },
  },

  blog: {
    backToBlog: '← Back to Blog',
    indexTitle: 'Blog',
    indexIntro:
      'This blog exists to help users better understand TikTok data, privacy, and personal usage patterns through clear, independent, and educational content. TikTok allows users to download their activity data, but it often comes in raw, technical formats that can be difficult to interpret. Our articles explain what this data contains, how it’s structured, and how to analyze it responsibly using your own data exports. We cover topics including TikTok data downloads, data file structures, privacy considerations, usage behavior analysis, and the differences between platform analytics and independent data tools.',
    faqHeading: 'FAQ',
  },

  meta: {
    home: {
      title: 'TikTok Wrapped — Free TikTok Stats & Recap',
      description:
        'See your TikTok Wrapped: watch time, top searches, favorite creators & a fun personality rank, built from your TikTok data export. Free, private, no login — your file never leaves your browser. Unofficial tool.',
    },
    analyze: {
      title: 'Analyze Your TikTok Data Export — Upload & Get Your Stats',
      description:
        'Upload your official TikTok data export (ZIP or JSON) and instantly see your watch time, top searches, favorite creators, peak hours and a personality rank. Processed privately in your browser — nothing is uploaded to a server.',
    },
    example: {
      title: 'Example TikTok Wrapped — See a Full Sample (No Upload Needed)',
      description:
        'See exactly what TikTok Wrapped produces from a TikTok data export: a full example with watch time, personality rank, top searches, peak hours, engagement and device stats. Sample data — no upload required.',
    },
    about: {
      title: 'About Us - TikTok Wrapped',
      description:
        'Learn about TikTok Wrapped — an independent service that helps you understand your TikTok activity data. Privacy-focused, free, and not affiliated with TikTok.',
    },
    contact: {
      title: 'Contact Us - TikTok Wrapped',
      description:
        'Contact TikTok Wrapped for questions about the service, privacy, technical issues, or legal matters. Email: hello@ttwrapper.com',
    },
    privacy: {
      title: 'Privacy Policy - TikTok Wrapped',
      description:
        'How TikTok Wrapped handles your data: client-side processing of your TikTok export, cookies, Google AdSense advertising and analytics, your GDPR/CCPA rights, data retention and opt-out choices.',
    },
    terms: {
      title: 'Terms of Service - TikTok Wrapped',
      description:
        'TikTok Wrapped Terms of Service — service description, user responsibilities, acceptable use, intellectual property, disclaimers, governing law, and changes to these terms.',
    },
    blog: {
      title: 'Blog - TikTok Wrapped',
      description:
        'Read guides and articles about TikTok data analysis, privacy, and how to understand your social media activity.',
    },
    notFound: {
      title: 'Page Not Found (404) - TikTok Wrapped',
      description:
        'The page you are looking for could not be found. Explore TikTok Wrapped — analyze your TikTok data export, see an example, or read our guides.',
    },
  },
}

export type Dictionary = typeof dictionary
