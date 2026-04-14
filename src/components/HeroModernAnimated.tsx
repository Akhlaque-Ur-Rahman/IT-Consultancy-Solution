"use client";

import { ArrowRight, Headphones, LineChart, PlayCircle, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";

/** Hero dashboard preview — swap file here when the asset changes. */
const DASHBOARD_PREVIEW_SRC = "/dashboard-design.webp";

const HERO_STATS = [
  {
    value: "8+",
    label: "Years in operation",
    icon: Sparkles,
  },
  {
    value: "4+",
    label: "Practice areas",
    icon: Users,
  },
  {
    value: "Lean",
    label: "SME-sized delivery",
    icon: LineChart,
  },
  {
    value: "24/7",
    label: "Support window",
    icon: Headphones,
  },
] as const;

export function HeroModernAnimated() {
  const fadeInUP = {
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505]" />
      </div>

      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14 lg:pb-28">
        <div className="w-full text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUP}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2"
          >
            <span
              className="h-2 w-2 rounded-full bg-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.75)]"
              aria-hidden
            />
            <span className="text-sm font-medium text-gray-300">
              Local IT partner · Patna · Since 2018
            </span>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={fadeInUP}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mx-auto mb-5 max-w-4xl text-4xl font-bold leading-[1.12] text-white md:text-6xl md:leading-[1.08]"
          >
            <span className="bg-gradient-to-b from-[#fff8e6] via-[#ffe7a8] to-[#c9a227] bg-clip-text text-transparent">
              Smarter workflows
            </span>
            <br />
            <span className="text-white">
              Software development for{" "}
              <span className="text-[#f59e0b]">Patna | Bihar</span>
            </span>
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeInUP}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl"
          >
            Billing, GST, ERP, web, apps, and marketing for Patna &amp; Bihar—fair
            pricing and local support since 2018.
          </motion.p>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUP}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button className="group rounded-full border-2 border-[#f59e0b] bg-black/70 px-8 py-6 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgba(245,158,11,0.55),0_12px_40px_-18px_rgba(0,0,0,0.9)] transition-all duration-200 hover:bg-black/85 hover:shadow-[0_0_48px_-6px_rgba(245,158,11,0.65)]">
                Schedule a Free IT Consultation in Bihar
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                variant="outline"
                className="rounded-full border border-white/20 bg-transparent px-8 py-6 text-base text-white transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                Check Our Portfolio
                <PlayCircle className="ml-2 h-5 w-5 opacity-80" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Product preview first */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUP}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="relative mt-10 w-full max-w-5xl md:mt-12"
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
              alt="EDUNEX product preview: software dashboard and business tools"
              width={1600}
              height={1000}
              priority
              className="h-auto w-full object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </motion.div>

        {/* Stats directly under hero image */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUP}
          transition={{ duration: 0.55, delay: 0.42 }}
          className="mx-auto mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-4 lg:mt-16"
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
                  <Icon className="h-4 w-4 text-[#f59e0b]/90" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="text-2xl font-bold tabular-nums text-white md:text-3xl">
                  {item.value}
                </p>
                <p className="mt-0.5 text-xs text-neutral-500 md:text-sm">{item.label}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-[0.2] bg-gradient-to-r from-[#f59e0b] via-amber-400 to-amber-700 opacity-70 transition-transform duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
