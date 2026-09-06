import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "TiffaCraft privacy stub.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-moss-deep uppercase">
        Legal stub
      </p>
      <h1 className="font-display mt-3 text-4xl">Privacy</h1>
      <div className="mt-6 space-y-4 text-sm leading-7 text-ink-soft">
        <p>
          This is a public marketing website for the TiffaCraft YouTube channel.
          It does not require an account and does not intentionally collect
          personal information through a live backend.
        </p>
        <p>
          The contact form is a front-end placeholder. Submitted notes are not
          stored on a server in this starter. YouTube, Vercel, and your browser
          may collect standard analytics or logs according to their own
          policies.
        </p>
        <p>
          If you follow a link to YouTube, Google’s privacy terms apply on that
          site. Replace this stub before treating the site as a production
          legal document.
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
