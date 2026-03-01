"use client";

import { motion } from "motion/react";
import {
  Check,
  ArrowRight,
  FileText,
  Shield,
  ShieldCheck,
  Clock,
  IndianRupee,
  AlertCircle,
  Plus,
  Minus,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { complianceServices, complianceFAQs } from "@/data/mockData";
import { useState } from "react";

export default function CompliancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-4 lg:pt-8 pb-20 min-h-screen bg-black">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Compliance", item: "/compliance" },
        ]}
      />
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Page Header - Pain-Solution Hero */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-4">
            <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-sm font-medium text-[#f59e0b]">
              Zero-Hassle Business Compliance
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Focus on Your Growth, <br className="hidden md:block" />
            <span className="text-[#f59e0b]">We Handle the Paperwork.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            From GST registration and corporate governance to annual tax
            filings, we provide expert regulatory compliance and comprehensive
            risk management support for SMEs and enterprises across Bihar.
            Fastest processing with minimum documents.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
              <span>100% Legal & Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
              <span>CA-Vetted Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
              <span>Local Patna Presence</span>
            </div>
          </div>
        </motion.div>

        {/* Flow Chart UI */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-[#121212] rounded-2xl border border-[#262626] p-8">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">
              Your Path to a Legally Registered Business
            </h3>
            <p className="text-gray-500 text-center mb-8 text-sm">
              Simple, 100% Online Process • No Government Office Visits Required
            </p>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: 1, label: "Consultation", icon: "📋" },
                { step: 2, label: "Documentation", icon: "📄" },
                { step: 3, label: "Filing", icon: "🔄" },
                { step: 4, label: "Approval", icon: "✓" },
                { step: 5, label: "Support", icon: "🤝" },
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-2xl mb-3 text-white">
                      {item.icon}
                    </div>
                    <p className="text-sm font-semibold text-white">
                      {item.label}
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                      Step {item.step}
                    </p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#f59e0b]/50 to-transparent -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {complianceServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden bg-[#121212] rounded-2xl border border-[#262626] p-8 hover:border-[#f59e0b]/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="inline-flex w-fit px-2 py-0.5 rounded bg-[#f59e0b]/10 text-[10px] font-bold text-[#f59e0b] uppercase tracking-wider border border-[#f59e0b]/20">
                      {(service as any).whoItIsFor}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#f59e0b] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="ml-4 p-3 rounded-xl bg-black border border-white/5">
                  {service.icon === "FileText" && (
                    <FileText className="w-6 h-6 text-[#f59e0b]" />
                  )}
                  {service.icon === "Shield" && (
                    <Shield className="w-6 h-6 text-[#f59e0b]" />
                  )}
                  {service.icon === "Check" && (
                    <Check className="w-6 h-6 text-[#f59e0b]" />
                  )}
                  {service.icon === "IndianRupee" && (
                    <IndianRupee className="w-6 h-6 text-[#f59e0b]" />
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8 flex-grow">
                <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-widest text-[10px]">
                  Outcomes & Benefits:
                </p>
                <div className="space-y-3">
                  {(service as any).keyBenefits.map(
                    (benefit: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#f59e0b]" />
                        </div>
                        <span className="text-sm text-gray-300 leading-tight">
                          {benefit}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-[#0a0a0a] rounded-xl border border-[#262626]">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#f59e0b]" />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">
                      Timeline
                    </p>
                    <p className="text-xs font-semibold text-white">
                      {service.timeline}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-4 h-4 text-[#f59e0b]" />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">
                      Investment
                    </p>
                    <p className="text-xs font-semibold text-white">
                      {(service as any).priceType === "Starting" && "from "}{" "}
                      {service.price}
                    </p>
                  </div>
                </div>
              </div>

              {/* Confidence & CTA */}
              <div className="space-y-4 mt-auto">
                <p className="text-[10px] text-gray-500 italic text-center">
                  " {(service as any).confidenceStatement} "
                </p>
                <Link href="/contact" className="block">
                  <Button className="w-full h-12 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold rounded-xl shadow-[0_10px_20px_rgba(245,158,11,0.15)] group/btn">
                    {(service as any).actionLabel}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Urgency & Risk Reduction Block */}
        <motion.div
          className="mb-24 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#121212] to-black border border-red-500/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <AlertCircle className="w-40 h-40 text-red-500" />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Don't Let Compliance Delays <br />
                <span className="text-red-500">
                  Drain Your Business Profits
                </span>
              </h2>
              <div className="space-y-4">
                {[
                  "Avoid heavy penalties and late fees from government departments.",
                  "Stay fully compliant with GST and municipal regulations.",
                  "Prevent sudden business disruptions or legal notices.",
                  "Maintain a clean entity profile for bank loans and tenders.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-gray-400 text-sm">
                    <AlertCircle className="w-5 h-5 text-red-500/50 flex-shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5">
              <h4 className="text-white font-bold mb-4">
                Start Your Compliance Check
              </h4>
              <p className="text-gray-500 text-sm mb-6">
                Position your business for stability. Let our experts handle the
                risks while you handle the growth.
              </p>
              <Link href="/contact" className="block">
                <Button className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 font-bold h-12">
                  Request Filing Support
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section - Regional Credibility */}
        <motion.div
          className="bg-[#121212] border border-[#262626] rounded-3xl p-12 text-white mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Trusted by{" "}
              <span className="text-[#f59e0b]">Businesses Across Patna</span>
            </h3>
            <p className="text-gray-500">
              Local expertise coupled with professional legal handling.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "100% Accuracy",
                description:
                  "Precise filings to ensure you never get a legal notice due to errors.",
              },
              {
                icon: Clock,
                title: "End-to-End Handling",
                description:
                  "From initial setup to monthly returns, we take the full burden off your shoulders.",
              },
              {
                icon: IndianRupee,
                title: "Transparent Pricing",
                description:
                  "No hidden costs or 'consultation surprises'. What we quote is what you pay.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-[#262626] group-hover:border-[#f59e0b] group-hover:scale-110 flex items-center justify-center mx-auto mb-6 transition-all">
                  <item.icon className="w-8 h-8 text-[#f59e0b]" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-3xl mx-auto mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Common Questions
            </h2>
            <p className="text-gray-500">
              Clearing your doubts before you start your registration.
            </p>
          </div>
          <div className="space-y-4">
            {complianceFAQs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#262626] bg-[#121212] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <span className="font-bold text-white group-hover:text-[#f59e0b] transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                    {openFaq === index ? (
                      <Minus className="w-4 h-4 text-[#f59e0b]" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-6 pb-6 text-gray-400 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          className="relative rounded-[3rem] overflow-hidden p-12 lg:p-20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[#f59e0b]"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-6">
              Start Your Business <br /> Right Today.
            </h2>
            <p className="text-black/80 text-xl font-medium mb-10 leading-relaxed">
              Don't let complex government paperwork hold you back. Let our
              local experts handle the legal load while you focus on building
              your legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="h-16 px-10 bg-black text-white hover:bg-black/90 text-lg font-bold rounded-2xl w-full sm:w-auto">
                  Start Registration Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="h-16 px-10 border-black/20 text-black hover:bg-black/5 text-lg font-bold rounded-2xl w-full sm:w-auto"
                >
                  Talk to Compliance Expert
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-black/60 text-sm font-bold uppercase tracking-widest">
              Quick Response • No Obligation Consultation
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
