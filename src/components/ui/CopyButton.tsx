"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type CopyButtonProps = {
  text: string;
  label?: string;
  className?: string;
};

export function CopyButton({ text, label = "Copy", className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={label}
      className={`group relative inline-flex items-center gap-2 rounded-xl border border-black/10 bg-zinc-100/80 px-4 py-3 font-sans text-xs font-medium text-zinc-700 transition-colors hover:border-black/20 hover:bg-zinc-200 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-900 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5 font-semibold text-emerald-600"
          >
            <Check size={13} strokeWidth={2.5} />
            <span>Copied!</span>
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5"
          >
            <Copy size={13} strokeWidth={1.75} className="text-zinc-400 group-hover:text-zinc-700" />
            <span>{label}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
