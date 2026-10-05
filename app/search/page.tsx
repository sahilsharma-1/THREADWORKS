import type { Metadata } from "next";
import ShopView from "@/components/ShopView";
import { products } from "@/lib/products";
import SearchBox from "@/components/SearchBox";

export const metadata: Metadata = { title: "Search" };

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string; max?: string }> }) {
  const { q = "", max } = await searchParams;
  const term = q.trim().toLowerCase();
  const items = term
    ? products.filter((p) => [p.name, p.category, p.gender, p.fabric, ...p.colors.map((c) => c.name)].join(" ").toLowerCase().includes(term.replace(/s$/, "")))
    : products;

  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-8">
      <div className="py-8 md:py-12 space-y-5">
        <h1 className="display text-4xl md:text-6xl">{term ? `Results for “${q}”` : "All styles"}</h1>
        <SearchBox initial={q} />
      </div>
      {items.length ? (
        <ShopView key={`${term}-${max}`} items={items} initialMax={max ? Number(max) : undefined} />
      ) : (
        <div className="py-16">
          <p className="font-semibold text-lg">Nothing matches “{q}”</p>
          <p className="text-stone text-sm mt-1">Try a simpler word like tee, hoodie, kurti or jeans.</p>
        </div>
      )}
    </div>
  );
}
