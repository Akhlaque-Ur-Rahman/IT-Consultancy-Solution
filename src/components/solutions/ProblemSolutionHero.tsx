"use client";

import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProblemSolutionHero() {
  const challenges = [
    "Fragmented business data and siloed operations",
    "High operational costs due to manual processes",
    "Inability to scale without significant overhead",
    "Lack of real-time insights for decision making",
  ];

  return (
    <section className="relative overflow-hidden pt-4 lg:pt-8 pb-24 lg:pb-40 bg-black">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(245,158,11,0.15),transparent_70%)]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#f59e0b]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f59e0b]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
              <span className="text-xs font-semibold text-[#f59e0b] uppercase tracking-wider">
                Enterprise-Grade Architecture
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Scale Your Enterprise with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#d97706]">
                High-Performance Infrastructure
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-400 mb-8 leading-relaxed">
              We solve tool fragmentation and high operational costs for
              founders and executive teams. Our integrated ecosystem is designed
              for decision-makers who demand scalability, security, and proven
              ROI.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-10 text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  12+ Years Experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  90+ Success Stories
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Enterprise Security
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold h-14 px-8 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300"
                >
                  Book Implementation Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/20 to-transparent blur-2xl -z-10" />
            <div className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <AlertCircle className="text-[#f59e0b] w-6 h-6" />
                The Cost of Status Quo
              </h3>

              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2.5 group-hover:bg-[#f59e0b] transition-colors" />
                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors uppercase text-sm font-medium tracking-wide">
                      {challenge}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[
                      "/avatars/129416.jpg",
                      "/avatars/21597.jpg",
                      "/avatars/2827.jpg",
                      "/avatars/129416.jpg", // Reuse for 4th slot
                    ].map((src, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-[#121212] bg-[#1a1a1a] overflow-hidden relative"
                      >
                        <img
                          src={src}
                          alt={`Client ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      500+ Enterprises
                    </p>
                    <p className="text-xs text-gray-500">
                      Transformed their operations with our stack
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
