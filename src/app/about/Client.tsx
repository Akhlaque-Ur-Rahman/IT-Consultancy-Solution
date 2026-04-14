"use client";

import { motion } from "motion/react";
import { teamMembers } from "@/data/mockData";
import {
  Target,
  Eye,
  Award,
  Users,
  Briefcase,
  Mail,
  ArrowRight,
  Layers,
  MapPin,
  Handshake,
  Sparkles,
  Route,
  ClipboardList,
  Zap,
  GraduationCap,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";
import { COMPANY_INFO } from "@/config/company";

const ABOUT_HERO_SNAPSHOT = [
  {
    Icon: MapPin,
    label: "Founded in Bihar - visits to your shop, godown, or clinic",
  },
  {
    Icon: Handshake,
    label: "Software, billing, SEO & compliance from one Patna team",
  },
  {
    Icon: Sparkles,
    label: "Staff training in Hindi or English - we stay until it works",
  },
  {
    Icon: Users,
    label: "Honest scope & pricing - no surprise vendor lock-in",
  },
] as const;

/** Two-letter initials for leadership cards (skips honorifics like Md). */
function leadershipInitials(fullName: string) {
  const parts = fullName
    .trim()
    .split(/\s+/)
    .filter((w) => !/^(Md|Mrs?|Ms|Dr)\.?$/i.test(w));
  if (parts.length >= 2) {
    const first = parts[0]!;
    const last = parts[parts.length - 1]!;
    return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
  }
  return fullName.slice(0, 2).toUpperCase();
}

const HOW_WE_WORK_INTRO =
  "We know that learning a new software can be scary for your staff. That is why we never just install a program and disappear. We stay with you until everything works perfectly. Our process is built around trust, transparency, and face-to-face support.";

const HOW_WE_WORK_STEPS = [
  {
    step: 1,
    title: "On-site business review",
    body:
      "Before any money changes hands, we sit down with you at your shop, clinic, or factory. We watch exactly how you do things today - how you write invoices, track stock, and manage customers. We then suggest the simplest, lowest-cost digital way to automate that work.",
    Icon: ClipboardList,
  },
  {
    step: 2,
    title: "Fast, practical delivery",
    body:
      "We build exactly what we promised, on time. For custom software, we show you progress every week so you can request changes before we finish. For simple websites or GST registrations, we move incredibly fast so you can get started immediately.",
    Icon: Zap,
  },
  {
    step: 3,
    title: "Training & ongoing support",
    body:
      "This is where we are completely different. We provide on-site training for your staff in Hindi or English. If your system goes down or if you get stuck on a GST filing, our team is right here in Bihar to fix it immediately, ensuring your business never has to stop.",
    Icon: GraduationCap,
  },
] as const;

function AuthorityCard({ children }: { children: React.ReactNode }) {
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

export default function AboutClient() {
  const values = [
    {
      icon: Target,
      title: "Honest Work",
      description:
        "We tell you exactly what you need and what it will cost. No hidden fees.",
    },
    {
      icon: Award,
      title: "Built to Last",
      description:
        "We don't just build for today; we build systems that grow with you.",
    },
    {
      icon: Users,
      title: "Partners, Not Just Vendors",
      description:
        "We treat your business like our own and care about your growth.",
    },
    {
      icon: Eye,
      title: "Always Simple",
      description:
        "We take complex problems and turn them into simple, easy-to-use tools.",
    },
  ];

  return (
    <div className="page-depth-grain min-h-screen bg-black text-white">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "About Us", item: "/about" },
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
                  About EDUNEX · Patna
                </div>
                <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                  The team behind{" "}
                  <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                    practical IT for Bihar
                  </span>
                </h1>
                <p className="mb-8 max-w-xl text-lg leading-relaxed text-neutral-400 lg:text-xl">
                  Since 2018 we&apos;ve helped regional SMEs grow with simple
                  software, local SEO, and filings - the same partner for your
                  shop floor and your paperwork.
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
                      Local
                    </div>
                    <div className="text-xs uppercase tracking-wider text-neutral-500">
                      On-site when it matters
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold tabular-nums text-white md:text-3xl">
                      One
                    </div>
                    <div className="text-xs uppercase tracking-wider text-neutral-500">
                      Partner for tech + growth
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="h-14 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-8 font-bold text-black shadow-[0_0_0_1px_rgba(245,158,11,0.25)] transition hover:brightness-105"
                    >
                      Talk to us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 rounded-xl border-white/10 bg-white/[0.03] px-8 font-medium text-white hover:bg-white/[0.06]"
                    >
                      Browse services
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
                      <Users className="h-4 w-4 text-[#f59e0b]" aria-hidden />
                      How we show up
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
                      edunex_about
                    </span>
                  </div>
                  <h2 className="mb-6 text-lg font-semibold text-white md:text-xl">
                    What working with us feels like
                  </h2>
                  <ul className="space-y-3">
                    {ABOUT_HERO_SNAPSHOT.map(({ Icon, label }) => (
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
                    Same culture as our services &amp; compliance pages - clarity
                    first, jargon never.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
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

              <div className="relative z-[1] mb-10 md:mb-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                  <Route
                    className="h-3.5 w-3.5 text-amber-400/85"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  Our story
                </div>
                <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.35rem] lg:leading-tight">
                  Local roots,{" "}
                  <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                    practical execution
                  </span>
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-base">
                  Bihar-first delivery - we meet you where the work happens, not
                  only on email threads.
                </p>
              </div>

              <div className="relative z-[1] grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="space-y-6 text-[15px] leading-relaxed text-neutral-400 md:text-base">
                  <p>
                    At EDUNEX Services, we believe that technology should make
                    your life easier, not more complicated. Founded in 2018 right
                    here in Bihar, we saw local businesses struggling to digitize.
                    Small shop owners and distributors were being overcharged by
                    out-of-state agencies for complex software they didn&apos;t
                    need and couldn&apos;t use.
                  </p>
                  <p>
                    We built EDUNEX to fix this. We act as your local technology
                    partner. We don&apos;t just sell you software; we visit your
                    godown, understand how your staff works with paper bills
                    today, and build simple digital systems that make sense to
                    them. Whether you need an offline-ready billing system, a
                    website that brings in local customers from Google Maps, or
                    help filing your GST without headaches, we handle it all.
                  </p>
                  <p>
                    Our goal is simple: to stop you from losing money to manual
                    mistakes, and to give you the peace of mind that comes from
                    having a reliable tech team just a phone call or a short drive
                    away. Explore our{" "}
                    <Link
                      href="/case-studies"
                      className="font-medium text-[#f59e0b] underline-offset-4 transition hover:text-[#fbbf24] hover:underline"
                    >
                      Local Success Stories
                    </Link>{" "}
                    to see how we&apos;ve helped businesses like yours.
                  </p>
                </div>

                <div className="relative lg:min-h-[min(420px,50vh)]">
                  <div className="pointer-events-none absolute -inset-2 rounded-[1.25rem] bg-gradient-to-br from-[#f59e0b]/20 via-transparent to-purple-500/10 blur-xl" />
                  <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a0a0a] shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)] lg:min-h-[420px]">
                    <div className="absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                      alt="Team collaborating at a conference table"
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <AuthorityCard>
                <div className="relative z-[1] mb-10 text-center md:mb-12 md:text-left">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                    <ClipboardList
                      className="h-3.5 w-3.5 text-amber-400/85"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    How we engage
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.35rem] lg:leading-tight">
                    How we work{" "}
                    <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                      with you
                    </span>
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500 md:mx-0 md:text-base">
                    A simple three-stage rhythm - scoped on-site, shipped with
                    checkpoints, supported where your team actually works.
                  </p>
                </div>

                <p className="relative z-[1] mb-8 max-w-3xl text-[15px] leading-relaxed text-neutral-400 md:mb-10 md:text-base">
                  {HOW_WE_WORK_INTRO}
                </p>

                <div className="relative z-[1] grid gap-5 md:grid-cols-2 lg:gap-6">
                  {HOW_WE_WORK_STEPS.map((item, index) => {
                    const StepIcon = item.Icon;
                    return (
                      <motion.article
                        key={item.step}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-24px" }}
                        transition={{
                          delay: index * 0.06,
                          duration: 0.4,
                        }}
                        className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-6 text-left transition-all duration-300 hover:border-[#f59e0b]/25 md:p-7"
                      >
                        <div
                          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#f59e0b]/[0.08] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                          aria-hidden
                        />
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <span className="font-mono text-xs font-semibold tabular-nums text-[#f59e0b]/80">
                            {String(item.step).padStart(2, "0")}
                          </span>
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] ring-1 ring-white/[0.05]">
                            <StepIcon
                              className="h-6 w-6 text-[#fbbf24]"
                              strokeWidth={1.65}
                              aria-hidden
                            />
                          </div>
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-white md:text-xl">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-neutral-400 [text-wrap:pretty] md:text-[15px]">
                          {item.body}
                        </p>
                        <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-amber-400/80 via-amber-600/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </motion.article>
                    );
                  })}
                </div>
              </AuthorityCard>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="relative z-[1] mb-10 text-center md:mb-12"
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
                Direction
              </div>
              <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                Mission &amp;{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  vision
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-500 md:text-base">
                What we optimize for every day - and where we&apos;re headed with
                clients in Patna and across Bihar.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <motion.article
                className="group relative flex flex-col overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-8 text-left shadow-[0_24px_60px_-28px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#f59e0b]/25 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.85),0_0_40px_-20px_rgba(245,158,11,0.12)] md:p-9"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-[#f59e0b]/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-amber-400/80 via-amber-600/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span className="font-mono text-xs font-semibold tabular-nums text-[#f59e0b]/75">
                    01
                  </span>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] ring-1 ring-white/[0.05]">
                    <Target
                      className="h-6 w-6 text-[#fbbf24]"
                      strokeWidth={1.65}
                      aria-hidden
                    />
                  </div>
                </div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Why we exist
                </p>
                <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">
                  Our mission
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400 [text-wrap:pretty] md:text-[15px]">
                  To give every business owner access to high-quality, reliable,
                  and affordable technology that makes their work easier every
                  single day.
                </p>
              </motion.article>

              <motion.article
                className="group relative flex flex-col overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-8 text-left shadow-[0_24px_60px_-28px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#f59e0b]/25 md:p-9 md:ring-1 md:ring-[#f59e0b]/20 md:shadow-[0_28px_70px_-32px_rgba(245,158,11,0.18)]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-[#f59e0b]/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-amber-400/80 via-amber-600/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span className="font-mono text-xs font-semibold tabular-nums text-[#f59e0b]/75">
                    02
                  </span>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] ring-1 ring-white/[0.05]">
                    <Eye
                      className="h-6 w-6 text-[#fbbf24]"
                      strokeWidth={1.65}
                      aria-hidden
                    />
                  </div>
                </div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Where we&apos;re going
                </p>
                <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">
                  Our vision
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400 [text-wrap:pretty] md:text-[15px]">
                  To be the most trusted name in Patna for technology help, known
                  for our honesty, simple solutions, and real results for our
                  clients.
                </p>
              </motion.article>
            </div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surface"
          className="relative overflow-hidden border-b border-[#262626] py-16 md:py-24"
        >
          <div
            className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#f59e0b]/[0.06] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-600/[0.07] blur-3xl"
            aria-hidden
          />
          <div className="relative z-[1] mx-auto max-w-[1400px] px-6">
            <motion.div
              className="mb-10 text-center md:mb-12"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                <Award
                  className="h-3.5 w-3.5 text-amber-400/85"
                  strokeWidth={1.75}
                  aria-hidden
                />
                What we stand by
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Our{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  values
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-500 md:text-base">
                Non-negotiables on every project - from first quote to years of
                support.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {values.map((value, index) => {
                const ValueIcon = value.icon;
                return (
                  <motion.article
                    key={value.title}
                    className="group relative flex flex-col items-center overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent px-6 py-8 text-center shadow-[0_24px_60px_-32px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#f59e0b]/25 hover:shadow-[0_28px_70px_-32px_rgba(0,0,0,0.88),0_0_40px_-20px_rgba(245,158,11,0.1)] md:px-7 md:py-9"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, duration: 0.42 }}
                  >
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#f59e0b]/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] ring-1 ring-white/[0.05] transition-transform duration-300 group-hover:scale-[1.03] group-hover:ring-[#f59e0b]/25">
                      <ValueIcon
                        className="h-7 w-7 text-[#fbbf24]"
                        strokeWidth={1.65}
                        aria-hidden
                      />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white md:text-xl">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-400 [text-wrap:pretty] md:text-[15px]">
                      {value.description}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-[0.35] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] opacity-70 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
                  </motion.article>
                );
              })}
            </div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="relative overflow-hidden border-b border-[#262626] py-16 md:py-24"
        >
          <div
            className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#f59e0b]/[0.05] blur-[100px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-amber-700/[0.06] blur-[100px]"
            aria-hidden
          />
          <div className="relative z-[1] mx-auto max-w-[1400px] px-6">
            <motion.div
              className="mb-10 text-center md:mb-12"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                <Users
                  className="h-3.5 w-3.5 text-amber-400/85"
                  strokeWidth={1.75}
                  aria-hidden
                />
                Leadership
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Meet the{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  leadership team
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-base">
                Experienced professionals leading our mission to deliver
                excellence for clients across Bihar.
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {teamMembers.map((member, index) => (
                <motion.article
                  key={member.id}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-white/[0.09] bg-gradient-to-b from-[#181818] via-[#101010] to-[#070707] shadow-[0_24px_80px_-48px_rgba(0,0,0,0.95)] transition-all duration-300 hover:border-[#f59e0b]/30"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.42 }}
                >
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f59e0b]/[0.08] opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

                  <div className="relative flex min-h-[200px] w-full items-center justify-center border-b border-white/[0.06] bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-[#0a0a0a] px-6 py-12 sm:min-h-[220px]">
                    <div
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(245,158,11,0.12),transparent_65%)]"
                      aria-hidden
                    />
                    <div className="relative flex flex-col items-center gap-3">
                      <div
                        className="flex h-[7.5rem] w-[7.5rem] items-center justify-center rounded-full border border-[#f59e0b]/30 bg-gradient-to-br from-[#f59e0b]/20 via-[#121212] to-[#0a0a0a] text-3xl font-bold tracking-tight text-white shadow-[0_0_40px_-12px_rgba(245,158,11,0.35)] transition-transform duration-300 group-hover:scale-[1.02] sm:h-32 sm:w-32 sm:text-4xl"
                        aria-hidden
                      >
                        {leadershipInitials(member.name)}
                      </div>
                      <span className="sr-only">
                        Portrait for {member.name} - photo not yet added
                      </span>
                    </div>
                  </div>

                  <div className="relative flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="mb-1 text-lg font-bold text-white md:text-xl">
                      {member.name}
                    </h3>
                    <p className="mb-3 text-sm font-semibold text-[#f59e0b]">
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-400 [text-wrap:pretty]">
                      {member.bio}
                    </p>
                  </div>

                  <div className="h-[3px] w-full origin-left scale-x-[0.35] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] opacity-80 transition-transform duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
                </motion.article>
              ))}
            </div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="relative overflow-hidden border-t border-[#262626] py-16 md:py-24"
        >
          <div
            className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-[#f59e0b]/[0.06] blur-[100px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-700/[0.05] blur-[110px]"
            aria-hidden
          />

          <div className="relative z-[1] mx-auto max-w-[1400px] px-6">
            <motion.div
              className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-[#151515] via-[#0d0d0d] to-[#050505] p-8 shadow-[0_28px_90px_-50px_rgba(0,0,0,0.95)] md:p-10 lg:p-12"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div
                className="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-[#f59e0b]/[0.07] blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-purple-500/[0.05] blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
                aria-hidden
              />

              <div className="relative z-[1] mb-10 text-center md:mb-12">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                  <Briefcase
                    className="h-3.5 w-3.5 text-amber-400/85"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  Careers
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Join{" "}
                  <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                    our team
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-base">
                  When we post roles, they&apos;ll appear here. You can still share
                  your profile for future openings - we&apos;re based in Patna
                  with remote-friendly collaboration.
                </p>
              </div>

              <motion.div
                className="relative z-[1] mx-auto mb-10 max-w-2xl rounded-[1.25rem] border border-white/[0.1] bg-white/[0.03] px-6 py-8 text-center md:mb-12 md:px-8 md:py-10"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.1] bg-[#0a0a0a]/80 text-[#f59e0b]">
                  <Clock className="h-6 w-6" strokeWidth={1.65} aria-hidden />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">
                  No open listings right now
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500 md:text-[15px]">
                  Our recent intern postings are closed. Thank you to everyone
                  who applied - we&apos;ll announce new opportunities here when
                  they open.
                </p>
              </motion.div>

              <div className="relative z-[1] border-t border-white/[0.06] pt-10 text-center">
                <p className="mx-auto mb-6 max-w-md text-xs font-medium uppercase tracking-[0.14em] text-neutral-600">
                  Spontaneous applications welcome · We reply within a few
                  business days
                </p>
                <Link
                  href="https://forms.gle/gNNNhFhdS545neR58"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="h-14 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-10 text-base font-bold text-black shadow-[0_0_0_1px_rgba(245,158,11,0.25),0_12px_40px_-14px_rgba(245,158,11,0.45)] transition hover:brightness-105"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send us your resume
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>
      </div>
    </div>
  );
}
