"use client";

import { motion } from "motion/react";
import { Shield } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";

export default function PrivacyPage() {
  return (
    <div className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "Privacy Policy", item: "/privacy" },
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
                <Shield className="h-4 w-4 text-[#fbbf24]" aria-hidden />
                <span className="text-sm font-semibold text-[#fbbf24]">
                  Privacy Policy
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight">
                Our Commitment to Your{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  Privacy
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
                    At EDUNEX, we value your trust. This Privacy Policy explains
                    how we collect, use, and protect your information when you
                    use our website and services in Patna and across India.
                  </p>

                  <h2 className="mt-12 text-2xl font-bold text-white">
                    1. Information We Collect
                  </h2>
                  <p>
                    We collect information that you provide directly to us
                    through our contact forms, such as your name, email address,
                    phone number, and details about your business requirements.
                  </p>

                  <h2 className="mt-12 text-2xl font-bold text-white">
                    2. How We Use Your Information
                  </h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Respond to your enquiries and provide tech support.</li>
                    <li>
                      Process your business registration and compliance filings.
                    </li>
                    <li>
                      Send you relevant updates about our services or local
                      business guides.
                    </li>
                    <li>Improve our website and user experience.</li>
                  </ul>

                  <h2 className="mt-12 text-2xl font-bold text-white">
                    3. Data Security
                  </h2>
                  <p>
                    We implement a variety of security measures to maintain the
                    safety of your personal information. Your data is stored on
                    secure servers and access is limited to authorized personnel
                    handling your projects.
                  </p>

                  <h2 className="mt-12 text-2xl font-bold text-white">
                    4. Your Rights
                  </h2>
                  <p>
                    You have the right to access, correct, or delete your
                    personal data. If you have any questions about your
                    information, please contact our Patna office at
                    support@edunesservices.in.
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
