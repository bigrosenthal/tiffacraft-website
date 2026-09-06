import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ShortCard } from "@/components/short-card";
import { playlists, shortsForPlaylist } from "@/lib/content";

export const metadata: Metadata = {
  title: "Playlists",
  description:
    "TiffaCraft playlists: Do Not Watch Alone, Minecraft Memes That Hit Different, Soft Stories, and Soft Creeper Cozy.",
};

export default function PlaylistsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <PageHero eyebrow="Playlists" title="Pick a shelf">
        Horror in the fog closet. Memes by the crafting table. Stories under
        the moon.
      </PageHero>
      <div className="space-y-14">
        {playlists.map((playlist) => (
          <section
            key={playlist.slug}
            id={playlist.slug}
            className="scroll-mt-24"
          >
            <div className="mb-6 max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.18em] text-moss-deep uppercase">
                {playlist.mood}
              </p>
              <h2 className="font-display mt-2 text-3xl text-ink">
                {playlist.title}
              </h2>
              <p className="mt-2 text-ink-soft">{playlist.description}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {shortsForPlaylist(playlist).map((short) => (
                <ShortCard key={`${playlist.slug}-${short.slug}`} short={short} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
