import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SubscribeCta } from "@/components/subscribe-cta";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "TiffaCraft is a cute, soft Minecraft channel with friendly creepers, meme Shorts, and the horror series Do Not Watch Alone.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <PageHero eyebrow="About" title="A cottage with a fog closet">
        {siteConfig.name} is a YouTube channel for people who want Minecraft to
        feel kind — until it very much does not.
      </PageHero>
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-moss-deep/10 bg-cream p-6">
          <h2 className="font-display text-2xl">Soft creepers</h2>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            The house style is blushy, mossy, and a little shy. Creepers here
            would rather hold a flower than ruin your dirt hut. Most days,
            anyway.
          </p>
        </article>
        <article className="rounded-3xl border border-moss-deep/10 bg-cream p-6">
          <h2 className="font-display text-2xl">Three shelves</h2>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Cute Minecraft. Meme Shorts that hit different. Soft stories like{" "}
            <em>Moonlit Promise</em>. And the horror series{" "}
            <em>Do Not Watch Alone</em> for when the lantern flickers.
          </p>
        </article>
        <article className="rounded-3xl bg-fog p-6 text-cream md:col-span-2">
          <h2 className="font-display text-2xl">Do Not Watch Alone</h2>
          <p className="mt-3 text-sm leading-7 text-cream/85">
            Something Is Behind You. It Opened The Door. Always In The Fog.
            Turn Around. It Heard You. Short, foggy, and meant to be sent to a
            friend who said they do not get scared in Minecraft.
          </p>
        </article>
      </div>
      <div className="mx-auto mt-10 max-w-4xl">
        <SubscribeCta compact />
        <p className="mt-6 text-center text-sm text-ink-soft">
          Questions?{" "}
          <Link href="/contact" className="font-semibold text-moss-deep">
            Leave a note
          </Link>{" "}
          or visit{" "}
          <a
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-moss-deep"
          >
            {siteConfig.handle}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
