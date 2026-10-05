import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { STORE } from "@/lib/products";

export const metadata: Metadata = { title: "About us" };
const img = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

export default function About() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-8 pt-10 md:pt-16">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <span className="sticker bg-sun text-ink -rotate-3" style={{ ["--shadow" as string]: "var(--color-pink)" }}>since Karauli, Rajasthan</span>
          <h1 className="display mt-6 text-[72px] md:text-[128px]">small town.<br />big fits.</h1>
          <p className="mt-6 text-xl leading-relaxed max-w-lg">
            Raw Business is a family clothing brand run by Ajay Singh. We started in Karauli, now ship from Jaipur to every pincode in India, and drop new styles every week.
          </p>
          <p className="mt-4 text-lg text-stone leading-relaxed max-w-lg">
            Fair prices with GST included. Fabric we would wear ourselves. Easy returns, and a real person on WhatsApp when you need one.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/women" className="rounded-full bg-pink text-white px-7 py-3.5 font-bold shadow-[4px_4px_0_0_var(--color-blue)]">Shop the drop</Link>
            <Link href="/contact" className="rounded-full border-2 border-ink px-7 py-3.5 font-bold hover:bg-lime">Say hi</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 px-4">
          <div className="pop relative aspect-[3/4] overflow-hidden -rotate-3" style={{ ["--pop" as string]: "var(--color-lime)" }}><Image src={img("1509631179647-0177331693ae")} alt="Model in striped wide leg trousers" fill sizes="25vw" className="object-cover" /></div>
          <div className="pop relative aspect-[3/4] overflow-hidden rotate-3 mt-14" style={{ ["--pop" as string]: "var(--color-pink)" }}><Image src={img("1488161628813-04466f872be2")} alt="Model in a utility overshirt" fill sizes="25vw" className="object-cover" /></div>
        </div>
      </div>
      <p className="mt-16 text-sm text-stone">{STORE.legal}. GSTIN {STORE.gstin}.</p>
    </div>
  );
}
