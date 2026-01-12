# TikTok Wrapped 📊

A simple web application for analyzing your TikTok data. Upload your exported JSON file and get beautiful statistics!

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📥 How to Get Your TikTok Data

1. Open the TikTok app
2. Go to **Profile** → **Settings** (three lines)
3. **Settings and Privacy**
4. **Account** → **Download your data**
5. Select **JSON** format
6. Click **Request data**
7. Wait for an email with a download link (usually 1-3 days)
8. Download and extract the archive
9. Find the `user_data.json` file

## 📈 What's Analyzed

### Profile
- Username and nickname
- Email
- Account creation date
- Biography

### Video Views
- Total number of videos watched
- Most active viewing time
- First and last video dates

### Activity
- Liked videos
- Favorite videos
- Comments
- Shared content

### Social
- Number of followers
- Number of following
- Chats and messages

### Content
- Published videos
- Received likes

### Search
- Top search queries
- Total number of searches

### Devices
- Which devices are used
- Number of logins

## 🔒 Privacy

All data is processed **locally** in your browser. The file is NOT uploaded to external servers.

## 🛠 Technologies

- Next.js 14
- React 18
- TypeScript
- CSS (no libraries)

## 📝 TikTok Data Structure

TikTok exports data in the following format:

```json
{
  "Profile": {
    "Profile Information": {
      "ProfileMap": {
        "userName": "...",
        "nickName": "...",
        "email": "...",
        "bioDescription": "..."
      }
    }
  },
  "Activity": {
    "Video Browsing History": {
      "VideoList": [...]
    },
    "Like List": {
      "ItemFavoriteList": [...]
    },
    "Search History": {
      "SearchList": [...]
    },
    "Follower List": {
      "FansList": [...]
    },
    "Following List": {
      "Following": [...]
    }
  }
}
```
