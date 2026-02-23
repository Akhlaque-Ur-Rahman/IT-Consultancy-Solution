"use client";
import React from "react";
import { motion } from "motion/react";
import { Shield, Cpu, Zap, Layers, Globe, Lock } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    desc: "Rigorous security protocols ensuring data integrity and regulatory compliance at every layer.",
    color: "from-blue-500/20 to-transparent",
  },
  {
    icon: Cpu,
    title: "Scalable Architecture",
    desc: "Cloud-native systems designed to handle exponential growth and millions of concurrent requests.",
    color: "from-[#f59e0b]/20 to-transparent",
  },
  {
    icon: Zap,
    title: "High-Performance Stack",
    desc: "Optimized for speed and efficiency with sub-100ms response times for critical operations.",
    color: "from-purple-500/20 to-transparent",
  },
];

interface TechnicalExcellenceProps {
  title?: string;
  description?: string;
  items?: {
    icon: any;
    title: string;
    desc: string;
    color: string;
  }[];
}

export const TechnicalExcellence = ({
  title = "Engineered for Stability and Extreme Scale",
  description = "We don't just build software; we architect the foundation of your digital enterprise.",
  items = differentiators,
}: TechnicalExcellenceProps) => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f59e0b]/5 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.3em] mb-4">
            Technical Excellence
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h3>
          <p className="text-xl text-gray-400 font-light">{description}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#f59e0b]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#f59e0b] transition-colors">
                  <item.icon className="w-7 h-7 text-[#f59e0b] group-hover:text-black transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#f59e0b]/10 blur-[40px] -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
