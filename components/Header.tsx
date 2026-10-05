"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Marquee from "./Marquee";
import { BagIcon, CloseIcon, MenuIcon, SearchIcon, UserIcon, HeartIcon } from "./Icons";
import { useCart } from "@/lib/cart";
import { GENDERS, categoriesFor, STORE, inr } from "@/lib/products";

export default function Header() {
  const { count, setOpen } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => setMenu(false), [pathname]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <>
      <Marquee
        className="py-2 text-[13px] font-semibold"
        items={["Custom tees for teams, colleges, schools and fests", "Free design mockup", `Store orders ship free over ${inr(STORE.freeShippingAbove)}`, "Printed in Jaipur", "Shipped across India"]}
      />
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto max-w-[1440px] flex items-center gap-4 md:gap-8 px-4 md:px-8 h-16 md:h-[76px]">
          <button className="md:hidden -ml-1 p-1" onClick={() => setMenu(true)} aria-label="Open menu"><MenuIcon /></button>
          <Logo />
          <nav className="hidden md:flex items-stretch h-full" aria-label="Main">
            <Link href="/#quote" className="flex items-center px-3 text-[15px] font-semibold border-b-[3px] border-transparent hover:border-pink">Custom tees</Link>
            {GENDERS.map((g) => {
              const active = pathname?.startsWith(`/${g.key}`);
              return (
                <div key={g.key} className="group relative flex">
                  <Link href={`/${g.key}`} className={`flex items-center px-3 text-[15px] font-semibold border-b-[3px] ${active ? "border-pink" : "border-transparent hover:border-pink"}`}>
                    {g.label}
                  </Link>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition absolute left-0 top-full bg-paper rounded-2xl shadow-[6px_6px_0_0_var(--color-lime)] ring-2 ring-ink/5 min-w-56 py-3">
                    <Link href={`/${g.key}`} className="block px-5 py-2 text-sm font-semibold hover:bg-mist">All {g.label.toLowerCase()}</Link>
                    {categoriesFor(g.key).map((c) => (
                      <Link key={c} href={`/${g.key}?category=${encodeURIComponent(c)}`} className="block px-5 py-2 text-sm hover:bg-mist">{c}</Link>
                    ))}
                  </div>
                </div>
              );
            })}
            <Link href="/about" className={`flex items-center px-3 text-[15px] font-semibold border-b-[3px] ${pathname === "/about" ? "border-pink" : "border-transparent hover:border-pink"}`}>About</Link>
            <Link href="/contact" className={`flex items-center px-3 text-[15px] font-semibold border-b-[3px] ${pathname === "/contact" ? "border-pink" : "border-transparent hover:border-pink"}`}>Contact</Link>
          </nav>
          <form onSubmit={submit} role="search" className="hidden md:flex ml-auto items-center gap-2 bg-mist rounded-full px-4 h-11 w-full max-w-xs ring-2 ring-transparent focus-within:ring-blue">
            <SearchIcon className="size-4 text-stone" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search fits, tees, jeans…" aria-label="Search products" className="bg-transparent outline-none text-sm w-full placeholder:text-stone" />
          </form>
          <div className="ml-auto md:ml-0 flex items-center gap-1">
            <Link href="/#quote" className="hidden lg:inline-flex rounded-full bg-pink text-white px-5 py-2.5 text-sm font-bold mr-2 shadow-[3px_3px_0_0_var(--color-lime)]">Get a quote</Link>
            <Link href="/search" className="md:hidden p-2" aria-label="Search"><SearchIcon /></Link>
            <Link href="/contact" className="hidden md:inline-flex p-2" aria-label="Contact us"><UserIcon /></Link>
            <Link href="/women" className="hidden md:inline-flex p-2" aria-label="Wishlist"><HeartIcon /></Link>
            <button onClick={() => setOpen(true)} className="relative p-2" aria-label={`Bag, ${count} items`}>
              <BagIcon />
              {count > 0 && (
                <span className="absolute top-0.5 right-0 min-w-[18px] h-[18px] px-1 rounded-full bg-pink text-white text-[11px] font-semibold flex items-center justify-center">{count}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {menu && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMenu(false)} />
          <div className="absolute inset-y-0 left-0 w-[86%] max-w-sm bg-paper overflow-y-auto">
            <div className="flex items-center justify-between px-4 h-16 border-b border-line">
              <Logo />
              <button onClick={() => setMenu(false)} aria-label="Close menu"><CloseIcon /></button>
            </div>
            {GENDERS.map((g) => (
              <details key={g.key} className="border-b border-line group" open={g.key === "women"}>
                <summary className="list-none flex justify-between items-center px-5 py-4 text-lg font-semibold cursor-pointer">
                  {g.label}<span className="text-stone group-open:rotate-45 transition text-2xl leading-none">+</span>
                </summary>
                <div className="pb-3">
                  <Link href={`/${g.key}`} className="block px-5 py-2.5">All {g.label.toLowerCase()}</Link>
                  {categoriesFor(g.key).map((c) => (
                    <Link key={c} href={`/${g.key}?category=${encodeURIComponent(c)}`} className="block px-5 py-2.5 text-stone">{c}</Link>
                  ))}
                </div>
              </details>
            ))}
            <Link href="/#quote" className="block border-b border-line px-5 py-4 text-lg font-semibold text-pink">Custom tees and quotes</Link>
            <Link href="/about" className="block border-b border-line px-5 py-4 text-lg font-semibold">About us</Link>
            <Link href="/contact" className="block border-b border-line px-5 py-4 text-lg font-semibold">Contact</Link>
            <div className="px-5 py-6 text-sm text-stone space-y-2">
              <p>Need help? Call {STORE.phone}</p>
              <p>{STORE.email}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
