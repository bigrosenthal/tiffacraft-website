"use client";

import { useMemo, useState } from "react";
import { ShortCard } from "@/components/short-card";
import {
  categoryLabels,
  featuredShorts,
  type ShortCategory,
} from "@/lib/content";

const filters: Array<"all" | ShortCategory> = ["all", "horror", "meme", "story"];

export function VideosExplorer() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");

  const shorts = useMemo(() => {
    if (filter === "all") return featuredShorts;
    return featuredShorts.filter((short) => short.category === filter);
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
              filter === value
                ? "bg-moss-deep text-cream"
                : "bg-cream-deep text-ink-soft hover:bg-mint"
            }`}
          >
            {value === "all" ? "All Shorts" : categoryLabels[value]}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shorts.map((short) => (
          <ShortCard key={short.slug} short={short} />
        ))}
      </div>
    </div>
  );
}
