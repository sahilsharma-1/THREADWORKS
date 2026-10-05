"use client";

import { useState } from "react";
import { Product, inr, STORE } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { HeartIcon } from "./Icons";

export default function BuyBox({ p }: { p: Product }) {
  const { add } = useCart();
  const [color, setColor] = useState(p.colors[0].name);
  const [size, setSize] = useState<string | null>(p.sizes.length === 1 ? p.sizes[0] : null);
  const [qty, setQty] = useState(1);
  const [error, setError] = useState(false);
  const [liked, setLiked] = useState(false);
  const off = p.mrp ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;

  const onAdd = () => {
    if (!size) { setError(true); return; }
    add({ slug: p.slug, color, size }, qty);
  };

  return (
    <div>
      {p.tag && <span className="sticker bg-lime text-ink -rotate-3 mb-4" style={{ ["--shadow" as string]: "var(--color-pink)" }}>{p.tag}</span>}
      <h1 className="display text-[40px] md:text-[56px]">{p.name}</h1>
      <p className="mt-1 text-sm text-stone">{p.category}</p>

      <p className="mt-5 flex items-baseline gap-3">
        <span className={`text-3xl font-bold tabular-nums ${off ? "text-pink" : ""}`}>{inr(p.price)}</span>
        {p.mrp && <span className="text-stone line-through tabular-nums">MRP {inr(p.mrp)}</span>}
        {off > 0 && <span className="text-pink font-semibold">{off}% off</span>}
      </p>
      <p className="text-xs text-stone mt-1">Inclusive of all taxes</p>

      <div className="mt-8">
        <p className="text-sm"><span className="font-semibold">Colour:</span> {color}</p>
        <div className="mt-3 flex gap-2">
          {p.colors.map((c) => (
            <button key={c.name} onClick={() => setColor(c.name)} aria-label={c.name} aria-pressed={color === c.name} className={`size-11 p-1 rounded-full border-2 ${color === c.name ? "border-ink" : "border-transparent hover:border-line"}`}>
              <span className="block size-full rounded-full border border-line" style={{ background: c.hex }} />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7">
        <div className="flex justify-between text-sm">
          <p><span className="font-semibold">Size:</span> {size ?? "Select a size"}</p>
          <a href="#size-guide" className="underline underline-offset-2 text-stone">Size guide</a>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.sizes.map((s) => (
            <button key={s} onClick={() => { setSize(s); setError(false); }} aria-pressed={size === s} className={`min-w-14 h-12 px-3 rounded-xl border text-sm font-medium ${size === s ? "border-ink bg-pink text-white" : "border-line hover:border-ink"}`}>{s}</button>
          ))}
        </div>
        {error && <p role="alert" className="mt-2 text-sm text-pink">Choose a size to add this to your bag.</p>}
      </div>

      <div className="mt-7 flex gap-3">
        <div className="flex items-center rounded-full border border-line h-14">
          <button className="w-11 h-full" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
          <span className="w-8 text-center tabular-nums" aria-live="polite">{qty}</span>
          <button className="w-11 h-full" onClick={() => setQty((q) => Math.min(10, q + 1))} aria-label="Increase quantity">+</button>
        </div>
        <button onClick={onAdd} className="rounded-full flex-1 h-14 bg-pink text-white font-semibold hover:bg-[#e8318f]">Add to bag</button>
        <button onClick={() => setLiked((v) => !v)} aria-pressed={liked} aria-label="Save to wishlist" className={`size-14 rounded-full border border-line flex items-center justify-center ${liked ? "text-pink" : ""}`}>
          <HeartIcon filled={liked} />
        </button>
      </div>

      <a href={`https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(`Hi, I have a question about ${p.name} (${inr(p.price)})`)}`} target="_blank" rel="noopener" className="mt-3 flex items-center justify-center rounded-full h-12 border border-ink text-sm font-semibold">
        Ask about this on WhatsApp
      </a>

      <ul className="mt-6 text-sm text-stone space-y-1.5">
        <li>Free delivery over {inr(STORE.freeShippingAbove)}. Arrives in 2 to 7 business days.</li>
        <li>Return or exchange within 7 days of delivery.</li>
      </ul>
    </div>
  );
}
