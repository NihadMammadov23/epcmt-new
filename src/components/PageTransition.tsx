"use client";

import { usePathname } from "next/navigation";

/** Re-mounts page content on navigation so the enter animation replays. */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <main key={pathname} className="page-enter">
      {children}
    </main>
  );
}
