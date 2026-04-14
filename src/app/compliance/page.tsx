"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  FileText,
  Shield,
  ShieldCheck,
  Clock,
  IndianRupee,
  ClipboardList,
  CalendarClock,
  Building2,
  AlertTriangle,
  Landmark,
  Files,
  Send,
  CircleCheck,
  Handshake,
  Layers,
  ClipboardCheck,
  Receipt,
  Calculator,
  Sparkles,
  MapPin,
  Route,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";
import { FAQSection } from "@/components/FAQSection";
import { TrustCarousel } from "@/components/TrustCarousel";
import { MetricsCounter } from "@/components/MetricsCounter";
import {
  complianceServices,
  complianceFAQs,
  clientLogos,
  metrics,
} from "@/data/mockData";
import { COMPANY_INFO } from "@/config/company";

const COMPLIANCE_HERO_SNAPSHOT = [
  {
    Icon: Receipt,
    label: "GST registration & return filing",
  },
  {
    Icon: ClipboardCheck,
    label: "FSSAI, trade & shop-act licenses",
  },
  {
    Icon: Shield,
    label: "Company, LLP & Udhyam (MSME)",
  },
  {
    Icon: Calculator,
    label: "Income tax, audit & assessments",
  },
] as const;

const complianceServiceIconMap: Record<string, LucideIcon> = {
  FileText,
  Shield,
  Check: ClipboardCheck,
  IndianRupee,
};

type ComplianceServiceCard = (typeof complianceServices)[number];

const complianceRiskPoints = [
  {
    text: "Avoid daily late fees for missing GST filing deadlines.",
    Icon: CalendarClock,
  },
  {
    text: "Stop wasting days visiting municipal offices for Trade Licenses.",
    Icon: Building2,
  },
  {
    text: "Prevent sudden shop closures from local authorities.",
    Icon: AlertTriangle,
  },
  {
    text: "Get your bank current account opened instantly with correct documents.",
    Icon: Landmark,
  },
] as const;

const COMPLIANCE_PROCESS_STEPS = [
  {
    step: 1,
    label: "Consultation",
    hint: "Scope, eligibility & timeline",
    Icon: ClipboardList,
  },
  {
    step: 2,
    label: "Documentation",
    hint: "Collect, verify & package",
    Icon: Files,
  },
  {
    step: 3,
    label: "Filing",
    hint: "Portal submission & tracking",
    Icon: Send,
  },
  {
    step: 4,
    label: "Approval",
    hint: "ARN, certificate & handover",
    Icon: CircleCheck,
  },
  {
    step: 5,
    label: "Support",
    hint: "Renewals, notices & queries",
    Icon: Handshake,
  },
] as const;

const COMPLIANCE_TRUST_PILLARS = [
  {
    num: "01",
    Icon: ShieldCheck,
    title: "100% Accuracy",
    kicker: "Audit-ready filings",
    description:
      "Precise applications and reconciliations so mismatches do not turn into notices.",
  },
  {
    num: "02",
    Icon: Clock,
    title: "End-to-End Handling",
    kicker: "Setup through renewals",
    description:
      "From first registration to monthly GST and license renewals - one team owns the thread.",
  },
  {
    num: "03",
    Icon: IndianRupee,
    title: "Transparent Pricing",
    kicker: "Quote = invoice",
    description:
      "No surprise “consultation” add-ons. What we agree in Patna is what you pay.",
  },
] as const;

function MethodologyCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-[1.05rem] opacity-75"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,158,11,0.28) 0%, rgba(245,158,11,0.06) 45%, transparent 68%)",
          filter: "blur(18px)",
        }}
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-[#f59e0b]/30 bg-[#121212] p-8 shadow-[0_0_0_1px_rgba(245,158,11,0.08),0_28px_80px_-32px_rgba(0,0,0,0.9),0_0_56px_-24px_rgba(245,158,11,0.14)] lg:p-12">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/45 to-transparent" />
        {children}
      </div>
    </div>
  );
}

export default function CompliancePage() {
  return (
    <div className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "Compliance", item: "/compliance" },
          ]}
        />

        <section className="relative overflow-hidden border-b border-[#262626] bg-[#050505] pb-16 pt-8 md:pb-24 md:pt-12 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(245,158,11,0.15),transparent_70%)]" />
          <div className="pointer-events-none absolute -z-10 right-0 top-1/4 h-96 w-96 rounded-full bg-[#f59e0b]/5 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-[#f59e0b]/5 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#050505]/30 to-[#050505]" />

          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#fbbf24]/90 shadow-[0_0_0_1px_rgba(245,158,11,0.08)]">
                  <Layers className="h-3.5 w-3.5 text-[#f59e0b]" aria-hidden />
                  Compliance &amp; registrations · Patna
                </div>
                <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Focus on growth  - {" "}
                  <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                    we handle the paperwork
                  </span>
                </h1>
                <p className="mb-8 max-w-xl text-lg leading-relaxed text-neutral-400 lg:text-xl">
                  GST, FSSAI, trade licenses, company setup, and tax filings - we
                  keep Bihar SMEs audit-ready without the usual government-office
                  runaround.
                </p>

                <div className="mb-10 flex flex-wrap gap-8 border-y border-[#262626] py-6">
                  <div>
                    <div className="text-2xl font-bold tabular-nums text-white md:text-3xl">
                      {COMPANY_INFO.yearsOfExperience}+
                    </div>
                    <div className="text-xs uppercase tracking-wider text-neutral-500">
                      Years on the ground
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold tabular-nums text-white md:text-3xl">
                      CA-led
                    </div>
                    <div className="text-xs uppercase tracking-wider text-neutral-500">
                      Vetted filings
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold tabular-nums text-white md:text-3xl">
                      100%
                    </div>
                    <div className="text-xs uppercase tracking-wider text-neutral-500">
                      Documented workflows
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="h-14 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-8 font-bold text-black shadow-[0_0_0_1px_rgba(245,158,11,0.25)] transition hover:brightness-105"
                    >
                      Start registration
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 rounded-xl border-white/10 bg-white/[0.03] px-8 font-medium text-white hover:bg-white/[0.06]"
                    >
                      Talk to a compliance expert
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="relative"
              >
                <div className="absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-[#f59e0b]/15 via-transparent to-purple-500/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] p-8 shadow-2xl lg:p-9">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-neutral-300">
                      <ShieldCheck className="h-4 w-4 text-[#f59e0b]" aria-hidden />
                      What we cover
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
                      edunex_compliance
                    </span>
                  </div>
                  <h2 className="mb-6 text-lg font-semibold text-white md:text-xl">
                    Your compliance snapshot
                  </h2>
                  <ul className="space-y-3">
                    {COMPLIANCE_HERO_SNAPSHOT.map(({ Icon, label }) => (
                      <li
                        key={label}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-colors hover:border-[#f59e0b]/20 hover:bg-white/[0.04]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.1] bg-gradient-to-br from-white/[0.06] to-transparent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
                          <Icon
                            className="h-5 w-5 text-[#fbbf24]"
                            strokeWidth={1.65}
                            aria-hidden
                          />
                        </span>
                        <span className="text-sm leading-snug text-neutral-300 [text-wrap:pretty]">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-[#262626] pt-5 text-center text-xs text-neutral-500">
                    Same team as our billing &amp; ERP clients - one partner for
                    software + filings.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <TrustCarousel logos={clientLogos} />
        <MetricsCounter metrics={metrics} />

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-[#151515] via-[#0d0d0d] to-[#050505] p-8 shadow-[0_28px_90px_-50px_rgba(0,0,0,0.95)] md:p-10 lg:p-12"
            >
              <div
                className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-[#f59e0b]/[0.07] blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-amber-600/10 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
                aria-hidden
              />

              <div className="relative z-[1] mb-10 text-center md:mb-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                  <Route
                    className="h-3.5 w-3.5 text-amber-400/85"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  How it works
                </div>
                <h3 className="mx-auto max-w-3xl text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                  Your path to a{" "}
                  <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                    legally registered
                  </span>{" "}
                  business
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-base">
                  Simple, 100% online process - no government-office queues.
                  Track every stage with our Patna team.
                </p>
              </div>

              {/* Mobile: vertical timeline */}
              <ol className="relative z-[1] space-y-0 md:hidden">
                {COMPLIANCE_PROCESS_STEPS.map((item, index) => {
                  const StepIcon = item.Icon;
                  const isLast = index === COMPLIANCE_PROCESS_STEPS.length - 1;
                  return (
                    <li key={item.step} className="relative flex gap-4 pb-10 last:pb-0">
                      {!isLast && (
                        <div
                          className="absolute left-[1.375rem] top-[3.25rem] bottom-0 w-px bg-gradient-to-b from-[#f59e0b]/45 via-[#f59e0b]/15 to-transparent"
                          aria-hidden
                        />
                      )}
                      <div className="relative flex shrink-0 flex-col items-center">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f59e0b]/35 bg-gradient-to-b from-[#1f1f1f] to-[#111] shadow-[0_8px_24px_-12px_rgba(245,158,11,0.35)] ring-2 ring-[#0a0a0a]">
                          <StepIcon
                            className="h-5 w-5 text-[#fbbf24]"
                            strokeWidth={1.7}
                            aria-hidden
                          />
                        </div>
                      </div>
                      <motion.div
                        className="min-w-0 flex-1 pt-0.5"
                        initial={{ opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{
                          delay: index * 0.06,
                          duration: 0.35,
                        }}
                      >
                        <span className="font-mono text-[11px] font-semibold tabular-nums text-[#f59e0b]/80">
                          {String(item.step).padStart(2, "0")}
                        </span>
                        <h4 className="mt-0.5 text-base font-bold text-white">
                          {item.label}
                        </h4>
                        <p className="mt-1 text-sm text-neutral-500">
                          {item.hint}
                        </p>
                      </motion.div>
                    </li>
                  );
                })}
              </ol>

              {/* Desktop: horizontal journey + connectors */}
              <div className="relative z-[1] hidden md:block">
                <div
                  className="pointer-events-none absolute left-[8%] right-[8%] top-[2.125rem] z-0 h-[2px] bg-gradient-to-r from-amber-500/15 via-amber-500/35 to-amber-500/15"
                  aria-hidden
                />
                <ol className="relative z-[1] grid grid-cols-5 gap-2 lg:gap-4">
                  {COMPLIANCE_PROCESS_STEPS.map((item, index) => {
                    const StepIcon = item.Icon;
                    return (
                      <motion.li
                        key={item.step}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.07,
                          duration: 0.4,
                        }}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="relative mb-4 flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-2xl border border-[#f59e0b]/35 bg-gradient-to-b from-[#1c1c1c] via-[#141414] to-[#0a0a0a] shadow-[0_12px_40px_-16px_rgba(245,158,11,0.25)] ring-4 ring-[#0a0a0a]">
                          <StepIcon
                            className="h-8 w-8 text-[#fbbf24]"
                            strokeWidth={1.65}
                            aria-hidden
                          />
                        </div>
                        <span className="font-mono text-[11px] font-semibold tabular-nums text-[#f59e0b]/75">
                          Step {String(item.step).padStart(2, "0")}
                        </span>
                        <h4 className="mt-1 text-sm font-bold text-white lg:text-base">
                          {item.label}
                        </h4>
                        <p className="mt-2 max-w-[11rem] text-xs leading-snug text-neutral-500 [text-wrap:pretty] lg:text-[13px]">
                          {item.hint}
                        </p>
                      </motion.li>
                    );
                  })}
                </ol>
              </div>

              <p className="relative z-[1] mt-10 text-center text-xs text-neutral-600 md:mt-12">
                Average timelines vary by department queues - we keep you
                updated at every milestone.
              </p>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="mb-12 md:mb-16"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
                <FileText className="h-3.5 w-3.5 text-amber-400/80" aria-hidden />
                Service lineup
              </div>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Registrations &amp; filings{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  built for Bihar SMEs
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">
                Pick the lane that matches your shop or company - each package
                includes clear timelines, transparent pricing, and a single
                Patna team you can call when a notice lands.
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2">
              {complianceServices.map((service, index) => {
                const s = service as ComplianceServiceCard & {
                  whoItIsFor: string;
                  keyBenefits: string[];
                  priceType: string;
                  confidenceStatement: string;
                  actionLabel: string;
                  steps: string[];
                };
                const ServiceIcon =
                  complianceServiceIconMap[s.icon] ?? FileText;
                const num = String(index + 1).padStart(2, "0");

                return (
                  <motion.article
                    key={service.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: index * 0.06, duration: 0.45 }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-gradient-to-b from-[#181818] via-[#101010] to-[#070707] shadow-[0_24px_80px_-48px_rgba(0,0,0,0.95)] transition-all duration-300 hover:border-[#f59e0b]/30"
                  >
                    <div
                      className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#f59e0b]/[0.07] opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

                    <div className="relative flex flex-1 flex-col p-7 md:p-8">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div>
                          <span className="mb-3 inline-block font-mono text-xs font-medium tabular-nums text-[#f59e0b]/80">
                            {num}
                          </span>
                          <span className="mb-3 block w-fit rounded-lg border border-[#f59e0b]/20 bg-[#f59e0b]/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-[#fbbf24]/95 [text-wrap:balance]">
                            {s.whoItIsFor}
                          </span>
                          <h3 className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#fbbf24] md:text-2xl">
                            {service.title}
                          </h3>
                        </div>
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] ring-1 ring-white/[0.05]">
                          <ServiceIcon
                            className="h-7 w-7 text-[#fbbf24]"
                            strokeWidth={1.55}
                            aria-hidden
                          />
                        </div>
                      </div>

                      <p className="mb-5 text-sm leading-relaxed text-neutral-400 md:text-[15px]">
                        {service.description}
                      </p>

                      {s.steps?.length > 0 && (
                        <div className="mb-5 flex flex-wrap gap-2">
                          {s.steps.map((step) => (
                            <span
                              key={step}
                              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-neutral-400"
                            >
                              {step}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mb-6 flex-1">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                          Outcomes &amp; benefits
                        </p>
                        <ul className="space-y-2.5">
                          {s.keyBenefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex gap-3 text-sm leading-snug text-neutral-300"
                            >
                              <CircleCheck
                                className="mt-0.5 h-5 w-5 shrink-0 text-[#f59e0b]/90"
                                strokeWidth={1.65}
                                aria-hidden
                              />
                              <span className="[text-wrap:pretty]">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6 grid grid-cols-2 gap-0 overflow-hidden rounded-xl border border-[#262626] bg-[#0a0a0a]/90">
                        <div className="flex items-center gap-3 border-r border-[#262626] p-4">
                          <Clock
                            className="h-4 w-4 shrink-0 text-[#f59e0b]"
                            strokeWidth={1.65}
                          />
                          <div className="min-w-0">
                            <p className="text-[9px] font-bold uppercase tracking-wider text-neutral-600">
                              Timeline
                            </p>
                            <p className="truncate text-xs font-semibold text-white">
                              {service.timeline}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4">
                          <IndianRupee
                            className="h-4 w-4 shrink-0 text-[#f59e0b]"
                            strokeWidth={1.65}
                          />
                          <div className="min-w-0">
                            <p className="text-[9px] font-bold uppercase tracking-wider text-neutral-600">
                              Investment
                            </p>
                            <p className="text-xs font-semibold text-white">
                              {s.priceType === "Starting" && (
                                <span className="text-neutral-500">from </span>
                              )}
                              {service.price}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="mb-5 text-center text-[11px] italic leading-relaxed text-neutral-600">
                        &ldquo;{s.confidenceStatement}&rdquo;
                      </p>
                      <Link href="/contact" className="mt-auto block">
                        <Button className="group/btn h-12 w-full rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] font-bold text-black shadow-[0_12px_28px_-14px_rgba(245,158,11,0.45)] transition hover:brightness-105">
                          {s.actionLabel}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>

                    <div className="h-[3px] w-full origin-left scale-x-[0.35] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] opacity-80 transition-transform duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
                  </motion.article>
                );
              })}
            </div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-[#161616] via-[#0e0e0e] to-[#050505] p-8 shadow-[0_32px_100px_-48px_rgba(0,0,0,0.95)] lg:p-12"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div
                className="pointer-events-none absolute -left-28 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-rose-500/[0.06] blur-[100px]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-[#f59e0b]/[0.12] blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-6 right-8 opacity-[0.04]"
                aria-hidden
              >
                <Shield className="h-36 w-36 text-white" strokeWidth={1} />
              </div>

              <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-200/90">
                    <AlertTriangle
                      className="h-3.5 w-3.5 text-rose-400/90"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    Cost of delay
                  </div>
                  <h2 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                    Don&apos;t Let GST Penalties
                    <br />
                    <span className="bg-gradient-to-r from-rose-300 via-orange-300 to-[#fbbf24] bg-clip-text text-transparent">
                      Eat Your Shop&apos;s Margins
                    </span>
                  </h2>
                  <p className="mb-8 max-w-xl text-sm leading-relaxed text-neutral-500 md:text-base">
                    Small misses on filings or licenses compound into fines,
                    downtime, and bank friction - here is what we help you avoid
                    before it hits your balance sheet.
                  </p>
                  <div className="space-y-3">
                    {complianceRiskPoints.map(({ text, Icon }, i) => (
                      <motion.div
                        key={text}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className="group flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-rose-500/20 hover:bg-white/[0.04]"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-rose-500/25 bg-rose-500/[0.06] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
                          <Icon
                            className="h-5 w-5 text-rose-200/90"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                        </div>
                        <p className="min-w-0 pt-0.5 text-sm leading-relaxed text-neutral-300 [text-wrap:pretty]">
                          {text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#1c1c1c] via-[#121212] to-[#0a0a0a] p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.85)] lg:p-9"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12, duration: 0.45 }}
                >
                  <div
                    className="pointer-events-none absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-[#f59e0b]/20 blur-3xl"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent"
                    aria-hidden
                  />

                  <div className="relative">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/[0.07] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fbbf24]/95">
                      <ClipboardList
                        className="h-3.5 w-3.5 text-[#f59e0b]"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      Free checklist
                    </div>
                    <h3 className="mb-3 text-xl font-bold leading-snug text-white md:text-2xl">
                      Check your compliance status
                    </h3>
                    <p className="mb-8 text-sm leading-relaxed text-neutral-500 md:text-[15px]">
                      Not sure what licenses your exact type of shop needs in
                      Patna? Tell us your trade - we&apos;ll send a tailored list
                      you can act on.
                    </p>
                    <Link href="/contact" className="block">
                      <Button className="group/btn h-12 w-full rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] font-bold text-black shadow-[0_12px_32px_-12px_rgba(245,158,11,0.45)] transition hover:brightness-105">
                        Get free license checklist
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                      </Button>
                    </Link>
                    <p className="mt-5 text-center text-[11px] font-medium uppercase tracking-wider text-neutral-600">
                      No obligation · Same-day reply on business days
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-[#141414] via-[#0c0c0c] to-[#050505] p-8 shadow-[0_32px_100px_-48px_rgba(0,0,0,0.9)] md:p-12 lg:p-14">
              <div
                className="pointer-events-none absolute left-1/2 top-0 h-40 w-[min(100%,36rem)] -translate-x-1/2 rounded-full bg-[#f59e0b]/[0.09] blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-[#f59e0b]/10 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.5))]"
                aria-hidden
              />

              <motion.div
                className="relative z-[1] mb-12 text-center md:mb-14"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                  <Sparkles
                    className="h-3.5 w-3.5 text-amber-400/85"
                    aria-hidden
                  />
                  Trust signals
                </div>
                <h3 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.35rem] lg:leading-tight">
                  Trusted by{" "}
                  <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                    Businesses Across Patna
                  </span>
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg">
                  Local expertise and CA-vetted processes - so your licenses
                  and returns stay aligned without the stress.
                </p>
              </motion.div>

              <div className="relative z-[1] grid gap-5 md:grid-cols-3 md:gap-6">
                {COMPLIANCE_TRUST_PILLARS.map((item, index) => {
                  const PillarIcon = item.Icon;
                  const isCenter = index === 1;
                  return (
                    <motion.div
                      key={item.num}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-24px" }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.42,
                      }}
                      className={[
                        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-transparent p-6 text-left transition-all duration-300 md:p-7",
                        "hover:border-[#f59e0b]/25 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.85),0_0_40px_-20px_rgba(245,158,11,0.12)]",
                        isCenter
                          ? "md:ring-1 md:ring-[#f59e0b]/20 md:shadow-[0_28px_70px_-32px_rgba(245,158,11,0.18)]"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <div
                        className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-[#f59e0b]/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                        aria-hidden
                      />
                      <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-amber-400/80 via-amber-600/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="mb-5 flex items-start justify-between gap-3">
                        <span className="font-mono text-xs font-semibold tabular-nums text-[#f59e0b]/75">
                          {item.num}
                        </span>
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] ring-1 ring-white/[0.05]">
                          <PillarIcon
                            className="h-6 w-6 text-[#fbbf24]"
                            strokeWidth={1.65}
                            aria-hidden
                          />
                        </div>
                      </div>
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                        {item.kicker}
                      </p>
                      <h4 className="mb-3 text-lg font-bold text-white md:text-xl">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-neutral-400 [text-wrap:pretty]">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="relative z-[1] mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/[0.06] pt-8 text-center text-xs font-medium uppercase tracking-[0.14em] text-neutral-600 md:mt-12 md:pt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <span className="flex items-center gap-2">
                  <MapPin
                    className="h-3.5 w-3.5 text-amber-500/80"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  Patna &amp; Bihar focus
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-neutral-600 md:inline" />
                <span>CA-reviewed workflows</span>
                <span className="hidden h-1 w-1 rounded-full bg-neutral-600 md:inline" />
                <span>Document trail for every filing</span>
              </motion.div>
            </div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <MethodologyCard>
                <h2 className="mb-6 text-3xl font-bold text-white">
                  Our compliance process, documentation standards &amp; data
                  handling
                </h2>
                <div className="space-y-5 text-base leading-relaxed text-gray-400 md:text-lg">
                  <p>
                    Statutory compliance in India is not a one-time form
                    fill - it is an ongoing relationship between your business,
                    government portals, and the professionals who represent you.
                    At EDUNEX in Patna, we treat every GST, FSSAI, or municipal
                    license matter as a documented workflow: we confirm which
                    registrations apply to your exact trade, collect only what
                    the law requires for that stage, and keep a clear paper and
                    digital trail so you can respond to bank KYC, audits, or
                    inspector visits without panic.
                  </p>
                  <p>
                    Before we file anything on your behalf, we align expectations
                    on timelines (many approvals depend on department queues
                    outside anyone&apos;s control), naming consistency across
                    PAN, bank, and trade licenses, and how your invoices and
                    licenses should match for GST and food-safety inspections.
                    For GST, we coordinate monthly or quarterly returns with your
                    actual sales data - whether that comes from our billing
                    software or your existing system - so figures filed with the
                    government match what you show customers and lenders.
                  </p>
                  <p>
                    We retain copies of submitted applications,
                    acknowledgements, certificates, and renewal dates in an
                    organized handover so you always know what is valid, what
                    expires next, and what to refresh before penalties apply.
                    Where a chartered accountant or specialized consultant must
                    sign off, we facilitate that handoff with complete context
                    rather than sending you back and forth between offices.
                  </p>
                  <p>
                    On data protection: identity and business documents are
                    shared only for the stated filing purpose, stored with access
                    limited to staff involved in your case, and never sold or
                    reused for marketing. If you engage us for software
                    alongside compliance, we keep a clear separation between
                    operational app data and statutory records unless you ask us
                    to link them for automation.
                  </p>
                  <p>
                    We do not claim third-party certifications we have not
                    earned; our strength is practical execution for Bihar
                    SMEs - fewer surprises, fewer missed deadlines, and a single
                    Patna team you can call when a notice or a new rule affects
                    your shop, clinic, or warehouse.
                  </p>
                </div>
              </MethodologyCard>
            </motion.section>
          </div>
        </SectionAmbient>

        <SectionAmbient preset="surface" className="border-t border-[#262626]">
          <FAQSection
            faqs={complianceFAQs}
            sectionClassName="border-transparent bg-transparent"
            title={
              <>
                Common Questions{" "}
                <span className="bg-gradient-to-r from-neutral-400 via-neutral-500 to-neutral-600 bg-clip-text font-normal text-transparent">
                  Answered Simply
                </span>
              </>
            }
            description="Clearing your doubts before you start your registration."
          />
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="relative border-t border-[#262626] py-16 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1400px] px-6">
            <motion.div
              className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#0a0a0a] p-12 text-center lg:p-20"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06),transparent_70%)]" />
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white lg:text-5xl">
                  Start Your{" "}
                  <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                    Business
                  </span>{" "}
                  <br className="hidden sm:block" />
                  Right Today.
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-gray-400 md:text-xl">
                  Don&apos;t let complex government paperwork hold you back. Let
                  our local experts handle the legal load while you focus on
                  building your legacy.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="h-14 w-full rounded-2xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-10 text-lg font-bold text-black shadow-[0_0_30px_rgba(245,158,11,0.25)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,158,11,0.35)] sm:w-auto">
                      Start Registration Now
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="h-14 w-full rounded-2xl border-white/20 bg-transparent px-10 text-lg font-semibold text-white hover:bg-white/10 sm:w-auto"
                    >
                      Talk to Compliance Expert
                    </Button>
                  </Link>
                </div>
                <p className="mt-8 text-sm font-bold uppercase tracking-widest text-gray-500">
                  Quick Response • No Obligation Consultation
                </p>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>
      </div>
    </div>
  );
}
