import { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function Rail({ title, href, items, sticker }: { title: string; href?: string; items: Product[]; sticker?: string }) {
  return (
    <section className="mx-auto max-w-[1440px] px-4 md:px-8 mt-20 md:mt-28">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="display text-[48px] md:text-[80px]">{title}</h2>
          {sticker && <span className="sticker bg-lime text-ink -rotate-6" style={{ ["--shadow" as string]: "var(--color-blue)" }}>{sticker}</span>}
        </div>
        {href && <Link href={href} className="shrink-0 rounded-full border-2 border-ink px-5 py-2.5 text-sm font-bold hover:bg-sun">See all</Link>}
      </div>
      <div className="no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 flex md:grid md:grid-cols-4 gap-5 md:gap-7 overflow-x-auto snap-x snap-mandatory pb-2">
        {items.map((p) => (
          <div key={p.slug} className="w-[64%] sm:w-[40%] md:w-auto shrink-0 snap-start">
            <ProductCard p={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
