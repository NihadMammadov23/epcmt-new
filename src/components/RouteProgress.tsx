"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/** Thin accent line that sweeps across the top on route change. */
export function RouteProgress() {
  const pathname = usePathname();
  const previous = useRef<string | null>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (previous.current === null) {
      previous.current = pathname;
      return;
    }
    if (previous.current !== pathname) {
      previous.current = pathname;
      setKey((k) => k + 1);
    }
  }, [pathname]);

  if (key === 0) return null;

  return (
    <span
      key={key}
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-accent"
      style={{ animation: "lineLoad 900ms cubic-bezier(0.16,1,0.3,1) forwards" }}
    />
  );
}
