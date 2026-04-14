"use client";

import React from "react";
import { motion } from "motion/react";
import { Layers, ShieldCheck, Zap } from "lucide-react";
import {
  SectionHeading,
  SectionHeadingAccent,
} from "@/components/SectionHeading";

interface EngineeringProps {
  data: {
    stack: string[];
    performance: string;
    security: string;
  };
}

const featureCards = [
  {
    key: "perf",
    title: "Performance-First",
    icon: Zap,
    iconWrap:
      "border-amber-500/30 bg-gradient-to-br from-amber-500/15 to-transparent text-[#f59e0b] shadow-[0_0_28px_-8px_rgba(245,158,11,0.35)]",
  },
  {
    key: "sec",
    title: "Military-Grade Security",
    icon: ShieldCheck,
    iconWrap:
      "border-emerald-500/30 bg-gradient-to-br from-emerald-500/12 to-transparent text-emerald-400 shadow-[0_0_28px_-8px_rgba(52,211,153,0.25)]",
  },
] as const;

export const EngineeringDetails = ({ data }: EngineeringProps) => {
  const perfBody = data.performance || "99.9% Uptime SLA";
  const secBody = data.security || "ISO 27001 Compliant";

  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-1/2 top-0 h-[min(50vh,480px)] w-[min(100vw,900px)] -translate-x-1/2 opacity-[0.18]"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(245,158,11,0.4) 0%, rgba(245,158,11,0.06) 55%, transparent 72%)",
            filter: "blur(2px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Engineering"
              align="left"
              subtitle="Our engineering philosophy centers on clean code, elastic architecture, and deep automation. We don't just build software - we build systems that endure."
              subtitleClassName="max-w-xl text-lg text-gray-400 md:text-[1.05rem]"
              className="mb-10"
            >
              <>
                Technical excellence{" "}
                <SectionHeadingAccent>at scale</SectionHeadingAccent>
              </>
            </SectionHeading>

            <div className="space-y-4">
              {featureCards.map((item, i) => {
                const Icon = item.icon;
                const body = i === 0 ? perfBody : secBody;
                return (
                  <motion.div
                    key={item.key}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#121212] via-[#0c0c0c] to-[#080808] p-5 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-[#f59e0b]/25 md:p-6"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.45 }}
                  >
                    <div
                      className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-70"
                      style={{
                        background:
                          i === 0
                            ? "radial-gradient(circle, rgba(245,158,11,0.35) 0%, transparent 70%)"
                            : "radial-gradient(circle, rgba(52,211,153,0.3) 0%, transparent 70%)",
                      }}
                      aria-hidden
                    />
                    <div className="relative flex gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${item.iconWrap}`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <h3 className="mb-1.5 text-base font-bold text-white md:text-lg">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-gray-400 md:text-[15px]">
                          {body}
                        </p>
                      </div>
                    </div>
                    <div
                      className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#f59e0b]/80 via-amber-400/50 to-transparent transition-transform duration-300 group-hover:scale-x-100"
                      aria-hidden
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative lg:pt-4"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="pointer-events-none absolute -inset-px rounded-[1.4rem] opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.35) 0%, rgba(245,158,11,0.2) 45%, rgba(59,130,246,0.08) 100%)",
                filter: "blur(14px)",
              }}
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.1] bg-gradient-to-b from-[#111827]/90 via-[#0a0a0f] to-[#050508] p-8 shadow-[0_28px_80px_-32px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.06)] md:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent" />
              <div
                className="pointer-events-none absolute -right-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
                aria-hidden
              />

              <div className="relative mb-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-blue-950/40 text-blue-400 shadow-[0_0_24px_-6px_rgba(59,130,246,0.45)]">
                  <Layers className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white md:text-xl">
                    Core technology stack
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-500">
                    Built for reliability &amp; speed
                  </p>
                </div>
              </div>

              <div className="relative flex flex-wrap gap-2.5 md:gap-3">
                {data.stack?.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.04 * idx }}
                    className="inline-flex items-center rounded-full border border-white/[0.12] bg-black/50 px-4 py-2.5 text-sm font-medium text-gray-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/35 hover:bg-blue-950/20 hover:text-blue-100 hover:shadow-[0_8px_28px_-12px_rgba(59,130,246,0.35)]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <p className="relative mt-8 border-t border-white/[0.06] pt-6 text-sm leading-relaxed text-gray-500">
                Stacks are chosen for your workload - fast on patchy networks,
                safe for your data, and easy for your team to adopt.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
