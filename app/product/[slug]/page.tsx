import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BuyBox from "@/components/BuyBox";
import Rail from "@/components/Rail";
import { bySlug, products, GENDERS } from "@/lib/products";
import { POLICIES } from "@/lib/policies";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = bySlug((await params).slug);
  return p ? { title: p.name, description: p.description, openGraph: { images: [p.image] } } : {};
}

const SIZE_GUIDE = [
  ["S", "36", "28-30"], ["M", "38-40", "30-32"], ["L", "42", "32-34"], ["XL", "44", "34-36"], ["XXL", "46", "36-38"],
];

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = bySlug((await params).slug);
  if (!p) notFound();
  const g = GENDERS.find((x) => x.key === p.gender)!;
  const related = products.filter((x) => x.slug !== p.slug && (x.category === p.category || x.gender === p.gender)).slice(0, 4);
  const returns = POLICIES.find((x) => x.slug === "returns")!;

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <nav aria-label="Breadcrumb" className="py-4 text-sm text-stone flex gap-2">
          <Link href="/" className="hover:text-ink">Home</Link><span>/</span>
          <Link href={`/${g.key}`} className="hover:text-ink">{g.label}</Link><span>/</span>
          <Link href={`/${g.key}?category=${encodeURIComponent(p.category)}`} className="hover:text-ink">{p.category}</Link>
        </nav>

        <div className="grid md:grid-cols-[1.25fr_1fr] gap-8 md:gap-14">
          <div className="grid grid-cols-2 gap-2 md:gap-3 self-start">
            <div className="relative col-span-2 aspect-[4/5] bg-mist rounded-[22px] overflow-hidden">
              <Image src={p.image} alt={p.name} fill priority sizes="(min-width:768px) 55vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-square bg-mist overflow-hidden rounded-[18px]">
              <Image src={p.image} alt={`${p.name}, detail`} fill sizes="(min-width:768px) 27vw, 50vw" className="object-cover scale-150 object-center" />
            </div>
            <div className="relative aspect-square bg-mist overflow-hidden rounded-[18px]">
              <Image src={p.image} alt={`${p.name}, fabric close-up`} fill sizes="(min-width:768px) 27vw, 50vw" className="object-cover scale-[2.2] object-[50%_60%]" />
            </div>
          </div>

          <div className="md:sticky md:top-28 self-start pb-8">
            <BuyBox p={p} />

            <div className="mt-10 border-t border-line">
              <details open className="border-b border-line group">
                <summary className="list-none cursor-pointer flex justify-between py-4 font-semibold">Details<span className="group-open:rotate-45 transition">+</span></summary>
                <div className="pb-5 text-sm leading-relaxed space-y-2">
                  <p>{p.description}</p>
                  <p><span className="font-semibold">Fabric:</span> {p.fabric}</p>
                  <p><span className="font-semibold">Care:</span> Machine wash cold, inside out. Do not bleach.</p>
                </div>
              </details>
              <details id="size-guide" className="border-b border-line group">
                <summary className="list-none cursor-pointer flex justify-between py-4 font-semibold">Size guide<span className="group-open:rotate-45 transition">+</span></summary>
                <div className="pb-5 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="text-left border-b border-line"><th className="py-2 font-semibold">Size</th><th className="font-semibold">Chest (in)</th><th className="font-semibold">Waist (in)</th></tr></thead>
                    <tbody>{SIZE_GUIDE.map((r) => <tr key={r[0]} className="border-b border-line last:border-0"><td className="py-2">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody>
                  </table>
                </div>
              </details>
              <details className="border-b border-line group">
                <summary className="list-none cursor-pointer flex justify-between py-4 font-semibold">Returns and exchanges<span className="group-open:rotate-45 transition">+</span></summary>
                <ul className="pb-5 text-sm text-stone space-y-2">{returns.body.slice(0, 3).map((b) => <li key={b}>{b}</li>)}</ul>
              </details>
            </div>
          </div>
        </div>
      </div>
      <Rail title="You may also like" items={related} />
    </>
  );
}
