import Link from "next/link";

// Wordmark: chunky lowercase "raw" with a lime dot, set on a hot-pink sticker.
export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const lg = size === "lg";
  return (
    <Link href="/" aria-label="Raw Business home" className={`inline-flex items-center shrink-0 bg-pink text-white rounded-full ${lg ? "px-6 py-2.5 -rotate-3" : "px-4 py-1.5 -rotate-2"}`} style={{ boxShadow: `${lg ? 5 : 3}px ${lg ? 5 : 3}px 0 0 var(--color-lime)` }}>
      <span className={`display ${lg ? "text-[44px]" : "text-[26px] md:text-[30px]"}`}>raw</span>
      <span className={`${lg ? "size-3 ml-1" : "size-2 ml-0.5"} rounded-full bg-lime self-end mb-[0.35em]`} />
    </Link>
  );
}
