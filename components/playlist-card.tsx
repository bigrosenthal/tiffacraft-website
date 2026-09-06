import Link from "next/link";
import type { Playlist } from "@/lib/content";

const moodStyles = {
  horror: "bg-fog text-cream",
  meme: "bg-moss text-cream",
  story: "from-lantern/80 bg-gradient-to-br to-moss-deep text-cream",
  cozy: "bg-mint text-ink",
} as const;

type PlaylistCardProps = {
  playlist: Playlist;
};

export function PlaylistCard({ playlist }: PlaylistCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-moss-deep/10 bg-cream shadow-[0_10px_30px_rgba(61,90,50,0.08)]">
      <div className={`px-6 py-8 ${moodStyles[playlist.mood]}`}>
        <p className="text-[11px] tracking-[0.18em] uppercase opacity-80">
          Playlist
        </p>
        <h2 className="font-display mt-2 text-3xl leading-tight">
          {playlist.title}
        </h2>
        <p className="mt-3 text-sm opacity-90">
          {playlist.shortSlugs.length} Short
          {playlist.shortSlugs.length === 1 ? "" : "s"}
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <p className="text-sm leading-6 text-ink-soft">{playlist.description}</p>
        <Link
          href={`/playlists#${playlist.slug}`}
          className="mt-auto text-sm font-semibold text-moss-deep hover:text-moss"
        >
          Open playlist
        </Link>
      </div>
    </article>
  );
}
