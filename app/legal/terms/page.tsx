import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "TiffaCraft terms stub.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-moss-deep uppercase">
        Legal stub
      </p>
      <h1 className="font-display mt-3 text-4xl">Terms</h1>
      <div className="mt-6 space-y-4 text-sm leading-7 text-ink-soft">
        <p>
          This website is a fan-facing marketing page for {siteConfig.name}{" "}
          ({siteConfig.handle}). Content here is provided as-is for information
          and fun.
        </p>
        <p>
          Minecraft is a trademark of Mojang Studios / Microsoft. TiffaCraft is
          an independent channel and is not affiliated with or endorsed by
          Mojang or Microsoft.
        </p>
        <p>
          Video titles and series names on this site may be placeholders until
          the matching YouTube Shorts are published. Do not rely on this stub
          as a complete terms of use.
        </p>
      </div>
      <p className="mt-8 text-sm">
        <Link href="/legal" className="font-semibold text-moss-deep">
          Back to legal
        </Link>
      </p>
    </article>
  );
}
