import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowLink({
  href,
  children,
  className = "",
  tone = "ink",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "ink" | "muted" | "accent";
}) {
  const toneClass =
    tone === "muted"
      ? "text-muted hover:text-ink"
      : tone === "accent"
        ? "text-accent"
        : "text-ink";

  return (
    <Link
      href={href}
      className={`arrow-link group/link border-b border-line pb-1.5 transition-colors duration-300 hover:border-ink ${toneClass} ${className}`}
    >
      <span>{children}</span>
      <span className="arrow" aria-hidden>
        &rarr;
      </span>
    </Link>
  );
}

export function ArrowButton({
  children,
  className = "",
  type = "submit",
  disabled,
}: {
  children: ReactNode;
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`group/btn inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm tracking-tight text-paper transition-colors duration-300 hover:bg-accent disabled:opacity-40 ${className}`}
    >
      <span>{children}</span>
      <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-1.5" aria-hidden>
        &rarr;
      </span>
    </button>
  );
}
