"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { services } from "@/data/services";
import { Media } from "./Media";
import { Reveal } from "./Reveal";

export function ServiceList() {
  const [active, setActive] = useState<number | null>(null);
  const [fine, setFine] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Eased follow so the preview trails the cursor rather than snapping to it.
  useEffect(() => {
    if (!fine) return;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [fine]);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (!fine) return;
      target.current = { x: e.clientX - 150, y: e.clientY - 190 };
    },
    [fine],
  );

  const onEnter = (i: number, e: React.MouseEvent) => {
    if (!fine) return;
    // Jump the preview to the cursor on first entry to avoid a long sweep.
    if (active === null) {
      const x = e.clientX - 150;
      const y = e.clientY - 190;
      target.current = { x, y };
      current.current = { x, y };
    }
    setActive(i);
  };

  return (
    <div onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
      <Reveal variant="line" className="rule" />

      <ul>
        {services.map((service, i) => (
          <li key={service.slug}>
            <Reveal variant="fade" delay={i * 70}>
              <Link
                href={`/xidmetler/${service.slug}`}
                onMouseEnter={(e) => onEnter(i, e)}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 border-b border-line py-7 transition-colors duration-500 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,18rem)_auto] md:gap-x-8 md:py-9 lg:py-11"
              >
                <span
                  className={`type-mono transition-colors duration-500 ${
                    active === i ? "text-accent" : "text-muted"
                  }`}
                >
                  {service.index}
                </span>

                <span
                  className={`text-[clamp(1.25rem,2.15vw,1.9rem)] leading-[1.12] font-medium tracking-[-0.025em] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    active === i ? "md:translate-x-4" : ""
                  }`}
                >
                  {service.title}
                </span>

                <span
                  className={`col-span-2 col-start-2 mt-3 text-sm leading-relaxed text-muted transition-opacity duration-500 md:col-span-1 md:col-start-3 md:mt-0 md:text-[13.5px] ${
                    active === i ? "md:opacity-100" : "md:opacity-0"
                  }`}
                >
                  {service.summary}
                </span>

                <span
                  aria-hidden
                  className={`col-start-3 row-start-1 self-center transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:col-start-4 ${
                    active === i ? "translate-x-2 text-accent" : "text-muted"
                  }`}
                >
                  &rarr;
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>

      {/* Cursor-trailing preview — desktop, fine pointer only */}
      {fine && (
        <div
          ref={previewRef}
          aria-hidden
          className="pointer-events-none fixed top-0 left-0 z-40 h-[380px] w-[300px] will-change-transform"
        >
          {services.map((service, i) => (
            <div
              key={service.slug}
              className="absolute inset-0 transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: active === i ? 1 : 0,
                transform: active === i ? "scale(1)" : "scale(0.94)",
              }}
            >
              <Media
                src={service.image}
                alt=""
                sizes="300px"
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
