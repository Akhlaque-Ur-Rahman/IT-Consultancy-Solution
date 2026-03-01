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
import { useState } from "react";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const industries = ["All", "Retail", "Healthcare", "Logistics", "Services"];

  const filteredCaseStudies = caseStudies.filter(
    (cs) => selectedIndustry === "All" || cs.industry === selectedIndustry,
  );

  return (
    <div className="pt-4 lg:pt-8 pb-20 min-h-screen bg-black">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Case Studies", item: "/case-studies" },
        ]}
      />
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Outcome-Driven Hero */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6">
            <TrendingUp className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-sm font-medium text-[#f59e0b]">
              Proven Results & Real-World Impact
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            How We Helped <span className="text-[#f59e0b]">90+ Businesses</span>{" "}
            Grow with Reliable Tech
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Real implementations. Complex problems solved. See how our
            structured approach delivers stability and measurable success for
            regional and enterprise-scale organizations.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 py-6 border-y border-white/5">
            {[
              { icon: CheckCircle2, label: "112+ Projects Delivered" },
              { icon: ShieldCheck, label: "99.9% Infrastructure Uptime" },
              { icon: Briefcase, label: "15+ Industries Served" },
            ].map(
              (stat, i) =>
                stat && (
                  <div key={i} className="flex items-center gap-2.5">
                    <stat.icon className="w-5 h-5 text-[#f59e0b]" />
                    <span className="text-sm font-semibold text-white/80 uppercase tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                ),
            )}
          </div>
        </motion.div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                selectedIndustry === industry
                  ? "bg-[#f59e0b] text-black border-[#f59e0b] shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  : "bg-transparent text-gray-400 border-white/10 hover:border-[#f59e0b]/40 hover:text-white"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredCaseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              title={caseStudy.title}
              client={caseStudy.client}
              industry={caseStudy.industry}
              image={caseStudy.image}
              impact={caseStudy.impact}
              companyType={(caseStudy as any).companyType}
              problemSolved={(caseStudy as any).problemSolved}
              slug={(caseStudy as any).slug}
            />
          ))}
        </div>

        {/* Persuasive Featured Case Study Narrative */}
        <motion.div
          className="bg-[#121212] rounded-3xl shadow-xl overflow-hidden border border-[#262626] mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Image & Branding */}
            <Link
              href={`/case-studies/${caseStudies[0].slug}`}
              className="relative h-96 lg:h-auto bg-black group/featured block"
            >
              <ImageWithFallback
                src={`https://source.unsplash.com/800x800/?${encodeURIComponent(caseStudies[0].image)}`}
                alt={caseStudies[0].title}
                className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover/featured:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <span className="inline-flex px-3 py-1 rounded bg-[#f59e0b] text-[10px] font-bold text-black uppercase tracking-widest mb-4">
                  Featured implementation
                </span>
                <h3 className="text-4xl font-bold text-white mb-2 group-hover/featured:text-[#f59e0b] transition-colors">
                  {caseStudies[0].client}
                </h3>
                <p className="text-[#f59e0b] font-medium">
                  {caseStudies[0].industry} • {caseStudies[0].deploymentScale}
                </p>
              </div>
            </Link>

            {/* Narrative Content */}
            <div className="p-8 lg:p-14">
              <h2 className="text-3xl font-bold text-white mb-10 leading-tight">
                {caseStudies[0].title}
              </h2>

              <div className="space-y-10">
                {/* A) Business Context */}
                <section>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-[#f59e0b] uppercase tracking-widest mb-3">
                    <Users className="w-4 h-4" />
                    Business Context
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {(caseStudies[0] as any).businessContext}
                  </p>
                </section>

                {/* B) Core Problem */}
                <section>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-[#f59e0b] uppercase tracking-widest mb-3">
                    <TrendingUp className="w-4 h-4" />
                    The Challenge
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {(caseStudies[0] as any).coreProblem}
                  </p>
                </section>

                {/* C) Solution Approach */}
                <section>
                  <h4 className="flex items-center gap-2 text-sm font-bold text-[#f59e0b] uppercase tracking-widest mb-3">
                    <ShieldCheck className="w-4 h-4" />
                    Solution Approach
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {(caseStudies[0] as any).solutionApproach}
                  </p>
                </section>

                {/* D) Implementation Confidence */}
                <section className="p-6 rounded-xl bg-[#0a0a0a] border border-[#f59e0b]/10">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-[#f59e0b] uppercase tracking-widest mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    Implementation Confidence
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    {(caseStudies[0] as any).implementationConfidence}
                  </p>
                </section>

                {/* E) Impact Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(caseStudies[0].impact).map(([key, value]) => (
                    <div
                      key={key}
                      className="p-4 rounded-lg bg-[#0a0a0a] border border-[#262626]"
                    >
                      <p className="text-2xl font-extrabold text-[#f59e0b] mb-1">
                        {value}
                      </p>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="pt-8 border-t border-white/5">
                  <p className="text-white text-lg font-medium italic mb-4">
                    "{caseStudies[0].testimonial}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b] font-bold">
                      {caseStudies[0].testimonialAuthor[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">
                        {caseStudies[0].testimonialAuthor}
                      </p>
                      <p className="text-xs text-gray-500">
                        {caseStudies[0].testimonialRole}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Download CTA */}
                <div className="pt-4">
                  <Button className="w-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black font-bold h-14 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                    <Download className="mr-2 w-5 h-5" />
                    Download Success Implementation Blueprint (PDF)
                  </Button>
                  <p className="text-center text-[10px] text-gray-500 mt-3 font-medium">
                    Includes: Architecture overview, transition strategy, and
                    ROI analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Implementation Methodology & ROI Framework (SEO Expansion) */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#121212] border border-[#262626] rounded-2xl p-8 lg:p-12 prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-[#262626] pb-4">
              Our Repeatable Implementation Methodology
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed md:columns-2 gap-12">
              <p>
                The successful case studies displayed above are not anomalies;
                they are the direct output of a highly disciplined, repeatable
                engineering framework. We do not construct software based on
                assumptions. Instead, we treat every digital transformation as a
                high-stakes architectural endeavor, prioritizing data integrity,
                security, and measurable Return on Investment (ROI).
              </p>
              <p>
                <strong>The Phase Zero Audit:</strong> Every engagement begins
                with comprehensive systems topography mapping. Before writing
                any code, our architects conduct a deep-dive audit into your
                existing legacy databases, third-party API dependencies, and
                localized compliance requirements (such as GST or corporate tax
                parameters). This ensures that our proposed solutions directly
                target your most expensive operational bottlenecks.
              </p>
              <div className="break-inside-avoid mt-8">
                <h3 className="text-2xl font-bold text-[#f59e0b] mb-4">
                  Governing Principles of Deployment
                </h3>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <strong>Zero-Disruption Cutover:</strong> We engineer
                    staging environments that identically mirror production.
                    Deployments are scheduled during historically low-traffic
                    windows to guarantee zero operational downtime for your
                    staff and customers.
                  </li>
                  <li>
                    <strong>Agile Iteration:</strong> We abandon waterfall
                    development. Success requires adaptability. We deliver
                    functional platform cores within 4 weeks, allowing our
                    clients to stress-test logic in the real world while we
                    iteratively build peripheral modules.
                  </li>
                  <li>
                    <strong>Quantifiable Success Metrics:</strong> "Better
                    performance" is a useless metric. We define success
                    mathematically: 99.99% application uptime, 40% reduction in
                    database query latency, or a 3x increase in lead conversion
                    velocity.
                  </li>
                </ul>
              </div>
              <p className="mt-8 break-inside-avoid">
                By maintaining these strict engineering standards, EDUNEX
                Services consistently delivers enterprise-grade infrastructure
                that survives unpredictable market conditions and unyielding
                scaling demands. These case studies represent our commitment to
                replacing theoretical advice with hard-coded operational
                dominance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why This Matters Section */}
        <motion.div
          className="text-center mb-24 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Why This Matters to{" "}
            <span className="text-[#f59e0b]">Your Business</span>
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            If your organization faces similar challenges — slow legacy systems,
            manual operational overhead, or scaling bottlenecks — our tailored
            approach can deliver comparable stability and growth results.
          </p>
        </motion.div>

        {/* Social Proof Section */}
        <section className="mb-24">
          <div className="bg-[#121212] border border-[#262626] rounded-3xl p-10 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Trusted by Forward-Thinking{" "}
                  <span className="text-[#f59e0b]">Regional Enterprises</span>
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  We don't just build software; we build the digital foundation
                  for your long-term success. Our commitment to reliability is
                  backed by measurable delivery benchmarks.
                </p>
                <div className="space-y-4">
                  {[
                    "Proven expertise in 15+ industry sectors",
                    "Enterprise-grade security and data privacy",
                    "Structured implementation & training support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#f59e0b]" />
                      <span className="text-white/90 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Successful Implementations", value: "112+" },
                  { label: "Client Retention Rate", value: "94%" },
                  { label: "Support Ticket Resolution", value: "< 4h" },
                  { label: "Deployment Success", value: "100%" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-black/40 border border-white/5 text-center"
                  >
                    <p className="text-3xl font-bold text-[#f59e0b] mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* High-Intent Final CTA Section */}
        <motion.div
          className="relative rounded-3xl p-12 lg:p-20 overflow-hidden text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#121212] to-black z-0"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent_70%)] z-0"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Write Your Own{" "}
              <span className="text-[#f59e0b]">Success Story</span>?
            </h3>
            <p className="text-xl text-gray-400 mb-12">
              Discuss your specific business challenges with our solution
              architects. We provide structured guidance to help you modernize
              and scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:px-10 h-16 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-lg rounded-xl shadow-[0_10px_30px_rgba(245,158,11,0.3)] transition-all">
                  Get a Free System Consultation
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:px-10 h-16 border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/5 bg-transparent"
                >
                  Discuss Your Requirements
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-500 font-medium">
              No obligations. Just an honest conversation about your tech
              roadmap.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
