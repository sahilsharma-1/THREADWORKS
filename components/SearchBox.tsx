"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SearchIcon } from "./Icons";

export default function SearchBox({ initial = "" }: { initial?: string }) {
  const [q, setQ] = useState(initial);
  const router = useRouter();
  return (
    <form role="search" onSubmit={(e) => { e.preventDefault(); router.push(`/search?q=${encodeURIComponent(q.trim())}`); }} className="flex items-center gap-3 border-b-4 border-pink max-w-xl h-12">
      <SearchIcon className="size-5" />
      <input autoFocus={!initial} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search t-shirts, kurtis, jeans" aria-label="Search products" className="w-full outline-none text-lg bg-transparent placeholder:text-stone" />
      <button className="text-sm font-semibold">Search</button>
    </form>
  );
}
