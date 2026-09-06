import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Subscribe to TiffaCraft on YouTube for soft creepers, memes, stories, and Do Not Watch Alone.",
};

const reasons = [
  {
    title: "Soft creepers",
    copy: "Cute, blushy, and mostly not exploding.",
  },
  {
    title: "Do Not Watch Alone",
    copy: "Horror Shorts for foggy nights and brave friends.",
  },
  {
    title: "Memes & stories",
    copy: "Minecraft Memes That Hit Different, plus Moonlit Promise.",
  },
];

export default function SubscribePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
      <PageHero eyebrow="Subscribe" title="Come sit by the lantern">
        One tap. Soft worlds, meme Shorts, and the occasional thing behind you.
      </PageHero>
      <div className="grid gap-4 sm:grid-cols-3">
        {reasons.map((reason) => (
          <article
            key={reason.title}
            className="rounded-3xl border border-moss-deep/10 bg-cream p-5"
          >
            <h2 className="font-display text-xl">{reason.title}</h2>
            <p className="mt-2 text-sm text-ink-soft">{reason.copy}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-[2rem] bg-moss-deep p-8 text-center text-cream">
        <p className="text-xs tracking-[0.2em] uppercase">{siteConfig.handle}</p>
        <h2 className="font-display mt-3 text-3xl">Subscribe on YouTube</h2>
        <a
          href={siteConfig.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-lantern px-6 py-3 text-sm font-semibold text-ink hover:bg-cream"
        >
          youtube.com/@TiffaCraft
        </a>
      </div>
    </div>
  );
}
