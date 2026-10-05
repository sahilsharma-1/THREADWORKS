import { inr, STORE } from "@/lib/products";

const PERKS = [
  { big: "2–7 days", small: "Delivery anywhere in India", bg: "bg-lime", text: "text-ink", r: "-2deg" },
  { big: "7-day returns", small: "Plus one free size exchange", bg: "bg-pink", text: "text-white", r: "1.5deg" },
  { big: "COD ok", small: "UPI, cards, net banking too", bg: "bg-sun", text: "text-ink", r: "-1deg" },
  { big: `${inr(STORE.freeShippingAbove)}+`, small: "Ships free, no code needed", bg: "bg-blue", text: "text-white", r: "2deg" },
];

export default function Perks() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 md:px-8 mt-20 md:mt-28">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {PERKS.map((p) => (
          <div key={p.big} className={`${p.bg} ${p.text} rounded-[28px] p-6 md:p-8`} style={{ transform: `rotate(${p.r})` }}>
            <p className="display text-[34px] md:text-[48px]">{p.big}</p>
            <p className="mt-3 font-medium opacity-85">{p.small}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
