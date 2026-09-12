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

function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  yOffset = 16,
}: RevealProps) {
  const shouldReduceMotion = usePrefersReducedMotion();

  // CRITICAL: Never hide content with opacity: 0 in SSR or initial render.
  // Animating only position (`y`) ensures that text is 100% visible immediately,
  // preventing black/blank screens if IntersectionObserver is delayed or disabled.
  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? undefined : { y: yOffset }}
      whileInView={shouldReduceMotion ? undefined : { y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
