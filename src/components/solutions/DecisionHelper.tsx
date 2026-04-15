"use client";

import { motion } from "motion/react";
import { Fraunces } from "next/font/google";
import {
  ArrowRight,
  Calculator,
  Link2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { buildContactUrl } from "@/lib/contactPrefill";
import { cn } from "@/lib/utils";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const scenarios = [
  {
    id: "legacy",
    icon: Calculator,
    title: "Old software feels stuck",
    description:
      "Your current tool is slow, or staff work around it with extra Excel sheets.",
    cta: "Plan a switch",
  },
  {
    id: "siloed",
    icon: Link2,
    title: "Tools do not talk",
    description:
      "Billing lives in one place, stock in another. Numbers rarely match.",
    cta: "Tie flows together",
  },
  {
    id: "scale",
    icon: TrendingUp,
    title: "Busy season ahead",
    description:
      "You expect more orders and fear the counter or godown will break.",
    cta: "Size the build",
  },
  {
    id: "custom",
    icon: Sparkles,
    title: "Odd lane, odd rule",
    description:
      "Box software never matched your discount rule or godown layout.",
    cta: "Shape a custom fit",
  },
] as const;

export default function DecisionHelper() {
  const auditHref = `${buildContactUrl({
    serviceSlug: "consulting",
    ref: "/solutions#decision-helper",
  })}&intent=architecture`;

  return (
    <section
      id="decision-helper"
      className="relative overflow-hidden border-t border-[#262626] bg-black py-16 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden
      >
        <div
          className="absolute -left-1/4 top-0 h-[420px] w-[70%] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.12), transparent 65%)",
          }}
        />
        <div
          className="absolute -right-1/4 bottom-0 h-[380px] w-[60%] rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.06), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 30%, black, transparent 72%)",
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/[0.07] px-4 py-1.5 shadow-[0_0_40px_-12px_rgba(245,158,11,0.35)] backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#fbbf24] shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#fcd34d]">
              Choose your path
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className={cn(
              display.className,
              "text-balance text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-white md:text-4xl lg:text-[2.65rem]",
            )}
          >
            Not Sure Which{" "}
            <span className="bg-gradient-to-r from-[#fde68a] via-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
              Path
            </span>{" "}
            to Take?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-5 text-pretty text-base leading-relaxed text-neutral-400 md:mt-6 md:text-lg md:leading-relaxed"
          >
            Pick the pain that sounds closest. We reply with plain next steps
            and a fair range before deep work starts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {scenarios.map((scenario, idx) => {
            const Icon = scenario.icon;
            const cardHref = `${buildContactUrl({
              serviceSlug: "consulting",
              ref: `/solutions#decision-${scenario.id}`,
            })}`;

            return (
              <motion.article
                key={scenario.id}
                id={`decision-${scenario.id}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="group relative flex min-h-[320px] flex-col rounded-[1.35rem] border border-white/[0.07] bg-gradient-to-b from-white/[0.05] via-[#0a0a0a]/90 to-[#050505] p-px shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_80px_-48px_rgba(0,0,0,0.9)] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#f59e0b]/35 hover:shadow-[0_36px_90px_-40px_rgba(245,158,11,0.18)] md:min-h-[340px]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#f59e0b]/[0.07] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col rounded-[1.3rem] bg-gradient-to-br from-[#0c0c0c] to-[#060606] p-6 md:p-7">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <span
                      className="font-mono text-[10px] font-medium tabular-nums tracking-[0.2em] text-neutral-600"
                      aria-hidden
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-[#f59e0b]/25 blur-xl opacity-40 transition-opacity group-hover:opacity-70" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f59e0b]/30 bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-500 group-hover:scale-105">
                        <Icon
                          className="h-6 w-6 text-[#fbbf24]"
                          strokeWidth={1.75}
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-left text-lg font-semibold leading-snug tracking-tight text-white">
                    {scenario.title}
                  </h3>
                  <p className="mt-3 flex-1 text-left text-[13px] leading-relaxed text-neutral-500 md:text-sm md:leading-relaxed">
                    {scenario.description}
                  </p>

                  <Link href={cardHref} className="mt-6 block">
                    <Button
                      variant="outline"
                      className="group/btn h-11 w-full rounded-full border-white/15 bg-white/[0.03] text-xs font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[#f59e0b]/45 hover:bg-[#f59e0b]/10 hover:text-[#fde68a]"
                    >
                      {scenario.cta}
                      <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mt-14 md:mt-20"
        >
          <div className="rounded-[1.75rem] bg-gradient-to-r from-[#f59e0b]/35 via-[#f59e0b]/12 to-[#f59e0b]/35 p-[1px] shadow-[0_0_60px_-20px_rgba(245,158,11,0.35)]">
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/[0.06] bg-gradient-to-br from-[#101010] via-[#070707] to-[#030303] shadow-[0_40px_120px_-56px_rgba(0,0,0,0.95)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(245,158,11,0.15),transparent_55%)]" />
            <div className="absolute -right-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#f59e0b]/[0.06] blur-3xl" />

            <div className="relative flex flex-col items-center gap-8 px-6 py-10 text-center md:flex-row md:items-center md:justify-between md:gap-12 md:px-12 md:py-12 lg:px-16">
              <p className="max-w-xl text-pretty text-base leading-relaxed text-neutral-400 md:text-left md:text-lg md:leading-relaxed">
                Wherever you start, we open with a{" "}
                <span className="font-semibold text-neutral-100">
                  short free review
                </span>{" "}
                so the next step fits your shop or godown.
              </p>
              <Link href={auditHref} className="shrink-0">
                <Button
                  size="lg"
                  className="group/audit h-14 rounded-full border-2 border-[#f59e0b] bg-[#f59e0b] px-8 font-bold text-black shadow-[0_0_48px_-12px_rgba(245,158,11,0.5)] transition-all hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-[0_0_56px_-8px_rgba(245,158,11,0.45)] md:px-10"
                >
                  Book a free review
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/audit:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
