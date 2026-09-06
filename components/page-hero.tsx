import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <header className="mx-auto max-w-3xl px-4 pt-12 pb-8 text-center sm:px-6 sm:pt-16">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.2em] text-moss-deep uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display mt-3 text-4xl text-ink sm:text-5xl">{title}</h1>
      <div className="mt-4 text-base leading-7 text-ink-soft">{children}</div>
    </header>
  );
}
