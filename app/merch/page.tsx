import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { merchPlaceholders } from "@/lib/content";

export const metadata: Metadata = {
  title: "Merch",
  description:
    "TiffaCraft merch is coming soon — soft creeper plush, moonlit prints, and Do Not Watch Alone hoodies.",
};

export default function MerchPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <PageHero eyebrow="Merch" title="The shop is still growing moss">
        Nothing to checkout yet. These are placeholder shelves for the day the
        cottage opens a real store.
      </PageHero>
      <div className="grid gap-5 sm:grid-cols-2">
        {merchPlaceholders.map((item) => (
          <article
            key={item.name}
            className="rounded-3xl border border-dashed border-moss-deep/25 bg-cream p-6"
          >
            <p className="text-[11px] font-semibold tracking-[0.16em] text-moss-deep uppercase">
              Coming soon
            </p>
            <h2 className="font-display mt-2 text-2xl">{item.name}</h2>
            <p className="mt-2 text-sm text-ink-soft">{item.note}</p>
          </article>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-ink-soft">
        Want a ping when merch is real?{" "}
        <Link href="/subscribe" className="font-semibold text-moss-deep">
          Subscribe on YouTube
        </Link>
        .
      </p>
    </div>
  );
}
