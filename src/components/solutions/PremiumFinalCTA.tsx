"use client";

import { motion } from "motion/react";
import { ArrowRight, Calendar, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PremiumFinalCTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorative Flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-[#f59e0b]/10 to-transparent blur-[120px] -z-10" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
              Ready to Solidify Your <br />
              Digital <span className="text-[#f59e0b]">Foundation?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t settle for generic software. Partner with senior
              engineers to build a core system that drives measurable business
              outcomes. Let&apos;s discuss your implementation roadmap today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-black h-14 px-10 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all hover:scale-105 w-full"
                >
                  Get a Free Consultation
                  <Calendar className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/10 text-white hover:bg-white/5 h-14 px-10 rounded-2xl bg-transparent w-full"
                >
                  Request Implementation Plan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  Secure Infrastructure
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  Direct OEM Support
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  Zero Hidden Fees
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
