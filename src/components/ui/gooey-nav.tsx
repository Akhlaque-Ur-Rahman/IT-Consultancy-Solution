"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

interface GooeyNavProps {
  items: NavItem[];
  className?: string;
  currentPath?: string;
}

export function GooeyNav({
  items,
  className,
  currentPath = "",
}: GooeyNavProps) {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav
      className={cn("relative flex items-center gap-0.5", className)}
    >
      {items.map((item) => {
        const isActive =
          item.href === "/"
            ? currentPath === "/"
            : currentPath.startsWith(item.href);
        const isHovered = item.href === hoveredPath;
        const isDropdownActive = activeDropdown === item.href;

        return (
          <div
            key={item.href}
            className="group relative"
            onMouseEnter={() => {
              setHoveredPath(item.href);
              if (item.hasDropdown) setActiveDropdown(item.href);
            }}
            onMouseLeave={() => {
              setHoveredPath(null);
              setActiveDropdown(null);
            }}
          >
            <motion.div whileTap={{ scale: 0.97 }} className="relative">
              <Link
                href={item.href}
                className={cn(
                  "relative z-10 flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors duration-300 md:px-4",
                  isActive
                    ? "text-[#fde68a]"
                    : "text-neutral-300 group-hover:text-[#fbbf24]",
                )}
              >
                {isHovered && (
                  <motion.div
                    layoutId="gooey-nav-pill"
                    className={cn(
                      "absolute inset-0 z-0 rounded-full",
                      isActive
                        ? "bg-gradient-to-r from-[#f59e0b]/20 to-[#f59e0b]/08 ring-1 ring-[#f59e0b]/35"
                        : "bg-white/[0.06] ring-1 ring-white/[0.08]",
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}

                {isActive && !isHovered && (
                  <span
                    className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-[#f59e0b]/12 to-transparent ring-1 ring-[#f59e0b]/20"
                    aria-hidden
                  />
                )}

                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 opacity-80 transition-transform duration-200",
                        isDropdownActive && "rotate-180",
                      )}
                    />
                  )}
                </span>
              </Link>
            </motion.div>

            <AnimatePresence>
              {item.hasDropdown && isDropdownActive && (
                <motion.div
                  className="absolute left-1/2 top-full z-20 mt-3 w-[17rem] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080808]/95 py-2 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.85),0_0_48px_-20px_rgba(245,158,11,0.18)] backdrop-blur-xl"
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/50 to-transparent"
                    aria-hidden
                  />
                  {item.dropdownItems?.map((dropdownItem, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Link
                        href={dropdownItem.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group/row relative block w-full px-4 py-2.5 text-left text-[13px] text-neutral-400 transition-colors hover:bg-white/[0.04] hover:text-white"
                      >
                        <span className="absolute left-0 top-1/2 h-0 w-0.5 -translate-y-1/2 rounded-full bg-[#f59e0b] opacity-0 transition-all group-hover/row:h-[60%] group-hover/row:opacity-100" />
                        <span className="pl-0 transition-[padding] duration-200 group-hover/row:pl-2">
                          {dropdownItem.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
