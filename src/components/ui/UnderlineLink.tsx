"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type UnderlineLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function UnderlineLink({ children, className = "", href, onClick, ...props }: UnderlineLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (href === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    onClick?.(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative inline-flex items-center gap-1.5 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-white after:transition-[width] after:duration-300 after:ease-out hover:after:w-full ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
