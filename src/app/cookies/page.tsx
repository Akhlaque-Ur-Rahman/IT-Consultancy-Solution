"use client";

import { motion } from "motion/react";
import { Info } from "lucide-react";

export default function CookiesPage() {
  return (
    <div className="pt-4 lg:pt-8 pb-20 min-h-screen bg-black">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6">
            <Info className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-sm font-medium text-[#f59e0b]">
              Cookie Policy
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-8">
            How We Use Cookies
          </h1>

          <div className="prose prose-invert prose-amber max-w-none text-gray-400 space-y-6">
            <p>
              At EDUNEX, we use cookies to make our website work better for our
              users in Patna and beyond. This policy explains what cookies are
              and how we use them.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              1. What are Cookies?
            </h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They help the site remember your preferences
              and provide a smoother experience.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">
              2. Types of Cookies We Use
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                function correctly (e.g., site navigation).
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how
                visitors use our site so we can improve it.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember choices you make,
                like your location.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12">
              3. Managing Your Cookies
            </h2>
            <p>
              You can choose to disable cookies through your browser settings.
              However, please note that some parts of our website may not
              function properly if cookies are disabled.
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
