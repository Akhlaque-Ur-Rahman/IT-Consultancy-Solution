"use client";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import HeroModernWrapper from "@/components/HeroModernWrapper";
import { motion } from "motion/react";

export function HeroModernAnimated() {
  // Entrance animation variants
  const fadeInUP = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-[calc(100svh-5rem)] flex items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px circle at 50% 40%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.45) 70%)",
        }}
      />

      <div className="relative w-full max-w-[1000px] mx-auto px-4 md:px-6 pb-16">
        <div className="text-center w-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUP}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6 mx-auto"
          >
            <div className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
            <span className="text-sm font-medium text-[#f59e0b]">
              Scaling Digital Success Since 2012
            </span>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={fadeInUP}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight max-w-4xl mx-auto"
          >
            Build Your <span className="text-[#f59e0b]">Dream Website</span>{" "}
            with 12 Years of Experience and 90+ Happy Clients
          </motion.h1>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUP}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Expert-built websites and apps designed to grow your reach. Simple
            process, guaranteed on-time delivery.
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUP}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-black font-semibold px-10 py-6 text-base transition-all duration-200 group">
                Request a Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                variant="outline"
                className="border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black px-10 py-6 text-base transition-all duration-200 group"
              >
                Check Our Portfolio
                <PlayCircle className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUP}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-8  max-w-4xl mx-auto"
          >
            <div className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl transition-all duration-300 hover:border-[#f59e0b]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/0 to-[#d97706]/0 group-hover:from-[#f59e0b]/15 group-hover:to-[#d97706]/15 transition-all duration-300" />
              <div className="relative">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                  90+
                </p>
                <p className="text-sm text-gray-400 whitespace-nowrap">
                  Success Stories
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl transition-all duration-300 hover:border-[#f59e0b]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/0 to-[#d97706]/0 group-hover:from-[#f59e0b]/15 group-hover:to-[#d97706]/15 transition-all duration-300" />
              <div className="relative">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                  15+
                </p>
                <p className="text-sm text-gray-400 whitespace-nowrap">
                  Core Specialists
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl transition-all duration-300 hover:border-[#f59e0b]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/0 to-[#d97706]/0 group-hover:from-[#f59e0b]/15 group-hover:to-[#d97706]/15 transition-all duration-300" />
              <div className="relative">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                  98%
                </p>
                <p className="text-sm text-gray-400 whitespace-nowrap">
                  ROI Satisfaction
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl transition-all duration-300 hover:border-[#f59e0b]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/0 to-[#d97706]/0 group-hover:from-[#f59e0b]/15 group-hover:to-[#d97706]/15 transition-all duration-300" />
              <div className="relative">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                  Active
                </p>
                <p className="text-sm text-gray-400 whitespace-nowrap">
                  Committed Support
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <HeroModernWrapper />
    </section>
  );
}
