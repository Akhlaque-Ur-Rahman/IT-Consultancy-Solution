"use client";

import { motion } from "motion/react";
import { Fraunces } from "next/font/google";
import {
  Search,
  Settings2,
  Rocket,
  LifeBuoy,
  ClipboardCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function ImplementationProcess() {
  const steps = [
    {
      icon: Search,
      title: "Visit and plan",
      duration: "About 1 week",
      description:
        "We sit at your shop or godown. We map pain, flow, and a clear week by week plan.",
    },
    {
      icon: Settings2,
      title: "Build and connect",
      duration: "4 to 6 weeks",
      description:
        "We ship working slices early. We tie pay, tally export, or WhatsApp when you need it.",
    },
    {
      icon: ClipboardCheck,
      title: "Test with real staff",
      duration: "About 2 weeks",
      description:
        "Your team runs real bills and stock moves. We fix gaps before go wide.",
    },
    {
      icon: Rocket,
      title: "Go live and train",
      duration: "About 1 week",
      description:
        "We stand next to the counter until the new flow feels normal.",
    },
    {
      icon: LifeBuoy,
      title: "Help after launch",
      duration: "Ongoing",
      description:
        "Phone and visit support from Patna when something breaks or season spikes.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-[#262626] bg-[#050505] py-16 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div
          className="absolute bottom-0 left-1/3 h-[280px] w-[60%] -translate-x-1/2 rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.09), transparent 70%)",
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
            How we roll{" "}
            <span className="bg-gradient-to-r from-[#fde68a] via-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
              it out
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-5 text-pretty text-base leading-relaxed text-neutral-400 md:mt-6 md:text-lg"
          >
            No mystery phases. You always know what happens next and who owns
            it on your side.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector (desktop) */}
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-8 hidden h-px lg:block"
            aria-hidden
          >
            <div className="h-full w-full bg-gradient-to-r from-transparent via-[#f59e0b]/35 to-transparent" />
            <div className="absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15),transparent_70%)] blur-md" />
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:gap-6 xl:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-32px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Mobile step connector */}
                {index < steps.length - 1 ? (
                  <div
                    className="absolute left-1/2 top-[4.25rem] h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#f59e0b]/40 via-[#f59e0b]/15 to-transparent lg:hidden"
                    aria-hidden
                  />
                ) : null}

                <div className="relative z-[1] inline-flex">
                  <div className="relative flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full border-2 border-[#f59e0b]/45 bg-gradient-to-b from-[#0a0a0a] to-black shadow-[0_0_40px_-12px_rgba(245,158,11,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-500 group-hover:border-[#f59e0b] group-hover:shadow-[0_0_48px_-8px_rgba(245,158,11,0.45)]">
                    <step.icon
                      className="h-7 w-7 text-[#fbbf24] transition-transform duration-500 group-hover:scale-105"
                      strokeWidth={1.65}
                    />
                  </div>
                  <div className="absolute -right-1 -top-1 flex h-6 min-w-[1.5rem] items-center justify-center rounded-full border border-white/20 bg-[#121212] px-1 text-[10px] font-black tabular-nums text-[#f59e0b] shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <h3 className="relative z-[1] mt-6 max-w-[14rem] text-base font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#fde68a]">
                  {step.title}
                </h3>

                <div
                  className="relative z-[1] mt-3 h-px w-12 bg-gradient-to-r from-transparent via-[#f59e0b]/60 to-transparent"
                  aria-hidden
                />

                <p className="relative z-[1] mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f59e0b]/70">
                  {step.duration}
                </p>

                <p className="relative z-[1] mt-4 max-w-[16rem] text-xs leading-relaxed text-neutral-500 md:text-[13px] md:leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
