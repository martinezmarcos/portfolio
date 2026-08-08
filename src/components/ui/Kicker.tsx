import type { ReactNode } from "react";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
      {children}
    </span>
  );
}
