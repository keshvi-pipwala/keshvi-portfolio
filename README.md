# Keshvi Pipwala — Portfolio

React + Vite portfolio with AI Recruiter Assistant, deployed on Vercel.

## Local Development

```bash
npm install
npm run dev
```

## Add Your Photo

1. Add your photo as `public/me.jpg` (or any format)
2. In `src/data.js`, change:
   ```js
   photo: null,
   ```
   to:
   ```js
   photo: '/me.jpg',
   ```

## Add Space Video

Download the space video from your friend's repo or use your own:
- Place it at `public/videos/space.mp4`

Or replace the video source in `src/App.jsx` with any video URL.

## Deploy to Vercel (5 minutes)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/keshvi-portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `keshvi-portfolio` repository
4. Leave all settings as default — Vercel auto-detects Vite
5. Click **Deploy**

### Step 3 — Add API Key (for AI Chat)
1. In your Vercel project dashboard → **Settings → Environment Variables**
2. Add:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** your Anthropic API key (get one at console.anthropic.com)
3. Click **Save**
4. Go to **Deployments** → click **Redeploy**

### Step 4 — Custom domain (optional)
In Vercel → Settings → Domains → add `keshvipipwala.com` or similar

## Your live URL
```
https://keshvi-portfolio.vercel.app
```
(Vercel assigns this automatically — you can rename it in Settings)

## Project Structure

```
keshvi-portfolio/
├── api/
│   └── chat.js          # Vercel serverless function (keeps API key secret)
├── public/
│   ├── me.jpg           # Your photo (add this!)
│   └── videos/
│       └── space.mp4    # Space background video (add this!)
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   └── RecruiterChat.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── data.js          # All your content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Updating Content

All your portfolio content is in **`src/data.js`**. Edit:
- `PROFILE` — name, bio, email, photo path
- `EXPERIENCE` — work history
- `PROJECTS` — projects with impact, bullets, tags
- `EDUCATION` — degrees and certifications
- `SKILLS` — skill tags
