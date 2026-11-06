import type { CSSProperties, ReactNode } from "react";

type FillButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  icon?: "arrow" | "download";
  height?: string;
  radius?: string;
  className?: string;
  download?: boolean;
  external?: boolean;
  ariaLabel?: string;
};

const ARROW_PATH =
  "M0 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 0L4.125 0.875L7.625 4.375L0 4.375L0 5.625Z";

/**
 * Pill button whose right-hand circle expands to fill the whole button on hover,
 * inverting the colors, while the arrow slides through.
 */
export function FillButton({
  href,
  children,
  variant = "dark",
  icon = "arrow",
  height = "3rem",
  radius = "9999px",
  className = "",
  download,
  external,
  ariaLabel,
}: FillButtonProps) {
  const style = { "--fill-h": height, "--fill-r": radius } as CSSProperties;

  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={ariaLabel}
      style={style}
      className={`fill-btn ${variant === "light" ? "fill-btn--light" : ""} ${className}`}
    >
      <span className="fill-btn__text">{children}</span>
      <span aria-hidden className="fill-btn__circle">
        <span className="fill-btn__circle-text">{children}</span>
        <svg
          viewBox="0 0 10 10"
          className={`fill-btn__icon ${icon === "download" ? "rotate-90" : ""}`}
        >
          <path d={ARROW_PATH} className="fill-btn__path" />
          <path d={ARROW_PATH} className="fill-btn__path" />
        </svg>
      </span>
    </a>
  );
}
