"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-3xl border border-moss/30 bg-mint/70 p-6 text-ink"
        role="status"
      >
        <p className="font-display text-2xl">Note tucked in the chest.</p>
        <p className="mt-2 text-sm leading-6 text-ink-soft">
          This contact form is a placeholder — the fastest hello is still a
          comment or message on{" "}
          <a
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-moss-deep underline underline-offset-4"
          >
            YouTube {siteConfig.handle}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-3xl border border-moss-deep/10 bg-cream p-6 shadow-[0_10px_30px_rgba(61,90,50,0.08)]"
    >
      <label className="block text-sm font-semibold text-ink">
        Name
        <input
          name="name"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-2xl border border-moss-deep/15 bg-cream-deep/50 px-4 py-3 text-base font-normal outline-none focus:border-moss"
        />
      </label>
      <label className="block text-sm font-semibold text-ink">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-2xl border border-moss-deep/15 bg-cream-deep/50 px-4 py-3 text-base font-normal outline-none focus:border-moss"
        />
      </label>
      <label className="block text-sm font-semibold text-ink">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-2xl border border-moss-deep/15 bg-cream-deep/50 px-4 py-3 text-base font-normal outline-none focus:border-moss"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-moss-deep px-5 py-2.5 text-sm font-semibold text-cream hover:bg-moss"
      >
        Send a soft hello
      </button>
    </form>
  );
}
