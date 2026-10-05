"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { bySlug, Gender, inr, STORE } from "@/lib/products";

type Note = { slug: string; title: string; body: (price: string) => string; when: string };
type Slide = { photo: string; pos: string; cta: string; href: string; notes: Note[] };

const SLIDES: Record<Gender, Slide> = {
  women: {
    photo: "1583391733956-3750e0ff4e8b", pos: "object-[50%_25%]", cta: "Shop women", href: "/women",
    notes: [
      { slug: "anarkali-ethnic-gown", title: "Out for delivery", body: () => "Your Flared Anarkali Gown arrives today.", when: "now" },
      { slug: "six-pocket-women-jeans", title: "Back in your size", body: (p) => `Six Pocket Cargo Jeans, size 28. ${p}.`, when: "2m ago" },
      { slug: "cotton-frock-kurti-top", title: "Exchange approved", body: () => "Size L is on its way. Keep the M until pickup.", when: "1h ago" },
    ],
  },
  men: {
    photo: "1622519407650-3df9883f76a5", pos: "object-[50%_20%]", cta: "Shop men", href: "/men",
    notes: [
      { slug: "black-printed-t-shirt-men", title: "Order confirmed", body: (p) => `Printed Crew Neck T-Shirt, size L. ${p}, COD.`, when: "now" },
      { slug: "printing-hoodie-unisex", title: "Price dropped", body: (p) => `The Fleece Pullover Hoodie is now ${p}.`, when: "5m ago" },
      { slug: "slim-fit-stretch-jeans", title: "Dispatched", body: () => "Slim Fit Stretch Jeans left our Jaipur warehouse.", when: "3h ago" },
    ],
  },
  kids: {
    photo: "1503944583220-79d8926ad5e2", pos: "object-[50%_30%]", cta: "Shop kids", href: "/kids",
    notes: [
      { slug: "kids-cardigan-party-set", title: "Ready for the party", body: () => "Cardigan Party Set, 6-7Y. Arrives Friday.", when: "now" },
      { slug: "kids-casual-tee-set", title: "Free delivery unlocked", body: () => `Your bag is over ${inr(STORE.freeShippingAbove)}. Delivery is on us.`, when: "1m ago" },
      { slug: "kids-printed-denim-shirt", title: "Size tip", body: () => "Between sizes? Go one up, kids grow fast.", when: "20m ago" },
    ],
  },
};

const TABS: { key: Gender; label: string }[] = [
  { key: "women", label: "Women" }, { key: "men", label: "Men" }, { key: "kids", label: "Kids" },
];

const img = (id: string, w: number) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Placement of the three floating notifications around the portrait
const SPOTS = [
  "flex left-3 right-3 top-4 md:left-auto md:right-[52%] md:top-[14%] md:w-[340px]",
  "hidden sm:flex right-3 top-[38%] md:right-[-36px] md:top-[30%] w-[300px]",
  "flex left-3 right-3 bottom-4 md:left-auto md:right-[48%] md:bottom-[12%] md:w-[320px]",
];

export default function HeroConcierge() {
  const [g, setG] = useState<Gender>("women");
  const s = SLIDES[g];

  return (
    <section className="px-2 md:px-4 pt-2 md:pt-4">
      <div className="mesh-hero night relative overflow-hidden rounded-[28px] md:rounded-[36px]">
        <div className="mx-auto max-w-[1440px] grid lg:grid-cols-[1fr_1.05fr] gap-10 px-6 md:px-14 pt-12 md:pt-20 pb-10 md:pb-20">
          {/* Copy */}
          <div className="flex flex-col justify-center">
            <p className="text-white/60 text-sm md:text-base">New arrivals just dropped</p>
            <h1 className="display mt-4 text-[52px] sm:text-[76px] lg:text-[96px]">
              Clothes that<br />know you.
            </h1>
            <p className="mt-6 max-w-md text-lg text-white/75 leading-relaxed">{STORE.tagline}</p>

            <div role="tablist" aria-label="Shop by" className="mt-9 inline-flex self-start p-1 rounded-full glass-dark">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={g === t.key}
                  onClick={() => setG(t.key)}
                  className={`px-5 md:px-7 py-2.5 rounded-full text-sm md:text-[15px] font-semibold transition-colors ${g === t.key ? "bg-white text-ink" : "text-white/75 hover:text-white"}`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={s.href} className="px-7 py-3.5 rounded-full bg-white text-ink font-semibold hover:bg-white/90">{s.cta}</Link>
              <a href={`https://wa.me/${STORE.whatsapp}`} target="_blank" rel="noopener" className="px-7 py-3.5 rounded-full border border-white/30 font-semibold hover:bg-white/10">Chat on WhatsApp</a>
            </div>
          </div>

          {/* Portrait with floating notifications */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-h-[680px] w-full md:w-[78%] md:ml-auto rounded-[24px] overflow-hidden bg-white/5 ring-1 ring-white/10">
              {TABS.map((t) => (
                <Image
                  key={t.key}
                  src={img(SLIDES[t.key].photo, 1200)}
                  alt=""
                  fill
                  priority={t.key === "women"}
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className={`object-cover ${SLIDES[t.key].pos} transition-opacity duration-700 ${g === t.key ? "opacity-100" : "opacity-0"}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div key={g} aria-live="polite">
              {s.notes.map((n, i) => {
                const p = bySlug(n.slug)!;
                return (
                  <Link
                    href={`/product/${p.slug}`}
                    key={n.slug}
                    className={`notif glass absolute z-10 items-center gap-3 rounded-[18px] p-3 pr-4 text-ink ${SPOTS[i]}`}
                    style={{ animationDelay: `${0.15 + i * 0.18}s, ${i * 1.2}s` }}
                  >
                    <span className="relative size-12 shrink-0 rounded-xl overflow-hidden bg-mist">
                      <Image src={p.image} alt="" fill sizes="48px" className="object-cover" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2 text-[11px] text-stone">
                        <span className="flex items-center gap-1.5"><span className="size-3.5 rounded-[4px] bg-gulabi" aria-hidden />Raw Business</span>
                        <span>{n.when}</span>
                      </span>
                      <span className="block text-[13px] font-semibold mt-0.5">{n.title}</span>
                      <span className="block text-[13px] text-ink/75 leading-snug truncate">{n.body(inr(p.price))}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
