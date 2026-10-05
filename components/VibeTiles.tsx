import Image from "next/image";
import Link from "next/link";

const VIBES = [
  { name: "Street", note: "Oversized tees, cargos", href: "/men?category=T-Shirts", img: "1503341504253-dff4815485f1", bg: "bg-lime", text: "text-ink" },
  { name: "Desi", note: "Kurtis, sarees, Anarkalis", href: "/women?category=Ethnic", img: "1583391733956-3750e0ff4e8b", bg: "bg-pink", text: "text-white" },
  { name: "Cozy", note: "Hoodies and sweats", href: "/men?category=Hoodies", img: "1556821840-3a63f95609a7", bg: "bg-lilac", text: "text-ink" },
  { name: "Denim", note: "Wide leg, straight, cargo", href: "/women?category=Jeans", img: "1541099649105-f69ad21f3246", bg: "bg-blue", text: "text-white" },
  { name: "Party", note: "Ruffles, suits, statement tees", href: "/women?category=Partywear", img: "1581044777550-4cfa60707c03", bg: "bg-sun", text: "text-ink" },
  { name: "Mini", note: "Kids, ages 2 to 11", href: "/kids", img: "1519238263530-99bdd11df2ea", bg: "bg-orange", text: "text-white" },
];

const img = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&q=80`;

export default function VibeTiles() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 md:px-8 mt-20 md:mt-28">
      <div className="flex items-end justify-between gap-4 mb-8">
        <h2 className="display text-[52px] md:text-[88px]">pick your vibe</h2>
        <span className="sticker bg-sun text-ink rotate-3 hidden sm:inline-flex" style={{ ["--shadow" as string]: "var(--color-pink)" }}>6 moods, 1 store</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {VIBES.map((v, i) => (
          <Link key={v.name} href={v.href} className={`group relative ${v.bg} ${v.text} rounded-[28px] p-4 md:p-6 overflow-hidden flex flex-col`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="display text-[40px] md:text-[64px]">{v.name}</p>
                <p className="text-sm md:text-base font-medium opacity-80 mt-1">{v.note}</p>
              </div>
              <span className="hidden md:grid size-12 rounded-full bg-paper text-ink place-items-center text-xl font-bold transition-transform group-hover:rotate-45">↗</span>
            </div>
            <div className="relative mt-5 aspect-[4/5] rounded-[20px] overflow-hidden" style={{ transform: `rotate(${i % 2 ? 2 : -2}deg)` }}>
              <Image src={img(v.img)} alt="" fill sizes="(min-width:768px) 30vw, 45vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
