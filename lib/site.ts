export const siteConfig = {
  name: process.env.NEXT_PUBLIC_CHANNEL_NAME ?? "TiffaCraft",
  handle: process.env.NEXT_PUBLIC_YOUTUBE_HANDLE ?? "@TiffaCraft",
  tagline: "Soft creepers, cozy stories, and Shorts you might not want to watch alone.",
  description:
    "TiffaCraft is a cute, soft Minecraft channel — friendly creepers, meme Shorts, moonlit stories, and the horror series Do Not Watch Alone.",
  keywords: [
    "TiffaCraft",
    "@TiffaCraft",
    "Minecraft Shorts",
    "soft creeper",
    "Do Not Watch Alone",
    "Minecraft horror",
    "Minecraft memes",
    "Moonlit Promise",
  ],
  youtubeUrl:
    process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "https://youtube.com/@TiffaCraft",
  youtubeHandle: process.env.NEXT_PUBLIC_YOUTUBE_HANDLE ?? "@TiffaCraft",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tiffacraft-website.vercel.app",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/videos", label: "Videos" },
  { href: "/playlists", label: "Playlists" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/merch", label: "Merch" },
  { href: "/contact", label: "Contact" },
] as const;
