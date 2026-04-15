"use client";

import { motion } from "motion/react";
import {
  MapPin,
  Building2,
  Users,
  Award,
  Code2,
  ShieldCheck,
  LineChart,
} from "lucide-react";
import { COMPANY_INFO } from "@/config/company";
import { cn } from "@/lib/utils";
import {
  SectionHeading,
  SectionHeadingAccent,
} from "@/components/SectionHeading";

interface LocalSEOSectionProps {
  sectionClassName?: string;
}

export function LocalSEOSection({ sectionClassName }: LocalSEOSectionProps) {
  const serviceAreas = [
    { city: "Phulwari Sharif", state: "Patna" },
    { city: "Danapur", state: "Patna" },
    { city: "Kankarbagh", state: "Patna" },
    { city: "Boring Road", state: "Patna" },
    { city: "Bailey Road", state: "Patna" },
    { city: "Patliputra", state: "Patna" },
    { city: "Rajendra Nagar", state: "Patna" },
    { city: "Gandhi Maidan", state: "Patna" },
  ];

  const localTrust = [
    { icon: Building2, value: "90+", label: "Clients across Bihar" },
    {
      icon: Users,
      value: `${COMPANY_INFO.yearsOfExperience}+`,
      label: "Years on the ground",
    },
    { icon: Award, value: "98%", label: "Clients who stay" },
    { icon: MapPin, value: "Patna", label: "Local support hub" },
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Build what you use",
      text: "Billing, stock, and simple apps matched to your counter and godown flow.",
    },
    {
      icon: LineChart,
      title: "Grow nearby",
      text: "Maps and ads aimed at families and buyers in Patna and Bihar.",
    },
    {
      icon: ShieldCheck,
      title: "Stay on the right side of rules",
      text: "GST, registration, and forms handled next to your daily systems.",
    },
  ];

  return (
    <section
      className={cn(
        "relative overflow-hidden border-t border-white/[0.06] py-20 md:py-24",
        sectionClassName,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(245,158,11,0.08),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_0%_100%,rgba(255,255,255,0.04),transparent_50%)]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeading
            eyebrow="Local presence"
            align="center"
            subtitle="End-to-End Digital Solutions Provider helping shops, clinics, and small firms in Patna and Bihar since 2018."
            subtitleClassName="text-lg text-neutral-400 [text-wrap:balance]"
            className="mb-12 md:mb-14"
            titleClassName="md:text-4xl"
          >
            <>
              Your{" "}
              <SectionHeadingAccent>local team</SectionHeadingAccent> in Patna
            </>
          </SectionHeading>
        </motion.div>

        {/* Trust metrics */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {localTrust.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#151515] via-[#101010] to-[#0a0a0a] p-5 text-center shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_16px_48px_-28px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-amber-500/25 hover:shadow-[0_20px_56px_-28px_rgba(0,0,0,0.85),0_0_40px_-18px_rgba(245,158,11,0.1)] md:p-6"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-500/[0.07] blur-2xl transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.1] bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/[0.06] transition-all duration-300 group-hover:border-amber-400/30 group-hover:ring-amber-400/15">
                  <Icon
                    className="h-5 w-5 text-amber-400/90"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <div className="text-xl font-bold tabular-nums text-white md:text-2xl">
                  {item.value}
                </div>
                <div className="mt-1 text-xs font-medium text-neutral-500 md:text-sm">
                  {item.label}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-[0.25] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700 opacity-70 transition-transform duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>

        {/* Service areas */}
        <motion.div
          className="relative mb-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#141414] to-[#0c0c0c] p-6 shadow-[0_24px_64px_-40px_rgba(0,0,0,0.95)] md:p-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="mb-8 text-center md:mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              Coverage
            </p>
            <h3 className="text-xl font-semibold text-white md:text-2xl">
              Service areas in{" "}
              <span className="text-neutral-300">Patna</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.city}
                className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-3 transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.06] md:px-4 md:py-3.5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/30 text-amber-400/85 transition-colors group-hover:border-amber-400/25 group-hover:text-amber-300">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </span>
                <div className="min-w-0 text-left">
                  <div className="truncate text-sm font-medium text-white">
                    {area.city}
                  </div>
                  <div className="text-[11px] text-neutral-500">{area.state}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO / authority block */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#121212] via-[#0e0e0e] to-[#080808] p-6 shadow-[0_32px_80px_-48px_rgba(0,0,0,0.95)] md:p-10 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-amber-500/[0.06] blur-3xl"
            aria-hidden
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/75">
                About EDUNEX
              </p>
              <h3 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
                Simple tools for real shops in{" "}
                <span className="text-neutral-300">Patna, Bihar</span>
              </h3>
              <ul className="space-y-4">
                {highlights.map(({ icon: Icon, title, text }) => (
                  <li
                    key={title}
                    className="flex gap-4 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.1]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-400">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <p className="font-medium text-white">{title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-neutral-500">
                        {text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-5 border-l-2 border-amber-500/20 pl-5 md:pl-6">
                <p className="text-[15px] leading-relaxed text-neutral-300 md:text-base [text-wrap:pretty]">
                  <span className="font-semibold text-white">EDUNEX</span> is an
                  End-to-End Digital Solutions Provider based in Patna. Since 2018
                  we have helped 90+ local clients with billing, stock, simple
                  apps, maps, ads, and filings. About{" "}
                  {COMPANY_INFO.yearsOfExperience} years on the ground means we
                  know how counters and godowns run here.
                </p>
                <p className="text-sm leading-relaxed text-neutral-400 md:text-[15px] [text-wrap:pretty]">
                  We work with owners in Phulwari Sharif, Danapur, Kankarbagh, and
                  nearby areas. You get plain talk, fair scope, and help when the
                  day gets busy.
                </p>
                <p className="text-sm leading-relaxed text-neutral-400 md:text-[15px] [text-wrap:pretty]">
                  Tell us what wastes time or loses money. We suggest a simple
                  next step that fits your budget and your staff.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
