import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Legal",
  description: "TiffaCraft privacy and terms stubs.",
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
      <PageHero eyebrow="Legal" title="The boring chest">
        Short stubs while the cottage is still being furnished. Not legal advice.
      </PageHero>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/legal/privacy"
          className="rounded-3xl border border-moss-deep/10 bg-cream p-6 hover:bg-mint"
        >
          <h2 className="font-display text-2xl">Privacy</h2>
          <p className="mt-2 text-sm text-ink-soft">
            What this site does and does not collect.
          </p>
        </Link>
        <Link
          href="/legal/terms"
          className="rounded-3xl border border-moss-deep/10 bg-cream p-6 hover:bg-mint"
        >
          <h2 className="font-display text-2xl">Terms</h2>
          <p className="mt-2 text-sm text-ink-soft">
            How to use this marketing site.
          </p>
        </Link>
      </div>
    </div>
  );
}
