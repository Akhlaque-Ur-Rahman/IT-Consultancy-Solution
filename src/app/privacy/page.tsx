"use client";

import { motion } from "motion/react";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="pt-8 pb-20 min-h-screen bg-black">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6">
            <Shield className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-sm font-medium text-[#f59e0b]">
              Privacy Policy
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-8">
            Our Commitment to Your Privacy
          </h1>

          <div className="prose prose-invert prose-amber max-w-none text-gray-400 space-y-6">
            <p>
              At EDUNEX, we value your trust. This Privacy Policy explains how
              we collect, use, and protect your information when you use our
              website and services in Patna and across India.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              1. Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us through our
              contact forms, such as your name, email address, phone number, and
              details about your business requirements.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your enquiries and provide tech support.</li>
              <li>
                Process your business registration and compliance filings.
              </li>
              <li>
                Send you relevant updates about our services or local business
                guides.
              </li>
              <li>Improve our website and user experience.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12">
              3. Data Security
            </h2>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information. Your data is stored on secure
              servers and access is limited to authorized personnel handling
              your projects.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              4. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              data. If you have any questions about your information, please
              contact our Patna office at support@edunesservices.in.
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
