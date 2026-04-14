"use client";

import { useEffect, useState } from "react";

/** Thin gold gradient bar fixed under the header — reading progress only (no layout shift). */
export function BlogReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      if (total <= 0) {
        setPct(0);
        return;
      }
      setPct(Math.min(100, Math.max(0, (el.scrollTop / total) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-20 z-40 h-[3px] bg-black/50"
      aria-hidden
    >
      <div
        className="h-full bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#ea580c] shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
