"use client";

import { motion } from "motion/react";
import {
  ShoppingCart,
  Stethoscope,
  Factory,
  Truck,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import {
  SectionHeading,
  SectionHeadingAccent,
} from "@/components/SectionHeading";

export default function IndustryVerticals() {
  const industries = [
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description:
        "Stronger stock turns with omnichannel inventory and automated logistics—right-sized for your scale.",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description:
        "Reduces admin overhead by 40% with HIPAA-compliant patient management and telehealth.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Enable 99.9% uptime with smart factory monitoring and predictive maintenance systems.",
    },
    {
      icon: Truck,
      title: "Logistics",
      description:
        "Cut operational costs by 22% with real-time fleet tracking and last-mile optimization.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Increase student retention by 25% with automated performance analytics and LMS platforms.",
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description:
        "Recover 15+ billable hours per month with automated tracking and outcome-based reporting.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-[#262626] bg-[#050505] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-1/2 top-0 h-[min(50vh,420px)] w-[min(120vw,900px)] -translate-x-1/2 opacity-[0.35]"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(245,158,11,0.18) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 0%, black 0%, transparent 72%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Vertical expertise"
            align="center"
            className="mb-12 md:mb-16"
            titleClassName="text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl"
            subtitle="We don't believe in one-size-fits-all. Our solutions are engineered with industry-specific requirements and compliance in mind."
            subtitleClassName="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 md:mx-auto md:text-lg"
          >
            Built for Your <SectionHeadingAccent>Industry</SectionHeadingAccent>
          </SectionHeading>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const n = String(index + 1).padStart(2, "0");
            return (
              <motion.article
                key={industry.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-32px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] via-[#0a0a0a] to-[#080808] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_0_0_1px_rgba(255,255,255,0.03),0_24px_48px_-28px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#f59e0b]/22 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_48px_-16px_rgba(245,158,11,0.18)] md:p-8 md:pb-7">
                  <div className="absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#f59e0b]/35 to-transparent opacity-80 transition-opacity duration-300 group-hover:via-[#f59e0b]/55" />

                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#f59e0b]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute -bottom-12 left-6 h-28 w-40 rounded-full bg-amber-500/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />

                  <div className="relative z-[2] flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-gradient-to-b from-white/[0.09] to-white/[0.02] shadow-[0_0_24px_-10px_rgba(245,158,11,0.45)] ring-1 ring-[#f59e0b]/15 transition-all duration-300 group-hover:scale-[1.03] group-hover:ring-[#f59e0b]/35">
                      <Icon
                        className="h-[22px] w-[22px] text-[#f59e0b]"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </div>
                    <span
                      className="font-mono text-[11px] font-semibold tabular-nums text-neutral-700 transition-colors duration-300 group-hover:text-[#f59e0b]/50"
                      aria-hidden
                    >
                      {n}
                    </span>
                  </div>

                  <h3 className="relative z-[2] mt-6 text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-white md:text-xl">
                    {industry.title}
                  </h3>
                  <p className="relative z-[2] mt-3 text-sm leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300 md:text-[15px]">
                    {industry.description}
                  </p>

                  <div
                    className="pointer-events-none absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#f59e0b]/50 to-transparent transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
