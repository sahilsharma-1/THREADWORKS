import type { Metadata } from "next";
import { STORE } from "@/lib/products";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  const cards = [
    { label: "Call or WhatsApp", value: STORE.phone, href: `https://wa.me/${STORE.whatsapp}`, bg: "bg-lime text-ink", r: "-2deg" },
    { label: "Email", value: STORE.email, href: `mailto:${STORE.email}`, bg: "bg-pink text-white", r: "1.5deg" },
    { label: "Jaipur office", value: STORE.address, bg: "bg-lilac text-ink", r: "-1deg" },
    { label: "Registered address", value: STORE.regAddress, bg: "bg-sun text-ink", r: "2deg" },
  ];
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-8 pt-10 md:pt-16">
      <h1 className="display text-[72px] md:text-[140px]">hmu.</h1>
      <p className="mt-4 text-xl max-w-lg">Size doubt, order update or a return? Message us on WhatsApp. We usually reply within a few hours.</p>
      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {cards.map((c) => {
          const inner = (
            <>
              <p className="text-sm font-bold opacity-80">{c.label}</p>
              <p className="mt-3 text-2xl md:text-3xl font-bold leading-tight break-words">{c.value}</p>
            </>
          );
          return c.href ? (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className={`${c.bg} rounded-[28px] p-7 md:p-9 block hover:-translate-y-1 transition-transform`} style={{ transform: `rotate(${c.r})` }}>{inner}</a>
          ) : (
            <div key={c.label} className={`${c.bg} rounded-[28px] p-7 md:p-9`} style={{ transform: `rotate(${c.r})` }}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
}
