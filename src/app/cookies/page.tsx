"use client";

import { motion } from "motion/react";
import { Cookie } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";

export default function CookiesPage() {
  return (
    <div className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "Cookie Policy", item: "/cookies" },
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
                <Cookie className="h-4 w-4 text-[#fbbf24]" aria-hidden />
                <span className="text-sm font-semibold text-[#fbbf24]">
                  Cookie Policy
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight">
                How We Use{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  Cookies
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
                    At EDUNEX, we use cookies to make our website work better for
                    our users in Patna and beyond. This policy explains what
                    cookies are and how we use them.
                  </p>

                  <h2 className="mt-12 text-2xl font-bold text-white">
                    1. What are Cookies?
                  </h2>
                  <p>
                    Cookies are small text files that are stored on your device
                    when you visit a website. They help the site remember your
                    preferences and provide a smoother experience.
                  </p>

                  <h2 className="mt-12 text-2xl font-bold text-white">
                    2. Types of Cookies We Use
                  </h2>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Essential Cookies:</strong> Required for the
                      website to function correctly (e.g., site navigation).
                    </li>
                    <li>
                      <strong>Performance Cookies:</strong> Help us understand
                      how visitors use our site so we can improve it.
                    </li>
                    <li>
                      <strong>Preference Cookies:</strong> Remember choices you
                      make, like your location.
                    </li>
                  </ul>

                  <h2 className="mt-12 text-2xl font-bold text-white">
                    3. Managing Your Cookies
                  </h2>
                  <p>
                    You can choose to disable cookies through your browser
                    settings. However, please note that some parts of our
                    website may not function properly if cookies are disabled.
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
