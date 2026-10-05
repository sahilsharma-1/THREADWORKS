"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product, inr } from "@/lib/products";
import { HeartIcon } from "./Icons";

// Each card picks a pop colour from the palette so a grid reads like a sticker sheet.
const POPS = ["var(--color-lime)", "var(--color-pink)", "var(--color-blue)", "var(--color-sun)", "var(--color-lilac)", "var(--color-orange)"];
const TAGS: Record<string, string> = { New: "bg-lime text-ink", "Best seller": "bg-pink text-white", Limited: "bg-sun text-ink" };

const hash = (s: string) => [...s].reduce((a, c) => a + c.charCodeAt(0), 0);

export default function ProductCard({ p, priority = false }: { p: Product; priority?: boolean }) {
  const [liked, setLiked] = useState(false);
  const off = p.mrp ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0;
  const pop = POPS[hash(p.slug) % POPS.length];

  return (
    <article className="group relative">
      <Link href={`/product/${p.slug}`} className="block">
        <div
          className="relative aspect-[3/4] bg-mist overflow-hidden rounded-[24px] transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0_0_var(--pop)]"
          style={{ ["--pop" as string]: pop }}
        >
          <Image src={p.image} alt={p.name} fill priority={priority} sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
          {p.tag && <span className={`sticker absolute left-3 top-3 -rotate-3 ${TAGS[p.tag]}`} style={{ ["--shadow" as string]: "var(--color-ink)" }}>{p.tag}</span>}
          {off > 0 && <span className="absolute right-3 bottom-3 grid place-items-center size-14 rounded-full bg-sun text-ink text-sm font-extrabold rotate-12 leading-none text-center">-{off}%</span>}
        </div>
      </Link>
      <button onClick={() => setLiked((v) => !v)} aria-pressed={liked} aria-label={liked ? "Remove from wishlist" : "Add to wishlist"} className={`absolute right-3 top-3 grid place-items-center size-10 rounded-full bg-paper/90 ${liked ? "text-pink" : "text-ink"}`}>
        <HeartIcon className="size-5" filled={liked} />
      </button>
      <div className="pt-4 space-y-1">
        <div className="flex items-center justify-between gap-2">
          <Link href={`/product/${p.slug}`} className="text-[16px] leading-snug font-semibold hover:text-blue">{p.name}</Link>
        </div>
        <p className="flex items-baseline gap-2">
          <span className="text-lg font-extrabold tabular-nums">{inr(p.price)}</span>
          {p.mrp && <span className="text-sm text-stone line-through tabular-nums">{inr(p.mrp)}</span>}
        </p>
        <div className="flex gap-1.5 pt-1" aria-label={`Colours: ${p.colors.map((c) => c.name).join(", ")}`}>
          {p.colors.map((c) => (
            <span key={c.name} title={c.name} className="size-4 rounded-full ring-2 ring-paper outline outline-1 outline-line" style={{ background: c.hex }} />
          ))}
        </div>
      </div>
    </article>
  );
}
