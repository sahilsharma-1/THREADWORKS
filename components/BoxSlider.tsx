"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { img } from "@/lib/custom";

type Slide = { title: string; sub: string; img: string; color: string };

export default function BoxSlider({ title, sticker, slides, tone = "lime" }: { title: string; sticker?: string; slides: Slide[]; tone?: "lime" | "pink" }) {
  const track = useRef<HTMLDivElement>(null);
  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + 24), behavior: "smooth" });
  };
  const blob = tone === "lime" ? "bg-lime/40" : "bg-pink/25";

  return (
    <section className="relative mt-20 md:mt-28">
      <div aria-hidden className={`pointer-events-none absolute -z-10 top-10 right-[10%] size-[420px] rounded-full ${blob} blur-3xl`} />
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 flex items-end justify-between gap-4 mb-8">
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="display text-[48px] md:text-[80px]">{title}</h2>
          {sticker && <span className="sticker bg-sun text-ink -rotate-6" style={{ ["--shadow" as string]: "var(--color-pink)" }}>{sticker}</span>}
        </div>
        <div className="hidden sm:flex gap-2 shrink-0">
          <button onClick={() => go(-1)} aria-label="Previous" className="glass size-12 rounded-full grid place-items-center text-xl font-bold hover:bg-white">←</button>
          <button onClick={() => go(1)} aria-label="Next" className="size-12 rounded-full grid place-items-center text-xl font-bold bg-pink text-white hover:bg-[#e8318f]">→</button>
        </div>
      </div>

      <div ref={track} className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 md:px-8 pb-6 scroll-px-4 md:scroll-px-8">
        {slides.map((s) => (
          <Link key={s.title} href="#quote" data-slide className="group snap-start shrink-0 w-[78vw] sm:w-[44vw] lg:w-[30vw] xl:w-[25vw]">
            <div className="pop relative aspect-square overflow-hidden bg-mist" style={{ ["--pop" as string]: s.color }}>
              <Image src={img(s.img, 900)} alt={s.title} fill sizes="(min-width:1280px) 25vw, (min-width:1024px) 30vw, 78vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="glass absolute inset-x-3 bottom-3 rounded-[20px] px-4 py-3.5 flex items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-lg leading-tight">{s.title}</p>
                  <p className="text-sm text-ink/75 mt-0.5">{s.sub}</p>
                </div>
                <span className="size-10 shrink-0 rounded-full bg-paper grid place-items-center font-bold transition-transform group-hover:rotate-45">↗</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
