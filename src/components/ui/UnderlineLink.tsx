import type { AnchorHTMLAttributes } from "react";

type UnderlineLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function UnderlineLink({ children, className = "", ...props }: UnderlineLinkProps) {
  return (
    <a
      className={`relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-[width] after:duration-300 after:ease-out hover:after:w-full ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
