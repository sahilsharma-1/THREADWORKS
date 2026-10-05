"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/lib/cart";
import { bySlug, inr, STORE } from "@/lib/products";
import { CloseIcon } from "./Icons";

export default function CartDrawer() {
  const { open, setOpen, lines, subtotal, setQty, remove } = useCart();
  const left = STORE.freeShippingAbove - subtotal;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, setOpen]);

  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} onClick={() => setOpen(false)} />
      <aside role="dialog" aria-label="Shopping bag" className={`absolute inset-y-0 right-0 w-full sm:w-[420px] bg-paper flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-5 h-16 border-b border-line">
          <h2 className="text-lg font-semibold">Your bag</h2>
          <button onClick={() => setOpen(false)} aria-label="Close bag"><CloseIcon /></button>
        </div>

        {lines.length > 0 && (
          <div className="px-5 py-3 bg-sun/60 text-sm font-medium">
            {left > 0 ? <>Add {inr(left)} more for free delivery.</> : <>Your order ships free.</>}
            <div className="mt-2 h-2 rounded-full overflow-hidden bg-paper"><div className="h-full bg-lime transition-all" style={{ width: `${Math.min(100, (subtotal / STORE.freeShippingAbove) * 100)}%` }} /></div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {lines.length === 0 ? (
            <div className="p-8 text-center">
              <p className="font-semibold text-lg">Your bag is empty</p>
              <p className="text-stone text-sm mt-1">Start with this season&apos;s new arrivals.</p>
              <div className="mt-6 flex gap-2 justify-center">
                <Link href="/women" onClick={() => setOpen(false)} className="rounded-full px-5 py-3 bg-pink text-white text-sm font-semibold">Shop women</Link>
                <Link href="/men" onClick={() => setOpen(false)} className="rounded-full px-5 py-3 border border-ink text-sm font-semibold">Shop men</Link>
              </div>
            </div>
          ) : (
            <ul>
              {lines.map((l, i) => {
                const p = bySlug(l.slug);
                if (!p) return null;
                return (
                  <li key={`${l.slug}-${l.size}-${l.color}`} className="flex gap-4 px-5 py-4 border-b border-line">
                    <Link href={`/product/${p.slug}`} onClick={() => setOpen(false)} className="relative w-24 aspect-[3/4] bg-mist shrink-0 rounded-xl overflow-hidden">
                      <Image src={p.image} alt={p.name} fill sizes="96px" className="object-cover" />
                    </Link>
                    <div className="flex-1 min-w-0 text-sm">
                      <p className="font-semibold leading-snug">{p.name}</p>
                      <p className="text-stone mt-1">{l.color}, size {l.size}</p>
                      <p className="mt-1 font-semibold">{inr(p.price * l.qty)}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-line">
                          <button className="w-8 h-8" onClick={() => setQty(i, l.qty - 1)} aria-label="Decrease quantity">−</button>
                          <span className="w-8 text-center tabular-nums">{l.qty}</span>
                          <button className="w-8 h-8" onClick={() => setQty(i, l.qty + 1)} aria-label="Increase quantity">+</button>
                        </div>
                        <button onClick={() => remove(i)} className="text-stone underline underline-offset-2">Remove</button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-line p-5 space-y-3">
            <div className="flex justify-between font-semibold"><span>Subtotal</span><span className="tabular-nums">{inr(subtotal)}</span></div>
            <p className="text-xs text-stone">Prices include GST. Delivery is calculated at checkout.</p>
            <Link href="/cart" onClick={() => setOpen(false)} className="block text-center w-full rounded-full py-3.5 bg-pink text-white font-semibold">Go to checkout</Link>
          </div>
        )}
      </aside>
    </div>
  );
}
