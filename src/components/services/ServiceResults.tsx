"use client";
import React from "react";
import { motion } from "motion/react";

interface ServiceResultsProps {
  title?: string;
  results?: {
    label: string;
    value: string;
    suffix: string;
    desc: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
  };
}

const defaultResults = [
  {
    label: "Performance Enhancement",
    value: "40%",
    suffix: "Reduction in Latency",
    desc: "Optimized infrastructure for a regional retail giant, leading to immediate conversion spikes.",
  },
  {
    label: "Cost Optimization",
    value: "25%",
    suffix: "Infrastructure Savings",
    desc: "Migrated legacy workflows to cloud-native systems for a leading healthcare provider.",
  },
  {
    label: "Delivery Acceleration",
    value: "3x",
    suffix: "Faster Go-to-Market",
    desc: "Accelerated development cycles using our proprietary CI/CD framework for FinTech startups.",
  },
];

export const ServiceResults = ({
  title = "Proven Results Across the Enterprise",
  results = defaultResults,
  testimonial,
}: ServiceResultsProps) => {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.3em] mb-4">
              Measurable Impact
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h3>
            <p className="text-xl text-gray-400 font-light mb-8">
              We focus on data-driven outcomes that translate directly to your
              bottom line. No fluff, just performance.
            </p>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <p className="text-gray-300 italic mb-4 leading-relaxed">
                "
                {testimonial?.quote ||
                  "The technical depth and delivery speed of the EDUNEX team was instrumental in our digital transformation. They delivered a system that scales with our vision."}
                "
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#f59e0b] rounded-full" />
                <span className="text-sm font-bold text-white">
                  {testimonial?.author || "CTO, Bihar MediCare"}
                </span>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {results.map((result, i) => (
              <motion.div
                key={result.label}
                className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#f59e0b]/20 hover:bg-[#121212] transition-all group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 group-hover:text-[#f59e0b] transition-colors">
                      {result.label}
                    </h4>
                    <p className="text-gray-400 text-sm max-w-xs">
                      {result.desc}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-black text-white mb-1 group-hover:scale-110 transition-transform origin-right">
                      {result.value}
                    </div>
                    <div className="text-xs font-bold text-[#f59e0b] uppercase tracking-tighter">
                      {result.suffix}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
