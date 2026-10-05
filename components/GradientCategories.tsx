import Image from "next/image";
import Link from "next/link";

const TILES = [
  { label: "Men's wear", sub: "Tees, hoodies, shirts", href: "/men", img: "1586790170083-2f9ceadc732d", bg: "linear-gradient(150deg,#1a1a2e 0%,#3b2d6b 55%,#7B5CFF 100%)" },
  { label: "Women's wear", sub: "Kurtis, jeans, co-ords", href: "/women", img: "1515886657613-9f3515b0c78f", bg: "linear-gradient(150deg,#ff9a3c 0%,#e0457b 100%)" },
  { label: "Ethnic", sub: "Sarees and Anarkalis", href: "/women?category=Ethnic", img: "1610030469983-98e550d6193c", bg: "linear-gradient(150deg,#3a0d22 0%,#b8325a 100%)" },
  { label: "Kids' wear", sub: "Ages 2 to 11", href: "/kids", img: "1519238263530-99bdd11df2ea", bg: "linear-gradient(150deg,#0e3b3a 0%,#22c3b5 100%)" },
];

const img = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

export default function GradientCategories() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 md:px-8 mt-16 md:mt-24">
      <h2 className="text-2xl md:text-[32px] font-bold tracking-tight mb-6">Shop by category</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {TILES.map((t) => (
          <Link key={t.label} href={t.href} className="group relative aspect-[3/4] rounded-[22px] overflow-hidden text-white" style={{ background: t.bg }}>
            <div className="absolute inset-x-5 top-5 bottom-24 md:bottom-28 rounded-[16px] overflow-hidden ring-1 ring-white/20 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg]">
              <Image src={img(t.img)} alt="" fill sizes="(min-width:1024px) 22vw, 45vw" className="object-cover" />
            </div>
            <div className="absolute left-5 right-5 bottom-5">
              <p className="text-lg md:text-2xl font-bold">{t.label}</p>
              <p className="text-xs md:text-sm text-white/80 mt-0.5">{t.sub}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
