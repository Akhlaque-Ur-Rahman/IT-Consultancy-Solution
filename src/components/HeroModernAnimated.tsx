"use client";

import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  MapPin,
  PlayCircle,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { buildContactUrl } from "@/lib/contactPrefill";

/** Hero preview image (public/Services/Home_Hero.webp) */
const DASHBOARD_PREVIEW_SRC = "/Services/Home_Hero.webp";

const HERO_STATS = [
  {
    value: "2018",
    label: "Serving since",
    icon: Sparkles,
  },
  {
    value: "90+",
    label: "Local clients",
    icon: Star,
  },
  {
    value: "98%",
    label: "Clients who stay",
    icon: Zap,
  },
  {
    value: "Patna",
    label: "Face to face help",
    icon: Headphones,
  },
] as const;

const MICRO_TRUST = [
  { icon: Star, text: "98% stay with us" },
  { icon: BadgeCheck, text: "Plain pricing talk" },
  { icon: MapPin, text: "Patna & Bihar" },
] as const;

export function HeroModernAnimated() {
  const contactHref = buildContactUrl({
    serviceSlug: "consulting",
    ref: "/",
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden bg-[#050505]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -top-40 left-1/2 h-[min(70vh,640px)] w-[min(140vw,1200px)] -translate-x-1/2 opacity-[0.42]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.5) 0%, rgba(245,158,11,0.12) 45%, transparent 72%)",
            filter: "blur(2px)",
          }}
        />
        <div
          className="absolute left-1/2 top-[28%] h-[420px] w-[min(90vw,720px)] -translate-x-1/2 opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.35) 0%, transparent 68%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 75% 55% at 50% 25%, black 18%, transparent 72%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/25 to-[#050505]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 xl:gap-16">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.04 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 shadow-[0_0_0_1px_rgba(245,158,11,0.06)] backdrop-blur-sm lg:mx-0 mx-auto"
            >
              <span
                className="h-2 w-2 rounded-full bg-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.75)]"
                aria-hidden
              />
              <span className="text-[13px] font-medium text-gray-300 md:text-sm">
                End-to-End Digital Solutions · Patna
              </span>
            </motion.div>

            <motion.h1
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 max-w-[20ch] text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:max-w-[24ch] sm:text-5xl sm:leading-[1.06] lg:max-w-[18ch] lg:text-[2.75rem] xl:max-w-[20ch] xl:text-[3.1rem] mx-auto lg:mx-0"
            >
              <span className="bg-gradient-to-b from-[#fff8e6] via-[#ffe7a8] to-[#c9a227] bg-clip-text text-transparent">
                Simple systems built for real business work
              </span>
              <br />
              <span className="text-white">
                Less mistakes. Faster days. More control.
              </span>
            </motion.h1>

            <motion.p
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mx-auto mb-6 max-w-md text-base leading-snug text-gray-400 sm:text-lg lg:mx-0 [text-wrap:pretty]"
            >
              We help your shop run smoother. Easy billing, clear stock, and
              local support from one Patna team.
            </motion.p>

            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-500 md:text-[13px] lg:justify-start"
            >
              {MICRO_TRUST.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 text-gray-400"
                >
                  <Icon
                    className="h-3.5 w-3.5 shrink-0 text-[#f59e0b]/90"
                    strokeWidth={1.85}
                    aria-hidden
                  />
                  {text}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start"
            >
              <Button
                asChild
                className="group relative h-14 w-full min-h-[52px] overflow-hidden rounded-full border-2 border-[#f59e0b] bg-gradient-to-b from-zinc-900/95 to-black px-8 text-[15px] font-semibold text-white shadow-[0_0_44px_-10px_rgba(245,158,11,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] ring-offset-2 ring-offset-[#050505] transition-all duration-200 hover:border-[#fbbf24] hover:shadow-[0_0_56px_-8px_rgba(245,158,11,0.6)] hover:brightness-[1.05] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b]/45 sm:h-[3.75rem] sm:w-auto sm:shrink-0 md:px-10 md:text-base"
              >
                <Link
                  href={contactHref}
                  className="relative inline-flex w-full items-center justify-center sm:w-auto"
                  aria-label="Request a call back from EDUNEX"
                >
                  <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#f59e0b]/15 to-transparent" />
                  </span>
                  <span className="relative inline-flex items-center">
                    Request a call back
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="group h-14 w-full min-h-[52px] rounded-full border border-white/12 bg-white/[0.04] px-8 text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition-all duration-200 hover:border-[#f59e0b]/40 hover:bg-[#f59e0b]/[0.09] hover:text-[#fef3c7] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 sm:h-[3.75rem] sm:w-auto sm:shrink-0 md:px-10 md:text-base"
              >
                <Link
                  href="/case-studies"
                  className="inline-flex w-full items-center justify-center sm:w-auto"
                  aria-label="View case studies and client results"
                >
                  <span className="relative inline-flex items-center">
                    See results
                    <PlayCircle className="ml-2 h-5 w-5 opacity-90 transition-transform duration-200 group-hover:scale-105" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            <motion.p
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 text-center text-xs text-neutral-500 lg:text-left"
            >
              No obligation · Local team
            </motion.p>
          </div>

          {/* Preview */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="relative w-full"
          >
            <div
              className="pointer-events-none absolute -inset-1 rounded-[1.35rem] opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.32) 0%, rgba(245,158,11,0.06) 42%, transparent 65%)",
                filter: "blur(20px)",
              }}
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-[#f59e0b]/40 bg-[#121212] shadow-[0_0_0_1px_rgba(245,158,11,0.12),0_28px_90px_-24px_rgba(0,0,0,0.95),0_0_80px_-20px_rgba(245,158,11,0.35)]">
              <div className="absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#f59e0b]/50 to-transparent" />
              <Image
                src={DASHBOARD_PREVIEW_SRC}
                alt="EDUNEX digital solutions preview for Bihar businesses"
                width={1600}
                height={1000}
                priority
                fetchPriority="high"
                className="h-auto w-full object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </motion.div>
        </div>

        {/* Proof strip */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.34 }}
          className="mx-auto mt-12 grid w-full max-w-[1100px] grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-4 lg:mt-16"
        >
          {HERO_STATS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] px-4 py-4 text-left shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_12px_40px_-24px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#f59e0b]/30 hover:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.8),0_0_40px_-18px_rgba(245,158,11,0.1)] md:px-5 md:py-5"
              >
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#f59e0b]/[0.07] blur-2xl transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-80" />
                <div className="relative mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.1] bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/[0.05] transition-all duration-300 group-hover:border-[#f59e0b]/35">
                  <Icon
                    className="h-4 w-4 text-[#f59e0b]/90"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <p className="text-2xl font-bold tabular-nums text-white md:text-3xl">
                  {item.value}
                </p>
                <p className="mt-0.5 text-xs text-neutral-500 md:text-sm">
                  {item.label}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-[0.2] bg-gradient-to-r from-[#f59e0b] via-amber-400 to-amber-700 opacity-70 transition-transform duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
