"use client";

import { motion } from "motion/react";
import { caseStudies } from "@/data/mockData";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Download,
  Filter,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";
import { useState } from "react";

function AuthorityCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-45"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.14) 0%, transparent 55%)",
          filter: "blur(22px)",
        }}
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-gradient-to-b from-[#141414] to-[#0c0c0c] shadow-[0_40px_100px_-56px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 15%, black 15%, transparent 72%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent" />
        <div className="relative p-8 md:p-10 lg:p-14">{children}</div>
      </div>
    </div>
  );
}

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const industries = ["All", "Retail", "Healthcare", "Logistics", "Services"];

  const filteredCaseStudies = caseStudies.filter(
    (cs) => selectedIndustry === "All" || cs.industry === selectedIndustry,
  );

  const featured = caseStudies[0];

  return (
    <div className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "Case Studies", item: "/case-studies" },
          ]}
        />

        <SectionAmbient
          preset="surface"
          className="relative border-b border-[#262626] py-20 md:py-28 lg:py-32"
        >
          <div className="relative mx-auto max-w-[1400px] px-6">
            <div
              className="pointer-events-none absolute inset-0 -mx-6 overflow-hidden md:-mx-10"
              aria-hidden
            >
              <div
                className="absolute -left-1/4 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-y-1/2 rounded-full opacity-[0.11]"
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(245,158,11,0.55) 0%, transparent 62%)",
                  filter: "blur(2px)",
                }}
              />
              <div
                className="absolute -right-1/4 bottom-0 h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full opacity-[0.09]"
                style={{
                  background:
                    "radial-gradient(circle at 60% 60%, rgba(251,191,36,0.45) 0%, transparent 65%)",
                  filter: "blur(3px)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: "64px 64px",
                  maskImage:
                    "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 75%)",
                }}
              />
            </div>

            <div className="relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 shadow-[0_0_0_1px_rgba(245,158,11,0.08),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
                  <TrendingUp
                    className="h-4 w-4 text-[#fbbf24]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-[13px] font-medium tracking-wide text-[#fde68a]/90">
                    Proven results &amp; real-world impact
                  </span>
                  <span className="hidden h-3 w-px bg-white/15 sm:inline" />
                  <span className="hidden text-[13px] text-gray-500 sm:inline">
                    Bihar &amp; regional SMEs
                  </span>
                </div>

                <h1 className="mb-6 max-w-[22ch] text-left text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.08] lg:max-w-none lg:text-[3.25rem] xl:text-[3.5rem]">
                  How we help{" "}
                  <span className="relative inline">
                    <span className="relative z-[1] bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                      regional businesses
                    </span>
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[0.35em] rounded-sm bg-gradient-to-r from-[#f59e0b]/25 via-[#fbbf24]/20 to-transparent opacity-90"
                      aria-hidden
                    />
                  </span>{" "}
                  Grow with Reliable Tech
                </h1>

                <p className="mb-10 max-w-xl text-left text-base leading-relaxed text-gray-400 md:text-lg [text-wrap:balance]">
                  Real problems solved for businesses right here in Bihar. See how
                  our simple, affordable solutions deliver measurable success for
                  local distributors, clinics, and service providers.
                </p>

                <div className="mb-10 flex flex-wrap gap-2">
                  {[
                    { label: "Hands-on delivery", icon: CheckCircle2 },
                    { label: "Resilient systems", icon: ShieldCheck },
                    { label: "Multi-sector depth", icon: Briefcase },
                  ].map(({ label, icon: Icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#0a0a0a]/80 px-3.5 py-1.5 text-xs font-medium text-gray-300 shadow-sm backdrop-blur-sm transition-colors hover:border-[#f59e0b]/25 hover:text-[#fde68a]"
                    >
                      <Icon
                        className="h-3.5 w-3.5 text-[#f59e0b]/90"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      {label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link href="#case-studies-catalog">
                    <Button className="group h-12 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-8 text-[15px] font-semibold text-black shadow-[0_0_40px_-8px_rgba(245,158,11,0.45)] transition-all duration-300 hover:shadow-[0_0_48px_-6px_rgba(245,158,11,0.55)]">
                      Browse case studies
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="h-12 rounded-full border-white/15 bg-white/[0.02] px-8 text-[15px] text-white backdrop-blur-sm transition-colors hover:border-[#f59e0b]/35 hover:bg-white/[0.04]"
                    >
                      Discuss your project
                    </Button>
                  </Link>
                </div>

                <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-white/[0.06] pt-10">
                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-white tabular-nums">
                      {caseStudies.length}+
                    </p>
                    <p className="text-sm text-gray-500">Stories published</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-white tabular-nums">
                      4+
                    </p>
                    <p className="text-sm text-gray-500">Core industries</p>
                  </div>
                  <div className="max-w-[220px] text-sm leading-snug text-gray-500">
                    Outcomes you can trace from workshop floor to balance sheet.
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative lg:col-span-5"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="relative mx-auto aspect-[4/5] max-w-md lg:max-w-none">
                  <div
                    className="absolute inset-0 rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-[#161616] via-[#0c0c0c] to-black shadow-[0_32px_120px_-48px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.05),0_0_0_1px_rgba(245,158,11,0.06)]"
                    aria-hidden
                  />
                  <div className="relative flex h-full flex-col justify-between p-7 sm:p-9">
                    <div>
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] px-3 py-1">
                        <Sparkles
                          className="h-3.5 w-3.5 text-[#fbbf24]"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fde68a]/90">
                          What you&apos;ll find here
                        </span>
                      </div>
                      <p className="text-lg font-medium leading-snug text-white/95">
                        Evidence-backed narratives—not slide-deck promises.
                      </p>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          icon: MapPin,
                          t: "Local context first",
                          s: "Patna-area workflows, godowns, clinics, and counters.",
                        },
                        {
                          icon: BarChart3,
                          t: "Measurable impact",
                          s: "Time saved, errors cut, and visibility that shows up in numbers.",
                        },
                        {
                          icon: ShieldCheck,
                          t: "Built to last",
                          s: "Architecture and compliance posture explained in plain language.",
                        },
                      ].map((row, i) => {
                        const RowIcon = row.icon;
                        return (
                          <div
                            key={row.t}
                            className="group rounded-2xl border border-white/[0.05] bg-black/40 p-4 backdrop-blur-md transition-colors hover:border-[#f59e0b]/20"
                            style={{ transitionDelay: `${i * 40}ms` }}
                          >
                            <div className="mb-2 flex items-center gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#f59e0b]/20 bg-[#f59e0b]/10 text-[#fbbf24]">
                                <RowIcon
                                  className="h-4 w-4"
                                  strokeWidth={1.6}
                                  aria-hidden
                                />
                              </div>
                              <p className="text-sm font-medium text-white">
                                {row.t}
                              </p>
                            </div>
                            <p className="pl-10 text-xs leading-relaxed text-gray-500 group-hover:text-gray-400">
                              {row.s}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="rounded-2xl border border-dashed border-[#f59e0b]/25 bg-[#f59e0b]/[0.04] px-4 py-3 text-center text-xs text-[#fde68a]/90">
                      Filter by industry below—retail, healthcare, logistics, and
                      more.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          id="case-studies-catalog"
          preset="surfaceRaised"
          className="border-b border-[#262626] py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="mb-10 md:mb-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] px-3.5 py-1.5">
                    <Sparkles
                      className="h-3.5 w-3.5 text-[#fbbf24]"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fde68a]/90">
                      Case study library
                    </span>
                  </div>
                  <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]">
                    Browse{" "}
                    <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                      stories
                    </span>
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-400 [text-wrap:pretty]">
                    Filter by industry—each card includes context, measurable
                    outcomes, and a full write-up.
                  </p>
                </div>
                <p className="text-sm text-gray-500 md:text-right">
                  <span className="font-medium tabular-nums text-[#f59e0b]/90">
                    {filteredCaseStudies.length}
                  </span>{" "}
                  {filteredCaseStudies.length === 1 ? "story" : "stories"}{" "}
                  shown
                </p>
              </div>
            </motion.div>

            <div className="relative mb-10 md:mb-12">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[1.75rem] opacity-[0.35]"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.14) 0%, transparent 55%)",
                  filter: "blur(20px)",
                }}
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#141414] to-[#0c0c0c] p-4 shadow-[0_24px_64px_-40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-5">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.35]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                    maskImage:
                      "radial-gradient(ellipse 90% 80% at 50% 0%, black, transparent)",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/25 to-transparent" />

                <motion.div
                  className="relative flex flex-col gap-4"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08, duration: 0.45 }}
                >
                  <div className="flex items-center gap-2 text-gray-400">
                    <Filter className="h-4 w-4 shrink-0" aria-hidden />
                    <span className="text-sm font-medium">Industry</span>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {industries.map((industry) => {
                      const active = selectedIndustry === industry;
                      return (
                        <button
                          key={industry}
                          type="button"
                          onClick={() => setSelectedIndustry(industry)}
                          className={`rounded-full px-5 py-2.5 text-xs font-medium transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm ${
                            active
                              ? "scale-[1.02] bg-[#f59e0b] font-semibold text-black shadow-[0_0_20px_rgba(245,158,11,0.35)]"
                              : "border border-white/[0.08] bg-black/40 text-gray-400 backdrop-blur-sm hover:border-[#f59e0b]/40 hover:text-[#fde68a]"
                          }`}
                        >
                          {industry}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              layout
              className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8"
            >
              {filteredCaseStudies.map((caseStudy) => (
                <Link
                  key={caseStudy.id}
                  href={`/case-studies/${caseStudy.slug}`}
                  className="block h-full"
                >
                  <CaseStudyCard
                    title={caseStudy.title}
                    client={caseStudy.client}
                    industry={caseStudy.industry}
                    image={caseStudy.image}
                    impact={caseStudy.impact}
                    companyType={(caseStudy as any).companyType}
                    problemSolved={(caseStudy as any).problemSolved}
                  />
                </Link>
              ))}
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-[#101010] via-[#0a0a0a] to-black shadow-[0_40px_100px_-56px_rgba(0,0,0,1)]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.25]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: "56px 56px",
                    maskImage:
                      "radial-gradient(ellipse 80% 60% at 30% 20%, black 25%, transparent 75%)",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/35 to-transparent" />

                <div className="relative flex flex-col">
                  <Link
                    href={`/case-studies/${featured.slug}`}
                    className="group/featured relative block aspect-video w-full overflow-hidden bg-black sm:aspect-[21/9]"
                  >
                    <ImageWithFallback
                      src={`https://source.unsplash.com/1200x675/?${encodeURIComponent(featured.image)}`}
                      alt={featured.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/featured:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/10 via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                      <span className="mb-3 inline-flex rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#fde68a] backdrop-blur-md sm:mb-4">
                        Featured story
                      </span>
                      <h3 className="mb-1 text-2xl font-semibold tracking-[-0.02em] text-white transition-colors duration-300 group-hover/featured:text-[#fef3c7] sm:mb-2 sm:text-3xl md:text-4xl">
                        {featured.client}
                      </h3>
                      <p className="text-sm font-medium text-[#f59e0b]/95">
                        {featured.industry} · {featured.deploymentScale}
                      </p>
                    </div>
                  </Link>

                  <div className="border-t border-white/[0.06] p-8 lg:p-10 xl:p-12">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-12 lg:items-start">
                      {/* Row 2 — column A: narrative */}
                      <div className="min-w-0">
                        <div className="mb-8">
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                            Spotlight
                          </p>
                          <h2 className="text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-3xl">
                            {featured.title}
                          </h2>
                        </div>

                        <div className="space-y-4">
                          {(
                            [
                              {
                                n: "01",
                                label: "Business context",
                                icon: Users,
                                body: (featured as any).businessContext,
                              },
                              {
                                n: "02",
                                label: "The challenge",
                                icon: TrendingUp,
                                body: (featured as any).coreProblem,
                              },
                              {
                                n: "03",
                                label: "Solution approach",
                                icon: ShieldCheck,
                                body: (featured as any).solutionApproach,
                              },
                            ] as const
                          ).map((block) => {
                            const Icon = block.icon;
                            return (
                              <div
                                key={block.n}
                                className="rounded-2xl border border-white/[0.06] bg-black/35 p-5 backdrop-blur-sm transition-colors hover:border-white/[0.1]"
                              >
                                <div className="mb-3 flex items-center gap-3">
                                  <span className="font-mono text-xs tabular-nums tracking-widest text-[#f59e0b]/50">
                                    {block.n}
                                  </span>
                                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#f59e0b]/20 bg-[#f59e0b]/10 text-[#fbbf24]">
                                    <Icon className="h-4 w-4" strokeWidth={1.6} />
                                  </div>
                                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                                    {block.label}
                                  </h4>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-400">
                                  {block.body}
                                </p>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-6 rounded-2xl border border-[#f59e0b]/20 bg-gradient-to-br from-[#f59e0b]/[0.06] to-transparent p-5">
                          <div className="mb-2 flex items-center gap-2">
                            <CheckCircle2
                              className="h-4 w-4 text-[#fbbf24]"
                              strokeWidth={1.75}
                            />
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#fde68a]">
                              Implementation confidence
                            </h4>
                          </div>
                          <p className="text-sm italic leading-relaxed text-gray-300">
                            {(featured as any).implementationConfidence}
                          </p>
                        </div>
                      </div>

                      {/* Row 2 — column B: outcomes & actions */}
                      <div className="flex min-w-0 flex-col lg:border-l lg:border-white/[0.06] lg:pl-10 xl:pl-12">
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 lg:mt-0">
                          Outcomes
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(featured.impact).map(([key, value]) => (
                            <div
                              key={key}
                              className="rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent px-3 py-3 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
                            >
                              <p className="mb-1 text-xl font-semibold tabular-nums text-[#fbbf24] md:text-2xl">
                                {value}
                              </p>
                              <p className="text-[9px] font-semibold uppercase leading-tight tracking-wide text-gray-500">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                          <Quote
                            className="mb-3 h-8 w-8 text-[#f59e0b]/35"
                            strokeWidth={1}
                            aria-hidden
                          />
                          <p className="mb-6 text-base leading-relaxed text-gray-200 [text-wrap:pretty]">
                            &ldquo;{featured.testimonial}&rdquo;
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/15 text-sm font-semibold text-[#fbbf24]">
                              {featured.testimonialAuthor[0]}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {featured.testimonialAuthor}
                              </p>
                              <p className="text-xs text-gray-500">
                                {featured.testimonialRole}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch lg:flex-col xl:flex-row">
                          <Link
                            href={`/case-studies/${featured.slug}`}
                            className="min-w-0 flex-1"
                          >
                            <Button className="group h-12 w-full rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[15px] font-semibold text-black shadow-[0_0_32px_-8px_rgba(245,158,11,0.4)] transition-all hover:shadow-[0_0_40px_-6px_rgba(245,158,11,0.5)]">
                              View full case study
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            className="h-12 min-w-0 flex-1 rounded-full border-white/12 bg-transparent text-[15px] font-medium text-white hover:bg-white/[0.04]"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF brief
                          </Button>
                        </div>
                        <p className="mt-3 text-center text-[11px] text-gray-600 sm:text-left">
                          PDF includes scope, timeline, and savings where
                          applicable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <AuthorityCard>
                <div className="mb-10 max-w-3xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] px-3 py-1">
                    <Sparkles
                      className="h-3.5 w-3.5 text-[#fbbf24]"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#fde68a]/90">
                      Method
                    </span>
                  </div>
                  <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
                    How we solve{" "}
                    <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                      local business
                    </span>{" "}
                    problems
                  </h2>
                </div>

                <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                  <div className="space-y-6 text-base leading-[1.75] text-gray-400 lg:col-span-7 [text-wrap:pretty]">
                    <p>
                      The success stories you see above aren&apos;t magic. They
                      are the result of actually listening to local business
                      owners. While outside agencies try to sell you expensive
                      pre-packaged tools, we build systems designed specifically
                      for the way work happens in Bihar.
                    </p>
                    <p>
                      <span className="font-medium text-[#fde68a]/90">
                        Understanding your shop floor:
                      </span>{" "}
                      We don&apos;t guess what you need. Before we quote a price,
                      we visit your godown, talk to your billing counter staff,
                      and look at the ledgers and registers you currently use. We
                      find out exactly where the mistakes happen—whether it&apos;s
                      skipped GST entries or misplaced inventory—and we design a
                      digital solution that solves that specific headache.
                    </p>
                    <p className="text-gray-500">
                      When you partner with EDUNEX, you get practical advice and
                      honest work. Our goal is to give every small and medium
                      business in Bihar access to the same powerful tools that big
                      corporations use, but at a price that makes sense for your
                      local market.
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#f59e0b]/90">
                      Our promise to small businesses
                    </h3>
                    <ul className="space-y-3">
                      {[
                        {
                          title: "No disruptions",
                          body: "We don't force you to stop your business while we set things up. We train your staff side-by-side while they work, ensuring the transition from paper to computer is smooth and stress-free.",
                        },
                        {
                          title: "Simple interfaces",
                          body: "Software is useless if your staff is too confused to use it. Our digital tools are built to be as easy to understand as a standard WhatsApp message.",
                        },
                        {
                          title: "Real results",
                          body: `We don't talk about "synergy" or "digital transformation." We measure success by how much time you save every week, how many billing errors disappear, and how many new local walk-ins you get from our maps optimization.`,
                        },
                      ].map((item) => (
                        <li
                          key={item.title}
                          className="rounded-2xl border border-white/[0.06] bg-black/30 p-4 backdrop-blur-sm transition-colors hover:border-[#f59e0b]/20"
                        >
                          <p className="mb-1.5 text-sm font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="text-sm leading-relaxed text-gray-500">
                            {item.body}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AuthorityCard>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-20 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="relative mx-auto max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent px-8 py-12 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:px-14 md:py-14"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-[#f59e0b]/10 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f59e0b]/85">
                  Relevance
                </p>
                <h3 className="mb-6 text-balance text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                  Why this matters to{" "}
                  <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                    your business
                  </span>
                </h3>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 [text-wrap:pretty] md:text-lg">
                  If your shop or godown faces similar challenges — messy paper
                  trails, billing mistakes, or trouble getting local customers to
                  find you — we can fix it quickly and affordably.
                </p>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <section>
              <motion.div
                className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-[#141414] via-[#0e0e0e] to-black p-8 shadow-[0_32px_80px_-48px_rgba(0,0,0,0.95)] md:p-12 lg:p-14"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.3]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                    maskImage:
                      "radial-gradient(ellipse 70% 60% at 20% 30%, black, transparent)",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/25 to-transparent" />

                <div className="relative grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-6">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] px-3 py-1">
                      <ShieldCheck
                        className="h-3.5 w-3.5 text-[#fbbf24]"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fde68a]/90">
                        Trust
                      </span>
                    </div>
                    <h3 className="mb-5 text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
                      Trusted by fast-growing{" "}
                      <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                        local businesses
                      </span>
                    </h3>
                    <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-400">
                      We don&apos;t just build software; we build tools that make
                      your daily work easier. Our goal is to bring reliable,
                      face-to-face IT support to every business in Bihar.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Streamlined processes for efficiency and ease",
                        "Data privacy and security are our priority",
                        "Customized solutions built for your growth",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-black/25 px-4 py-3 backdrop-blur-sm"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f59e0b]" />
                          <span className="text-sm font-medium leading-snug text-white/90">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-6 lg:grid-cols-2">
                    {[
                      {
                        label: "Delivery style",
                        value: "Hands-on",
                        hint: "On-site when it matters",
                      },
                      {
                        label: "Code ownership",
                        value: "Yours",
                        hint: "No lock-in tricks",
                      },
                      {
                        label: "Support posture",
                        value: "Direct",
                        hint: "Talk to builders",
                      },
                      {
                        label: "Compliance mindset",
                        value: "GST-ready",
                        hint: "Aligned with filings",
                      },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="flex flex-col rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-transparent p-5 text-left shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#f59e0b]/20"
                      >
                        <p className="mb-1 text-2xl font-semibold tabular-nums tracking-tight text-[#fbbf24] sm:text-3xl">
                          {stat.value}
                        </p>
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                          {stat.label}
                        </p>
                        <p className="mt-auto text-xs leading-snug text-gray-600">
                          {stat.hint}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-t border-[#262626] py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-[0.45]"
                  style={{
                    background:
                      "radial-gradient(ellipse 55% 70% at 20% 40%, rgba(245,158,11,0.18) 0%, transparent 50%), radial-gradient(ellipse 50% 60% at 85% 60%, rgba(251,191,36,0.1) 0%, transparent 52%)",
                    filter: "blur(20px)",
                  }}
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-[#141414] via-[#0a0a0a] to-black p-8 shadow-[0_40px_100px_-56px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.05)] md:p-10 lg:p-12">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.35]"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
                      `,
                      backgroundSize: "56px 56px",
                      maskImage:
                        "radial-gradient(ellipse 85% 75% at 50% 20%, black 15%, transparent 70%)",
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent" />

                  <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
                    <div className="lg:col-span-7">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] px-3.5 py-1.5">
                        <Sparkles
                          className="h-3.5 w-3.5 text-[#fbbf24]"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#fde68a]/90">
                          Next chapter
                        </span>
                      </div>
                      <h3 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
                        Ready to write your own{" "}
                        <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                          success story
                        </span>
                        ?
                      </h3>
                      <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-400 [text-wrap:pretty] md:text-lg">
                        Discuss your specific business challenges with our solution
                        architects. We provide structured guidance to help you
                        modernize and scale.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-white/[0.06] pt-10 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                      <Link href="/contact" className="w-full sm:mx-auto sm:max-w-sm lg:mx-0 lg:max-w-none">
                        <Button className="group h-14 w-full rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-8 text-[15px] font-semibold text-black shadow-[0_0_40px_-10px_rgba(245,158,11,0.45)] transition-all duration-300 hover:shadow-[0_0_52px_-8px_rgba(245,158,11,0.55)]">
                          Get a free system consultation
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                      </Link>
                      <Link href="/contact" className="w-full sm:mx-auto sm:max-w-sm lg:mx-0 lg:max-w-none">
                        <Button
                          variant="outline"
                          className="h-14 w-full rounded-full border-white/12 bg-white/[0.02] px-8 text-[15px] text-white backdrop-blur-sm transition-colors hover:border-[#f59e0b]/35 hover:bg-white/[0.04]"
                        >
                          Discuss your requirements
                        </Button>
                      </Link>
                      <p className="text-center text-xs leading-relaxed text-gray-600 lg:text-left">
                        No obligations—just an honest conversation about your tech
                        roadmap.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>
      </div>
    </div>
  );
}
