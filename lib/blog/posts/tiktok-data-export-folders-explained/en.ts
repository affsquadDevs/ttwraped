import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'What Each Folder in the TikTok Data Export Means (2026 Guide)',
  description:
    'A clear breakdown of every folder and JSON section in the TikTok data export, what each one contains, and which parts TikTok Wrapped reads.',
  intro:
    'The TikTok data export is organized into a set of folders and JSON sections — Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings, and TikTok Live — and each one stores a different slice of your account history.',
  blocks: [
    {
      type: 'p',
      text: 'When you request your data from TikTok and open the download, the contents can look overwhelming. Whether you receive a single large JSON file or a structured folder of files, the information is grouped into predictable sections. Once you understand how those sections map to your real activity, the export becomes easy to navigate.',
    },
    {
      type: 'p',
      text: 'This guide walks through each top-level folder and JSON section in the export, explains what it contains in plain language, and shows which parts [[home:TikTok Wrapped]] actually reads to build your summary. If you have not downloaded your data yet, see our step-by-step walkthrough on [[/blog/how-to-download-analyze-tiktok-data:how to download and analyze your TikTok data]].',
    },
    { type: 'h2', text: 'Profile' },
    {
      type: 'p',
      text: 'The Profile section holds your basic account information: username, profile name, bio, the email or phone associated with the account, and account creation details. It describes who you are on the platform rather than what you did.',
    },
    {
      type: 'p',
      text: 'This section is small but useful for labeling a report. It does not contain your password — TikTok never includes credentials in an export.',
    },
    { type: 'h2', text: 'Activity (Your Activity)' },
    {
      type: 'p',
      text: 'The Activity section — sometimes labeled "Your Activity" — is the heart of the export and usually the largest part. It is broken into several sub-sections that record everything you have done while browsing:',
    },
    {
      type: 'ul',
      items: [
        'Watch History — a timestamped list of the videos you viewed.',
        'Like List — the videos you liked, with dates.',
        'Search History — the terms you searched for.',
        'Share History — content you shared and where.',
        'Following / Follower List — accounts you follow and accounts that follow you.',
        'Favorite videos, sounds, and hashtags — items you bookmarked.',
      ],
    },
    {
      type: 'p',
      text: 'Because it is timestamped, this section is what makes long-term pattern analysis possible. Most of the insights in a TikTok Wrapped summary — your most-watched periods, favorite creators, and viewing volume — come from here.',
    },
    { type: 'h2', text: 'Comments' },
    {
      type: 'p',
      text: 'The Comments section lists the comments you have posted on other videos, along with their timestamps. It reflects how you have interacted publicly with content over time.',
    },
    { type: 'h2', text: 'Direct Messages' },
    {
      type: 'p',
      text: 'The Direct Messages section contains your private chat history grouped by conversation. This is the most personal part of the export, which is why it deserves extra care when sharing files. TikTok Wrapped does not need or read your direct messages.',
    },
    { type: 'h2', text: 'Video (Your Posts)' },
    {
      type: 'p',
      text: 'The Video section — often labeled "Posts" — covers the content you published yourself: your uploaded videos, captions, and related metadata. For creators this section documents their posting history, while for viewers it may be small or empty.',
    },
    { type: 'h2', text: 'Ads and Data' },
    {
      type: 'p',
      text: 'The Ads and Data section records advertising-related signals, including the Off TikTok Activity data — information that other apps and websites have shared with TikTok about your activity outside the app. It also includes ad interests and ad interaction records used for targeting.',
    },
    {
      type: 'p',
      text: 'If you want a deeper look at what these signals reveal, our article on [[/blog/what-data-does-tiktok-collect:what data TikTok collects]] goes through the categories in detail.',
    },
    { type: 'h2', text: 'App Settings' },
    {
      type: 'p',
      text: 'The App Settings section stores your preferences: privacy settings, notification choices, language, and similar configuration. It describes how your account is set up rather than how you used it, so it rarely affects analysis.',
    },
    { type: 'h2', text: 'TikTok Live' },
    {
      type: 'p',
      text: 'The TikTok Live section captures activity related to live streams — streams you hosted or joined, and related interactions. For most viewers this section is small, but for active streamers it can be a meaningful record.',
    },
    { type: 'h2', text: 'Folder-by-Folder Reference' },
    {
      type: 'p',
      text: 'The table below maps each folder or JSON section to what it contains and to what TikTok Wrapped reads from it. You can also see the kind of output it produces on our [[example:example wrapped]] page.',
    },
    {
      type: 'table',
      headers: ['Folder / Section', 'What it contains', 'What TikTok Wrapped reads'],
      rows: [
        ['Profile', 'Username, bio, account details', 'Display name for the report'],
        ['Activity — Watch History', 'Timestamped videos viewed', 'Viewing volume and trends'],
        ['Activity — Like List', 'Videos you liked, with dates', 'Liking habits over time'],
        ['Activity — Search History', 'Search terms you used', 'Top searches and interests'],
        ['Activity — Following / Follower', 'Accounts followed and followers', 'Favorite creators'],
        ['Comments', 'Comments you posted', 'Engagement counts (optional)'],
        ['Direct Messages', 'Private chat history', 'Not read'],
        ['Video / Posts', 'Videos you published', 'Posting history (creators)'],
        ['Ads and Data', 'Off TikTok Activity, ad interests', 'Not read'],
        ['App Settings', 'Privacy and app preferences', 'Not read'],
        ['TikTok Live', 'Live stream activity', 'Not read'],
      ],
    },
    { type: 'h2', text: 'A Note on Privacy' },
    {
      type: 'p',
      text: 'Your export contains sensitive sections — especially Direct Messages and Ads and Data — that are never required to generate a usage summary. TikTok Wrapped focuses on the timestamped Activity data and ignores private messages and advertising records entirely. You stay in control of the file, and you can delete sensitive folders before uploading anything anywhere. When you are ready, you can [[analyze:analyze your wrapped]] with just the activity files.',
    },
    { type: 'h2', text: 'Final Thoughts' },
    {
      type: 'p',
      text: 'The TikTok data export only looks complicated until you know the map. Each folder answers a single question — who you are, what you watched, what you posted, who you talked to, or how your account is configured. Knowing which sections matter lets you analyze the parts you care about while leaving the private ones untouched.',
    },
  ],
  faq: [
    {
      q: 'How is the TikTok data export organized?',
      a: 'The export is grouped into sections such as Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings, and TikTok Live, each storing a different part of your account history.',
    },
    {
      q: 'Which folder contains my watch history?',
      a: 'Your watch history is inside the Activity section, often labeled Your Activity, alongside your Like List, Search History, and Following lists.',
    },
    {
      q: 'Does the TikTok data export include my password?',
      a: 'No. TikTok never includes account passwords or login credentials in a data export. The Profile section only contains basic account information.',
    },
    {
      q: 'Does TikTok Wrapped read my direct messages?',
      a: 'No. TikTok Wrapped focuses on the timestamped Activity data and does not read your Direct Messages or Ads and Data sections.',
    },
    {
      q: 'What is the Off TikTok Activity data?',
      a: 'Off TikTok Activity lives in the Ads and Data section and records information that other apps and websites shared with TikTok about your activity outside the app.',
    },
  ],
}
