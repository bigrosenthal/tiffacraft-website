import Image from "next/image";
import Link from "next/link";
import { PlaylistCard } from "@/components/playlist-card";
import { ShortCard } from "@/components/short-card";
import { SubscribeCta } from "@/components/subscribe-cta";
import { blogPosts, featuredShorts, playlists } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const horrorShorts = featuredShorts.filter((short) => short.category === "horror");
  const storyShort = featuredShorts.find((short) => short.slug === "moonlit-promise");
  const memeShort = featuredShorts.find(
    (short) => short.slug === "minecraft-memes-that-hit-different",
  );

  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-moss-deep uppercase">
            YouTube {siteConfig.handle}
          </p>
          <h1 className="font-display mt-3 text-4xl leading-[1.1] text-ink sm:text-6xl">
            Soft worlds.
            <span className="block text-moss-deep">Softer creepers.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-ink-soft">
            {siteConfig.tagline} A cute Minecraft cottage on the internet — with
            a foggy closet for nights you should not watch alone.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-moss-deep px-5 py-2.5 text-sm font-semibold text-cream hover:bg-moss"
            >
              Subscribe on YouTube
            </a>
            <Link
              href="/videos"
              className="rounded-full border border-moss-deep/20 bg-cream px-5 py-2.5 text-sm font-semibold text-ink hover:bg-mint"
            >
              Feature Shorts
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-sage/50" />
          <Image
            src="/og.jpg"
            alt="TiffaCraft soft creeper under a lantern moon"
            width={1200}
            height={630}
            priority
            className="relative rounded-[1.6rem] border-4 border-cream shadow-xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-moss-deep uppercase">
              Feature Shorts
            </p>
            <h2 className="font-display mt-2 text-3xl text-ink">On the mossy shelf</h2>
          </div>
          <Link href="/videos" className="text-sm font-semibold text-moss-deep">
            All videos
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {storyShort ? <ShortCard short={storyShort} /> : null}
          {memeShort ? <ShortCard short={memeShort} /> : null}
          <ShortCard short={horrorShorts[0]} />
        </div>
      </section>

      <section className="bg-fog mt-10 text-cream">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-lantern uppercase">
            Horror series
          </p>
          <h2 className="font-display mt-2 text-4xl">Do Not Watch Alone</h2>
          <p className="mt-3 max-w-2xl text-cream/80">
            Fog, doors, and the feeling that the cave is listening. Same soft
            greens. A very different hallway.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {horrorShorts.map((short) => (
              <a
                key={short.slug}
                href={short.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <p className="text-[11px] tracking-[0.16em] text-lantern/80 uppercase">
                  {short.duration}
                </p>
                <h3 className="font-display mt-2 text-xl leading-tight">
                  {short.title}
                </h3>
              </a>
            ))}
          </div>
          <Link
            href="/playlists"
            className="mt-8 inline-flex text-sm font-semibold text-lantern hover:text-cream"
          >
            Open the playlist
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.18em] text-moss-deep uppercase">
          Playlists
        </p>
        <h2 className="font-display mt-2 text-3xl text-ink">Pick a mood</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {playlists.slice(0, 2).map((playlist) => (
            <PlaylistCard key={playlist.slug} playlist={playlist} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 sm:px-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-moss-deep/10 bg-cream p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-moss-deep uppercase">
            From the cottage
          </p>
          <h2 className="font-display mt-2 text-3xl">Blog</h2>
          <ul className="mt-6 space-y-4">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <p className="text-xs text-ink-soft">{post.date}</p>
                  <h3 className="font-display text-2xl group-hover:text-moss-deep">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <SubscribeCta />
      </section>
    </div>
  );
}
