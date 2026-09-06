import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from the TiffaCraft cottage — channel welcome and the Do Not Watch Alone series.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <PageHero eyebrow="Blog" title="Notes from the lantern">
        Short posts about the channel, the horror shelf, and the soft creeper
        life.
      </PageHero>
      <div className="mx-auto grid max-w-3xl gap-5">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-3xl border border-moss-deep/10 bg-cream p-6 shadow-[0_10px_30px_rgba(61,90,50,0.06)]"
          >
            <p className="text-xs text-ink-soft">{post.date}</p>
            <h2 className="font-display mt-2 text-3xl">
              <Link href={`/blog/${post.slug}`} className="hover:text-moss-deep">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink-soft">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-mint px-2.5 py-1 text-[11px] font-semibold text-moss-deep"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
