import Image from "next/image";
import Link from "next/link";
import { AUDIENCES, img } from "@/lib/custom";

export default function Audiences() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 md:px-8 mt-20 md:mt-28">
      <h2 className="display text-[48px] md:text-[80px]">who we print for</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {AUDIENCES.map((a) => (
          <Link key={a.key} href="#quote" className="group relative aspect-[4/5] rounded-[28px] overflow-hidden" style={{ background: a.color }}>
            <Image src={img(a.img, 800)} alt={a.title} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="glass absolute inset-x-3 bottom-3 rounded-[22px] p-4 md:p-5">
              <p className="text-xl md:text-2xl font-extrabold leading-tight">{a.title}</p>
              <p className="text-sm text-ink/75 mt-1">{a.note}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
