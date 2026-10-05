import { ReactNode } from "react";

export default function MacWindow({ title, children, dark = false, className = "" }: { title: string; children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <div className={`rounded-[14px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,.6)] ring-1 ${dark ? "ring-white/10 bg-[#1c1c20] text-white" : "ring-black/10 bg-white text-ink"} ${className}`}>
      <div className={`relative flex items-center h-10 px-4 ${dark ? "bg-[#2a2a2f]" : "bg-[#ececec]"}`}>
        <div className="flex gap-2" aria-hidden>
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <p className={`absolute inset-x-0 text-center text-[13px] font-medium pointer-events-none ${dark ? "text-white/60" : "text-black/55"}`}>{title}</p>
      </div>
      {children}
    </div>
  );
}
