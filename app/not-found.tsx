import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-moss-deep uppercase">
        404
      </p>
      <h1 className="font-display mt-3 text-4xl">This chunk is empty</h1>
      <p className="mt-3 text-ink-soft">
        The path wandered into unloaded terrain. Try the cottage door instead.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-moss-deep px-5 py-2.5 text-sm font-semibold text-cream"
      >
        Back home
      </Link>
    </div>
  );
}
