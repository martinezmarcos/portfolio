import type { ReactNode } from "react";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
      <span>{children}</span>
    </span>
  );
}
