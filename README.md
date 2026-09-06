# TiffaCraft website

Public marketing site for the **TiffaCraft** YouTube channel ([@TiffaCraft](https://youtube.com/@TiffaCraft)) — cute/soft Minecraft creepers, meme Shorts, moonlit stories, and the horror series **Do Not Watch Alone**.

Built with **Next.js App Router**, TypeScript, and Tailwind CSS. Vercel auto-detects this stack with zero extra config.

## Local setup

```bash
git clone https://github.com/bigrosenthal/tiffacraft-website.git
cd tiffacraft-website
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional public config:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap, and robots |
| `NEXT_PUBLIC_YOUTUBE_URL` | Subscribe / channel links |
| `NEXT_PUBLIC_YOUTUBE_HANDLE` | Display handle (`@TiffaCraft`) |
| `NEXT_PUBLIC_CHANNEL_NAME` | Channel name |

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home, feature Shorts, Do Not Watch Alone, subscribe CTA |
| `/videos` | All feature Shorts (horror / meme / story) |
| `/playlists` | Series shelves |
| `/about` | Channel tone and series |
| `/merch` | Coming-soon placeholder shop |
| `/blog` | Channel notes |
| `/contact` | Placeholder hello form |
| `/subscribe` | YouTube subscribe CTA |
| `/legal` | Privacy and terms stubs |

Feature Shorts (placeholders with titles):

- Horror: Something Is Behind You, It Opened The Door, Always In The Fog, Turn Around, It Heard You
- Meme: Minecraft Memes That Hit Different
- Story: Moonlit Promise

## Import on Vercel (GitHub)

Repo: [bigrosenthal/tiffacraft-website](https://github.com/bigrosenthal/tiffacraft-website)  
Team: **the-rosenthal-team**

1. Sign in at [vercel.com](https://vercel.com) with the GitHub account that can see this repo.
2. Switch to team **the-rosenthal-team**.
3. Click **Add New… → Project**.
4. Choose **Import** on `bigrosenthal/tiffacraft-website`.
5. Confirm the framework preset is **Next.js** (auto-detected).
6. Leave Build Command (`next build`) and Output Directory as the defaults.
7. Optionally add the variables from `.env.example` (or set `NEXT_PUBLIC_SITE_URL` to the Vercel domain after the first deploy).
8. Click **Deploy**.

No `vercel.json` is required. After the first deploy, assign a custom domain in the project’s Domains settings if you want one.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
