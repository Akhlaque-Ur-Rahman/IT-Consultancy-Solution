"use client";

import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";

export default function SocialProofBlock() {
  const stats = [
    {
      icon: CheckCircle2,
      value: "112+",
      label: "Enterprise Implementations",
      description: "Successful core system deployments across India.",
    },
    {
      icon: Users,
      value: "98.4%",
      label: "Client Retention Rate",
      description:
        "Building long-term partnerships through engineering excellence.",
    },
    {
      icon: TrendingUp,
      value: "40%",
      label: "Avg. Efficiency Gain",
      description: "Reduction in operational overhead within 6 months.",
    },
    {
      icon: Award,
      value: "SOC2",
      label: "Compliant Frameworks",
      description: "Security-first architecture in every deployment.",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#f59e0b]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:border-[#f59e0b]/50 group-hover:bg-[#f59e0b]/10 transition-all duration-500">
                <stat.icon className="w-6 h-6 text-[#f59e0b]" />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-[#f59e0b] uppercase tracking-widest mb-4">
                {stat.label}
              </div>
              <p className="text-gray-500 text-[10px] leading-relaxed max-w-[160px] mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-white/5 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-8">
            Strategic Partners & Clients
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {/* Note: In a real app, these would be client logos */}
            <div className="text-xl font-bold text-white tracking-tighter">
              AGRI-TEK
            </div>
            <div className="text-xl font-bold text-white tracking-tighter">
              PHARMA-GEN
            </div>
            <div className="text-xl font-bold text-white tracking-tighter">
              VISHAL LOGISTICS
            </div>
            <div className="text-xl font-bold text-white tracking-tighter">
              CREST-FINANCE
            </div>
            <div className="text-xl font-bold text-white tracking-tighter">
              NEXUS RETAIL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
