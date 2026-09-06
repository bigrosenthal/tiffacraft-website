const DEFAULT_SITE_URL = "https://tiffacraft-website.vercel.app";

function publicEnv(value: string | undefined, fallback: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

export function resolveSiteUrl(
  value: string | undefined = process.env.NEXT_PUBLIC_SITE_URL,
) {
  const candidate = publicEnv(value, DEFAULT_SITE_URL);
  try {
    return new URL(candidate).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteConfig = {
  name: publicEnv(process.env.NEXT_PUBLIC_CHANNEL_NAME, "TiffaCraft"),
  handle: publicEnv(process.env.NEXT_PUBLIC_YOUTUBE_HANDLE, "@TiffaCraft"),
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
  youtubeUrl: publicEnv(
    process.env.NEXT_PUBLIC_YOUTUBE_URL,
    "https://youtube.com/@TiffaCraft",
  ),
  youtubeHandle: publicEnv(process.env.NEXT_PUBLIC_YOUTUBE_HANDLE, "@TiffaCraft"),
  siteUrl: resolveSiteUrl(),
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
