"use client";

import { motion } from "motion/react";
import { Fraunces } from "next/font/google";
import {
  CreditCard,
  BookOpen,
  MessageSquare,
  Cloud,
  Plug,
} from "lucide-react";
import { cn } from "@/lib/utils";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function IntegrationsGrid() {
  const categories = [
    {
      name: "Payment Gateways",
      tools: ["Stripe", "Razorpay", "PayPal", "Square"],
      icon: CreditCard,
    },
    {
      name: "Accounting",
      tools: ["QuickBooks", "Xero", "Tally Prime", "Zoho Books"],
      icon: BookOpen,
    },
    {
      name: "Communication",
      tools: ["Slack", "Microsoft Teams", "WhatsApp API", "Twilio"],
      icon: MessageSquare,
    },
    {
      name: "Cloud & Infrastructure",
      tools: ["AWS", "Google Cloud", "Azure", "Docker"],
      icon: Cloud,
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-[#262626] bg-black py-16 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
      >
        <div
          className="absolute left-1/4 top-0 h-[min(480px,50vh)] w-[min(800px,90vw)] -translate-x-1/2 rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.1), transparent 68%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 75% 60% at 50% 40%, black, transparent 72%)",
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/[0.07] px-4 py-1.5 shadow-[0_0_36px_-12px_rgba(245,158,11,0.35)] backdrop-blur-md">
              <Plug className="h-3.5 w-3.5 text-[#fbbf24]" strokeWidth={2} />
              <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#fcd34d]">
                Integrations
              </span>
            </div>

            <h2
              className={cn(
                display.className,
                "text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-4xl lg:text-[2.65rem]",
              )}
            >
              Plays nice with{" "}
              <span className="bg-gradient-to-r from-[#fde68a] via-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
                tools you use
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-neutral-400 md:text-lg md:leading-relaxed">
              We connect pay gates, books, WhatsApp, and cloud hosts you
              already trust. If you need a custom link, we build it once and
              test it with your staff.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-8">
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:p-6">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#f59e0b]/[0.12] blur-2xl" />
                <p className="bg-gradient-to-br from-white to-neutral-400 bg-clip-text font-mono text-3xl font-bold tabular-nums tracking-tight text-transparent md:text-4xl">
                  Many
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                  Common links
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:p-6">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#f59e0b]/[0.1] blur-2xl" />
                <p className="bg-gradient-to-br from-white to-neutral-400 bg-clip-text font-mono text-3xl font-bold tabular-nums tracking-tight text-transparent md:text-4xl">
                  One
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                  Team to wire it
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {categories.map((category, index) => (
              <motion.article
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative flex flex-col rounded-[1.25rem] border border-white/[0.07] bg-gradient-to-b from-white/[0.04] via-[#0a0a0a]/95 to-[#050505] p-px shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-[#f59e0b]/30 hover:shadow-[0_32px_90px_-40px_rgba(245,158,11,0.15)]"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#f59e0b]/[0.08] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col rounded-[1.2rem] bg-gradient-to-br from-[#0c0c0c] to-[#060606] p-5 md:p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#f59e0b]/25 bg-gradient-to-br from-[#f59e0b]/15 to-[#f59e0b]/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-500 group-hover:scale-105">
                    <category.icon
                      className="h-5 w-5 text-[#fbbf24]"
                      strokeWidth={1.85}
                    />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-white md:text-lg">
                    {category.name}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-500 transition-colors duration-300 group-hover:border-white/[0.12] group-hover:text-neutral-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
