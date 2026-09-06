import Link from "next/link";
import { CreeperMark } from "@/components/creeper-mark";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/videos", label: "Videos" },
  { href: "/playlists", label: "Playlists" },
  { href: "/about", label: "About" },
  { href: "/merch", label: "Merch" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/legal", label: "Legal" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-moss-deep/10 bg-cream-deep/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CreeperMark className="h-8 w-8 rounded-lg" />
            <p className="font-display text-lg text-ink">{siteConfig.name}</p>
          </div>
          <p className="max-w-md text-sm leading-6 text-ink-soft">
            {siteConfig.tagline}
          </p>
          <a
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm font-semibold text-moss-deep underline decoration-sage underline-offset-4 hover:text-moss"
          >
            YouTube {siteConfig.handle}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">
            Wander
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink hover:text-moss-deep">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/legal/privacy" className="text-ink hover:text-moss-deep">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/legal/terms" className="text-ink hover:text-moss-deep">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-moss-deep/10 px-4 py-4 text-center text-xs text-ink-soft">
        © {new Date().getFullYear()} {siteConfig.name}. Soft worlds, gentle hiss.
      </p>
    </footer>
  );
}
