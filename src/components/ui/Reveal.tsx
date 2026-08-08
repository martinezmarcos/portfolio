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

  // Deliberately never hides content via opacity. `initial`/`whileInView`
  // only animate position, so if JS never runs (blocked script, a browser
  // extension interfering, IntersectionObserver failing for any reason) the
  // text is still fully visible and readable — just without the slide-in.
  // Content must never depend on JS succeeding to be visible.
  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? undefined : { y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -20% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
