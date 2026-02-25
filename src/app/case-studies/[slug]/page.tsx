"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "motion/react";
import { caseStudies } from "@/data/mockData";
import {
  ArrowLeft,
  Download,
  Users,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return notFound();
  }

  return (
    <div className="pt-4 lg:pt-8 pb-20 min-h-screen bg-black">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Case Studies", item: "/case-studies" },
          { name: caseStudy.title, item: `/case-studies/${slug}` },
        ]}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Navigation Back */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#f59e0b] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </Link>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden border border-[#262626] bg-[#121212] mb-16">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6 w-fit">
                <span className="text-[10px] font-bold text-[#f59e0b] uppercase tracking-widest">
                  Success Story
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                {caseStudy.challenge}
              </p>

              <div className="flex flex-wrap gap-6 items-center border-t border-white/5 pt-8">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                    Client
                  </p>
                  <p className="text-white font-semibold">{caseStudy.client}</p>
                </div>
                <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                    Industry
                  </p>
                  <p className="text-white font-semibold">
                    {caseStudy.industry}
                  </p>
                </div>
                <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                    Timeline
                  </p>
                  <p className="text-white font-semibold">
                    {caseStudy.timeline}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-auto overflow-hidden">
              <ImageWithFallback
                src={`https://source.unsplash.com/800x800/?${encodeURIComponent(caseStudy.image)}`}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#121212] via-transparent to-transparent hidden lg:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent lg:hidden"></div>
            </div>
          </div>
        </div>

        {/* Narrative Sections */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Context & Problem */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-[#f59e0b] rounded-full"></div>
                Business Context & Core Problem
              </h2>
              <div className="prose prose-invert max-w-none text-gray-400 space-y-4">
                <p>{(caseStudy as any).businessContext}</p>
                <p>{(caseStudy as any).coreProblem}</p>
              </div>
            </section>

            {/* Solution Approach */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-[#f59e0b] rounded-full"></div>
                Strategic Solution Approach
              </h2>
              <div className="prose prose-invert max-w-none text-gray-400 space-y-4">
                <p>{(caseStudy as any).solutionApproach}</p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {caseStudy.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-3 p-4 rounded-xl bg-[#121212] border border-[#262626]"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                      <span className="text-white font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Implementation & Confidence */}
            <section className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#121212] to-black border border-[#f59e0b]/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShieldCheck className="w-32 h-32 text-[#f59e0b]" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-[#f59e0b]">03.</span>
                  Implementation Confidence
                </h2>
                <p className="text-gray-300 leading-relaxed italic text-lg mb-8">
                  "{(caseStudy as any).implementationConfidence}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b] font-bold text-xl">
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

          {/* Sidebar Metrics & CTA */}
          <div className="space-y-8">
            {/* Impact Metrics Card */}
            <div className="p-8 rounded-3xl bg-[#121212] border border-[#262626] sticky top-24">
              <h3 className="text-xl font-bold text-white mb-8 border-b border-white/5 pb-4">
                Measurable Impact
              </h3>
              <div className="space-y-6">
                {Object.entries(caseStudy.impact).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                    <p className="text-3xl font-extrabold text-[#f59e0b]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Download Gated Link */}
              <div className="mt-12 pt-8 border-t border-white/5">
                <Button className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold h-14 rounded-xl shadow-[0_10px_30px_rgba(245,158,11,0.2)]">
                  <Download className="mr-2 w-5 h-5" />
                  Download Blueprint
                </Button>
                <p className="text-center text-[10px] text-gray-500 mt-4 font-medium uppercase tracking-tighter">
                  Includes Architecture & ROI Analysis
                </p>
              </div>
            </div>

            {/* Related Services */}
            <div className="p-8 rounded-3xl bg-black border border-white/5">
              <h4 className="text-white font-bold mb-4">
                Need similar results?
              </h4>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                See how our structured approach can be tailored to your specific
                operational scale.
              </p>
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
  );
}
