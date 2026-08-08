"use client";

import { motion } from "motion/react";
import { useSyncExternalStore, type ReactNode } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

// Reads prefers-reduced-motion via useSyncExternalStore instead of motion's
// own useReducedMotion: that hook resolves synchronously on the client
// (window is always available there) but is always null during SSR, which
// causes a hydration mismatch. useSyncExternalStore is built to reconcile
// exactly this kind of server/client divergence safely.
function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      // amount is low and margin extends the trigger zone below the
      // viewport, so content finishes revealing before it's scrolled into
      // view instead of staying at opacity:0 through a normal-speed scroll.
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -20% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
