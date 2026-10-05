"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { bySlug, inr, STORE } from "@/lib/products";

export default function CartPage() {
  const { lines, subtotal, setQty, remove } = useCart();
  const delivery = subtotal >= STORE.freeShippingAbove || subtotal === 0 ? 0 : 79;
  const total = subtotal + delivery;

  // Until a payment gateway is connected, orders are placed over WhatsApp with the bag pre-filled.
  const message = [
    "Hi Raw Business, I'd like to place this order:",
    ...lines.map((l) => {
      const p = bySlug(l.slug)!;
      return `- ${p.name} | ${l.color} | Size ${l.size} | Qty ${l.qty} | ${inr(p.price * l.qty)}`;
    }),
    `Total: ${inr(total)}`,
  ].join("\n");

  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-10">
      <h1 className="display text-5xl md:text-6xl mb-8">Your bag</h1>
      {lines.length === 0 ? (
        <div className="py-12">
          <p className="text-lg font-semibold">Your bag is empty</p>
          <Link href="/women" className="inline-block mt-5 rounded-full px-6 py-3 bg-pink text-white font-semibold">Start shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-[1fr_380px] gap-10">
          <ul className="border-t border-line">
            {lines.map((l, i) => {
              const p = bySlug(l.slug)!;
              return (
                <li key={`${l.slug}-${l.size}-${l.color}`} className="flex gap-5 py-6 border-b border-line">
                  <Link href={`/product/${p.slug}`} className="relative w-28 md:w-36 aspect-[3/4] bg-mist shrink-0 rounded-xl overflow-hidden">
                    <Image src={p.image} alt={p.name} fill sizes="144px" className="object-cover" />
                  </Link>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between gap-4">
                      <div>
                        <Link href={`/product/${p.slug}`} className="font-semibold hover:underline">{p.name}</Link>
                        <p className="text-sm text-stone mt-1">{l.color}, size {l.size}</p>
                      </div>
                      <p className="font-semibold tabular-nums">{inr(p.price * l.qty)}</p>
                    </div>
                    <div className="mt-auto flex items-center gap-6 pt-4 text-sm">
                      <label className="flex items-center gap-2">
                        <span className="text-stone">Qty</span>
                        <select value={l.qty} onChange={(e) => setQty(i, Number(e.target.value))} className="h-9 border border-line px-2 bg-paper">
                          {Array.from({ length: 10 }, (_, n) => <option key={n + 1}>{n + 1}</option>)}
                        </select>
                      </label>
                      <button onClick={() => remove(i)} className="underline underline-offset-2 text-stone">Remove</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <aside className="bg-mist rounded-[22px] p-6 self-start md:sticky md:top-28">
            <h2 className="font-semibold text-lg mb-4">Order summary</h2>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between"><dt>Subtotal</dt><dd className="tabular-nums">{inr(subtotal)}</dd></div>
              <div className="flex justify-between"><dt>Delivery</dt><dd className="tabular-nums">{delivery ? inr(delivery) : "Free"}</dd></div>
              <div className="flex justify-between pt-3 mt-3 border-t border-line text-base font-bold"><dt>Total</dt><dd className="tabular-nums">{inr(total)}</dd></div>
            </dl>
            <p className="text-xs text-stone mt-2">Prices include GST.</p>
            <a href={`https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener" className="mt-6 block text-center rounded-full py-4 bg-pink text-white font-semibold">Place order on WhatsApp</a>
            <p className="text-xs text-stone mt-3">We confirm stock, delivery and payment (UPI, card or cash on delivery) in the chat.</p>
          </aside>
        </div>
      )}
    </div>
  );
}
