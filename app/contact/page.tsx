import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Say hello to TiffaCraft — or hop over to YouTube @TiffaCraft.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
      <PageHero eyebrow="Contact" title="Leave a note on the crafting table">
        Brand, collab, or just a soft hello. This form is a placeholder — YouTube
        is still the front door.
      </PageHero>
      <ContactForm />
      <p className="mt-6 text-center text-sm text-ink-soft">
        Prefer the loud way?{" "}
        <a
          href={siteConfig.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-moss-deep"
        >
          {siteConfig.handle} on YouTube
        </a>
      </p>
    </div>
  );
}
