import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/videos",
    "/playlists",
    "/about",
    "/merch",
    "/blog",
    "/contact",
    "/subscribe",
    "/legal",
    "/legal/privacy",
    "/legal/terms",
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
