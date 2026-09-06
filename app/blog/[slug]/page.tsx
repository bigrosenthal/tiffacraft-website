import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Note" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.18em] text-moss-deep uppercase">
        {post.date}
      </p>
      <h1 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 text-lg text-ink-soft">{post.excerpt}</p>
      <div className="mt-8 space-y-5 text-base leading-8 text-ink">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-10">
        <Link href="/blog" className="text-sm font-semibold text-moss-deep">
          Back to the blog
        </Link>
      </p>
    </article>
  );
}
