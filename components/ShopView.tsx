"use client";

import { useMemo, useState } from "react";
import { Product, inr } from "@/lib/products";
import ProductCard from "./ProductCard";
import { CloseIcon } from "./Icons";

type Sort = "featured" | "new" | "low" | "high";
const PRICE_BANDS = [
  { key: "u1000", label: `Under ${inr(1000)}`, test: (n: number) => n < 1000 },
  { key: "1to2", label: `${inr(1000)} to ${inr(2000)}`, test: (n: number) => n >= 1000 && n <= 2000 },
  { key: "o2000", label: `Over ${inr(2000)}`, test: (n: number) => n > 2000 },
];

export default function ShopView({ items, initialCategory, initialMax }: { items: Product[]; initialCategory?: string; initialMax?: number }) {
  const categories = useMemo(() => Array.from(new Set(items.map((p) => p.category))), [items]);
  const sizes = useMemo(() => Array.from(new Set(items.flatMap((p) => p.sizes))), [items]);

  const [cats, setCats] = useState<string[]>(initialCategory && categories.includes(initialCategory) ? [initialCategory] : []);
  const [sz, setSz] = useState<string[]>([]);
  const [bands, setBands] = useState<string[]>(initialMax && initialMax < 1000 ? ["u1000"] : []);
  const [sort, setSort] = useState<Sort>("featured");
  const [panel, setPanel] = useState(false);

  const toggle = (list: string[], set: (v: string[]) => void, v: string) => set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const shown = useMemo(() => {
    let r = items.filter(
      (p) =>
        (!cats.length || cats.includes(p.category)) &&
        (!sz.length || p.sizes.some((s) => sz.includes(s))) &&
        (!bands.length || PRICE_BANDS.filter((b) => bands.includes(b.key)).some((b) => b.test(p.price)))
    );
    if (sort === "low") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "high") r = [...r].sort((a, b) => b.price - a.price);
    if (sort === "new") r = [...r].sort((a, b) => Number(b.tag === "New") - Number(a.tag === "New"));
    return r;
  }, [items, cats, sz, bands, sort]);

  const active = cats.length + sz.length + bands.length;
  const reset = () => { setCats([]); setSz([]); setBands([]); };

  const Filters = (
    <div className="space-y-8">
      <fieldset>
        <legend className="font-semibold mb-3">Category</legend>
        <div className="space-y-2.5">
          {categories.map((c) => (
            <label key={c} className="flex items-center gap-3 text-sm cursor-pointer">
              <input type="checkbox" checked={cats.includes(c)} onChange={() => toggle(cats, setCats, c)} className="size-4 accent-pink" />
              {c}
              <span className="text-stone ml-auto">{items.filter((p) => p.category === c).length}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="font-semibold mb-3">Size</legend>
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <button key={s} type="button" aria-pressed={sz.includes(s)} onClick={() => toggle(sz, setSz, s)} className={`min-w-11 h-10 px-2 text-sm border ${sz.includes(s) ? "border-ink bg-pink text-white" : "border-line hover:border-ink"}`}>{s}</button>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="font-semibold mb-3">Price</legend>
        <div className="space-y-2.5">
          {PRICE_BANDS.map((b) => (
            <label key={b.key} className="flex items-center gap-3 text-sm cursor-pointer">
              <input type="checkbox" checked={bands.includes(b.key)} onChange={() => toggle(bands, setBands, b.key)} className="size-4 accent-pink" />
              {b.label}
            </label>
          ))}
        </div>
      </fieldset>
      {active > 0 && <button onClick={reset} className="text-sm underline underline-offset-4">Clear all filters</button>}
    </div>
  );

  return (
    <div className="md:grid md:grid-cols-[220px_1fr] md:gap-10">
      <aside className="hidden md:block sticky top-28 self-start" aria-label="Filters">{Filters}</aside>

      <div>
        <div className="flex items-center justify-between gap-3 mb-6 sticky top-16 md:static z-10 bg-paper py-3 md:py-0 -mx-4 px-4 md:mx-0 md:px-0 border-b border-line md:border-0">
          <button onClick={() => setPanel(true)} className="md:hidden rounded-full h-10 px-4 border border-ink text-sm font-semibold">Filter{active ? ` (${active})` : ""}</button>
          <p className="hidden md:block text-sm text-stone">{shown.length} {shown.length === 1 ? "item" : "items"}</p>
          <label className="flex items-center gap-2 text-sm">
            <span className="text-stone">Sort by</span>
            <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="h-10 border border-line px-2 bg-paper">
              <option value="featured">Featured</option>
              <option value="new">New arrivals</option>
              <option value="low">Price, low to high</option>
              <option value="high">Price, high to low</option>
            </select>
          </label>
        </div>

        {shown.length ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {shown.map((p, i) => <ProductCard key={p.slug} p={p} priority={i < 4} />)}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-semibold text-lg">No items match these filters</p>
            <p className="text-stone text-sm mt-1">Remove a size or price filter to see more styles.</p>
            <button onClick={reset} className="mt-5 rounded-full px-6 py-3 bg-pink text-white text-sm font-semibold">Clear all filters</button>
          </div>
        )}
      </div>

      {panel && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Filters">
          <div className="absolute inset-0 bg-black/40" onClick={() => setPanel(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] bg-paper flex flex-col">
            <div className="flex items-center justify-between px-5 h-14 border-b border-line">
              <p className="font-semibold">Filter</p>
              <button onClick={() => setPanel(false)} aria-label="Close filters"><CloseIcon /></button>
            </div>
            <div className="overflow-y-auto p-5">{Filters}</div>
            <div className="p-4 border-t border-line">
              <button onClick={() => setPanel(false)} className="w-full rounded-full py-3.5 bg-pink text-white font-semibold">Show {shown.length} items</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
