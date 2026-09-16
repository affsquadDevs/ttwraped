import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'TikTok Wrapped 2026: How to Get Your Year in Review',
  description:
    "Looking for TikTok Wrapped 2026? TikTok doesn't reliably make one. Here's how to build your own recap from your data export: watch time, top searches, and your rank.",
  intro:
    "Every December the same question takes over everyone's For You page: where is my TikTok Wrapped? And every year the answer disappoints a little. TikTok has never treated its year in review the way Spotify does. Some years it shows up, some years it just doesn't. So if you're already hunting for your TikTok Wrapped 2026, here's the honest situation, plus the workaround that actually gets you the numbers.",
  blocks: [
    { type: 'h2', text: 'Is there an official TikTok Wrapped for 2026?' },
    {
      type: 'p',
      text: "Short answer: as of right now, nothing has been announced. And honestly, that tracks. TikTok put out a proper recap from 2020 through 2022, skipped it completely in 2023, and has been hit or miss ever since. Even in the years it does appear, it usually lands around mid-December and reaches people in waves rather than all at once. If you've been refreshing the app waiting for some big animated recap to drop, you could be waiting a good while.",
    },
    {
      type: 'p',
      text: "What makes it a little maddening is that TikTok obviously has the data. Your watch history, every search, the sounds you saved at 2am, it's all sitting on their servers. The app just doesn't always bother handing it back to you in a form you'd want to look at.",
    },
    { type: 'h2', text: 'The workaround: make your own from your data export' },
    {
      type: 'p',
      text: "Here's the part most people miss. You don't actually need TikTok to make you a Wrapped. You can pull the raw data yourself and turn it into the same kind of recap, on whatever day you feel like it. That's the entire reason [[home:TikTok Wrapped]] exists.",
    },
    {
      type: 'p',
      text: 'It runs off the official data export that TikTok lets any user download. You request the file, it comes back as a JSON (or a ZIP with a JSON tucked inside), and the tool reads it and does the counting: total videos watched, hours lost, your busiest time of day, the searches you might rather forget, and a personality rank based on how deep in you are. No account, no password, nothing sent to a server. The file is read right there in your browser.',
    },
    {
      type: 'p',
      text: 'Getting the file is quick, but it comes with a wait. Here is the whole process:',
    },
    {
      type: 'ol',
      items: [
        "In TikTok, open your Profile, tap the menu (☰), then go to Settings and privacy.",
        "Under Account, tap 'Download your data'.",
        "Choose JSON as the format. This part matters, because TXT and HTML won't work with most analysis tools. Then pick 'All data' and tap 'Request data'.",
        "Wait. TikTok usually takes anywhere from a few hours to a couple of days to build the file, and once it's ready it stays available to download for a few days.",
      ],
    },
    {
      type: 'p',
      text: "When the file lands, take it to [[analyze:the analyzer]] and drop it in. If you'd rather see what you're getting before you go through all that, there's a [[example:full sample recap]] built from made-up data you can poke around first.",
    },
    { type: 'h2', text: 'What your 2026 recap actually shows' },
    {
      type: 'p',
      text: "It's a lot more than a watch-time counter. You get your top searches ranked by how often you looked them up, the hours you're most active (the late-night stretch tends to be a rude surprise), your busiest years lined up side by side, your likes and comments and shares, favourite sounds and creators, and a rank that quietly files you somewhere between casual viewer and, well, this is a problem. It's the stuff a real Wrapped would show you. You're just generating it on your own terms instead of waiting on the app.",
    },
    { type: 'h2', text: 'Why Spotify pulls this off and TikTok doesn’t' },
    {
      type: 'p',
      text: "Spotify turned Wrapped into an event. It's automatic, it's polished, it drops on schedule, and for a week your whole feed is other people's top artists. TikTok never made that commitment. Part of it is that a year of music is genuinely easier to package than an endless, formless feed. Part of it, you suspect, is that TikTok would rather you keep scrolling than stop and count how much you've scrolled. Either way, the gap is exactly why third-party tools exist. If you want the practical difference between a recap like this and TikTok's built-in creator numbers, [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:this comparison]] breaks it down.",
    },
    { type: 'h2', text: 'One thing worth slowing down for: privacy' },
    {
      type: 'p',
      text: "Your data export is personal. Depending on what you include, it can hold messages, login history, the lot. So it genuinely matters where you upload it. With TikTok Wrapped the file never leaves your device; everything happens locally in the browser and nothing is stored. If you're weighing up other tools too, [[/blog/is-it-safe-to-upload-tiktok-data-online:this quick read on uploading TikTok data safely]] is worth two minutes before you hand your file to anyone.",
    },
    {
      type: 'p',
      text: "So no, there probably isn't a shiny official TikTok Wrapped 2026 on the way to save the day. But the data is yours, and squeezing your year in review out of it takes about five minutes of real effort. [[analyze:Grab your export and see your numbers]] whenever you're ready for them.",
    },
  ],
  faq: [
    {
      q: 'Is there an official TikTok Wrapped for 2026?',
      a: "None has been announced. TikTok made one from 2020 to 2022, skipped 2023, and has been inconsistent since. When it does appear, it's usually around mid-December and rolls out gradually.",
    },
    {
      q: 'When does TikTok Wrapped come out?',
      a: "Historically mid-to-late December, when it comes out at all. Because it isn't guaranteed, a lot of people use a data-export tool to get their recap on their own schedule instead of waiting.",
    },
    {
      q: 'Can I get my TikTok Wrapped 2026 right now?',
      a: "Yes. You don't have to wait for TikTok. Request your data export (choose the JSON format), then upload it to a tool like TikTok Wrapped and you'll get your stats and rank in a few seconds.",
    },
    {
      q: 'Do I need a special account or to pay for it?',
      a: 'No. Any TikTok account can request a data export, and analysing it on TikTok Wrapped is free with no login.',
    },
    {
      q: 'Is it safe to upload my TikTok data?',
      a: "On TikTok Wrapped, your file is processed entirely in your browser and never uploaded or stored. For third-party tools in general, it's worth checking that they process data locally and never ask for your TikTok password.",
    },
  ],
}
