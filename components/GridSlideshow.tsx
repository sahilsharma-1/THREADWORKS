"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { img, CUSTOM } from "@/lib/custom";
import { STORE } from "@/lib/products";

// Each tile cycles through its own photos. Tiles change one at a time, so the grid feels alive without flashing.
const TILES: { area: string; label: string; color: string; shots: string[]; mobile?: boolean }[] = [
  { area: "a", label: "Sports teams", color: "bg-lime text-ink", shots: ["1517466787929-bc90951d0974", "1543326727-cf6c39e8f84c", "1624526267942-ab0ff8a3e972"], mobile: true },
  { area: "b", label: "College fests", color: "bg-pink text-white", shots: ["1492684223066-81342ee5ff30", "1533174072545-7a4b6ad7a6c3"], mobile: true },
  { area: "c", label: "Batch tees", color: "bg-sun text-ink", shots: ["1529156069898-49953e39b3ac", "1511632765486-a01980e01a18"], mobile: true },
  { area: "d", label: "Printed in Jaipur", color: "bg-blue text-white", shots: ["1576871337622-98d48d1cf531", "1562157873-818bc0726f68", "1586363104862-3a5e2ab60d99"], mobile: true },
  { area: "e", label: "Kids academies", color: "bg-orange text-white", shots: ["1526232761682-d26e03ac148e", "1546519638-68e109498ffc"], mobile: true },
  { area: "f", label: "Graduation", color: "bg-lilac text-ink", shots: ["1541339907198-e08756dedf3f", "1517486808906-6ca8b3f04846"], mobile: true },
];

export default function GridSlideshow() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setTick((t) => t + 1), 1600);
    return () => clearInterval(id);
  }, []);

  // Tile i advances every time the tick lands on it: one tile changes per beat.
  const frame = (i: number, n: number) => Math.floor((tick + (TILES.length - 1 - i)) / TILES.length) % n;

  return (
    <section className="relative px-3 md:px-6 pt-3 md:pt-5">
      <div className="hero-grid">
        {TILES.map((t, i) => {
          const f = frame(i, t.shots.length);
          return (
            <div key={t.area} style={{ gridArea: t.area }} className={`relative overflow-hidden rounded-[22px] md:rounded-[28px] bg-mist ${t.mobile ? "" : "hidden md:block"}`}>
              {t.shots.map((s, j) => (
                <Image
                  key={s}
                  src={img(s, t.area === "a" ? 1400 : 800)}
                  alt=""
                  fill
                  priority={j === 0 && i < 4}
                  sizes={t.area === "a" ? "(min-width:768px) 42vw, 100vw" : "(min-width:768px) 25vw, 50vw"}
                  className={`object-cover transition-all duration-[1200ms] ${j === f ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                />
              ))}
              <span className={`absolute left-3 top-3 md:left-4 md:top-4 rounded-full px-3 py-1.5 text-xs md:text-[13px] font-bold ${t.color}`}>{t.label}</span>
            </div>
          );
        })}

        {/* Text tile: frosted glass over a blurred stack of colourful tees */}
        <div style={{ gridArea: "g" }} className="relative overflow-hidden rounded-[22px] md:rounded-[28px]">
          <Image src={img("1586363104862-3a5e2ab60d99", 900)} alt="" fill sizes="45vw" className="object-cover scale-125 blur-[2px]" />
          <div aria-hidden className="absolute -left-10 -bottom-16 size-72 rounded-full bg-pink/70 blur-3xl" />
          <div aria-hidden className="absolute right-0 -top-10 size-64 rounded-full bg-lime/80 blur-3xl" />
          <div className="glass absolute inset-2.5 md:inset-3 rounded-[18px] md:rounded-[22px] p-5 md:p-7 flex flex-col justify-center">
            <h1 className="display text-[38px] sm:text-[44px] xl:text-[52px]">custom tees for your squad.</h1>
            <p className="mt-2 text-sm md:text-[15px] font-semibold text-ink/80 max-w-md">Teams, fests, schools and companies. From {CUSTOM.minQty} pieces with a free mockup.</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Link href="#quote" className="rounded-full bg-pink text-white px-5 py-3 font-bold shadow-[3px_3px_0_0_var(--color-blue)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--color-blue)] transition">Get a quote</Link>
              <a href={`https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent("Hi! I want custom t-shirts printed.")}`} target="_blank" rel="noopener" className="rounded-full bg-white/80 px-5 py-3 font-bold hover:bg-white">WhatsApp us</a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
