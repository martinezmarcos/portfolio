"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

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
  yOffset = 8,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.25, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
