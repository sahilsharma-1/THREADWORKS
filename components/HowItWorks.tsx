import { STEPS } from "@/lib/custom";

const COLORS = ["bg-lime text-ink", "bg-pink text-white", "bg-sun text-ink", "bg-blue text-white"];

export default function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-[1440px] px-4 md:px-8 mt-20 md:mt-28">
      <div aria-hidden className="pointer-events-none absolute -z-10 inset-0">
        <div className="absolute left-[5%] top-[20%] size-[320px] rounded-full bg-pink/30 blur-3xl" />
        <div className="absolute left-[40%] top-[40%] size-[360px] rounded-full bg-sun/50 blur-3xl" />
        <div className="absolute right-[5%] top-[10%] size-[340px] rounded-full bg-blue/25 blur-3xl" />
      </div>
      <h2 className="display text-[48px] md:text-[80px]">how it works</h2>
      <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STEPS.map((s, i) => (
          <li key={s.title} className="glass rounded-[28px] p-6 md:p-7">
            <span className={`grid place-items-center size-14 rounded-full display text-[30px] ${COLORS[i]}`}>{i + 1}</span>
            <p className="mt-6 text-2xl font-extrabold leading-tight">{s.title}</p>
            <p className="mt-2 text-ink/75 leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
