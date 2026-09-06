import Link from "next/link";
import { siteConfig } from "@/lib/site";

type SubscribeCtaProps = {
  compact?: boolean;
};

export function SubscribeCta({ compact = false }: SubscribeCtaProps) {
  return (
    <section
      className={`overflow-hidden rounded-[2rem] border border-moss-deep/15 bg-moss-deep text-cream ${
        compact ? "p-6 sm:p-8" : "p-8 sm:p-12"
      }`}
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-sage uppercase">
        {siteConfig.handle}
      </p>
      <h2 className="font-display mt-3 text-3xl sm:text-4xl">
        Subscribe on YouTube
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-6 text-cream/85 sm:text-base">
        Soft creepers, meme Shorts, Moonlit Promise, and Do Not Watch Alone —
        all in one cozy little channel.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={siteConfig.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-lantern px-5 py-2.5 text-sm font-semibold text-ink shadow-sm hover:bg-cream"
        >
          Open YouTube
        </a>
        <Link
          href="/subscribe"
          className="rounded-full border border-cream/25 px-5 py-2.5 text-sm font-semibold text-cream hover:bg-white/10"
        >
          Why subscribe
        </Link>
      </div>
    </section>
  );
}
