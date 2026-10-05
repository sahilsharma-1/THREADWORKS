"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Gender } from "@/lib/products";

const SLIDES: Record<Gender, { title: string; body: string; cta: string; href: string; image: string; tone: "light" | "dark"; pos: string }> = {
  women: {
    title: "The festive\nedit",
    body: "Anarkalis, sarees and kurtis cut for long evenings and every function on the calendar.",
    cta: "Shop ethnic wear",
    href: "/women?category=Ethnic",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1800&q=80",
    tone: "light",
    pos: "object-[50%_30%]",
  },
  men: {
    title: "Everyday\ncotton",
    body: "Heavyweight tees and fleece hoodies from ₹599. Made to be worn hard and washed often.",
    cta: "Shop men's tees",
    href: "/men?category=T-Shirts",
    image: "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?auto=format&fit=crop&w=1800&q=80",
    tone: "light",
    pos: "object-[50%_25%]",
  },
  kids: {
    title: "Ready for\nthe party",
    body: "Cardigan sets, soft cotton tees and shirts for ages 2 to 11.",
    cta: "Shop kids",
    href: "/kids",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1800&q=80",
    tone: "light",
    pos: "object-[50%_35%]",
  },
};

const ORDER: { key: Gender; label: string }[] = [
  { key: "women", label: "Women" },
  { key: "men", label: "Men" },
  { key: "kids", label: "Kids" },
];

export default function HeroTabs() {
  const [g, setG] = useState<Gender>("women");
  const s = SLIDES[g];

  return (
    <section aria-label="Featured collections" className="relative">
      <div role="tablist" aria-label="Shop by" className="flex justify-center gap-1 py-4 md:py-5">
        {ORDER.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={g === t.key}
            aria-controls="hero-panel"
            onClick={() => setG(t.key)}
            className={`px-6 md:px-10 py-2 text-[15px] md:text-base font-semibold border-b-2 transition-colors ${g === t.key ? "border-ink text-ink" : "border-transparent text-stone hover:text-ink"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div id="hero-panel" role="tabpanel" className="relative h-[78vh] min-h-[520px] max-h-[860px] overflow-hidden bg-mist">
        {ORDER.map((t) => (
          <Image
            key={t.key}
            src={SLIDES[t.key].image}
            alt=""
            fill
            priority={t.key === "women"}
            sizes="100vw"
            className={`object-cover ${SLIDES[t.key].pos} transition-opacity duration-700 ${g === t.key ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent md:bg-gradient-to-r md:from-black/50 md:via-black/10" />
        <div key={g} className="absolute inset-x-0 bottom-0 md:inset-y-0 md:right-auto flex flex-col justify-end md:justify-center p-6 md:p-16 text-white max-w-2xl animate-[rise_.6s_ease-out]">
          <h1 className="display whitespace-pre-line text-[56px] sm:text-[80px] md:text-[112px]">{s.title}</h1>
          <p className="mt-5 text-base md:text-lg max-w-md text-white/90">{s.body}</p>
          <div className="mt-7">
            <Link href={s.href} className="inline-block bg-paper text-ink px-7 py-3.5 font-semibold hover:bg-mist">{s.cta}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
