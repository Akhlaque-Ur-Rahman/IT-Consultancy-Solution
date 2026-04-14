"use client";

import React from "react";
import { motion } from "motion/react";
import { LineChart, Quote, Sparkles, TrendingUp, Zap } from "lucide-react";
import {
  SectionHeading,
  SectionHeadingAccent,
} from "@/components/SectionHeading";

const DEFAULT_RESULTS_TITLE = "Proven Results Across the Enterprise";

interface ServiceResultsProps {
  title?: React.ReactNode;
  results?: {
    label: string;
    value: string;
    suffix: string;
    desc: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
  };
}

const defaultResults = [
  {
    label: "Performance Enhancement",
    value: "40%",
    suffix: "Reduction in Latency",
    desc: "Optimized infrastructure for a regional retail giant, leading to immediate conversion spikes.",
  },
  {
    label: "Cost Optimization",
    value: "25%",
    suffix: "Infrastructure Savings",
    desc: "Migrated legacy workflows to cloud-native systems for a leading healthcare provider.",
  },
  {
    label: "Delivery Acceleration",
    value: "3x",
    suffix: "Faster Go-to-Market",
    desc: "Accelerated development cycles using our proprietary CI/CD framework for FinTech startups.",
  },
];

const CARD_ICONS = [LineChart, Zap, TrendingUp, Sparkles] as const;

export const ServiceResults = ({
  title = DEFAULT_RESULTS_TITLE,
  results = defaultResults,
  testimonial,
}: ServiceResultsProps) => {
  const titleContent =
    typeof title === "string" && title === DEFAULT_RESULTS_TITLE ? (
      <>
        Proven Results Across the{" "}
        <SectionHeadingAccent>Enterprise</SectionHeadingAccent>
      </>
    ) : (
      title
    );

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-black py-16 md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-0 top-0 h-[min(45vh,420px)] w-[min(100vw,720px)] opacity-[0.18]"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 0% 0%, rgba(245,158,11,0.4) 0%, transparent 62%)",
            filter: "blur(3px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[min(40vh,380px)] w-[min(90vw,560px)] opacity-[0.1]"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 100% 100%, rgba(245,158,11,0.35) 0%, transparent 65%)",
            filter: "blur(4px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(245,158,11,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.45) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Measurable impact"
              align="left"
              subtitle="We focus on data-driven outcomes that translate directly to your bottom line. No fluff, just performance."
              subtitleClassName="text-lg font-light text-gray-400 md:text-xl"
              className="mb-10"
            >
              {titleContent}
            </SectionHeading>

            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-br from-[#141414] via-[#0c0c0c] to-[#080808] p-7 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.9)] md:p-8">
              <div className="absolute inset-y-0 left-0 w-1 rounded-l-[1.35rem] bg-gradient-to-b from-[#f59e0b] via-amber-500/80 to-[#d97706]/90" />
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#f59e0b]/[0.08] blur-3xl"
                aria-hidden
              />
              <Quote
                className="mb-4 h-9 w-9 text-[#f59e0b]/40"
                strokeWidth={1.25}
                aria-hidden
              />
              <p className="relative mb-6 text-[17px] italic leading-relaxed text-gray-300 md:text-lg">
                &ldquo;
                {testimonial?.quote ||
                  "The technical depth and delivery speed of the EDUNEX team was instrumental in our digital transformation. They delivered a system that scales with our vision."}
                &rdquo;
              </p>
              <div className="relative flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div className="h-1 w-12 shrink-0 rounded-full bg-gradient-to-r from-[#f59e0b] to-amber-600/60" />
                <span className="text-sm font-bold leading-snug text-white">
                  {testimonial?.author || "CTO, Bihar MediCare"}
                </span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 md:gap-5">
            {results.map((result, i) => {
              const Icon = CARD_ICONS[i % CARD_ICONS.length];
              return (
                <motion.article
                  key={`${result.label}-${i}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#121212] via-[#0a0a0a] to-[#050505] p-6 shadow-[0_20px_50px_-38px_rgba(0,0,0,0.88)] transition-all duration-500 hover:border-[#f59e0b]/30 md:p-7"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-32px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div
                    className="pointer-events-none absolute -right-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#f59e0b]/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#f59e0b]/20 bg-[#f59e0b]/10 text-[#f59e0b] shadow-[0_0_20px_-8px_rgba(245,158,11,0.35)] transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-4 w-4" strokeWidth={1.85} />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f59e0b]/95">
                          {result.label}
                        </span>
                      </div>
                      <p className="text-[15px] leading-relaxed text-gray-400 md:text-base">
                        {result.desc}
                      </p>
                    </div>

                    <div className="relative flex shrink-0 flex-col items-end sm:min-w-[140px]">
                      <div className="relative rounded-2xl border border-white/[0.08] bg-black/50 px-5 py-3 text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:border-[#f59e0b]/25 group-hover:shadow-[0_0_32px_-12px_rgba(245,158,11,0.2)]">
                        <div className="font-black tabular-nums leading-none tracking-tight text-4xl text-white md:text-5xl">
                          {result.value}
                        </div>
                        <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f59e0b]/90">
                          {result.suffix}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#f59e0b] via-amber-400/70 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
