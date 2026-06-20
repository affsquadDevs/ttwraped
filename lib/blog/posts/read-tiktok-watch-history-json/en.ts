import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "How to Read Your TikTok Watch History JSON File",
  description:
    "Learn what the TikTok Watch History JSON file is, where it lives in your data export, and how to read its structure to count videos and sessions.",
  intro:
    "Your TikTok Watch History file is a plain-text JSON record of every video you played, stored inside the data export TikTok lets you download. Once you know its structure, you can read it, count videos, and even estimate viewing sessions yourself.",
  blocks: [
    {
      type: "p",
      text: "When you request your data from TikTok and choose the JSON format, the export arrives as a ZIP archive containing several files. One of the most interesting is the Watch History file, which lists the videos you have watched over time. This guide walks through where the file lives, how its JSON is organized, and how to make sense of it.",
    },
    {
      type: "h2",
      text: "What the Watch History File Is",
    },
    {
      type: "p",
      text: "The Watch History file is a log of the videos that played in your For You and Following feeds. Each entry represents a single video that TikTok recorded as watched, along with the time it was played and a link back to the original video.",
    },
    {
      type: "p",
      text: "It is not an analytics dashboard. It is raw data: a long list of timestamps and URLs. That makes it powerful for personal analysis but harder to read at a glance, especially if your history spans months or years.",
    },
    {
      type: "h2",
      text: "Where It Lives in the Export",
    },
    {
      type: "p",
      text: "After you unzip the TikTok export, the Watch History data is grouped under an activity-related folder. In a JSON export you will typically find it nested like this:",
    },
    {
      type: "ul",
      items: [
        "Activity → Video Browsing History (sometimes labeled Watch History),",
        "stored inside a single .json file alongside other activity files such as Like List and Search History.",
      ],
    },
    {
      type: "p",
      text: "The exact folder names can vary slightly between export versions. If you are unsure how the archive is laid out, our guide on [[/blog/tiktok-data-export-folders-explained:TikTok data export folders explained]] breaks down each section. For the full request-and-download process, see [[/blog/how-to-download-analyze-tiktok-data:how to download and analyze TikTok data]].",
    },
    {
      type: "h2",
      text: "The JSON Structure: VideoList Entries",
    },
    {
      type: "p",
      text: "Inside the file, the watch records are stored under a key usually named VideoList. It is an array of objects, where each object describes one watched video. A single entry looks roughly like this:",
    },
    {
      type: "ul",
      items: [
        'Date — when the video was watched, e.g. "2026-02-14 18:32:07",',
        'Link — the URL of the video, e.g. "https://www.tiktokv.com/share/video/7300000000000000000/".',
      ],
    },
    {
      type: "p",
      text: 'So the overall shape is a top-level object containing the array, which you can think of as { "Video Browsing History": { "VideoList": [ ... ] } }. Every element of VideoList is one play event with a Date and a Link field. There are no view counts, no engagement numbers, and no captions — just when and what.',
    },
    {
      type: "h2",
      text: "How to Count Videos Manually",
    },
    {
      type: "p",
      text: "The simplest metric is the total number of videos watched, which equals the length of the VideoList array. You can find this in a few ways:",
    },
    {
      type: "ul",
      items: [
        "open the file in a code editor and look at the array length, or",
        "load it in a browser console with data['Video Browsing History'].VideoList.length, or",
        "use a command-line tool to count occurrences of the Date key.",
      ],
    },
    {
      type: "p",
      text: "Counting unique videos is a little harder, because the same Link can appear more than once if you rewatched a video. To count uniques, you would need to deduplicate by the Link field rather than just counting rows.",
    },
    {
      type: "h2",
      text: "Estimating Sessions vs Using a Tool",
    },
    {
      type: "p",
      text: 'A "session" is a stretch of continuous watching. The export does not label sessions, so you have to infer them from the Date timestamps. A common approach is to sort entries by date and group videos that are close together in time:',
    },
    {
      type: "ul",
      items: [
        "sort all entries by their Date value,",
        "walk through the list and start a new session whenever the gap between two consecutive videos exceeds a threshold (for example, 30 minutes),",
        "count how many sessions result.",
      ],
    },
    {
      type: "p",
      text: "Doing this by hand across thousands of entries is tedious and error-prone. A tool like [[home:TikTok Wrapped]] performs this grouping automatically and turns it into readable summaries. You can [[example:view an example wrapped]] to see what the output looks like, or [[analyze:analyze your own export]] directly.",
    },
    {
      type: "h2",
      text: "Common Gotchas",
    },
    {
      type: "h3",
      text: "Date Formats and Timezones",
    },
    {
      type: "p",
      text: 'The Date field is a string, not a true datetime, and it is often recorded in UTC rather than your local time. If you parse it without accounting for timezone, your session boundaries and "most active hour" results can shift by several hours.',
    },
    {
      type: "h3",
      text: "Partial History",
    },
    {
      type: "p",
      text: "The export may not include your entire lifetime of watching. TikTok limits how far back some activity goes, so an empty or short VideoList does not always mean you watched little — it may mean the export window was limited.",
    },
    {
      type: "h3",
      text: "Large Files",
    },
    {
      type: "p",
      text: "Heavy users can end up with Watch History files that are tens of megabytes in size. Some text editors struggle to open files that large. If a file will not open or freezes your editor, that is a sign the data is large rather than corrupted.",
    },
    {
      type: "h3",
      text: "Key Naming Differences",
    },
    {
      type: "p",
      text: "Because TikTok occasionally renames keys between export versions, the wrapper key around VideoList may differ. If data['Video Browsing History'] is undefined, inspect the top-level keys first to find the correct label.",
    },
    {
      type: "h2",
      text: "Final Thoughts",
    },
    {
      type: "p",
      text: "The Watch History JSON file is one of the most revealing parts of your TikTok export. Once you understand that it is just a VideoList array of Date and Link pairs, counting videos and estimating sessions becomes straightforward — though the timezone, partial-history, and file-size gotchas are easy to trip over.",
    },
    {
      type: "p",
      text: "If you would rather skip the manual parsing, an analysis tool can read the same file and present the results for you in seconds.",
    },
  ],
  faq: [
    {
      q: "Where is the Watch History file in the TikTok export?",
      a: "It is usually found under an Activity folder, often named Video Browsing History or Watch History, stored as a single JSON file.",
    },
    {
      q: "What fields does each watch history entry contain?",
      a: "Each entry in the VideoList array contains a Date field with the time the video was watched and a Link field with the video URL.",
    },
    {
      q: "How do I count how many videos I watched?",
      a: "The total equals the number of entries in the VideoList array. You can check the array length in a code editor or browser console.",
    },
    {
      q: "Why do the timestamps look off by a few hours?",
      a: "The Date field is often recorded in UTC, so it can differ from your local time unless you convert it to your own timezone.",
    },
    {
      q: "Why is my Watch History file so large?",
      a: "Frequent viewing produces many entries, so the file can grow to tens of megabytes. Large size is normal and does not mean the file is broken.",
    },
  ],
}
