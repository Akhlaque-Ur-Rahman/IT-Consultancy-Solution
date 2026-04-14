"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Fraunces } from "next/font/google";
import {
  Check,
  ArrowRight,
  Users,
  BarChart3,
  Zap,
  Award,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  SectionHeading,
  SectionHeadingAccent,
} from "@/components/SectionHeading";
import { buildContactUrl } from "@/lib/contactPrefill";
import { cn } from "@/lib/utils";

const showcaseDisplay = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

type Capability = { name: string; definition: string };

type SolutionItem = {
  id: string;
  icon: typeof Users;
  name: string;
  target: string;
  tagline: string;
  icp: string;
  description: string;
  capabilities: Capability[];
  outcomes: string[];
  price: string;
  priceContext: string;
  /** Static marketing preview — not live data. */
  previewSrc: string;
  previewAlt: string;
  localTrust: string;
  previewBadge: string;
  /** Optional: map pin vs award for the trust line. */
  trustIcon?: "map" | "award";
};

const solutions: SolutionItem[] = [
  {
    id: "crm",
    icon: Users,
    name: "Custom CRM",
    target: "Sales & Marketing Teams",
    tagline: "Stop Lead Leakage & Increase Sales Velocity",
    icp: "Growing agencies and sales teams managing 50+ monthly enquiries.",
    description:
      "Transform your chaotic sales process into a structured revenue engine. Our CRM eliminates manual tracking, ensuring no lead is ever forgotten while providing real-time visibility into your pipeline.",
    capabilities: [
      {
        name: "Predictive Lead Scoring",
        definition: "Focus your team on the deals most likely to close today.",
      },
      {
        name: "Automated Workflows",
        definition: "Eliminate repetitive tasks and manual data entry.",
      },
      {
        name: "WhatsApp Ecosystem",
        definition: "Meet your customers where they are, natively integrated.",
      },
      {
        name: "Executive Dashboards",
        definition:
          "Instant visibility into team performance and revenue forecasts.",
      },
    ],
    outcomes: [
      "Tighter sales cycles in typical engagements",
      "Less time lost to manual follow-ups and admin",
      "Senior engineer assigned to your implementation",
    ],
    price: "₹1,49,999+",
    priceContext: "Starts from. Depends on scale.",
    previewSrc: "/dashboard-design.webp",
    previewAlt: "Illustrative desktop CRM dashboard (wide layout)",
    localTrust: "Built for fast-moving sales teams",
    previewBadge: "CRM",
  },
  {
    id: "erp",
    icon: BarChart3,
    name: "Enterprise ERP",
    target: "Operations & Finance",
    tagline: "Complete Operational Control & Real-Time Accuracy",
    icp: "Multi-branch distribution and complex manufacturing units.",
    description:
      "Run your entire operation from a single source of truth. From warehouse inventory to financial reporting, our ERP provides the data consistency needed for high-stakes decision making.",
    capabilities: [
      {
        name: "Omnichannel Inventory",
        definition:
          "Live stock tracking across all physical and digital branches.",
      },
      {
        name: "Automated Reconciliation",
        definition: "Reduce financial audit time from weeks to minutes.",
      },
      {
        name: "Unified Human Capital",
        definition: "Manage performance, payroll, and compliance in one click.",
      },
      {
        name: "Strategic Insights",
        definition:
          "Predictive analytics to reduce waste and optimize procurement.",
      },
    ],
    outcomes: [
      "Leaner day-to-day operations across branches",
      "More trustworthy billing & inventory views",
      "Onboarding, training, and handover included",
    ],
    price: "₹2,99,999+",
    priceContext: "Custom pricing for scale.",
    previewSrc: "/hero-finlo-dashboard.webp",
    previewAlt: "Illustrative desktop ERP analytics view (wide layout)",
    localTrust: "Ops & finance control rooms",
    previewBadge: "Enterprise",
  },
  {
    id: "billing",
    icon: Zap,
    name: "Automated Billing & Invoicing",
    target: "Service Providers & Retailers",
    tagline: "Accelerate Cash Flow & Automate Collections",
    icp: "Recurring service models and high-volume billing operations.",
    description:
      "Move beyond manual invoicing. Our systems automate the entire payment lifecycle, from GST-compliant generation to smart follow-ups, ensuring you get paid faster and more reliably.",
    capabilities: [
      {
        name: "Smart Rev-Ops",
        definition:
          "Automated reminders that reduce DSOs (Days Sales Outstanding).",
      },
      {
        name: "Seamless Compliance",
        definition: "Always-ready GST filing and audit-ready reports.",
      },
      {
        name: "Global Payment Fabric",
        definition:
          "Integrated QR, UPI, and Credit support for instant settlements.",
      },
      {
        name: "Multi-Store Control",
        definition: "Centralized financial oversight for all your locations.",
      },
    ],
    outcomes: [
      "Healthier cash-flow rhythm for recurring revenue",
      "Fewer manual mistakes in payment entry",
      "Dedicated specialist through go-live",
    ],
    price: "₹49,999+",
    priceContext: "Starting price for basic tier.",
    previewSrc: "/Services/Billing.png",
    previewAlt: "Illustrative billing and invoicing dashboard preview",
    localTrust: "Retail & field billing workflows",
    previewBadge: "Billing",
    trustIcon: "map",
  },
];

function SolutionVisual({
  solution,
  imagePriority,
  reversed,
  className,
}: {
  solution: SolutionItem;
  imagePriority?: boolean;
  reversed?: boolean;
  className?: string;
}) {
  const Icon = solution.icon;
  return (
    <div className={cn("relative w-full min-w-0", className)}>
      {/* Soft bloom + mesh */}
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2.5rem] opacity-90"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% 10%, rgba(245,158,11,0.22), transparent 58%), radial-gradient(ellipse 60% 40% at 80% 90%, rgba(245,158,11,0.06), transparent 55%)",
          filter: "blur(28px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 75% 70% at 50% 40%, black, transparent)",
        }}
        aria-hidden
      />

      <div
        className={cn(
          "[perspective:1200px] transform-gpu",
          reversed ? "origin-right" : "origin-left",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-[1.5rem] border border-white/[0.1] bg-gradient-to-b from-white/[0.06] via-[#0f0f0f]/90 to-[#050505] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_40px_100px_-48px_rgba(0,0,0,0.85),0_0_0_1px_rgba(245,158,11,0.06)] backdrop-blur-sm transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
            "md:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_48px_120px_-40px_rgba(245,158,11,0.18)]",
            reversed
              ? "md:[transform:rotateY(5deg)_rotateX(1.5deg)] md:hover:[transform:rotateY(3deg)_rotateX(1deg)_translateY(-4px)]"
              : "md:[transform:rotateY(-5deg)_rotateX(1.5deg)] md:hover:[transform:rotateY(-3deg)_rotateX(1deg)_translateY(-4px)]",
          )}
        >
          <div className="absolute inset-0 rounded-[1.45rem] bg-gradient-to-br from-[#f59e0b]/[0.07] via-transparent to-transparent opacity-80" />
          <div className="absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#f59e0b]/50 to-transparent" />

          <div className="relative space-y-3 p-3 sm:p-4 md:p-5">
            <div
              className="pointer-events-none absolute -inset-x-3 -inset-y-2 rounded-2xl opacity-70 md:-inset-4"
              style={{
                background:
                  "linear-gradient(125deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.05) 45%, transparent 70%)",
                filter: "blur(18px)",
              }}
              aria-hidden
            />
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.15rem] border border-white/[0.08] bg-[#080808] shadow-[inset_0_0_0_1px_rgba(245,158,11,0.12),0_28px_80px_-36px_rgba(0,0,0,0.95)] ring-1 ring-white/[0.04]">
              <div className="absolute inset-x-0 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-[#f59e0b]/5 to-transparent" />
              <Image
                src={solution.previewSrc}
                alt={solution.previewAlt}
                fill
                priority={imagePriority}
                className="object-contain object-top"
                sizes="(max-width: 1024px) 100vw, min(900px, 58vw)"
              />
              <div
                className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/50 via-transparent to-black/20"
                aria-hidden
              />
              <div className="absolute left-2.5 top-2.5 z-[3] sm:left-3 sm:top-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-black/45 shadow-lg ring-1 ring-[#f59e0b]/30 backdrop-blur-md sm:h-10 sm:w-10">
                  <Icon
                    className="h-[18px] w-[18px] text-[#fbbf24] sm:h-5 sm:w-5"
                    strokeWidth={1.75}
                  />
                </div>
              </div>
              <div className="absolute right-2.5 top-2.5 z-[3] sm:right-3 sm:top-3">
                <Badge
                  variant="outline"
                  className="border-[#f59e0b]/45 bg-black/45 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-amber-100/95 shadow-sm backdrop-blur-md sm:px-3 sm:py-1 sm:text-[10px]"
                >
                  {solution.previewBadge}
                </Badge>
              </div>
            </div>
            <p className="text-center text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 md:text-[11px]">
              Desktop-style preview · illustrative · not live data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SolutionShowcase() {
  return (
    <section className="relative overflow-hidden border-t border-[#262626] bg-black py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.2]" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, black 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="space-y-20 md:space-y-28">
          {solutions.map((solution, index) => {
            const reversed = index % 2 === 1;
            const stepLabel = String(index + 1).padStart(2, "0");
            const contactBase = buildContactUrl({
              serviceSlug: "consulting",
              ref: `/solutions#solution-${solution.id}`,
            });
            const demoHref = `${contactBase}&intent=demo`;
            const archHref = `${contactBase}&intent=architecture`;

            const TrustIcon =
              solution.trustIcon === "map" ? MapPin : Award;

            return (
              <motion.article
                key={solution.id}
                id={`solution-${solution.id}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className={cn(
                  "scroll-mt-24 space-y-10 md:space-y-14",
                  index < solutions.length - 1 &&
                    "border-b border-white/[0.06] pb-20 md:pb-28",
                )}
              >
                <div className="relative">
                  {/* Section ambient */}
                  <div
                    className="pointer-events-none absolute -inset-x-12 -inset-y-16 rounded-[3rem] opacity-70 md:-inset-x-24"
                    style={{
                      background:
                        "radial-gradient(ellipse 55% 45% at 30% 20%, rgba(245,158,11,0.09), transparent 62%), radial-gradient(ellipse 50% 40% at 85% 75%, rgba(245,158,11,0.05), transparent 60%)",
                    }}
                    aria-hidden
                  />

                  {/* Overlapping hero: copy + depth preview */}
                  <div className="relative grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-6 xl:gap-8">
                    <div
                      className={cn(
                        "relative z-[2] min-w-0 space-y-5 lg:col-span-5 lg:max-w-none lg:pt-2",
                        reversed ? "lg:col-start-8" : undefined,
                      )}
                    >
                      <p
                        className="font-mono text-[11px] tabular-nums tracking-[0.22em] text-neutral-500 md:text-xs"
                        aria-hidden
                      >
                        {stepLabel} · Solution
                      </p>
                      <SectionHeading
                        eyebrow={solution.target}
                        align="left"
                        titleAs="h2"
                        className="mb-0"
                        titleClassName={cn(
                          showcaseDisplay.className,
                          "!font-semibold leading-[1.08] tracking-[-0.02em] text-white md:leading-[1.06]",
                          "text-[2rem] md:text-[2.35rem] lg:text-[2.65rem]",
                        )}
                      >
                        {solution.name}
                      </SectionHeading>

                      {solution.localTrust ? (
                        <p className="flex items-start gap-2.5 text-[13px] leading-snug text-neutral-400 md:text-sm">
                          <TrustIcon
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400/55"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                          <span className="text-neutral-400">
                            {solution.localTrust}
                          </span>
                        </p>
                      ) : null}

                      <p className="max-w-xl text-pretty text-lg font-medium leading-snug md:text-xl md:leading-[1.4]">
                        <SectionHeadingAccent>
                          {solution.tagline}
                        </SectionHeadingAccent>
                      </p>
                    </div>

                    <div
                      className={cn(
                        "relative z-[1] min-w-0 lg:col-span-8",
                        reversed
                          ? "lg:col-start-1 lg:row-start-1 lg:-mr-2 xl:-mr-4"
                          : "lg:col-start-5 lg:-ml-2 xl:-ml-6",
                      )}
                    >
                      <SolutionVisual
                        solution={solution}
                        imagePriority={index === 0}
                        reversed={reversed}
                      />
                    </div>
                  </div>
                </div>

                {/* Narrative + bento capabilities */}
                <div className="relative mx-auto w-full max-w-3xl xl:max-w-5xl">
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.05] via-[#0a0a0a]/80 to-[#030303] p-px shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_32px_100px_-48px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                    <div className="rounded-[1.7rem] bg-gradient-to-br from-[#0a0a0a]/95 to-[#050505]/98 p-6 md:p-10 lg:p-12">
                      <div className="relative">
                        <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#f59e0b]/[0.07] blur-3xl" />
                        <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 shadow-inner md:p-7">
                          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#fbbf24]/90">
                            Ideal for
                          </p>
                          <p className="mt-3 text-[15px] leading-relaxed text-neutral-200 md:text-base md:leading-[1.75]">
                            {solution.icp}
                          </p>
                        </div>

                        <p className="mt-9 text-base leading-[1.85] text-neutral-400 md:mt-10 md:text-lg md:leading-[1.8]">
                          {solution.description}
                        </p>

                        <div className="mt-10 md:mt-12">
                          <div className="mb-7 flex items-center gap-3">
                            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                            <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.28em] text-neutral-500">
                              Capabilities
                            </p>
                            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                          </div>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {solution.capabilities.map((cap, capIndex) => (
                              <motion.div
                                key={cap.name}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-24px" }}
                                transition={{
                                  duration: 0.4,
                                  delay: capIndex * 0.05,
                                }}
                                className="group/cap relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-4 transition-all duration-300 hover:border-[#f59e0b]/25 hover:shadow-[0_20px_50px_-28px_rgba(245,158,11,0.25)] md:p-5"
                              >
                                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#f59e0b]/[0.06] opacity-0 blur-2xl transition-opacity duration-300 group-hover/cap:opacity-100" />
                                <div className="relative flex gap-4">
                                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#f59e0b]/25 bg-[#f59e0b]/[0.08] transition-transform duration-300 group-hover/cap:scale-105 group-hover/cap:border-[#f59e0b]/40">
                                    <Check
                                      className="h-4 w-4 text-[#fbbf24]"
                                      strokeWidth={2.5}
                                    />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-sm font-semibold text-neutral-50 md:text-[15px]">
                                      {cap.name}
                                    </p>
                                    <p className="mt-1.5 text-xs leading-relaxed text-neutral-500 md:text-[13px] md:leading-snug">
                                      {cap.definition}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Outcomes + invest — floating ribbon */}
                  <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-gradient-to-b from-[#0d0d0d] via-[#060606] to-[#020202] shadow-[0_40px_100px_-56px_rgba(0,0,0,0.95)] md:mt-12">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,158,11,0.12),transparent_55%)]" />
                    <div className="relative grid grid-cols-1 md:grid-cols-2">
                      <div className="absolute left-1/2 top-0 z-[1] hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#f59e0b]/22 to-transparent md:block" aria-hidden />
                      <div className="relative border-b border-white/[0.06] p-6 md:border-b-0 md:p-9 lg:p-10">
                        <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-neutral-500">
                          Outcomes we design for
                        </p>
                        <p className="mt-2 text-xs italic text-neutral-600 md:text-[13px]">
                          Directional goals for scoping—not a guarantee of
                          results.
                        </p>
                        <ul className="mt-7 space-y-4">
                          {solution.outcomes.map((outcome) => (
                            <li
                              key={outcome}
                              className="flex items-start gap-3.5 text-sm leading-relaxed text-neutral-200/95 md:text-[15px]"
                            >
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 shadow-[0_0_12px_rgba(245,158,11,0.45)]"
                                aria-hidden
                              />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="relative z-[2] flex flex-col justify-between gap-9 border-t border-white/[0.06] bg-gradient-to-br from-[#f59e0b]/[0.06] via-transparent to-transparent p-6 md:border-t-0 md:p-9 lg:p-10">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500 md:text-[11px]">
                            {solution.priceContext}
                          </p>
                          <p className="mt-3 bg-gradient-to-r from-white to-neutral-300 bg-clip-text font-mono text-3xl font-bold tabular-nums tracking-tight text-transparent md:text-4xl">
                            {solution.price}
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                          <Link href={demoHref} className="sm:shrink-0">
                            <Button className="group/btn h-12 w-full rounded-full border-2 border-[#f59e0b] bg-[#f59e0b] px-8 font-semibold text-black shadow-[0_0_40px_-12px_rgba(245,158,11,0.55)] transition-all hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-[0_0_48px_-8px_rgba(245,158,11,0.45)] sm:w-auto">
                              Request demo
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                            </Button>
                          </Link>
                          <Link href={archHref} className="sm:shrink-0">
                            <Button
                              variant="outline"
                              className="h-12 w-full rounded-full border-white/25 bg-white/[0.03] px-8 text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_12px_40px_-20px_rgba(255,255,255,0.12)] sm:w-auto"
                            >
                              Architecture call
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
