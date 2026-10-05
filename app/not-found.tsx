import Link from "next/link";
export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-24">
      <h1 className="display text-6xl md:text-8xl">Page not found</h1>
      <p className="text-stone mt-4">This link may be old. The new collection is a click away.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/women" className="rounded-full px-6 py-3 bg-pink text-white font-semibold">Shop women</Link>
        <Link href="/men" className="rounded-full px-6 py-3 border border-ink font-semibold">Shop men</Link>
      </div>
    </div>
  );
}
