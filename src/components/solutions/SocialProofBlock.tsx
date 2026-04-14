"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Timer, Users, TrendingUp, BadgeCheck } from "lucide-react";
import { clientLogos } from "@/data/mockData";

const STATS = [
  {
    icon: Timer,
    value: "Sprint-led",
    label: "Delivery rhythm",
    description:
      "Roadmaps with visible milestones—no opaque black-box builds.",
  },
  {
    icon: Users,
    value: "Engineer-led",
    label: "Direct access",
    description:
      "You collaborate with builders, not an endless ticket queue.",
  },
  {
    icon: TrendingUp,
    value: "SME-first",
    label: "Right-sized scope",
    description:
      "Systems matched to your ops—not oversized enterprise bloat.",
  },
  {
    icon: BadgeCheck,
    value: "GST-aware",
    label: "India-ready stacks",
    description:
      "Security-minded builds with compliance-friendly exports.",
  },
] as const;

function PartnerLogoWallItem({ svg, index }: { svg: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex items-center justify-center"
    >
      <div
        className="pointer-events-none absolute -inset-3 rounded-2xl bg-[#f59e0b]/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div
        className="relative flex h-[52px] w-full min-w-[132px] max-w-[200px] items-center justify-center px-3 py-2 grayscale opacity-[0.72] brightness-[0.92] transition-[filter,opacity,transform] duration-300 group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 sm:h-[58px] sm:min-w-[148px] [&_svg]:h-auto [&_svg]:max-h-[42px] [&_svg]:w-full [&_svg]:max-w-[200px]"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </motion.div>
  );
}

export default function SocialProofBlock() {
  return (
    <section className="relative overflow-hidden border-y border-[#262626] bg-[#060606] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-1/2 top-0 h-[min(45vh,380px)] w-[min(100vw,880px)] -translate-x-1/2 opacity-[0.4]"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(245,158,11,0.14) 0%, transparent 62%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[200px] w-[320px] rounded-full opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle, rgba(251,191,36,0.35) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 75% 55% at 50% 35%, black 15%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] via-[#0c0c0c] to-[#070707] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_48px_-28px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#f59e0b]/22 md:p-7"
              >
                <div className="absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:via-[#f59e0b]/60" />
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#f59e0b]/12 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />

                <div className="relative z-[2] mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.1] bg-gradient-to-b from-white/[0.1] to-white/[0.02] shadow-[0_0_24px_-10px_rgba(245,158,11,0.4)] ring-1 ring-[#f59e0b]/15 transition-transform duration-300 group-hover:scale-[1.04] group-hover:ring-[#f59e0b]/35">
                  <Icon
                    className="h-[22px] w-[22px] text-[#f59e0b]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>

                <p className="relative z-[2] min-h-[2.75rem] text-lg font-bold leading-snug tracking-tight text-white [text-wrap:balance] md:min-h-0 md:text-xl">
                  {stat.value}
                </p>
                <p className="relative z-[2] mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f59e0b]/95 md:text-[11px] md:tracking-[0.24em]">
                  {stat.label}
                </p>
                <p className="relative z-[2] mt-4 text-xs leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400 md:text-[13px]">
                  {stat.description}
                </p>

                <div
                  className="pointer-events-none absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#f59e0b]/45 to-transparent transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
              </motion.article>
            );
          })}
        </div>

        <div className="relative mt-16 md:mt-20">
          <div className="absolute left-1/2 top-0 h-px w-[min(100%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="mx-auto max-w-3xl pt-14 text-center md:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-3 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Sector marks (illustrative)
              </span>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-2xl font-bold tracking-tight text-white md:text-3xl md:leading-tight"
            >
              Built for teams like{" "}
              <span className="bg-gradient-to-r from-[#fde68a] via-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
                yours
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-neutral-500 md:text-base"
            >
              Sample marks show the kinds of retail, logistics, and services
              orgs we design for—we lead with outcomes, not logo volume. Hover
              to restore color.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative mx-auto mt-10 max-w-[1100px]"
          >
            <div
              className="pointer-events-none absolute -inset-px rounded-[1.35rem] opacity-70"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.2), transparent 42%, rgba(255,255,255,0.04))",
                filter: "blur(1px)",
              }}
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.25rem] border border-white/[0.07] bg-gradient-to-b from-white/[0.06] via-[#0b0b0b] to-[#060606] px-5 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_32px_64px_-36px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:px-8 sm:py-12 md:px-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/35 to-transparent" />
              <div
                className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 lg:gap-x-4 lg:gap-y-0"
                role="list"
              >
                {clientLogos.map((logo, i) => (
                  <div key={i} role="listitem" className="flex justify-center">
                    <PartnerLogoWallItem svg={logo} index={i} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/35 bg-[#f59e0b]/[0.08] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100/95 shadow-[0_0_40px_-12px_rgba(245,158,11,0.35)] transition-all hover:border-[#f59e0b]/55 hover:bg-[#f59e0b]/15 hover:text-white"
            >
              Explore case studies
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
