import Image from "next/image";
import Link from "next/link";
import MacWindow from "./MacWindow";
import { bySlug, inr, STORE } from "@/lib/products";

// A real-shaped conversation showing how ordering on WhatsApp works.
export default function StylistChat() {
  const hoodie = bySlug("printing-hoodie-unisex")!;
  const jeans = bySlug("slim-fit-stretch-jeans")!;

  return (
    <section className="px-2 md:px-4 mt-16 md:mt-24">
      <div className="mesh-cool night rounded-[28px] md:rounded-[36px] overflow-hidden">
        <div className="mx-auto max-w-[1440px] grid lg:grid-cols-[0.9fr_1.1fr] gap-12 px-6 md:px-14 py-14 md:py-24 items-center">
          <div>
            <h2 className="display text-[44px] md:text-[72px]">A real person<br />on the other end.</h2>
            <p className="mt-6 text-lg text-white/75 max-w-md leading-relaxed">
              Not sure about a size, a colour or delivery to your pincode? Message us. Someone from our Jaipur team replies, checks stock and places the order for you.
            </p>
            <ul className="mt-8 space-y-3 text-white/85">
              <li className="flex gap-3"><span className="mt-2 size-1.5 rounded-full bg-[#22C3B5]" />Fit advice from people who know the fabric</li>
              <li className="flex gap-3"><span className="mt-2 size-1.5 rounded-full bg-[#7B5CFF]" />Pay by UPI, card or cash on delivery</li>
              <li className="flex gap-3"><span className="mt-2 size-1.5 rounded-full bg-[#E0457B]" />Easy size exchange if it is not right</li>
            </ul>
            <a href={`https://wa.me/${STORE.whatsapp}`} target="_blank" rel="noopener" className="mt-10 inline-block px-7 py-3.5 rounded-full bg-white text-ink font-semibold hover:bg-white/90">Message {STORE.phone}</a>
          </div>

          <MacWindow title="Raw Business, Jaipur" className="max-w-xl w-full lg:ml-auto">
            <div className="bg-[#f4f1ec] p-4 md:p-6 space-y-3 text-[14px]">
              <Bubble side="me">Hi! Is the grey hoodie good for a 40 inch chest?</Bubble>
              <Bubble side="them">Hi! Go with L. It&apos;s a relaxed fit, so you&apos;ll have room for a tee underneath.</Bubble>
              <ProductBubble name={hoodie.name} price={inr(hoodie.price)} mrp={hoodie.mrp ? inr(hoodie.mrp) : undefined} image={hoodie.image} href={`/product/${hoodie.slug}`} />
              <Bubble side="me">Perfect. Add the slim jeans in 32 too, COD please.</Bubble>
              <ProductBubble name={jeans.name} price={inr(jeans.price)} mrp={jeans.mrp ? inr(jeans.mrp) : undefined} image={jeans.image} href={`/product/${jeans.slug}`} />
              <Bubble side="them">Done. Total {inr(hoodie.price + jeans.price)}, free delivery. Ships tomorrow from Jaipur 🙌</Bubble>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 border-t border-black/10 bg-white">
              <div className="flex-1 h-9 rounded-full bg-[#f0f0f0] px-4 flex items-center text-sm text-black/40">Message</div>
              <span className="size-9 rounded-full bg-[#25D366] grid place-items-center text-white" aria-hidden>
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor"><path d="M3 20l18-8L3 4v6l12 2-12 2z" /></svg>
              </span>
            </div>
          </MacWindow>
        </div>
      </div>
    </section>
  );
}

function Bubble({ side, children }: { side: "me" | "them"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "me" ? "justify-end" : "justify-start"}`}>
      <p className={`max-w-[80%] px-3.5 py-2 rounded-2xl shadow-sm leading-snug ${side === "me" ? "bg-[#d9fdd3] rounded-br-md" : "bg-white rounded-bl-md"}`}>{children}</p>
    </div>
  );
}

function ProductBubble({ name, price, mrp, image, href }: { name: string; price: string; mrp?: string; image: string; href: string }) {
  return (
    <div className="flex justify-start">
      <Link href={href} className="flex gap-3 bg-white rounded-2xl rounded-bl-md p-2 pr-4 shadow-sm max-w-[80%] hover:ring-1 hover:ring-black/10">
        <span className="relative size-16 rounded-xl overflow-hidden bg-mist shrink-0"><Image src={image} alt="" fill sizes="64px" className="object-cover" /></span>
        <span className="self-center">
          <span className="block font-semibold leading-snug">{name}</span>
          <span className="block mt-1"><span className="font-bold text-gulabi">{price}</span>{mrp && <span className="ml-2 text-xs text-stone line-through">{mrp}</span>}</span>
        </span>
      </Link>
    </div>
  );
}
