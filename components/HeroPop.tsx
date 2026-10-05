"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { bySlug, Gender, inr } from "@/lib/products";

const SETS: Record<Gender, { slugs: [string, string, string]; line: string; href: string }> = {
  women: { slugs: ["striped-wide-leg-trousers", "fleece-co-ord-set", "ruffle-party-top"], line: "Co-ords, denim, kurtis and party tops", href: "/women" },
  men: { slugs: ["utility-overshirt-men", "faux-leather-biker-jacket", "contrast-stitch-t-shirt"], line: "Oversized tees, overshirts and jackets", href: "/men" },
  kids: { slugs: ["kids-cardigan-party-set", "kids-casual-tee-set", "kids-printed-denim-shirt"], line: "Party sets and soft cotton, ages 2 to 11", href: "/kids" },
};

const TABS: { key: Gender; label: string; color: string }[] = [
  { key: "women", label: "Women", color: "bg-pink text-white" },
  { key: "men", label: "Men", color: "bg-blue text-white" },
  { key: "kids", label: "Kids", color: "bg-sun text-ink" },
];

// Three cards: big centre-left, two stacked right. Each sits on a different colour.
const CARDS = [
  { box: "col-span-7 row-span-2 aspect-[3/4]", r: "-3deg", pop: "var(--color-lime)", tag: "bg-sun text-ink", shadow: "var(--color-pink)" },
  { box: "col-span-5 aspect-[4/5]", r: "4deg", pop: "var(--color-pink)", tag: "bg-lime text-ink", shadow: "var(--color-blue)" },
  { box: "col-span-5 aspect-[4/5]", r: "-2deg", pop: "var(--color-blue)", tag: "bg-pink text-white", shadow: "var(--color-sun)" },
];

export default function HeroPop() {
  const [g, setG] = useState<Gender>("women");
  const set = SETS[g];

  return (
    <section className="relative overflow-hidden">
      {/* soft colour blobs on white */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[620px] rounded-full bg-lilac/35 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 size-[520px] rounded-full bg-sun/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 left-1/3 size-[360px] rounded-full bg-pink/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-4 md:px-8 pt-10 md:pt-16 pb-16 md:pb-24 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center">
        <div className="relative">
          <span className="sticker bg-lime text-ink wobble absolute -top-2 right-4 md:right-24 z-10" style={{ ["--r" as string]: "8deg", ["--shadow" as string]: "var(--color-pink)" }}>new drop ✦ live now</span>
          <h1 className="display text-[84px] sm:text-[124px] xl:text-[164px]">
            dress<br />loud.
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-medium max-w-md leading-snug">
            Fits that say it before you do. {set.line}, from {inr(549)}.
          </p>

          <div role="tablist" aria-label="Shop for" className="mt-8 flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={g === t.key}
                onClick={() => setG(t.key)}
                className={`px-6 py-3 rounded-full text-base font-bold transition-transform ${g === t.key ? `${t.color} -rotate-2 shadow-[3px_3px_0_0_var(--color-ink)]` : "bg-mist hover:bg-line"}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href={set.href} className="rounded-full bg-pink text-white px-8 py-4 text-lg font-bold shadow-[4px_4px_0_0_var(--color-blue)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-blue)] transition">
              Shop {g}
            </Link>
            <span className="text-stone font-medium">Free delivery over {inr(999)}</span>
          </div>
        </div>

        <div key={g} className="relative grid grid-cols-12 gap-5 md:gap-7 px-2 md:px-6">
          {set.slugs.map((slug, i) => {
            const p = bySlug(slug)!;
            const c = CARDS[i];
            return (
              <Link
                key={slug}
                href={`/product/${slug}`}
                className={`group relative ${c.box} ${i === 2 ? "-mt-4" : ""}`}
                style={{ ["--r" as string]: c.r, transform: `rotate(${c.r})`, animation: `rise .6s ${i * 0.12}s cubic-bezier(.2,.8,.2,1) both` }}
              >
                <div className="pop relative size-full overflow-hidden bg-mist" style={{ ["--pop" as string]: c.pop }}>
                  <Image src={p.image} alt={p.name} fill priority={i === 0} sizes="(min-width:1024px) 30vw, 60vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <span className={`sticker absolute -bottom-3 left-4 ${c.tag}`} style={{ ["--shadow" as string]: c.shadow }}>
                  {inr(p.price)}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
