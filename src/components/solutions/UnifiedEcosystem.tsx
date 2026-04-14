"use client";

import { motion } from "motion/react";
import { Fraunces } from "next/font/google";
import { Network, Zap, Shield, BarChart, Target } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const orbitNodes = [
  {
    icon: Zap,
    label: "Billing",
    angle: 0,
    inset: "28%",
    duration: 28,
    reverse: false,
  },
  {
    icon: Shield,
    label: "Security",
    angle: 90,
    inset: "0%",
    duration: 38,
    reverse: true,
  },
  {
    icon: BarChart,
    label: "ERP",
    angle: 180,
    inset: "28%",
    duration: 28,
    reverse: false,
  },
  {
    icon: Network,
    label: "CRM",
    angle: 270,
    inset: "0%",
    duration: 38,
    reverse: true,
  },
] as const;

const bullets = [
  "Eliminate tool fragmentation and data duplication",
  "Unified cross-department visibility (Full Spectrum)",
  "Absolute data consistency for rapid decision-making",
  "Single platform control for reduced operational risk",
] as const;

export default function UnifiedEcosystem() {
  return (
    <section className="relative overflow-hidden border-t border-[#262626] bg-[#050505] py-16 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
      >
        <div
          className="absolute left-1/3 top-1/2 h-[min(500px,60vh)] w-[min(800px,90vw)] -translate-y-1/2 rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.09), transparent 68%)",
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.06] via-[#0c0c0c]/95 to-[#030303] p-[1px] shadow-[0_40px_120px_-56px_rgba(0,0,0,0.95)] backdrop-blur-xl md:rounded-[2.25rem]">
          <div className="relative rounded-[1.7rem] bg-gradient-to-br from-[#111]/98 via-[#080808] to-black px-6 py-10 md:rounded-[2.15rem] md:px-10 md:py-14 lg:px-16 lg:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                backgroundSize: "48px 48px",
                maskImage:
                  "radial-gradient(ellipse 85% 70% at 70% 40%, black, transparent 75%)",
              }}
            />
            <div className="absolute -right-32 top-1/2 h-[min(420px,80%)] w-[min(420px,55vw)] -translate-y-1/2 rounded-full bg-[#f59e0b]/[0.06] blur-[100px]" />

            <div className="relative z-[1] grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/[0.08] px-4 py-1.5 shadow-[0_0_32px_-10px_rgba(245,158,11,0.35)] backdrop-blur-md"
                >
                  <Network
                    className="h-3.5 w-3.5 text-[#fbbf24]"
                    strokeWidth={2}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#fcd34d]">
                    Single source of truth
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={cn(
                    display.className,
                    "text-[2rem] font-semibold leading-[1.08] tracking-[-0.02em] md:text-4xl lg:text-[2.75rem] lg:leading-[1.06]",
                  )}
                >
                  <span className="text-white">One Platform.</span>
                  <br />
                  <span className="text-neutral-500">Zero Fragmentation.</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 md:mt-7 md:text-lg"
                >
                  Eliminate the hidden costs of bridge connectors and data
                  silos. Our ecosystem provides absolute consistency across
                  department lines, giving you a single source of truth for every
                  decision.
                </motion.p>

                <ul className="mt-9 space-y-5 md:mt-10 md:space-y-6">
                  {bullets.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.08 + 0.15,
                        duration: 0.45,
                      }}
                      className="group/li flex items-start gap-4 text-neutral-300"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#f59e0b]/25 bg-[#f59e0b]/[0.08] shadow-[0_0_24px_-8px_rgba(245,158,11,0.35)] transition-all duration-300 group-hover/li:border-[#f59e0b]/45 group-hover/li:shadow-[0_0_28px_-6px_rgba(245,158,11,0.45)]">
                        <Target
                          className="h-4 w-4 text-[#fbbf24]"
                          strokeWidth={2}
                        />
                      </div>
                      <span className="leading-relaxed text-[15px] md:text-base">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Orbital diagram */}
              <div className="relative mx-auto aspect-square w-full max-w-[min(100%,22rem)] sm:max-w-md lg:max-w-none">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Pulsing rings */}
                  <motion.div
                    className="absolute inset-[28%] rounded-full border border-dashed border-[#f59e0b]/35 shadow-[inset_0_0_30px_rgba(245,158,11,0.08)]"
                    animate={{ opacity: [0.65, 1, 0.65] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute inset-[0%] rounded-full border border-[#f59e0b]/25"
                    animate={{ opacity: [0.45, 0.75, 0.45] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="absolute inset-[28%] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.04),transparent_65%)]" />

                  {/* Core */}
                  <div className="relative z-20 flex items-center justify-center">
                    <div className="group relative">
                      <div className="absolute inset-0 scale-110 rounded-full bg-[#f59e0b]/20 blur-[40px] transition-opacity duration-700 group-hover:opacity-90 md:blur-[56px]" />
                      <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-b from-[#1c1c1c] to-black shadow-[0_0_60px_-12px_rgba(245,158,11,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-[#f59e0b]/20 md:h-32 md:w-32">
                        <Image
                          src="/logo.jpg"
                          alt="EDUNEX Services Logo"
                          fill
                          sizes="(max-width: 768px) 96px, 128px"
                          className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                  {orbitNodes.map((node, idx) => (
                    <motion.div
                      key={`${node.label}-${idx}`}
                      animate={{
                        rotate: [
                          node.angle,
                          node.angle + (node.reverse ? -360 : 360),
                        ],
                      }}
                      transition={{
                        duration: node.duration,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="pointer-events-none absolute"
                      style={{
                        top: node.inset,
                        left: node.inset,
                        right: node.inset,
                        bottom: node.inset,
                      }}
                    >
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                          animate={{
                            rotate: [
                              -node.angle,
                              -node.angle + (node.reverse ? 360 : -360),
                            ],
                          }}
                          transition={{
                            duration: node.duration,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="pointer-events-auto"
                        >
                          <div className="flex w-[3.25rem] flex-col items-center justify-center gap-1 rounded-full border border-[#f59e0b]/40 bg-black/55 py-2 shadow-[0_0_28px_-6px_rgba(245,158,11,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#f59e0b] hover:shadow-[0_0_36px_-4px_rgba(245,158,11,0.55)] md:w-16 md:gap-1.5 md:py-2.5">
                            <node.icon className="h-4 w-4 text-[#fbbf24] md:h-[1.35rem] md:w-[1.35rem]" />
                            <span className="text-[7px] font-bold uppercase leading-none tracking-wide text-amber-200/90 md:text-[9px]">
                              {node.label}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
