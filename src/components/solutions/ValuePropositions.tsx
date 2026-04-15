"use client";

import { motion } from "motion/react";
import { Fraunces } from "next/font/google";
import {
  ShieldCheck,
  Scaling,
  Cpu,
  Headphones,
  Key,
  Layers,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function ValuePropositions() {
  const values = [
    {
      icon: Cpu,
      title: "Built around your margin",
      description:
        "We pick features that cut mistakes and save hours. Fancy extras wait until core bills and stock feel solid.",
    },
    {
      icon: Scaling,
      title: "Room to grow busy seasons",
      description:
        "Systems sized for festival rush and tax week. We avoid bloated packs your staff will never open.",
    },
    {
      icon: ShieldCheck,
      title: "Data treated with care",
      description:
        "Backups, access rules, and clear handovers. We explain what sits where before you go live.",
    },
    {
      icon: Layers,
      title: "You own the work",
      description:
        "Custom build means your files and rights stay with you. Support is optional, not forced.",
    },
    {
      icon: Headphones,
      title: "Patna team on call",
      description:
        "Real people who can visit the godown when the counter jams. Not a far away ticket queue.",
    },
    {
      icon: Key,
      title: "Fits what you already use",
      description:
        "Tally handoff, UPI, WhatsApp pings. Fewer double entries between old tools and new screens.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-[#262626] bg-black py-16 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden
      >
        <div
          className="absolute left-1/2 top-0 h-[min(420px,45vh)] w-[min(900px,95vw)] -translate-x-1/2 rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.1), transparent 68%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 25%, black, transparent 72%)",
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/[0.07] px-4 py-1.5 shadow-[0_0_36px_-12px_rgba(245,158,11,0.35)] backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#fbbf24]" strokeWidth={2} />
            <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#fcd34d]">
              Why owners pick EDUNEX
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.04 }}
            className={cn(
              display.className,
              "text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-4xl lg:text-[2.65rem]",
            )}
          >
            What you get with{" "}
            <span className="bg-gradient-to-r from-[#fde68a] via-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
              EDUNEX
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-5 text-pretty text-base leading-relaxed text-neutral-400 md:mt-6 md:text-lg"
          >
            Simple systems built for real business work. Local proof since 2018.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group relative flex flex-col rounded-[1.25rem] border border-white/[0.07] bg-gradient-to-b from-white/[0.04] via-[#0a0a0a]/95 to-[#050505] p-px shadow-[0_24px_80px_-52px_rgba(0,0,0,0.95)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-[#f59e0b]/28 hover:shadow-[0_32px_90px_-44px_rgba(245,158,11,0.14)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#f59e0b]/[0.07] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col rounded-[1.2rem] bg-gradient-to-br from-[#0c0c0c] to-[#060606] p-6 md:p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#f59e0b]/30 bg-gradient-to-br from-[#f59e0b]/18 to-[#f59e0b]/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105">
                  <value.icon
                    className="h-6 w-6 text-[#fbbf24]"
                    strokeWidth={1.65}
                  />
                </div>

                <h3 className="text-lg font-semibold leading-snug tracking-tight text-white md:text-xl">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-500 md:mt-4 md:text-[15px] md:leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
