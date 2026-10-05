// Infinite ticker. Content is duplicated once so the loop is seamless.
export default function Marquee({ items, className = "", tone = "pink" }: { items: string[]; className?: string; tone?: "pink" | "lime" | "blue" | "sun" }) {
  const bg = { pink: "bg-pink text-white", lime: "bg-lime text-ink", blue: "bg-blue text-white", sun: "bg-sun text-ink" }[tone];
  const row = [...items, ...items];
  return (
    <div className={`${bg} overflow-hidden ${className}`}>
      <div className="marquee flex w-max">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-6 pr-6 whitespace-nowrap" aria-hidden={i >= items.length}>
            {t}<span aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
