"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, company } from "@/data/company";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${scrolled
          ? "border-b border-line/80 bg-paper/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
          }`}
      >
        <div className="shell flex h-[72px] items-center justify-between md:h-[88px]">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
            aria-label={`${company.name} — ana səhifə`}
          >
            <img
              src="/logo.png"
              alt={company.name}
              className="h-17 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex xl:gap-14">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[13.5px] tracking-tight transition-colors duration-300 ${isActive(item.href) ? "text-ink" : "text-muted hover:text-ink"
                  }`}
              >
                {item.label}
                <span
                  aria-hidden
                  className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive(item.href) ? "scale-x-100" : "scale-x-0"
                    }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/elaqe"
              className="group hidden items-center gap-2 text-[13.5px] tracking-tight lg:inline-flex"
            >
              Əlaqə
              <span className="arrow" aria-hidden>
                &rarr;
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Menyunu bağla" : "Menyunu aç"}
              className="relative z-50 flex h-8 w-8 flex-col items-end justify-center gap-[6px] lg:hidden"
            >
              <span
                className={`block h-px bg-ink transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "w-6 translate-y-[3.5px] rotate-45" : "w-6"
                  }`}
              />
              <span
                className={`block h-px bg-ink transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "w-6 -translate-y-[3.5px] -rotate-45" : "w-4"
                  }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile editorial menu */}
      <div
        className={`fixed inset-0 z-40 bg-paper transition-[opacity,visibility] duration-500 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        <div className="shell flex h-full flex-col pt-[72px] pb-10">
          <nav className="flex flex-1 flex-col justify-center">
            {navigation.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-baseline gap-5 border-b border-line py-5"
                style={{
                  transitionDelay: `${open ? 120 + i * 60 : 0}ms`,
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(14px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "700ms",
                  transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <span className="type-mono text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="type-title">{item.label}</span>
              </Link>
            ))}
            <Link
              href="/elaqe"
              className="group flex items-baseline gap-5 py-5"
              style={{
                transitionDelay: `${open ? 120 + navigation.length * 60 : 0}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(14px)",
                transitionProperty: "opacity, transform",
                transitionDuration: "700ms",
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <span className="type-mono text-accent">06</span>
              <span className="type-title text-accent">Əlaqə</span>
            </Link>
          </nav>

          <div className="flex flex-col gap-1 text-sm text-muted">
            <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span className="type-mono mt-4 text-muted">{company.descriptor}</span>
          </div>
        </div>
      </div>
    </>
  );
}
