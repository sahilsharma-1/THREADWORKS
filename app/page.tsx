import GridSlideshow from "@/components/GridSlideshow";
import Marquee from "@/components/Marquee";
import Audiences from "@/components/Audiences";
import BoxSlider from "@/components/BoxSlider";
import HowItWorks from "@/components/HowItWorks";
import WhatWeMake from "@/components/WhatWeMake";
import QuoteForm from "@/components/QuoteForm";
import Rail from "@/components/Rail";
import Perks from "@/components/Perks";
import { SPORTS_SLIDES, FEST_SLIDES } from "@/lib/custom";
import { bySlug } from "@/lib/products";

// Ready-to-wear styles from the current rawbusinesspvt.com store
const STORE_PICKS = [
  "black-printed-t-shirt-men",
  "printing-hoodie-unisex",
  "graphic-oversized-t-shirt",
  "fleece-co-ord-set",
].map((s) => bySlug(s)!);

export default function Home() {
  return (
    <>
      <GridSlideshow />

      <div className="-rotate-2 scale-[1.03] mt-10 md:mt-14">
        <Marquee tone="lime" className="py-4 text-2xl md:text-4xl font-extrabold" items={["sports jerseys", "fest merch", "school house tees", "farewell tees", "hackathon hoodies", "marathon tees", "team polos", "your logo here"]} />
      </div>

      <Audiences />

      <BoxSlider title="made for the game" sticker="names + numbers" slides={SPORTS_SLIDES} tone="lime" />

      <HowItWorks />

      <BoxSlider title="fest & campus drops" sticker="batch of 2026" slides={FEST_SLIDES} tone="pink" />

      <WhatWeMake />

      <QuoteForm />

      <Perks />

      <Rail title="shop ready-made" sticker="no minimum" href="/search" items={STORE_PICKS} />

      <div className="rotate-2 scale-[1.03] mt-24">
        <Marquee tone="pink" className="py-4 text-2xl md:text-4xl font-extrabold" items={["custom tees for your squad", "free mockup", "printed in Jaipur", "shipped across India", "cash on delivery on store orders"]} />
      </div>
    </>
  );
}
