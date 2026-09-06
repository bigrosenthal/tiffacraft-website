import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { VideosExplorer } from "@/components/videos-explorer";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Feature Shorts from TiffaCraft: Do Not Watch Alone, Minecraft Memes That Hit Different, and Moonlit Promise.",
};

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <PageHero eyebrow="Videos" title="Feature Shorts">
        Placeholders today, little hauntings tomorrow. Horror, meme, and soft
        story Shorts — all dressed in moss and lantern light.
      </PageHero>
      <VideosExplorer />
    </div>
  );
}
