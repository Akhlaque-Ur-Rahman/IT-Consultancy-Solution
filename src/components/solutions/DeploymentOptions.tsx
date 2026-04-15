"use client";

import { motion } from "motion/react";
import { Fraunces } from "next/font/google";
import { Cloud, Server, Database, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function DeploymentOptions() {
  const models = [
    {
      icon: Cloud,
      title: "Cloud on our care",
      description:
        "We host and update for you. You log in from shop, home, or phone.",
      features: [
        "Backups on schedule",
        "Updates without a server room at your site",
        "Room to grow busy seasons",
        "Less box clutter in back office",
      ],
      tag: "Most picked",
      ring: "from-sky-500/35 via-sky-500/10 to-sky-500/35",
      glow: "rgba(56, 189, 248, 0.12)",
      borderAccent: "border-sky-500/35",
      iconBg: "from-sky-500/20 to-sky-500/[0.04]",
    },
    {
      icon: Database,
      title: "On your own machines",
      description:
        "Runs inside your office LAN when you must keep data in the building.",
      features: [
        "Data stays on your drives",
        "Works when outside net is weak",
        "You control who plugs in",
        "We still help patch and backup",
      ],
      tag: "Full control",
      ring: "from-amber-500/40 via-amber-500/12 to-amber-500/40",
      glow: "rgba(245, 158, 11, 0.14)",
      borderAccent: "border-amber-500/40",
      iconBg: "from-amber-500/25 to-amber-500/[0.05]",
    },
    {
      icon: Server,
      title: "Mix of both",
      description:
        "Counter stays local. Reports and backup sync when the line is good.",
      features: [
        "Billing works offline in rush",
        "Night sync to safe cloud copy",
        "Fallback if one side fails",
        "We tune for your line quality",
      ],
      tag: "Balanced",
      ring: "from-emerald-500/35 via-emerald-500/10 to-emerald-500/35",
      glow: "rgba(52, 211, 153, 0.12)",
      borderAccent: "border-emerald-500/35",
      iconBg: "from-emerald-500/20 to-emerald-500/[0.04]",
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-[#262626] bg-black py-16 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
      >
        <div
          className="absolute right-0 top-1/4 h-[320px] w-[45%] max-w-2xl -translate-y-1/2 rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.08), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
              display.className,
              "text-balance text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-white md:text-4xl lg:text-[2.65rem]",
            )}
          >
            Where should your{" "}
            <span className="bg-gradient-to-r from-[#fde68a] via-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
              system
            </span>{" "}
            live?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-5 text-pretty text-base leading-relaxed text-neutral-400 md:mt-6 md:text-lg"
          >
            Pick what fits your risk and your net speed. We explain pros in
            plain words before you sign.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-7">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={cn(
                "group relative flex flex-col rounded-[1.35rem] bg-gradient-to-br p-[1px] shadow-[0_28px_80px_-48px_rgba(0,0,0,0.9)]",
                model.ring,
              )}
            >
              <div
                className="relative flex h-full flex-col rounded-[1.32rem] border border-white/[0.06] bg-gradient-to-b from-[#101010] via-[#080808] to-[#030303] px-7 pb-8 pt-7 text-center md:px-8"
                style={{
                  boxShadow: `inset 0 0 80px -40px ${model.glow}`,
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[1.32rem] opacity-30"
                  style={{
                    background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${model.glow}, transparent 55%)`,
                  }}
                />

                  <div className="relative mb-6 inline-flex self-center rounded-full border border-white/[0.1] bg-white/[0.04] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 backdrop-blur-sm">
                    {model.tag}
                  </div>

                  <div
                    className={cn(
                      "relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border bg-gradient-to-br shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105",
                      model.borderAccent,
                      model.iconBg,
                    )}
                  >
                    <model.icon
                      className="h-8 w-8 text-[#fbbf24]"
                      strokeWidth={1.65}
                    />
                  </div>

                  <h3 className="relative text-xl font-semibold tracking-tight text-white">
                    {model.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-neutral-500">
                    {model.description}
                  </p>

                  <div className="relative mt-8 w-full space-y-3 border-t border-white/[0.07] pt-8 text-left">
                    {model.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-xs font-medium text-neutral-400 md:text-[13px]"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-[#f59e0b]/25 bg-[#f59e0b]/[0.08]">
                          <Check
                            className="h-3.5 w-3.5 text-[#fbbf24]"
                            strokeWidth={2.8}
                          />
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
