"use client";
import React from "react";
import { motion } from "motion/react";

interface Step {
  title: string;
  desc: string;
}

export const ProcessFlow = ({ steps }: { steps: Step[] }) => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.3em] mb-4">
            Our Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Structured Path to Excellence
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-[23px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className={`relative flex items-center gap-10 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Content Side */}
                <div className="flex-1 md:w-1/2 md:px-12">
                  <div
                    className={`p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#f59e0b]/30 transition-all ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <h4 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Number Orb */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-black border border-[#f59e0b] flex items-center justify-center text-[#f59e0b] font-black text-lg shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  {i + 1}
                </div>

                {/* Empty Side (Desktop only) */}
                <div className="hidden md:block flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
