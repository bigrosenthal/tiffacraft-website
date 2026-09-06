import type { CSSProperties } from "react";
import Link from "next/link";
import {
  categoryLabels,
  type FeaturedShort,
  type ShortCategory,
} from "@/lib/content";

const thumbTheme: Record<ShortCategory, { from: string; to: string; badge: string }> =
  {
    horror: {
      from: "#3d3848",
      to: "#1a181f",
      badge: "bg-fog text-cream",
    },
    meme: {
      from: "#8FBF6A",
      to: "#3d5a32",
      badge: "bg-moss text-cream",
    },
    story: {
      from: "#9bb8c9",
      to: "#3d5a32",
      badge: "bg-lantern text-ink",
    },
  };

type ShortCardProps = {
  short: FeaturedShort;
  featured?: boolean;
};

export function ShortCard({ short, featured = false }: ShortCardProps) {
  const theme = thumbTheme[short.category];

  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-moss-deep/10 bg-cream shadow-[0_10px_30px_rgba(61,90,50,0.08)] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <Link href={short.youtubeUrl} target="_blank" rel="noreferrer" className="block">
        <div
          className="short-thumb relative aspect-[9/14] w-full"
          style={
            {
              "--thumb-from": theme.from,
              "--thumb-to": theme.to,
            } as CSSProperties
          }
        >
          <div className="absolute inset-3 rounded-2xl border border-white/10" />
          <p className="absolute top-5 left-5 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-cream uppercase">
            Short
          </p>
          <p className="absolute top-5 right-5 text-xs text-cream/80">
            {short.duration}
          </p>
          <div className="absolute right-0 bottom-0 left-0 p-5">
            <p className="text-[11px] tracking-[0.16em] text-cream/70 uppercase">
              {short.series}
            </p>
            <h3 className="font-display mt-1 text-2xl leading-tight text-cream">
              {short.title}
            </h3>
          </div>
        </div>
      </Link>
      <div className="space-y-3 p-5">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase ${theme.badge}`}
        >
          {categoryLabels[short.category]}
        </span>
        <p className="text-sm leading-6 text-ink-soft">{short.blurb}</p>
        <Link
          href="/videos"
          className="text-sm font-semibold text-moss-deep hover:text-moss"
        >
          See all videos
        </Link>
      </div>
    </article>
  );
}
