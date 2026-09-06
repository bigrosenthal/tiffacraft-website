import { siteConfig } from "@/lib/site";

export type ShortCategory = "horror" | "meme" | "story";

export type FeaturedShort = {
  slug: string;
  title: string;
  category: ShortCategory;
  series: string;
  blurb: string;
  duration: string;
  youtubeUrl: string;
};

export type Playlist = {
  slug: string;
  title: string;
  description: string;
  mood: "horror" | "meme" | "story" | "cozy";
  shortSlugs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  paragraphs: string[];
};

export const categoryLabels: Record<ShortCategory, string> = {
  horror: "Horror",
  meme: "Meme",
  story: "Story",
};

export const featuredShorts: FeaturedShort[] = [
  {
    slug: "something-is-behind-you",
    title: "Something Is Behind You",
    category: "horror",
    series: "Do Not Watch Alone",
    blurb: "A quiet cave. A second set of footsteps. Do not turn around too late.",
    duration: "0:38",
    youtubeUrl: siteConfig.youtubeUrl,
  },
  {
    slug: "it-opened-the-door",
    title: "It Opened The Door",
    category: "horror",
    series: "Do Not Watch Alone",
    blurb: "You locked it. You heard the latch. Then the door moved anyway.",
    duration: "0:41",
    youtubeUrl: siteConfig.youtubeUrl,
  },
  {
    slug: "always-in-the-fog",
    title: "Always In The Fog",
    category: "horror",
    series: "Do Not Watch Alone",
    blurb: "The fog does not hide the village. It hides what follows you home.",
    duration: "0:44",
    youtubeUrl: siteConfig.youtubeUrl,
  },
  {
    slug: "turn-around",
    title: "Turn Around",
    category: "horror",
    series: "Do Not Watch Alone",
    blurb: "A whisper at your shoulder. One look is all it wants.",
    duration: "0:29",
    youtubeUrl: siteConfig.youtubeUrl,
  },
  {
    slug: "it-heard-you",
    title: "It Heard You",
    category: "horror",
    series: "Do Not Watch Alone",
    blurb: "Sneaking is a language. Tonight, something answers.",
    duration: "0:36",
    youtubeUrl: siteConfig.youtubeUrl,
  },
  {
    slug: "minecraft-memes-that-hit-different",
    title: "Minecraft Memes That Hit Different",
    category: "meme",
    series: "Meme Shorts",
    blurb: "The dirt house. The missed jump. The creeper that was supposed to be cute.",
    duration: "0:33",
    youtubeUrl: siteConfig.youtubeUrl,
  },
  {
    slug: "moonlit-promise",
    title: "Moonlit Promise",
    category: "story",
    series: "Soft Stories",
    blurb: "A soft creeper keeps a promise under a paper-lantern moon.",
    duration: "0:52",
    youtubeUrl: siteConfig.youtubeUrl,
  },
];

export const playlists: Playlist[] = [
  {
    slug: "do-not-watch-alone",
    title: "Do Not Watch Alone",
    description:
      "Fog, doors, and the feeling that the cave is listening. Soft visuals. Unsoft endings.",
    mood: "horror",
    shortSlugs: [
      "something-is-behind-you",
      "it-opened-the-door",
      "always-in-the-fog",
      "turn-around",
      "it-heard-you",
    ],
  },
  {
    slug: "minecraft-memes-that-hit-different",
    title: "Minecraft Memes That Hit Different",
    description:
      "Tiny joke Shorts for anyone who has ever lost a diamond pick and their dignity.",
    mood: "meme",
    shortSlugs: ["minecraft-memes-that-hit-different"],
  },
  {
    slug: "soft-stories",
    title: "Soft Stories",
    description:
      "Moonlight, promises, and creepers who would rather hold flowers than explode.",
    mood: "story",
    shortSlugs: ["moonlit-promise"],
  },
  {
    slug: "soft-creeper-cozy",
    title: "Soft Creeper Cozy",
    description:
      "A growing pile of gentle Minecraft moments — moss, lanterns, and very polite hissing.",
    mood: "cozy",
    shortSlugs: ["moonlit-promise"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-tiffacraft",
    title: "Welcome to TiffaCraft",
    date: "2026-09-01",
    excerpt:
      "A soft Minecraft channel for cute creepers, meme Shorts, and stories that glow like lanterns.",
    tags: ["channel", "soft creepers"],
    paragraphs: [
      "Hi, I’m TiffaCraft. This channel is a little mossy cottage on the internet: cute creepers, gentle block worlds, and Shorts that can turn from cozy to “why is it standing in the doorway?” in under a minute.",
      "Most Minecraft channels pick one mood. I like three. Soft creeper days for when you want something kind. Meme Shorts for when the game is being the game. And Do Not Watch Alone for nights when the fog looks a little too thick.",
      "If you like your creepers blushy, your stories moonlit, and your jumpscares earned, you are already home. Subscribe on YouTube, wander the playlists, and tell a friend to watch the horror ones first. Or last. I’m not your babysitter.",
      "More worlds are coming — more promises under the moon, more memes that hit different, and more things that open doors they were not invited through.",
    ],
  },
  {
    slug: "do-not-watch-alone",
    title: "Do Not Watch Alone",
    date: "2026-09-04",
    excerpt:
      "The horror Shorts series is fog, footsteps, and the rule you already know: do not watch alone.",
    tags: ["horror", "series"],
    paragraphs: [
      "Do Not Watch Alone is the darker shelf in the TiffaCraft cottage. Same soft greens. Same blocky world. A very different feeling in the hallway.",
      "Each Short is a small scare: Something Is Behind You, It Opened The Door, Always In The Fog, Turn Around, It Heard You. They are built to watch in one breath — then immediately send to someone who said they do not get scared in Minecraft.",
      "I wanted horror that still looks like TiffaCraft. No grimdark sludge. Just lantern light, empty villages, and the moment you realize the second pair of footsteps is not yours.",
      "If the cute creeper videos are tea, these are the last cup before the power flickers. Watch them after Moonlit Promise if you need a palate cleanser. Or do not. The fog does not mind waiting.",
    ],
  },
];

export const merchPlaceholders = [
  {
    name: "Soft Creeper Plush",
    note: "Moss-green, blushy cheeks, zero explosions.",
  },
  {
    name: "Moonlit Promise Print",
    note: "A lantern moon and a promise that stays.",
  },
  {
    name: "Do Not Watch Alone Hoodie",
    note: "Soft fleece. Unsoft tagline on the back.",
  },
  {
    name: "Cottage Sticker Pack",
    note: "Creepers, fog, memes, and one very polite hiss.",
  },
];

export function getShort(slug: string) {
  return featuredShorts.find((short) => short.slug === slug);
}

export function getPlaylist(slug: string) {
  return playlists.find((playlist) => playlist.slug === slug);
}

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function shortsForPlaylist(playlist: Playlist) {
  return playlist.shortSlugs
    .map((slug) => getShort(slug))
    .filter((short): short is FeaturedShort => Boolean(short));
}
