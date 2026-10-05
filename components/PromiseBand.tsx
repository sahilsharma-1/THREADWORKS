import { inr, STORE } from "@/lib/products";

const FACTS = [
  { big: "2–7", unit: "days", label: "Delivery anywhere in India, dispatched in 1 to 3 days" },
  { big: "7", unit: "days", label: "To return or exchange, with free reverse pickup" },
  { big: "1", unit: "free", label: "Size exchange on every order" },
  { big: inr(STORE.freeShippingAbove), unit: "+", label: "Orders ship free. Cash on delivery available" },
];

export default function PromiseBand() {
  return (
    <section className="px-2 md:px-4 mt-16 md:mt-24">
      <div className="mesh-warm night rounded-[28px] md:rounded-[36px] overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 md:px-14 py-14 md:py-20">
          <h2 className="display text-[40px] md:text-[64px] max-w-3xl">Shopping from Jaipur should feel easy.</h2>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {FACTS.map((f) => (
              <div key={f.label} className="glass-dark rounded-[20px] p-5 md:p-7">
                <p className="display text-[44px] md:text-[64px] tabular-nums">{f.big}<span className="text-lg md:text-2xl ml-1 font-semibold" style={{ fontVariationSettings: '"wdth" 100' }}>{f.unit}</span></p>
                <p className="mt-3 text-sm md:text-base text-white/80 leading-snug">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
