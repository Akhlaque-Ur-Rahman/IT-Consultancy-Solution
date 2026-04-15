"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/mockData";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Cpu,
  Filter,
  MapPinned,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";
import { Button } from "@/components/ui/button";

export default function ServicesClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All services" },
    { id: "development", label: "Apps & sites" },
    { id: "solutions", label: "Billing & stock" },
    { id: "marketing", label: "Local reach" },
    { id: "design", label: "Design" },
    { id: "compliance", label: "Licenses & GST" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <div className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
          ]}
        />

        <SectionAmbient
          preset="surface"
          className="relative border-b border-[#262626] py-20 md:py-28 lg:py-32"
        >
          <div className="relative mx-auto max-w-[1400px] px-6">
            <div
              className="pointer-events-none absolute inset-0 -mx-6 overflow-hidden rounded-none md:-mx-10"
              aria-hidden
            >
              <div
                className="absolute -left-1/4 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-y-1/2 rounded-full opacity-[0.12]"
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(245,158,11,0.55) 0%, transparent 62%)",
                  filter: "blur(2px)",
                }}
              />
              <div
                className="absolute -right-1/4 bottom-0 h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full opacity-[0.1]"
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
                  <Building2
                    className="h-4 w-4 text-[#fbbf24]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-[13px] font-medium tracking-wide text-[#fde68a]/90">
                    End-to-End Digital Solutions · Bihar
                  </span>
                  <span className="hidden h-3 w-px bg-white/15 sm:inline" />
                  <span className="hidden text-[13px] text-gray-500 sm:inline">
                    Patna &amp; statewide
                  </span>
                </div>

                <h1 className="mb-6 max-w-[22ch] text-left text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.08] lg:max-w-none lg:text-[3.25rem] xl:text-[3.5rem]">
                  Simple systems to{" "}
                  <span className="relative inline">
                    <span className="relative z-[1] bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                      run and grow
                    </span>
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[0.35em] rounded-sm bg-gradient-to-r from-[#f59e0b]/25 via-[#fbbf24]/20 to-transparent opacity-90"
                      aria-hidden
                    />
                  </span>{" "}
                  your shop or firm
                </h1>

                <p className="mb-10 max-w-xl text-left text-base leading-relaxed text-gray-400 md:text-lg [text-wrap:balance]">
                  Billing, stock, apps, maps, ads, and filings in one place. We
                  speak plain language. We sit in Patna when you need us.
                </p>

                <div className="mb-10 flex flex-wrap gap-2">
                  {[
                    { label: "Apps & sites", icon: Cpu },
                    { label: "Billing & stock", icon: TrendingUp },
                    { label: "Licenses & GST", icon: ShieldCheck },
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
                  <Link href="#services-catalog">
                    <Button className="group h-12 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-8 text-[15px] font-semibold text-black shadow-[0_0_40px_-8px_rgba(245,158,11,0.45)] transition-all duration-300 hover:shadow-[0_0_48px_-6px_rgba(245,158,11,0.55)]">
                      Browse services
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="h-12 rounded-full border-white/15 bg-white/[0.02] px-8 text-[15px] text-white backdrop-blur-sm transition-colors hover:border-[#f59e0b]/35 hover:bg-white/[0.04]"
                    >
                      Talk to us
                    </Button>
                  </Link>
                </div>

                <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-white/[0.06] pt-10">
                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-white tabular-nums">
                      {services.length}+
                    </p>
                    <p className="text-sm text-gray-500">Service lines</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-white tabular-nums">
                      8+
                    </p>
                    <p className="text-sm text-gray-500">Years in Bihar</p>
                  </div>
                  <div className="max-w-[200px] text-sm leading-snug text-gray-500">
                    One partner for daily work, growth, and filings.
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
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f59e0b]/80">
                        What we cover
                      </p>
                      <p className="text-lg font-medium text-white/95">
                        Built for counters, godowns, and clinics here
                      </p>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          t: "Software that fits your flow",
                          s: "Screens your staff can learn without stress",
                        },
                        {
                          t: "More calls and visits",
                          s: "Maps and ads aimed at nearby buyers",
                        },
                        {
                          t: "Rules handled on time",
                          s: "GST and papers lined up with your daily work",
                        },
                      ].map((row, i) => (
                        <div
                          key={row.t}
                          className="group rounded-2xl border border-white/[0.05] bg-black/40 p-4 backdrop-blur-md transition-colors hover:border-[#f59e0b]/20"
                          style={{ transitionDelay: `${i * 40}ms` }}
                        >
                          <p className="text-sm font-medium text-white">
                            {row.t}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-gray-500 group-hover:text-gray-400">
                            {row.s}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-2xl border border-dashed border-[#f59e0b]/25 bg-[#f59e0b]/[0.04] px-4 py-3 text-center text-xs text-[#fde68a]/90">
                      One Patna team. No juggling a far away builder and a
                      separate CA who never saw your counter.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-8 rounded-[2rem] opacity-50"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.16) 0%, transparent 55%)",
                    filter: "blur(24px)",
                  }}
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-gradient-to-b from-[#141414] to-[#0c0c0c] p-8 shadow-[0_40px_100px_-48px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-10 lg:p-14">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.4]"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                      `,
                      backgroundSize: "48px 48px",
                      maskImage:
                        "radial-gradient(ellipse 90% 70% at 50% 20%, black, transparent)",
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/35 to-transparent" />

                  <div className="relative">
                    <div className="mb-10 max-w-3xl md:mb-14">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] px-3.5 py-1.5">
                        <Sparkles
                          className="h-3.5 w-3.5 text-[#fbbf24]"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fde68a]/90">
                          One partner, end to end
                        </span>
                      </div>
                      <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]">
                        Why we&apos;re{" "}
                        <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                          different
                        </span>{" "}
                        from far away teams
                      </h2>
                      <div className="mt-8 space-y-5 text-base leading-[1.75] text-gray-400 [text-wrap:pretty]">
                        <p>
                          Many owners juggle a distant website builder, boxed
                          billing that does not fit the godown, and a CA who never
                          saw the screen behind the tax numbers. Pieces do not
                          talk. Mistakes creep in. Time gets lost.
                        </p>
                        <p>
                          EDUNEX is an End-to-End Digital Solutions Provider. We
                          keep billing, reach, and filings under one roof in
                          Bihar. Your shop data can feed clean GST work. Your maps
                          and ads can point people to the same phone you answer.
                          Less chaos. More control.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                      {(
                        [
                          {
                            step: "01",
                            title: "Billing and daily work on your terms",
                            body: "We do not sell heavy systems your counter cannot learn. We visit your shop, godown, or clinic. We watch paper flow today. Then we build fast, simple tools. Offline when the net fails. Clear stock and bills when it returns.",
                            icon: Zap,
                          },
                          {
                            step: "02",
                            title: "Nearby customers find you",
                            body: "A site alone does not fill the store. We tune maps and simple local ads so families near Patna see your name first. We aim calls and WhatsApp pings you can measure. Less waste. More footfall.",
                            icon: MapPinned,
                          },
                          {
                            step: "03",
                            title: "Registration and GST without the runaround",
                            body: "Paperwork piles up fast. We register firms, sort FSSAI or trade papers, and file GST on time. You skip late fees. You keep focus on sales, not forms.",
                            icon: BadgeCheck,
                          },
                        ] as const
                      ).map((item, i) => {
                        const Icon = item.icon;
                        return (
                        <motion.div
                          key={item.step}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-black/30 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#f59e0b]/25 hover:bg-[#0f0f0f]/90 md:p-7"
                        >
                          <div className="mb-5 flex items-start justify-between gap-3">
                            <span className="font-mono text-[11px] font-medium tabular-nums tracking-widest text-[#f59e0b]/55">
                              {item.step}
                            </span>
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#f59e0b]/20 bg-gradient-to-br from-[#f59e0b]/15 to-transparent text-[#fbbf24] shadow-[0_0_24px_-8px_rgba(245,158,11,0.35)] transition-transform duration-300 group-hover:scale-[1.03]">
                              <Icon
                                className="h-5 w-5"
                                strokeWidth={1.6}
                                aria-hidden
                              />
                            </div>
                          </div>
                          <h3 className="mb-3 text-lg font-semibold leading-snug tracking-tight text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                            {item.body}
                          </p>
                        </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          id="services-catalog"
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
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] px-3.5 py-1.5">
                <Sparkles
                  className="h-3.5 w-3.5 text-[#fbbf24]"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fde68a]/90">
                  Service catalog
                </span>
              </div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]">
                Browse{" "}
                <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                  services
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 [text-wrap:pretty]">
                Filter by type. Billing, apps, local reach, design, and filings.
                One Patna partner for real daily work.
              </p>
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
                  className="relative flex flex-wrap items-center gap-2 sm:gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08, duration: 0.45 }}
                >
                  <div className="mr-1 flex items-center gap-2 text-gray-400">
                    <Filter className="h-4 w-4 shrink-0" aria-hidden />
                    <span className="text-sm font-medium">Filter</span>
                  </div>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`rounded-full px-5 py-2.5 text-xs font-medium transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm ${
                        selectedCategory === category.id
                          ? "scale-[1.02] bg-[#f59e0b] font-semibold text-black shadow-[0_0_20px_rgba(245,158,11,0.35)]"
                          : "border border-white/[0.08] bg-black/40 text-gray-400 backdrop-blur-sm hover:border-[#f59e0b]/40 hover:text-[#fde68a]"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </motion.div>
              </div>
            </div>

            <motion.div
              layout
              className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8"
            >
              {filteredServices.map((service, index) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="block h-full"
                >
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    delay={index * 0.05}
                  />
                </Link>
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#141414] to-[#0c0c0c] px-6 py-16 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="text-lg text-gray-400">
                  No services in this category.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-[#f59e0b]/35 bg-[#f59e0b]/[0.08] px-6 py-2.5 text-sm font-semibold text-[#fde68a] transition-colors hover:bg-[#f59e0b]/[0.14]"
                >
                  Show all services
                </button>
              </div>
            )}
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
                      "radial-gradient(ellipse 55% 70% at 20% 40%, rgba(245,158,11,0.2) 0%, transparent 50%), radial-gradient(ellipse 50% 60% at 85% 60%, rgba(251,191,36,0.12) 0%, transparent 52%)",
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
                        "radial-gradient(ellipse 85% 75% at 30% 20%, black 15%, transparent 70%)",
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent" />

                  <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
                    <div className="lg:col-span-7">
                      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] px-3.5 py-1.5">
                        <Sparkles
                          className="h-3.5 w-3.5 text-[#fbbf24]"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#fde68a]/90">
                          Tailored engagements
                        </span>
                      </div>
                      <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.4rem] lg:leading-[1.12]">
                        Don&apos;t See What You&apos;re{" "}
                        <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                          Looking For?
                        </span>
                      </h2>
                      <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-400 [text-wrap:pretty] md:text-lg">
                        Tell us what hurts: stock, bills, slow sales, or forms.
                        We sketch a simple path and a fair price range.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-white/[0.06] pt-10 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                      <Link href="/contact" className="w-full sm:mx-auto sm:max-w-sm lg:mx-0 lg:max-w-none">
                        <Button className="group h-14 w-full rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-8 text-[15px] font-semibold text-black shadow-[0_0_40px_-10px_rgba(245,158,11,0.45)] transition-all duration-300 hover:shadow-[0_0_52px_-8px_rgba(245,158,11,0.55)]">
                          Get in touch
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                      </Link>
                      <Link href="/case-studies" className="w-full sm:mx-auto sm:max-w-sm lg:mx-0 lg:max-w-none">
                        <Button
                          variant="outline"
                          className="group h-14 w-full rounded-full border-white/12 bg-white/[0.02] px-8 text-[15px] text-white backdrop-blur-sm transition-colors hover:border-[#f59e0b]/35 hover:bg-white/[0.04]"
                        >
                          View success stories
                          <ArrowRight className="ml-2 h-4 w-4 opacity-80 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                      </Link>
                      <p className="text-center text-xs leading-relaxed text-gray-600 lg:text-left">
                        Read local stories before you say yes.
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
