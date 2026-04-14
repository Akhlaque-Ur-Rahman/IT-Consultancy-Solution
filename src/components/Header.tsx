"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  ChevronDown,
  Phone,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GooeyNav, type NavItem } from "./ui/gooey-nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen, closeMenu]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  const navigationItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Web & App Development",
          href: "/services/custom-software-bihar",
        },
        { label: "CRM/ERP Solutions", href: "/services/erp-billing-software" },
        {
          label: "Digital Marketing",
          href: "/services/local-seo-marketing",
        },
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
        { label: "All Services", href: "/services" },
      ],
    },
    { label: "Solutions", href: "/solutions" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Compliance", href: "/compliance" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const mobileDrawer =
    mounted &&
    createPortal(
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-nav-root"
            className="fixed inset-0 z-[200] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <motion.button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-black/65 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="absolute right-0 top-0 flex h-[100dvh] w-full max-w-[min(100%,420px)] flex-col border-l border-white/[0.08] bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-black shadow-[-24px_0_80px_-20px_rgba(0,0,0,0.9)]"
              initial={{ x: "104%" }}
              animate={{ x: 0 }}
              exit={{ x: "104%" }}
              transition={{ type: "spring", stiffness: 380, damping: 38 }}
            >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              aria-hidden
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
                maskImage:
                  "linear-gradient(180deg, black 0%, black 70%, transparent 100%)",
              }}
            />
            <div className="pointer-events-none absolute -left-32 top-24 h-64 w-64 rounded-full bg-[#f59e0b]/[0.12] blur-[80px]" aria-hidden />

            <div className="relative flex items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#fcd34d]/90">
                  Navigate
                </p>
                <p className="mt-1 text-sm font-medium text-white/90">
                  EDUNEX
                </p>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-[#f59e0b]/40 hover:bg-white/[0.08]"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>

            <nav className="relative flex-1 overflow-y-auto overscroll-contain px-4 py-6">
              <ul className="flex flex-col gap-1">
                {navigationItems.map((item, i) => {
                  if (item.hasDropdown) {
                    const open = servicesOpen;
                    return (
                      <li key={item.href} className="list-none">
                        <button
                          type="button"
                          onClick={() => setServicesOpen((v) => !v)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-[15px] font-medium tracking-tight transition-colors",
                            isActive(item.href)
                              ? "bg-white/[0.07] text-[#fbbf24]"
                              : "text-neutral-200 hover:bg-white/[0.05]",
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 shrink-0 opacity-70 transition-transform duration-200",
                              open && "rotate-180",
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-1 ml-3 space-y-0.5 border-l-2 border-[#f59e0b]/25 pl-3">
                                {item.dropdownItems?.map((sub) => (
                                  <li key={sub.href}>
                                    <Link
                                      href={sub.href}
                                      onClick={closeMenu}
                                      className="flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm text-neutral-400 transition-colors hover:bg-white/[0.04] hover:text-white"
                                    >
                                      <span>{sub.label}</span>
                                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-40" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  }
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.25 }}
                      className="list-none"
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium tracking-tight transition-colors",
                          isActive(item.href)
                            ? "bg-gradient-to-r from-[#f59e0b]/15 to-transparent text-[#fbbf24] ring-1 ring-[#f59e0b]/25"
                            : "text-neutral-200 hover:bg-white/[0.05] hover:text-white",
                        )}
                      >
                        {item.label}
                        <ArrowUpRight className="h-4 w-4 shrink-0 opacity-30" />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="relative border-t border-white/[0.06] bg-black/40 px-5 py-5 backdrop-blur-sm">
              <a
                href="tel:+917070809208"
                className="mb-4 flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-sm text-neutral-300 transition-colors hover:border-[#f59e0b]/30 hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f59e0b]/15 text-[#fbbf24]">
                  <Phone className="h-4 w-4" strokeWidth={2} />
                </span>
                <span className="font-medium tabular-nums">+91 70708 09208</span>
              </a>
              <Link href="/contact" onClick={closeMenu} className="block">
                <Button
                  size="lg"
                  className="h-12 w-full rounded-full border-2 border-[#f59e0b] bg-[#f59e0b] text-base font-bold text-black shadow-[0_0_40px_-12px_rgba(245,158,11,0.55)] transition-all hover:bg-amber-400"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Get started
                </Button>
              </Link>
              <p className="mt-3 text-center text-[11px] text-neutral-500">
                Patna · Bihar · Since 2018
              </p>
            </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,border-color] duration-500",
          isScrolled
            ? "border-b border-white/[0.07] bg-black/88 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.85)] backdrop-blur-xl"
            : "border-b border-transparent bg-black/55 backdrop-blur-md",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/35 to-transparent opacity-80"
          aria-hidden
        />
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="flex h-[4.5rem] items-center justify-between md:h-20">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Link
                href="/"
                className="group relative flex items-center rounded-xl ring-1 ring-white/[0.06] transition-[box-shadow,ring-color] duration-300 hover:ring-[#f59e0b]/25"
              >
                <span className="pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-r from-[#f59e0b]/0 via-[#f59e0b]/10 to-[#f59e0b]/0 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                <Image
                  src="/logo.jpg"
                  alt="EDUNEX Logo"
                  className="relative h-12 w-auto object-contain sm:h-14"
                  width={200}
                  height={56}
                  priority
                />
              </Link>
            </motion.div>

            <div className="hidden lg:block">
              <GooeyNav items={navigationItems} currentPath={pathname} />
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full border-0 bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706] px-7 font-bold text-black shadow-[0_0_28px_-8px_rgba(245,158,11,0.55)] transition-all duration-300 hover:shadow-[0_0_40px_-6px_rgba(245,158,11,0.65)]"
                >
                  <span className="relative z-[1] flex items-center gap-1.5">
                    Get started
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Button>
              </Link>
            </div>

            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-neutral-200 transition-colors hover:border-[#f59e0b]/35 hover:bg-white/[0.07] hover:text-white lg:hidden"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    <X className="h-5 w-5" strokeWidth={2} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    <Menu className="h-5 w-5" strokeWidth={2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {mobileDrawer}
    </>
  );
}
