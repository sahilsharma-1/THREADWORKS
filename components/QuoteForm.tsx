"use client";

import { useState } from "react";
import { STORE } from "@/lib/products";
import { CUSTOM, GARMENTS, OCCASIONS } from "@/lib/custom";

export default function QuoteForm() {
  const [f, setF] = useState({ name: "", org: "", occasion: OCCASIONS[0], garment: GARMENTS[0], qty: "", date: "", names: false, notes: "" });
  const [err, setErr] = useState("");
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value });

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const qty = Number(f.qty);
    if (!f.name.trim()) return setErr("Add your name so we know who to reply to.");
    if (!qty || qty < CUSTOM.minQty) return setErr(`Enter a quantity of ${CUSTOM.minQty} or more.`);
    setErr("");
    const msg = [
      "Hi Raw Business! I'd like a quote for custom tees.",
      `Name: ${f.name}`,
      f.org && `Team / college / company: ${f.org}`,
      `For: ${f.occasion}`,
      `Item: ${f.garment}`,
      `Quantity: ${qty}`,
      f.date && `Needed by: ${f.date}`,
      f.names && "Names / numbers on each piece: yes",
      f.notes && `Notes: ${f.notes}`,
      "I'll send our logo / design here.",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  const field = "w-full h-12 rounded-2xl bg-white/80 border border-white px-4 outline-none focus:ring-2 focus:ring-blue";

  return (
    <section id="quote" className="relative mx-auto max-w-[1440px] px-4 md:px-8 mt-20 md:mt-28 scroll-mt-28">
      <div className="relative rounded-[36px] overflow-hidden p-4 md:p-10">
        {/* bright blobs behind the glass */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-lime via-sun to-pink" />
        <div aria-hidden className="absolute -left-20 bottom-[-30%] size-[520px] rounded-full bg-blue/70 blur-3xl" />
        <div aria-hidden className="absolute right-[-10%] top-[-20%] size-[460px] rounded-full bg-lilac blur-3xl" />

        <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="p-2 md:p-4">
            <h2 className="display text-[56px] md:text-[96px]">get a quote.</h2>
            <p className="mt-4 text-lg md:text-xl font-medium max-w-md">
              Fill this in and it opens WhatsApp with your details ready to send. Attach your logo in the chat and we&apos;ll reply with a mockup and price.
            </p>
            <ul className="mt-6 space-y-2 font-semibold">
              <li>Free design mockup</li>
              <li>Minimum {CUSTOM.minQty} pieces</li>
              <li>Ready in about {CUSTOM.turnaround}</li>
            </ul>
          </div>

          <form onSubmit={send} className="glass rounded-[28px] p-5 md:p-8 grid sm:grid-cols-2 gap-4" noValidate>
            <label className="grid gap-1.5 text-sm font-bold">Your name<input className={field} value={f.name} onChange={set("name")} autoComplete="name" /></label>
            <label className="grid gap-1.5 text-sm font-bold">Team, college or company<input className={field} value={f.org} onChange={set("org")} /></label>
            <label className="grid gap-1.5 text-sm font-bold">What is it for?
              <select className={field} value={f.occasion} onChange={set("occasion")}>{OCCASIONS.map((o) => <option key={o}>{o}</option>)}</select>
            </label>
            <label className="grid gap-1.5 text-sm font-bold">Item
              <select className={field} value={f.garment} onChange={set("garment")}>{GARMENTS.map((g) => <option key={g}>{g}</option>)}</select>
            </label>
            <label className="grid gap-1.5 text-sm font-bold">Quantity<input className={field} inputMode="numeric" type="number" min={CUSTOM.minQty} placeholder={`${CUSTOM.minQty} or more`} value={f.qty} onChange={set("qty")} /></label>
            <label className="grid gap-1.5 text-sm font-bold">Needed by<input className={field} type="date" value={f.date} onChange={set("date")} /></label>
            <label className="sm:col-span-2 flex items-center gap-3 text-sm font-bold">
              <input type="checkbox" className="size-5 accent-pink" checked={f.names} onChange={set("names")} />
              Print a different name or number on each piece
            </label>
            <label className="sm:col-span-2 grid gap-1.5 text-sm font-bold">Anything else?
              <textarea className={`${field} h-24 py-3`} placeholder="Colours, print placement, design idea…" value={f.notes} onChange={set("notes")} />
            </label>
            {err && <p role="alert" className="sm:col-span-2 text-sm font-bold text-pink">{err}</p>}
            <button className="sm:col-span-2 h-14 rounded-full bg-pink text-white text-lg font-bold shadow-[4px_4px_0_0_var(--color-blue)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-blue)] transition">Send on WhatsApp</button>
          </form>
        </div>
      </div>
    </section>
  );
}
