"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  PlayCircle,
  Radio,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  SectionHeading,
  SectionHeadingAccent,
} from "@/components/SectionHeading";
import { buildContactUrl } from "@/lib/contactPrefill";

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export default function ProblemSolutionHero() {
  const challenges = [
    "Billing mistakes and stock that never matches the godown",
    "Too much daily work on paper or scattered Excel files",
    "One person holds all the know how when staff change",
    "Slow sales because nearby buyers never find you online",
  ];

  const contactHref = buildContactUrl({
    serviceSlug: "consulting",
    ref: "/solutions",
  });

  return (
    <section className="relative overflow-hidden border-b border-[#262626] bg-[#050505] pb-16 pt-10 md:pb-24 md:pt-14 lg:pb-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -top-40 left-1/2 h-[min(70vh,640px)] w-[min(140vw,1200px)] -translate-x-1/2 opacity-[0.4]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.48) 0%, rgba(245,158,11,0.1) 45%, transparent 72%)",
            filter: "blur(2px)",
          }}
        />
        <div
          className="absolute left-[12%] top-[28%] h-[380px] w-[380px] rounded-full opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.4) 0%, transparent 68%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute bottom-[8%] right-[5%] h-[280px] w-[280px] rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, rgba(251,191,36,0.35) 0%, transparent 70%)",
            filter: "blur(45px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/30 to-[#050505]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 xl:gap-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ duration: 0.55 }}
          >
            <SectionHeading
              eyebrow="End-to-End Digital Solutions Provider"
              align="left"
              titleAs="h1"
              className="mb-6 md:mb-8"
              titleClassName="text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl [text-wrap:balance]"
              subtitle="We help Patna and Bihar owners replace daily chaos with simple systems. Billing, stock, follow up, and reach in one calm plan you can actually run."
              subtitleClassName="mt-5 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg"
            >
              Simple systems for{" "}
              <SectionHeadingAccent>real business work</SectionHeadingAccent>
            </SectionHeading>

            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mb-8 flex flex-wrap gap-3 md:mb-10 md:gap-4"
              aria-label="Company highlights"
            >
              {[
                { k: "2018", v: "Serving since" },
                { k: "90+", v: "Local clients" },
                { k: "98%", v: "Who stay with us" },
              ].map((stat) => (
                <div
                  key={stat.v}
                  className="group relative min-w-[140px] flex-1 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-300 hover:border-[#f59e0b]/25 sm:min-w-0 sm:flex-1"
                >
                  <div
                    className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#f59e0b]/15 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <p className="relative text-2xl font-bold tabular-nums tracking-tight text-white md:text-3xl">
                    {stat.k}
                  </p>
                  <p className="relative mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    {stat.v}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link href={contactHref} className="sm:shrink-0">
                <Button className="group h-auto w-full rounded-full border-2 border-[#f59e0b] bg-black/70 px-7 py-5 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgba(245,158,11,0.55),0_12px_40px_-18px_rgba(0,0,0,0.9)] transition-all duration-200 hover:bg-black/85 hover:shadow-[0_0_48px_-6px_rgba(245,158,11,0.65)] sm:w-auto">
                  Request a call back
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/case-studies" className="sm:shrink-0">
                <Button
                  variant="outline"
                  className="h-auto w-full rounded-full border border-white/20 bg-transparent px-7 py-5 text-base text-white transition-all duration-200 hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  View case studies
                  <PlayCircle className="ml-2 h-5 w-5 opacity-80" />
                </Button>
              </Link>
            </motion.div>

            <motion.p
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-5 text-sm text-neutral-500"
            >
              Local team in Patna · Plain scope · Fair price talk
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="relative"
          >
            <div
              className="pointer-events-none absolute -inset-px rounded-[1.35rem] opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.35) 0%, rgba(245,158,11,0.08) 38%, transparent 62%)",
                filter: "blur(18px)",
              }}
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.1] bg-gradient-to-b from-[#141414] via-[#0e0e0e] to-[#080808] shadow-[0_0_0_1px_rgba(245,158,11,0.08),0_28px_90px_-28px_rgba(0,0,0,0.95)]">
              <div className="absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#f59e0b]/45 to-transparent" />
              <div
                className="pointer-events-none absolute -right-16 top-12 h-48 w-48 rounded-full bg-[#f59e0b]/20 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -left-10 bottom-8 h-36 w-36 rounded-full bg-amber-500/10 blur-3xl"
                aria-hidden
              />

              <div className="relative p-7 md:p-9">
                <div className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.07] pb-6">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                      <Radio
                        className="h-3.5 w-3.5 text-[#f59e0b]"
                        strokeWidth={2}
                        aria-hidden
                      />
                      Quick check
                    </div>
                    <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight text-white md:text-2xl">
                      <Sparkles
                        className="h-5 w-5 shrink-0 text-[#f59e0b]"
                        strokeWidth={2}
                        aria-hidden
                      />
                      Sound familiar?
                    </h2>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-400/95">
                    Common pain
                    <span
                      className="relative flex h-2 w-2"
                      aria-hidden
                    >
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                  </span>
                </div>

                <ul className="space-y-3.5" aria-label="Common business pains">
                  {challenges.map((challenge, index) => (
                    <motion.li
                      key={challenge}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + index * 0.06 }}
                      className="group relative flex gap-4 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:border-[#f59e0b]/20 hover:bg-white/[0.04]"
                    >
                      <span
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent font-mono text-xs font-bold text-[#f59e0b]"
                        aria-hidden
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-0.5 text-[13px] font-medium leading-snug text-neutral-300 transition-colors group-hover:text-neutral-100 md:text-sm">
                        {challenge}
                      </p>
                      <ArrowUpRight
                        className="ml-auto mt-1 h-4 w-4 shrink-0 text-neutral-600 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#f59e0b] group-hover:opacity-100"
                        aria-hidden
                      />
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-white/[0.07] pt-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[
                          "/avatars/129416.jpg",
                          "/avatars/21597.jpg",
                          "/avatars/2827.jpg",
                          "/avatars/129416.jpg",
                        ].map((src, i) => (
                          <div
                            key={`${src}-${i}`}
                            className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[#0e0e0e] bg-[#1a1a1a] ring-1 ring-white/10"
                          >
                            <Image
                              src={src}
                              alt=""
                              fill
                              sizes="44px"
                              loading="lazy"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Shops, clinics, godowns
                        </p>
                        <p className="text-xs text-neutral-500">
                          Face to face help from Patna
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center justify-center gap-1.5 self-start rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 transition-colors hover:border-[#f59e0b]/35 hover:text-white sm:self-auto"
                    >
                      Explore outcomes
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
