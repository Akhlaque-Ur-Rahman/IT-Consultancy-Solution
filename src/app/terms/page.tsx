"use client";

import { motion } from "motion/react";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="pt-8 pb-20 min-h-screen bg-black">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6">
            <FileText className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-sm font-medium text-[#f59e0b]">
              Terms of Service
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-8">
            Service Terms & Conditions
          </h1>

          <div className="prose prose-invert prose-amber max-w-none text-gray-400 space-y-6">
            <p>
              By accessing or using EDUNEX's services, you agree to be bound by
              these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              1. Use of Services
            </h2>
            <p>
              EDUNEX provides IT consulting, software development, and business
              compliance services. You agree to use these services only for
              lawful purposes and in accordance with these terms.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              2. Client Obligations
            </h2>
            <p>
              To provide our services effectively, we require accurate and
              timely information from you (e.g., business details for
              registration). EDUNEX is not responsible for delays caused by
              missing or inaccurate client data.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              3. Payment Terms
            </h2>
            <p>
              Payment for services is required as per the agreed project quote.
              For ongoing compliance services (e.g., GST filing), fees are
              billed monthly as outlined in your service agreement.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              4. Limitation of Liability
            </h2>
            <p>
              While we strive for technical and legal excellence, EDUNEX is not
              liable for errors in government processing or third-party software
              failures. We provide honest advice but cannot guarantee specific
              outcomes from government departments.
            </p>

            <p className="mt-20 pt-8 border-t border-[#262626] text-sm">
              Last updated: February 24, 2026
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
