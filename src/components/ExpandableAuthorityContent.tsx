"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type ExpandableAuthorityContentProps = {
  children: React.ReactNode;
};

/**
 * Collapses long SEO/authority prose on the home page; full text stays in the DOM for SEO.
 */
export function ExpandableAuthorityContent({
  children,
}: ExpandableAuthorityContentProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="not-prose max-w-none">
      <div
        className={
          expanded
            ? "relative"
            : "relative max-h-[min(22rem,52vh)] overflow-hidden md:max-h-[min(26rem,48vh)]"
        }
      >
        {children}
        {!expanded && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#121212] via-[#121212]/85 to-transparent"
            aria-hidden
          />
        )}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/45 bg-amber-500/10 px-6 py-2.5 text-sm font-semibold text-[#f59e0b] transition-colors hover:bg-amber-500/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
        >
          {expanded ? "Show less" : "Read full article"}
          <ChevronDown
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      </div>
    </div>
  );
}
