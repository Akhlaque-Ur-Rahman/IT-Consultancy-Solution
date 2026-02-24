"use client";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

interface ServiceHeroProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  benefits: string[];
  serviceTitle?: string;
}

export const ServiceHero = ({
  badge,
  title,
  description,
  benefits,
  serviceTitle = "Consulting",
}: ServiceHeroProps) => {
  return (
    <section className="relative pt-12 pb-32 overflow-hidden bg-black">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f59e0b]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse shadow-[0_0_10px_#f59e0b]" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                {badge}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-[1.1] tracking-tight">
              {title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              {description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 text-[#f59e0b]" />
                  <span className="text-sm font-medium text-gray-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href={`/contact?service=${serviceTitle.toLowerCase().replace(/ /g, "-")}`}
              >
                <Button
                  variant="default"
                  className=" px-6 py-4 text-xl font-bold rounded-2xl h-auto group"
                >
                  Enquiry Now
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link
                href={`/contact?service=${serviceTitle.toLowerCase().replace(/ /g, "-")}`}
              >
                <Button
                  variant="secondary"
                  className="px-6 py-4 text-xl font-bold rounded-2xl h-auto"
                >
                  Talk to Expert
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
