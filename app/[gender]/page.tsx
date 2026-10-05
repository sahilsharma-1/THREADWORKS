import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ShopView from "@/components/ShopView";
import { byGender, Gender, GENDERS } from "@/lib/products";

const INTRO: Record<Gender, string> = {
  women: "Kurtis, sarees, co-ords and everyday denim.",
  men: "Cotton tees, hoodies, shirts and occasion wear.",
  kids: "Soft cotton and party sets for ages 2 to 11.",
};

export function generateStaticParams() {
  return GENDERS.map((g) => ({ gender: g.key }));
}

export async function generateMetadata({ params }: { params: Promise<{ gender: string }> }): Promise<Metadata> {
  const { gender } = await params;
  const g = GENDERS.find((x) => x.key === gender);
  return g ? { title: `${g.label}'s clothing`, description: INTRO[g.key] } : {};
}

export default async function GenderPage({ params, searchParams }: { params: Promise<{ gender: string }>; searchParams: Promise<{ category?: string }> }) {
  const { gender } = await params;
  const { category } = await searchParams;
  const g = GENDERS.find((x) => x.key === gender);
  if (!g) notFound();

  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-8">
      <div className="py-8 md:py-12">
        <div className="flex items-center gap-4 flex-wrap">
          <h1 className="display text-[64px] md:text-[120px] lowercase">{g.label}</h1>
          <span className={`sticker -rotate-6 ${g.key === "women" ? "bg-pink text-white" : g.key === "men" ? "bg-blue text-white" : "bg-sun text-ink"}`} style={{ ["--shadow" as string]: "var(--color-lime)" }}>{byGender(g.key).length} styles</span>
        </div>
        <p className="text-lg mt-3 font-medium text-stone">{INTRO[g.key]}</p>
      </div>
      <ShopView key={category ?? "all"} items={byGender(g.key)} initialCategory={category} />
    </div>
  );
}
