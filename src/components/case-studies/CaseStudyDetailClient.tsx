"use client";

import {
  ArrowLeft,
  Download,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";
import type { caseStudies } from "@/data/mockData";

interface CaseStudyDetailClientProps {
  caseStudy: (typeof caseStudies)[number];
  slug: string;
}

export function CaseStudyDetailClient({
  caseStudy,
  slug,
}: CaseStudyDetailClientProps) {
  return (
    <div className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "Case Studies", item: "/case-studies" },
            { name: caseStudy.title, item: `/case-studies/${slug}` },
          ]}
        />

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-8 md:py-10"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-[#f59e0b]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Case Studies
            </Link>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="relative overflow-hidden rounded-3xl border border-[#f59e0b]/20 bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] shadow-[0_28px_80px_-32px_rgba(0,0,0,0.9)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/45 to-transparent" />
              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center p-8 lg:p-16">
                  <div className="mb-6 inline-flex w-fit items-center gap-2 rounded border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-3 py-1 shadow-[0_0_24px_-12px_rgba(245,158,11,0.35)]">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbbf24]">
                      Success Story
                    </span>
                  </div>
                  <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                    {caseStudy.title}
                  </h1>
                  <p className="mb-8 text-lg text-gray-400 md:text-xl">
                    {caseStudy.challenge}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 border-t border-[#262626] pt-8">
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        Client
                      </p>
                      <p className="font-semibold text-white">
                        {caseStudy.client}
                      </p>
                    </div>
                    <div className="hidden h-10 w-px bg-[#262626] sm:block" />
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        Industry
                      </p>
                      <p className="font-semibold text-white">
                        {caseStudy.industry}
                      </p>
                    </div>
                    <div className="hidden h-10 w-px bg-[#262626] sm:block" />
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        Timeline
                      </p>
                      <p className="font-semibold text-white">
                        {caseStudy.timeline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative h-96 overflow-hidden lg:h-auto">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x800/?${encodeURIComponent(caseStudy.image)}`}
                    alt={caseStudy.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 hidden bg-gradient-to-l from-[#121212] via-transparent to-transparent lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent lg:hidden" />
                </div>
              </div>
            </div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="space-y-16 lg:col-span-2">
                <section>
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                    <div className="h-8 w-1 rounded-full bg-[#f59e0b]" />
                    Business Context &amp; Core Problem
                  </h2>
                  <div className="prose prose-invert max-w-none space-y-4 text-gray-400">
                    <p>{(caseStudy as any).businessContext}</p>
                    <p>{(caseStudy as any).coreProblem}</p>
                  </div>
                </section>

                <section>
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                    <div className="h-8 w-1 rounded-full bg-[#f59e0b]" />
                    Strategic Solution Approach
                  </h2>
                  <div className="prose prose-invert max-w-none space-y-4 text-gray-400">
                    <p>{(caseStudy as any).solutionApproach}</p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {caseStudy.techStack.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-3 rounded-xl border border-white/[0.09] bg-[#0a0a0a] p-4 transition-colors hover:border-[#f59e0b]/25"
                        >
                          <div className="h-2 w-2 rounded-full bg-[#f59e0b]" />
                          <span className="font-medium text-white">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="relative overflow-hidden rounded-3xl border border-[#f59e0b]/20 bg-gradient-to-br from-[#121212] to-black p-8 lg:p-12">
                  <div className="absolute right-0 top-0 p-8 opacity-10">
                    <ShieldCheck className="h-32 w-32 text-[#f59e0b]" />
                  </div>
                  <div className="relative z-10">
                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                      <span className="text-[#f59e0b]">03.</span>
                      Implementation Confidence
                    </h2>
                    <p className="mb-8 text-lg italic leading-relaxed text-gray-300">
                      &ldquo;{(caseStudy as any).implementationConfidence}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f59e0b]/20 text-xl font-bold text-[#f59e0b]">
                        {caseStudy.testimonialAuthor[0]}
                      </div>
                      <div>
                        <p className="font-bold text-white">
                          {caseStudy.testimonialAuthor}
                        </p>
                        <p className="text-sm text-gray-500">
                          {caseStudy.testimonialRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <div className="sticky top-24 rounded-3xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] p-8 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.85)]">
                  <h3 className="mb-8 border-b border-[#262626] pb-4 text-xl font-bold text-white">
                    Measurable Impact
                  </h3>
                  <div className="space-y-6">
                    {Object.entries(caseStudy.impact).map(([key, value]) => (
                      <div key={key}>
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </p>
                        <p className="text-3xl font-extrabold text-[#f59e0b]">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 border-t border-[#262626] pt-8">
                    <Button className="h-14 w-full rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] font-bold text-black shadow-[0_10px_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_24px_rgba(245,158,11,0.35)]">
                      <Download className="mr-2 h-5 w-5" />
                      Download Blueprint
                    </Button>
                    <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-tighter text-gray-500">
                      Includes Architecture &amp; ROI Analysis
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-[#262626] bg-[#0a0a0a] p-8">
                  <h4 className="mb-4 font-bold text-white">
                    Need similar results?
                  </h4>
                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    See how our structured approach can be tailored to your
                    specific operational scale.
                  </p>
                  <div className="space-y-3">
                    <Link href="/services">
                      <Button
                        variant="outline"
                        className="w-full border-[#f59e0b]/40 text-[#f59e0b] hover:bg-[#f59e0b]/10"
                      >
                        View Our Services
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="w-full border-white/10 text-white hover:bg-white/5"
                      >
                        Discuss Implementation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionAmbient>
      </div>
    </div>
  );
}
