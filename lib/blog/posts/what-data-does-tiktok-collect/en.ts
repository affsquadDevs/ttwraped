import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'What Data Does TikTok Collect About You? Explained Clearly',
  description:
    'Learn what data TikTok collects about users, including activity, account, and device information, and what appears in your TikTok data export.',
  intro:
    'Social media platforms rely on data to function, personalize experiences, and maintain account security. For TikTok users, understanding what data is collected and how it is categorized is a crucial aspect of digital transparency - especially when requesting a personal data export.',
  blocks: [
    {
      type: 'p',
      text: 'This article explains the main types of data TikTok collects, how that data is generated through normal app usage, what typically appears in a TikTok data export, and what users should consider when reviewing their information.',
    },
    { type: 'h2', text: 'How TikTok Collects User Data' },
    {
      type: 'p',
      text: 'TikTok collects data through direct user interaction with the app, account configuration, and technical processes required to deliver content and maintain platform stability.',
    },
    { type: 'p', text: 'Data collection occurs when users:' },
    {
      type: 'ul',
      items: [
        'create or manage an account',
        'watch, like, comment on, or share content',
        'search for videos or creators',
        'interact with features inside the app',
      ],
    },
    {
      type: 'p',
      text: "This data is logged automatically as part of normal platform operation and is described in TikTok's publicly available privacy documentation.",
    },
    { type: 'h2', text: 'Categories of Data TikTok Collects' },
    {
      type: 'p',
      text: "TikTok's data collection can be broadly grouped into several categories.",
    },
    { type: 'h3', text: 'Account and Profile Information' },
    {
      type: 'p',
      text: 'Account-level data is used to identify and manage user profiles. This may include:',
    },
    {
      type: 'ul',
      items: [
        'username and display name',
        'account creation date',
        'profile settings and preferences',
        'region, language, or country information',
      ],
    },
    {
      type: 'p',
      text: 'This information allows TikTok to associate activity with the correct account and apply regional or language-based settings.',
    },
    { type: 'h3', text: 'Activity and Usage Data' },
    {
      type: 'p',
      text: 'Activity data represents how users interact with the platform over time. This can include:',
    },
    {
      type: 'ul',
      items: [
        'timestamps of app usage',
        'videos watched or interacted with',
        'likes, comments, and shares',
        'follow and unfollow actions',
      ],
    },
    {
      type: 'p',
      text: 'This category often constitutes the largest portion of user-related data and reflects observable behavior, rather than intent or personal meaning.',
    },
    { type: 'h3', text: 'Search and Discovery Information' },
    {
      type: 'p',
      text: 'TikTok may collect data related to content discovery, such as:',
    },
    {
      type: 'ul',
      items: [
        'search queries entered in the app',
        'interactions with recommended content',
        'engagement with trending topics or categories',
      ],
    },
    {
      type: 'p',
      text: 'This information helps the platform organize and surface content, rather than interpret personal preferences beyond recorded actions.',
    },
    { type: 'h3', text: 'Device and Technical Data' },
    {
      type: 'p',
      text: 'To ensure proper app functionality, TikTok may collect technical information, including:',
    },
    {
      type: 'ul',
      items: [
        'device type and operating system',
        'app version and performance data',
        'network connectivity indicators',
      ],
    },
    {
      type: 'p',
      text: 'This data supports security, troubleshooting, and compatibility across devices.',
    },
    { type: 'h2', text: 'What TikTok Does Not Collect' },
    {
      type: 'p',
      text: 'There are common misconceptions about data collection.',
    },
    { type: 'p', text: 'TikTok does not:' },
    {
      type: 'ul',
      items: [
        'store user passwords in a readable form within exports',
        'record private thoughts, emotions, or intentions',
        'collect financial credentials through standard usage',
        'provide unrestricted access to private message content in all cases',
      ],
    },
    {
      type: 'p',
      text: 'Collected data is structured, logged, and limited to defined systems rather than informal observation.',
    },
    { type: 'h2', text: 'What Appears in a TikTok Data Export' },
    {
      type: 'p',
      text: 'When users request a data export, TikTok provides a downloadable file - usually as a ZIP - containing structured records of their activity.',
    },
    { type: 'p', text: 'A data export may include:' },
    {
      type: 'ul',
      items: [
        'interaction histories',
        'activity logs with timestamps',
        'search-related records',
        'account metadata',
      ],
    },
    {
      type: 'p',
      text: 'Not all collected data is always included. Exports can vary depending on:',
    },
    {
      type: 'ul',
      items: [
        'regional regulations',
        'data retention limits',
        'account age and activity level',
      ],
    },
    {
      type: 'p',
      text: 'The export reflects recorded platform activity, not inferred traits or subjective analysis.',
    },
    { type: 'h2', text: 'Why Understanding Data Collection Matters' },
    { type: 'p', text: 'Knowing what data is collected helps users:' },
    {
      type: 'ul',
      items: [
        'better understand their own digital activity',
        'review platform transparency',
        'make informed decisions about data analysis tools',
        'maintain control over personal information',
      ],
    },
    {
      type: 'p',
      text: 'Awareness supports responsible use and informed consent when working with personal data.',
    },
    { type: 'h2', text: 'Data Collection vs Data Interpretation' },
    { type: 'p', text: 'It is important to distinguish between:' },
    {
      type: 'ul',
      items: [
        'data collection - recording observable actions',
        'data interpretation - summarizing or analyzing those records',
      ],
    },
    {
      type: 'p',
      text: 'The presence of data does not automatically imply conclusions. Meaning and interpretation depend on context and the methods used to analyze the information.',
    },
    { type: 'h2', text: 'Final Thoughts' },
    {
      type: 'p',
      text: 'TikTok collects data related to account management, activity, discovery, and technical performance in order to operate its platform. This data is recorded systematically and made available to users through official export tools for transparency.',
    },
    {
      type: 'p',
      text: 'By understanding what data is collected - and what is not - users can approach their TikTok data with clarity, confidence, and informed awareness.',
    },
  ],
  faq: [
    {
      q: 'What personal data does TikTok collect?',
      a: 'TikTok collects account information, activity data, search interactions, and device-related technical data required to operate the platform.',
    },
    {
      q: 'Does TikTok collect private messages?',
      a: 'Some message-related metadata may be collected, but full private message content is not always included in data exports and does not include passwords.',
    },
    {
      q: 'Can I see what data TikTok has about me?',
      a: 'Yes. TikTok allows users to request a personal data export through its privacy and data settings.',
    },
    {
      q: 'Is all collected data included in the export?',
      a: 'Not always. Data exports may be limited by retention periods, regional regulations, and account activity.',
    },
    {
      q: 'Why does TikTok collect user data?',
      a: 'Data collection supports platform functionality, personalization, security, and overall performance.',
    },
  ],
}
