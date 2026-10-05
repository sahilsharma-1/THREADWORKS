"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { bySlug } from "./products";

export type CartLine = { slug: string; size: string; color: string; qty: number };

type CartCtx = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (l: Omit<CartLine, "qty">, qty?: number) => void;
  setQty: (i: number, qty: number) => void;
  remove: (i: number) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "rb-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(KEY, JSON.stringify(lines)); } catch {}
  }, [lines, ready]);

  const value = useMemo<CartCtx>(() => {
    const count = lines.reduce((a, l) => a + l.qty, 0);
    const subtotal = lines.reduce((a, l) => a + (bySlug(l.slug)?.price ?? 0) * l.qty, 0);
    return {
      lines, count, subtotal, open, setOpen,
      add: (l, qty = 1) => {
        setLines((prev) => {
          const i = prev.findIndex((p) => p.slug === l.slug && p.size === l.size && p.color === l.color);
          if (i >= 0) {
            const next = [...prev];
            next[i] = { ...next[i], qty: Math.min(10, next[i].qty + qty) };
            return next;
          }
          return [...prev, { ...l, qty }];
        });
        setOpen(true);
      },
      setQty: (i, qty) => setLines((prev) => prev.map((l, j) => (j === i ? { ...l, qty: Math.max(1, Math.min(10, qty)) } : l))),
      remove: (i) => setLines((prev) => prev.filter((_, j) => j !== i)),
      clear: () => setLines([]),
    };
  }, [lines, open]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
