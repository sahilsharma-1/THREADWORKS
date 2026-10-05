import Link from "next/link";
import Logo from "./Logo";
import { STORE } from "@/lib/products";
import { POLICIES } from "@/lib/policies";

const LETTERS: [string, string][] = [
  ["r", "text-pink"], ["a", "text-blue"], ["w", "text-orange"], [" ", ""], ["b", "text-lime"], ["i", "text-lilac"], ["z", "text-sun"],
];

export default function Footer() {
  return (
    <footer className="mt-28 border-t-2 border-line">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1.6fr] text-[15px]">
        <div className="space-y-5">
          <Logo size="lg" />
          <p className="text-stone max-w-xs">{STORE.tagline}</p>
          <a href={`https://wa.me/${STORE.whatsapp}`} target="_blank" rel="noopener" className="inline-block rounded-full bg-lime text-ink px-5 py-2.5 font-bold">Chat on WhatsApp</a>
        </div>
        <div>
          <h3 className="font-bold mb-3">Shop</h3>
          <ul className="space-y-2 text-stone">
            <li><Link href="/women" className="hover:text-pink">Women</Link></li>
            <li><Link href="/men" className="hover:text-pink">Men</Link></li>
            <li><Link href="/kids" className="hover:text-pink">Kids</Link></li>
            <li><Link href="/about" className="hover:text-pink">About us</Link></li>
            <li><Link href="/contact" className="hover:text-pink">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Help</h3>
          <ul className="space-y-2 text-stone">
            {POLICIES.map((p) => (
              <li key={p.slug}><Link href={`/policies/${p.slug}`} className="hover:text-pink">{p.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Say hi</h3>
          <address className="not-italic text-stone space-y-2">
            <p><a href={`tel:${STORE.phone.replace(/\s/g, "")}`} className="hover:text-pink">{STORE.phone}</a></p>
            <p><a href={`mailto:${STORE.email}`} className="hover:text-pink">{STORE.email}</a></p>
            <p>{STORE.address}</p>
            <p className="text-sm">Registered: {STORE.regAddress}</p>
          </address>
        </div>
      </div>

      <div className="overflow-hidden px-2" aria-hidden>
        <p className="display text-[27vw] leading-[0.75] whitespace-nowrap text-center select-none">
          {LETTERS.map(([l, c], i) => <span key={i} className={c}>{l}</span>)}
        </p>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-stone">
        <p>© {new Date().getFullYear()} RawBusinessPvt.com. {STORE.legal}.</p>
        <p>GSTIN {STORE.gstin}. 100% secure payments.</p>
      </div>
    </footer>
  );
}
