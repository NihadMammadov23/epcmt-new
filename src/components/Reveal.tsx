"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Variant = "rise" | "fade" | "clip" | "line";

const variantClass: Record<Variant, string> = {
  rise: "reveal-rise",
  fade: "reveal",
  clip: "reveal-clip",
  line: "reveal-line",
};

export function Reveal({
  as: Tag = "div",
  variant = "rise",
  delay = 0,
  className = "",
  threshold = 0.18,
  children,
}: {
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
  threshold?: number;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Content already on screen at mount (e.g. the hero, or anything
    // above the fold on first paint) should be visible immediately
    // rather than waiting on the observer's first callback, which can
    // be delayed by heavy browser-extension activity or tab throttling.
    const rect = node.getBoundingClientRect();
    const alreadyInView =
      rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyInView) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    // Fail-safe: content must never stay permanently hidden if the
    // observer never fires for any reason.
    const fallback = window.setTimeout(() => setVisible(true), 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      data-visible={visible ? "true" : "false"}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={`${variantClass[variant]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Splits a string into words that rise independently, staggered. */
export function RevealWords({
  text,
  className = "",
  delay = 0,
  step = 55,
}: {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <Reveal as="span" variant="rise" delay={delay + i * step} className="inline-block">
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </Reveal>
        </span>
      ))}
    </span>
  );
}
