"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CreeperMark } from "@/components/creeper-mark";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-moss-deep/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <CreeperMark className="h-9 w-9 rounded-lg shadow-sm" />
          <span className="leading-tight">
            <span className="font-display block text-lg tracking-wide text-ink">
              {siteConfig.name}
            </span>
            <span className="text-xs text-ink-soft">{siteConfig.handle}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active
                    ? "bg-moss text-cream"
                    : "text-ink-soft hover:bg-mint hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/subscribe"
            className="hidden rounded-full bg-moss-deep px-4 py-2 text-sm font-semibold text-cream shadow-sm transition hover:bg-moss sm:inline-flex"
          >
            Subscribe
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-moss-deep/15 bg-cream-deep text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-4 bg-ink" />
              <span className="block h-0.5 w-4 bg-ink" />
              <span className="block h-0.5 w-4 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-moss-deep/10 bg-cream px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-ink hover:bg-mint"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/subscribe"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-moss-deep px-3 py-2 text-center font-semibold text-cream"
            >
              Subscribe
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
