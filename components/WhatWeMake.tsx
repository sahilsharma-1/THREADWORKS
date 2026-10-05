import Image from "next/image";
import { GARMENTS, PRINTS, img, CUSTOM } from "@/lib/custom";

export default function WhatWeMake() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 md:px-8 mt-20 md:mt-28 grid lg:grid-cols-2 gap-6">
      <div className="relative rounded-[32px] overflow-hidden min-h-[460px] bg-sun">
        <Image src={img("1576871337622-98d48d1cf531", 1200)} alt="Custom printed t-shirts on a rail" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
        <div className="glass absolute left-4 right-4 bottom-4 md:left-6 md:right-auto md:bottom-6 md:max-w-sm rounded-[24px] p-5">
          <p className="display text-[40px]">from {CUSTOM.minQty} pcs</p>
          <p className="mt-1 text-ink/75 font-medium">Bulk pricing: the bigger the order, the lower the price per piece.</p>
        </div>
      </div>
      <div className="rounded-[32px] bg-lilac/40 p-6 md:p-10 flex flex-col gap-8">
        <div>
          <h2 className="display text-[44px] md:text-[64px]">what we make</h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {GARMENTS.map((g, i) => (
              <span key={g} className={`rounded-full px-4 py-2.5 font-bold ${["bg-lime", "bg-paper", "bg-sun", "bg-paper", "bg-pink text-white", "bg-paper", "bg-blue text-white"][i % 7]}`}>{g}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-extrabold">Print styles</h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {PRINTS.map((p) => (
              <span key={p} className="glass rounded-full px-4 py-2.5 font-bold">{p}</span>
            ))}
          </div>
        </div>
        <p className="mt-auto text-ink/75 font-medium">Pick any colour, add front, back or sleeve prints, and personalise every piece with names and numbers.</p>
      </div>
    </section>
  );
}
