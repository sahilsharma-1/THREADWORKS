import { notFound } from "next/navigation";
import Link from "next/link";
import { POLICIES } from "@/lib/policies";
import { STORE } from "@/lib/products";

export function generateStaticParams() {
  return POLICIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = POLICIES.find((x) => x.slug === slug);
  return p ? { title: p.title } : {};
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = POLICIES.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-10 md:py-16 grid md:grid-cols-[220px_1fr] gap-10">
      <nav aria-label="Policies" className="space-y-2 text-sm">
        {POLICIES.map((x) => (
          <Link key={x.slug} href={`/policies/${x.slug}`} className={`block py-1 ${x.slug === p.slug ? "font-semibold" : "text-stone hover:text-ink"}`}>{x.title}</Link>
        ))}
      </nav>
      <article className="max-w-[68ch]">
        <h1 className="display text-4xl md:text-6xl mb-8">{p.title}</h1>
        <ul className="space-y-4 leading-relaxed">
          {p.body.map((b) => <li key={b} className="pl-5 relative before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:bg-pink before:rounded-full">{b}</li>)}
        </ul>
        <p className="mt-10 text-sm text-stone">Questions? Email <a className="underline" href={`mailto:${STORE.email}`}>{STORE.email}</a> or call {STORE.phone}.</p>
        <p className="mt-2 text-xs text-stone">{STORE.legal}. GSTIN {STORE.gstin}.</p>
      </article>
    </div>
  );
}
