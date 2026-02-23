"use client";
import React from "react";
import { motion } from "motion/react";
import { Layers, ShieldCheck, Zap } from "lucide-react";

interface EngineeringProps {
  data: {
    stack: string[];
    performance: string;
    security: string;
  };
}

export const EngineeringDetails = ({ data }: EngineeringProps) => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#050505]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Technical Excellence at Scale
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our engineering philosophy centers on clean code, elastic
              architecture, and deep automation. We don't just build software;
              we build systems that endure.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-5 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a]">
                <Zap className="w-8 h-8 text-yellow-500 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1">
                    Performance-First
                  </h4>
                  <p className="text-sm text-gray-500">
                    {data.performance || "99.9% Uptime SLA"}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a]">
                <ShieldCheck className="w-8 h-8 text-green-500 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1">
                    Military-Grade Security
                  </h4>
                  <p className="text-sm text-gray-500">
                    {data.security || "ISO 27001 Compliant"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-10 rounded-3xl bg-[#0a0a0a] border border-[#1a1a1a] relative overflow-hidden group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <Layers className="w-5 h-5 text-blue-500" />
              Core Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.stack?.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-black border border-[#262626] text-gray-400 text-sm font-medium group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
