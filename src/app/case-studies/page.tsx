"use client";

import { motion } from "motion/react";
import { caseStudies } from "@/data/mockData";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import {
  Download,
  TrendingUp,
  Users,
  CheckCircle2,
  ShieldCheck,
  Briefcase,
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
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-4 py-2 shadow-[0_0_32px_-12px_rgba(245,158,11,0.35)]">
                <TrendingUp className="h-4 w-4 text-[#fbbf24]" aria-hidden />
                <span className="text-sm font-semibold text-[#fbbf24]">
                  Proven Results &amp; Real-World Impact
                </span>
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight">
                How We Help{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  Regional Businesses
                </span>{" "}
                Grow with Reliable Tech
              </h1>
              <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl [text-wrap:balance]">
                Real problems solved for businesses right here in Bihar. See how
                our simple, affordable solutions deliver measurable success for
                local distributors, clinics, and service providers.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 border-y border-[#262626] py-6">
                {[
                  { icon: CheckCircle2, label: "Hands-on implementations" },
                  { icon: ShieldCheck, label: "Resilience-minded architecture" },
                  { icon: Briefcase, label: "Multi-sector experience" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <stat.icon className="h-5 w-5 text-[#f59e0b]" />
                    <span className="text-sm font-semibold uppercase tracking-wide text-white/80">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  type="button"
                  onClick={() => setSelectedIndustry(industry)}
                  className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                    selectedIndustry === industry
                      ? "scale-105 bg-[#f59e0b] font-semibold text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                      : "border border-[#262626] bg-[#121212] text-gray-400 hover:border-[#f59e0b]/50 hover:text-[#f59e0b]"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            </div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-[#f59e0b]/25 bg-[#121212] shadow-[0_28px_80px_-32px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />
              <div className="grid lg:grid-cols-2">
                <Link
                  href={`/case-studies/${featured.slug}`}
                  className="group/featured relative block h-96 bg-black lg:h-auto"
                >
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x800/?${encodeURIComponent(featured.image)}`}
                    alt={featured.title}
                    className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover/featured:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <span className="mb-4 inline-flex rounded bg-[#f59e0b] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                      Featured implementation
                    </span>
                    <h3 className="mb-2 text-4xl font-bold text-white transition-colors group-hover/featured:text-[#f59e0b]">
                      {featured.client}
                    </h3>
                    <p className="font-medium text-[#f59e0b]">
                      {featured.industry} • {featured.deploymentScale}
                    </p>
                  </div>
                </Link>

                <div className="p-8 lg:p-14">
                  <h2 className="mb-10 text-3xl font-bold leading-tight text-white">
                    {featured.title}
                  </h2>

                  <div className="space-y-10">
                    <section>
                      <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#f59e0b]">
                        <Users className="h-4 w-4" />
                        Business Context
                      </h4>
                      <p className="leading-relaxed text-gray-400">
                        {(featured as any).businessContext}
                      </p>
                    </section>

                    <section>
                      <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#f59e0b]">
                        <TrendingUp className="h-4 w-4" />
                        The Challenge
                      </h4>
                      <p className="leading-relaxed text-gray-400">
                        {(featured as any).coreProblem}
                      </p>
                    </section>

                    <section>
                      <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#f59e0b]">
                        <ShieldCheck className="h-4 w-4" />
                        Solution Approach
                      </h4>
                      <p className="leading-relaxed text-gray-400">
                        {(featured as any).solutionApproach}
                      </p>
                    </section>

                    <section className="rounded-xl border border-[#f59e0b]/10 bg-[#0a0a0a] p-6">
                      <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#f59e0b]">
                        <CheckCircle2 className="h-4 w-4" />
                        Implementation Confidence
                      </h4>
                      <p className="text-sm italic leading-relaxed text-gray-300">
                        {(featured as any).implementationConfidence}
                      </p>
                    </section>

                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                      {Object.entries(featured.impact).map(([key, value]) => (
                        <div
                          key={key}
                          className="rounded-lg border border-[#262626] bg-[#0a0a0a] p-4"
                        >
                          <p className="mb-1 text-2xl font-extrabold text-[#f59e0b]">
                            {value}
                          </p>
                          <p className="text-[10px] font-bold uppercase tracking-tight text-gray-500">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-[#262626] pt-8">
                      <p className="mb-4 text-lg font-medium italic text-white">
                        &ldquo;{featured.testimonial}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f59e0b]/20 text-sm font-bold text-[#f59e0b]">
                          {featured.testimonialAuthor[0]}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">
                            {featured.testimonialAuthor}
                          </p>
                          <p className="text-xs text-gray-500">
                            {featured.testimonialRole}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="h-14 w-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] font-bold text-black hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                        <Download className="mr-2 h-5 w-5" />
                        Download Success Story Details (PDF)
                      </Button>
                      <p className="mt-3 text-center text-[10px] font-medium text-gray-500">
                        Includes: What we built, how long it took, and how much
                        money it saved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AuthorityCard>
                <div className="prose prose-invert prose-lg max-w-none">
                  <h2 className="mb-6 border-b border-[#262626] pb-4 text-3xl font-bold text-white">
                    How We Solve Local Business Problems
                  </h2>
                  <div className="space-y-6 leading-relaxed text-gray-400 md:columns-2 md:gap-12">
                    <p>
                      The success stories you see above aren&apos;t magic. They
                      are the result of actually listening to local business
                      owners. While outside agencies try to sell you expensive
                      pre-packaged tools, we build systems designed specifically
                      for the way work happens in Bihar.
                    </p>
                    <p>
                      <strong>Understanding Your Shop Floor:</strong> We
                      don&apos;t guess what you need. Before we quote a price, we
                      visit your godown, talk to your billing counter staff, and
                      look at the ledgers and registers you currently use. We
                      find out exactly where the mistakes happen—whether it&apos;s
                      skipped GST entries or misplaced inventory—and we design a
                      digital solution that solves that specific headache.
                    </p>
                    <div className="mt-8 break-inside-avoid">
                      <h3 className="mb-4 text-2xl font-bold text-[#f59e0b]">
                        Our Promise to Small Businesses
                      </h3>
                      <ul className="list-disc space-y-3 pl-5">
                        <li>
                          <strong>No Disruptions:</strong> We don&apos;t force you
                          to stop your business while we set things up. We train
                          your staff side-by-side while they work, ensuring the
                          transition from paper to computer is smooth and
                          stress-free.
                        </li>
                        <li>
                          <strong>Simple Interfaces:</strong> Software is
                          useless if your staff is too confused to use it. Our
                          digital tools are built to be as easy to understand as
                          a standard WhatsApp message.
                        </li>
                        <li>
                          <strong>Real Results:</strong> We don&apos;t talk about
                          &ldquo;synergy&rdquo; or &ldquo;digital
                          transformation.&rdquo; We measure success by how much
                          time you save every week, how many billing errors
                          disappear, and how many new local walk-ins you get from
                          our maps optimization.
                        </li>
                      </ul>
                    </div>
                    <p className="mt-8 break-inside-avoid">
                      When you partner with EDUNEX, you get practical advice and
                      honest work. Our goal is to give every small and medium
                      business in Bihar access to the same powerful tools that big
                      corporations use, but at a price that makes sense for your
                      local market.
                    </p>
                  </div>
                </div>
              </AuthorityCard>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-2xl font-bold text-white">
                Why This Matters to{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  Your Business
                </span>
              </h3>
              <p className="text-lg leading-relaxed text-gray-400">
                If your shop or godown faces similar challenges — messy paper
                trails, billing mistakes, or trouble getting local customers to
                find you — we can fix it quickly and affordably.
              </p>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <section>
              <div className="overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] p-10 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.85)] lg:p-16">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div>
                    <h3 className="mb-6 text-3xl font-bold text-white">
                      Trusted by Fast-Growing{" "}
                      <span className="text-[#f59e0b]">Local Businesses</span>
                    </h3>
                    <p className="mb-8 leading-relaxed text-gray-400">
                      We don&apos;t just build software; we build tools that make
                      your daily work easier. Our goal is to bring reliable,
                      face-to-face IT support to every business in Bihar.
                    </p>
                    <div className="space-y-4">
                      {[
                        "Proven expertise in 15+ industry sectors",
                        "Enterprise-grade security and data privacy",
                        "Structured implementation & training support",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-[#f59e0b]" />
                          <span className="font-medium text-white/90">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Delivery style", value: "Hands-on" },
                      { label: "Code ownership", value: "Yours" },
                      { label: "Support posture", value: "Direct" },
                      { label: "Compliance mindset", value: "GST-ready" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/[0.08] bg-black/40 p-6 text-center"
                      >
                        <p className="mb-1 text-3xl font-bold text-[#f59e0b]">
                          {stat.value}
                        </p>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="relative border-t border-[#262626] py-16 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <h3 className="mb-6 text-3xl font-bold text-white lg:text-5xl">
                Ready to Write Your Own{" "}
                <span className="text-[#f59e0b]">Success Story</span>?
              </h3>
              <p className="mb-10 text-lg text-gray-400 md:text-xl">
                Discuss your specific business challenges with our solution
                architects. We provide structured guidance to help you modernize
                and scale.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="h-14 w-full rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-10 text-lg font-bold text-black shadow-[0_10px_30px_rgba(245,158,11,0.3)] transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] sm:h-16">
                    Get a Free System Consultation
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="h-14 w-full rounded-xl border-white/20 bg-transparent px-10 text-lg font-bold text-white hover:bg-white/5 sm:h-16"
                  >
                    Discuss Your Requirements
                  </Button>
                </Link>
              </div>

              <p className="mt-8 text-sm font-medium text-gray-500">
                No obligations. Just an honest conversation about your tech
                roadmap.
              </p>
            </motion.div>
          </div>
        </SectionAmbient>
      </div>
    </div>
  );
}
