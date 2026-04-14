"use client";

import { motion } from "motion/react";
import { FileText } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";

export default function TermsPage() {
  return (
    <div className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "Terms of Service", item: "/terms" },
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
                <FileText className="h-4 w-4 text-[#fbbf24]" aria-hidden />
                <span className="text-sm font-semibold text-[#fbbf24]">
                  Terms of Service
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight">
                Service{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  Terms &amp; Conditions
                </span>
              </h1>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative mx-auto max-w-[800px]"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] p-8 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.85)] md:p-12">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent" />
                <div className="prose prose-invert prose-amber max-w-none space-y-6 text-gray-400">
                  <p>
                    By accessing or using EDUNEX&apos;s services, you agree to be
                    bound by these Terms of Service. Please read them carefully.
                  </p>

                  <h2 className="mt-12 text-2xl font-bold text-white">
                    1. Use of Services
                  </h2>
                  <p>
                    EDUNEX provides IT consulting, software development, and
                    business compliance services. You agree to use these services
                    only for lawful purposes and in accordance with these terms.
                  </p>

                  <h2 className="mt-12 text-2xl font-bold text-white">
                    2. Client Obligations
                  </h2>
                  <p>
                    To provide our services effectively, we require accurate and
                    timely information from you (e.g., business details for
                    registration). EDUNEX is not responsible for delays caused by
                    missing or inaccurate client data.
                  </p>

                  <h2 className="mt-12 text-2xl font-bold text-white">
                    3. Payment Terms
                  </h2>
                  <p>
                    Payment for services is required as per the agreed project
                    quote. For ongoing compliance services (e.g., GST filing),
                    fees are billed monthly as outlined in your service agreement.
                  </p>

                  <h2 className="mt-12 text-2xl font-bold text-white">
                    4. Limitation of Liability
                  </h2>
                  <p>
                    While we strive for technical and legal excellence, EDUNEX is
                    not liable for errors in government processing or third-party
                    software failures. We provide honest advice but cannot
                    guarantee specific outcomes from government departments.
                  </p>

                  <p className="mt-20 border-t border-[#262626] pt-8 text-sm">
                    Last updated: February 24, 2026
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>
      </div>
    </div>
  );
}
