import Image from "next/image";

// Lookbook-style wall of posed shots. Swap for real customer photos tagged #RawFits.
const SHOTS = [
  { id: "1529139574466-a303027c1d8b", r: "-3deg", c: "var(--color-lime)" },
  { id: "1500917293891-ef795e70e1f6", r: "2deg", c: "var(--color-blue)" },
  { id: "1586790170083-2f9ceadc732d", r: "-1deg", c: "var(--color-sun)" },
  { id: "1517841905240-472988babdf9", r: "3deg", c: "var(--color-pink)" },
  { id: "1515886657613-9f3515b0c78f", r: "-2deg", c: "var(--color-lilac)" },
  { id: "1622519407650-3df9883f76a5", r: "2deg", c: "var(--color-orange)" },
];
const img = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;

export default function FitsWall() {
  return (
    <section className="mt-20 md:mt-28 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 text-center">
        <h2 className="display text-[52px] md:text-[96px]">#RawFits</h2>
        <p className="mt-3 text-lg md:text-xl font-medium text-stone">Post your fit, tag us, get featured.</p>
      </div>
      <div className="no-scrollbar mt-10 flex gap-6 md:gap-8 overflow-x-auto px-6 md:px-10 pb-6 snap-x">
        {SHOTS.map((s) => (
          <figure key={s.id} className="snap-center shrink-0 w-[62vw] sm:w-[34vw] lg:w-[22vw]" style={{ transform: `rotate(${s.r})` }}>
            <div className="pop relative aspect-[3/4] overflow-hidden bg-mist" style={{ ["--pop" as string]: s.c }}>
              <Image src={img(s.id)} alt="Model posing in a Raw Business outfit" fill sizes="(min-width:1024px) 22vw, 60vw" className="object-cover" />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
