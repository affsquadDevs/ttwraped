import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'TikTok vs Instagram vs YouTube: Comparing Your Data Exports',
  description:
    'Compare how TikTok, Instagram, and YouTube let you download your data: how to request each export, delivery time, formats, and which is easiest to analyze.',
  intro:
    'TikTok, Instagram, and YouTube all let you download a copy of your personal data, but the request process, delivery time, file formats, and level of detail differ a lot between them.',
  blocks: [
    {
      type: 'p',
      text: 'If you have ever wanted to look back at your own activity — what you watched, what you searched for, and how you used an app over the years — most major platforms now give you a way to request that data. This is partly driven by privacy regulations like GDPR and CCPA, which give users the right to access the information a service holds about them.',
    },
    {
      type: 'p',
      text: 'This guide compares the data export experience across three of the biggest platforms: TikTok, Instagram, and YouTube. We will look at how to request each export, how long delivery takes, what formats you receive, and what each archive actually reveals about your activity.',
    },
    { type: 'h2', text: 'How to Request Each Export' },
    {
      type: 'p',
      text: 'Each platform tucks the download option into its privacy or account settings, but the path is slightly different.',
    },
    {
      type: 'ul',
      items: [
        "TikTok: Open Settings and privacy → Account → Download your data, choose a format, and request the file.",
        'Instagram: Go to Settings → Accounts Center → Your information and permissions → Download your information.',
        'YouTube: Use Google Takeout, select YouTube and YouTube Music, and choose what to include (history, comments, playlists).',
      ],
    },
    {
      type: 'p',
      text: "TikTok keeps everything inside its own app, Instagram routes you through Meta's shared Accounts Center, and YouTube hands the job to Google Takeout, which covers every Google product in one place.",
    },
    { type: 'h2', text: 'Delivery Time' },
    {
      type: 'p',
      text: 'None of these exports are instant, because the platforms have to package potentially years of activity into a downloadable archive.',
    },
    {
      type: 'p',
      text: 'TikTok usually delivers the fastest — often within a few hours to a couple of days, and the file appears inside the app for you to download. Instagram and YouTube can take anywhere from a few hours to several days depending on account size and the date range you request. Larger archives, especially those including media, take longer to prepare.',
    },
    { type: 'h2', text: 'File Formats' },
    {
      type: 'p',
      text: 'The format you receive matters a lot if you plan to analyze the data later.',
    },
    {
      type: 'ul',
      items: [
        'TikTok lets you pick between JSON (machine-readable, ideal for analysis) and TXT/HTML (easier to read by hand).',
        'Instagram offers JSON or HTML, where HTML opens as web pages and JSON is better for tools.',
        'YouTube delivers history as JSON or HTML and other items as CSV, all bundled in a ZIP archive.',
      ],
    },
    {
      type: 'p',
      text: 'If your goal is to analyze your activity rather than just skim it, always choose JSON where the option exists.',
    },
    { type: 'h2', text: 'Side-by-Side Comparison' },
    {
      type: 'table',
      headers: ['Feature', 'TikTok', 'Instagram', 'YouTube'],
      rows: [
        ['Request method', 'In-app settings', 'Accounts Center', 'Google Takeout'],
        ['Delivery time', 'Hours to ~2 days', 'Hours to several days', 'Hours to several days'],
        ['Format', 'JSON or TXT/HTML', 'JSON or HTML', 'JSON, HTML, CSV'],
        [
          'Watch-history detail',
          'High (per-video timestamps)',
          'Limited (no feed video log)',
          'High (per-video timestamps)',
        ],
        ['Search history', 'Included', 'Included', 'Included'],
      ],
    },
    { type: 'h2', text: 'What Each Export Reveals' },
    {
      type: 'h3',
      text: 'Watch History Granularity',
    },
    {
      type: 'p',
      text: "TikTok and YouTube both record a detailed, timestamped log of the videos you watched, which makes it possible to reconstruct viewing habits over time. Instagram's export is weaker here — it captures interactions and some viewing data, but it does not provide the same clean, per-video feed history that TikTok offers.",
    },
    {
      type: 'h3',
      text: 'Search History',
    },
    {
      type: 'p',
      text: 'All three platforms include your search queries, so you can see what topics, creators, and sounds you looked up. This is one of the most consistent sections across exports.',
    },
    {
      type: 'h3',
      text: 'Messages and Interactions',
    },
    {
      type: 'p',
      text: 'TikTok and Instagram both include direct messages and engagement records such as likes, comments, and follows. YouTube focuses more on comments, subscriptions, and playlists, since it is not primarily a messaging platform.',
    },
    { type: 'h2', text: 'Which Is Easiest to Analyze?' },
    {
      type: 'p',
      text: 'For sheer analytical value, TikTok and YouTube lead, because both provide detailed, timestamped watch histories in JSON. That structured format makes it straightforward for a tool to count videos, find peak hours, and surface patterns.',
    },
    {
      type: 'p',
      text: "Instagram's export is well organized but less focused on continuous video viewing, so it tells a different story — more about interactions than passive watching.",
    },
    {
      type: 'p',
      text: 'In practice, raw export files are hard to read on their own. That is where a summarization tool helps. [[home:TikTok Wrapped]] takes a TikTok data export and turns it into clear, visual insights about your activity. You can [[analyze:analyze your own export]] or view an [[example:example wrapped]] first to see what the results look like.',
    },
    { type: 'h2', text: 'Final Thoughts' },
    {
      type: 'p',
      text: 'TikTok, Instagram, and YouTube all respect your right to download your data, but they differ in how easy that process is and how useful the result is for analysis. TikTok and YouTube shine for detailed watch history, while Instagram offers a broad picture of interactions.',
    },
    {
      type: 'p',
      text: 'If you want to go deeper, see our guides on [[/blog/how-to-download-analyze-tiktok-data:how to download and analyze your TikTok data]] and the difference between [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:TikTok Wrapped and TikTok Analytics]].',
    },
  ],
  faq: [
    {
      q: 'How do I request my data from TikTok, Instagram, and YouTube?',
      a: 'TikTok offers the option inside Settings and privacy under Download your data. Instagram uses the Accounts Center under Download your information. YouTube uses Google Takeout, where you select YouTube and YouTube Music.',
    },
    {
      q: 'How long does each data export take to arrive?',
      a: 'TikTok is usually the fastest, often within a few hours to about two days. Instagram and YouTube can take anywhere from a few hours to several days depending on account size and the date range requested.',
    },
    {
      q: 'Which format should I choose for analysis?',
      a: 'Choose JSON whenever it is offered. JSON is machine-readable and works best with analysis tools, while HTML and TXT are easier to read by hand but harder to process.',
    },
    {
      q: 'Which platform gives the most detailed watch history?',
      a: 'TikTok and YouTube both provide detailed, timestamped watch histories. Instagram captures interactions but does not offer the same per-video feed history.',
    },
    {
      q: 'Which export is easiest to analyze?',
      a: 'TikTok and YouTube are easiest to analyze because their structured JSON watch histories make it simple to count videos and find patterns. A tool like TikTok Wrapped can turn a TikTok export into clear visual insights.',
    },
  ],
}
