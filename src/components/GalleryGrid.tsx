"use client";

import { useCallback, useEffect, useState } from "react";
import { galleryItems, ratioClass } from "@/data/gallery";
import { Media } from "./Media";
import { Reveal } from "./Reveal";

const spanClass: Record<number, string> = {
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
};

export function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((dir: number) => {
    setOpen((current) => {
      if (current === null) return current;
      return (current + dir + galleryItems.length) % galleryItems.length;
    });
  }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <div className="grid12 gap-y-10 md:gap-y-14">
        {galleryItems.map((item, i) => (
          <Reveal
            key={item.src}
            variant="clip"
            delay={(i % 3) * 90}
            className={`col-span-6 ${spanClass[item.span]}`}
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full cursor-pointer text-left"
              style={item.offset ? { marginTop: `${item.offset * 0.35}rem` } : undefined}
              aria-label={`${item.caption} — böyüt`}
            >
              <div className={`w-full overflow-hidden ${ratioClass[item.ratio]}`}>
                <Media
                  src={item.src}
                  alt={item.caption}
                  sizes="(max-width: 1024px) 50vw, 45vw"
                  className="h-full w-full"
                  imgClassName="transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <span className="type-mono text-muted">{item.caption}</span>
                <span className="type-mono text-muted transition-colors duration-300 group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-paper/97 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="shell flex h-[72px] shrink-0 items-center justify-between">
            <span className="type-mono text-muted">
              {String(open + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={close}
              className="type-mono cursor-pointer text-ink transition-colors duration-300 hover:text-accent"
            >
              Bağla ✕
            </button>
          </div>

          <div className="shell flex min-h-0 flex-1 items-center justify-center pb-6">
            <div className="relative h-full max-h-[76vh] w-full max-w-[1100px]">
              <Media
                src={galleryItems[open].src}
                alt={galleryItems[open].caption}
                sizes="100vw"
                className="h-full w-full !bg-transparent"
                imgClassName="!object-contain"
              />
            </div>
          </div>

          <div className="shell flex shrink-0 items-center justify-between pb-8">
            <span className="type-mono text-muted">{galleryItems[open].caption}</span>
            <div className="flex items-center gap-8">
              <button
                type="button"
                onClick={() => step(-1)}
                className="cursor-pointer text-ink transition-colors duration-300 hover:text-accent"
                aria-label="Əvvəlki"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="cursor-pointer text-ink transition-colors duration-300 hover:text-accent"
                aria-label="Növbəti"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
