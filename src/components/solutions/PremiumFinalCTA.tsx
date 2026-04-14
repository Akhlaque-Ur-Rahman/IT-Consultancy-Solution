"use client";

import { motion } from "motion/react";
import { Fraunces } from "next/font/google";
import { ArrowRight, Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { buildContactUrl } from "@/lib/contactPrefill";
import { cn } from "@/lib/utils";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const trustItems = [
  "Secure infrastructure",
  "Direct OEM support",
  "Zero hidden fees",
] as const;

export default function PremiumFinalCTA() {
  const baseContact = buildContactUrl({
    serviceSlug: "consulting",
    ref: "/solutions#final-cta",
  });
  const consultHref = `${baseContact}&intent=consultation`;
  const planHref = `${baseContact}&intent=implementation`;

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden border-t border-[#262626] bg-black py-16 md:py-28"
    >
      {/* Edge bokeh */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -left-24 top-1/2 h-[min(420px,55vh)] w-[min(420px,45vw)] -translate-y-1/2 rounded-full opacity-50 blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.35), transparent 68%)",
          }}
        />
        <div
          className="absolute -right-24 top-1/2 h-[min(420px,55vh)] w-[min(420px,45vw)] -translate-y-1/2 rounded-full opacity-45 blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.28), transparent 68%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 65% 50% at 50% 50%, black, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="rounded-[1.75rem] bg-gradient-to-r from-[#f59e0b]/30 via-[#f59e0b]/12 to-[#f59e0b]/30 p-[1px] shadow-[0_0_80px_-24px_rgba(245,158,11,0.45)] md:rounded-[2rem]">
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/[0.06] bg-gradient-to-br from-[#101010] via-[#070707] to-[#030303] px-6 py-12 text-center md:rounded-[1.95rem] md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-30%,rgba(245,158,11,0.14),transparent_55%)]" />
            <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#f59e0b]/[0.08] blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[#f59e0b]/[0.05] blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative z-[1]"
            >
              <h2
                className={cn(
                  display.className,
                  "mx-auto max-w-4xl text-balance text-[1.85rem] font-semibold leading-[1.12] tracking-[-0.02em] text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.08]",
                )}
              >
                Ready to Solidify Your Digital{" "}
                <span className="bg-gradient-to-r from-[#fde68a] via-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
                  Foundation?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-400 md:mt-8 md:text-lg md:leading-relaxed">
                Don&apos;t settle for generic software. Partner with senior
                engineers to build a core system that drives measurable business
                outcomes. Let&apos;s discuss your implementation roadmap today.
              </p>

              <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-5">
                <Link href={consultHref} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="group/cal h-14 w-full rounded-full border-2 border-[#f59e0b] bg-[#f59e0b] px-8 font-bold text-black shadow-[0_0_44px_-12px_rgba(245,158,11,0.55)] transition-all hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-[0_0_56px_-8px_rgba(245,158,11,0.5)] md:min-w-[260px] md:px-10"
                  >
                    Get a Free Consultation
                    <Calendar className="ml-2 h-5 w-5 transition-transform group-hover/cal:rotate-[-8deg]" />
                  </Button>
                </Link>
                <Link href={planHref} className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group/plan h-14 w-full rounded-full border-white/25 bg-white/[0.04] px-8 font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_16px_48px_-24px_rgba(255,255,255,0.12)] md:min-w-[280px] md:px-10"
                  >
                    Request Implementation Plan
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/plan:translate-x-0.5" />
                  </Button>
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-white/[0.06] pt-10 md:mt-14 md:gap-x-14 md:pt-12">
                {trustItems.map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#fcd34d]/95"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#f59e0b]/35 bg-[#f59e0b]/15 shadow-[0_0_20px_-8px_rgba(245,158,11,0.5)]">
                      <Check
                        className="h-3.5 w-3.5 text-[#fbbf24]"
                        strokeWidth={3}
                      />
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
