"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

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
      className={["relative flex items-center gap-1", className]
        .filter(Boolean)
        .join(" ")}
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
            className="relative group"
            onMouseEnter={() => {
              setHoveredPath(item.href);
              if (item.hasDropdown) setActiveDropdown(item.href);
            }}
            onMouseLeave={() => {
              setHoveredPath(null);
              setActiveDropdown(null);
            }}
          >
            <motion.div whileTap={{ scale: 0.95 }} className="relative">
              <Link
                href={item.href}
                className={[
                  "relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1",
                  isActive
                    ? "text-[#f59e0b]"
                    : "text-gray-300 group-hover:text-[#f59e0b]",
                ].join(" ")}
              >
                {/* The "Gooey" / Floating Pill Background */}
                {isHovered && (
                  <motion.div
                    layoutId="gooey-nav-pill"
                    className="absolute inset-0 z-0 rounded-md bg-[#1a1a1a]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={[
                        "w-4 h-4 transition-transform duration-200",
                        isDropdownActive ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  )}
                </span>
              </Link>
            </motion.div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {item.hasDropdown && isDropdownActive && (
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#0a0a0a]/95 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 py-2 overflow-hidden z-20"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {item.dropdownItems?.map((dropdownItem, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={dropdownItem.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block w-full px-4 py-2.5 text-left text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                      >
                        {dropdownItem.label}
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
