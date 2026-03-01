"use client";

import { motion } from "motion/react";
import { Network, Zap, Shield, BarChart, CheckCircle2 } from "lucide-react";

export default function UnifiedEcosystem() {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-gradient-to-br from-[#121212] via-[#0a0a0a] to-black border border-white/10 rounded-[3rem] p-12 lg:p-20 relative shadow-[0_0_80px_rgba(0,0,0,0.8)]">
          {/* Animated Background Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[#f59e0b]/5 blur-[120px] rounded-full animate-pulse -z-10" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6">
                <Network className="w-3 h-3 text-[#f59e0b]" />
                <span className="text-[10px] font-bold text-[#f59e0b] uppercase tracking-widest">
                  Single Source of Truth
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                One Platform. <br />
                <span className="text-gray-500">Zero Fragmentation.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Eliminate the hidden costs of bridge connectors and data silos.
                Our ecosystem provides absolute consistency across department
                lines, giving you a single source of truth for every decision.
              </p>

              <ul className="space-y-6">
                {[
                  "Eliminate tool fragmentation and data duplication",
                  "Unified cross-department visibility (Full Spectrum)",
                  "Absolute data consistency for rapid decision-making",
                  "Single platform control for reduced operational risk",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                    className="flex items-start gap-4 text-gray-300"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#f59e0b]/10 flex items-center justify-center shrink-0 border border-[#f59e0b]/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b]" />
                    </div>
                    <span className="leading-relaxed text-[15px]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-square max-w-md mx-auto w-full">
              {/* Decorative Ecosystem Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Core Brand Logo */}
                <div className="relative z-20 flex items-center justify-center group">
                  <div className="absolute inset-0 bg-[#f59e0b] rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />
                  <div className="w-32 h-32 rounded-full bg-gradient-to-b from-[#1a1a1a] to-black border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.2)] overflow-hidden relative">
                    <img
                      src="/logo.jpg"
                      alt="EDUNEX Services Logo"
                      className="w-[80%] h-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Orbiting Symbols */}
                {[
                  {
                    icon: Zap,
                    label: "Billing",
                    angle: 0,
                    inset: "28%", // Inner ring
                    duration: 25,
                    reverse: false,
                  },
                  {
                    icon: Shield,
                    label: "Security",
                    angle: 90,
                    inset: "0%", // Outer ring touches edges of container (much larger gap)
                    duration: 35,
                    reverse: true,
                  },
                  {
                    icon: BarChart,
                    label: "ERP",
                    angle: 180,
                    inset: "28%", // Inner ring
                    duration: 25,
                    reverse: false,
                  },
                  {
                    icon: Network,
                    label: "CRM",
                    angle: 270,
                    inset: "0%", // Outer ring
                    duration: 35,
                    reverse: true,
                  },
                ].map((node, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ rotate: node.reverse ? -360 : 360 }}
                    transition={{
                      duration: node.duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute pointer-events-none"
                    style={{
                      top: node.inset,
                      left: node.inset,
                      right: node.inset,
                      bottom: node.inset,
                      rotate: node.angle,
                    }}
                  >
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `translateX(-50%) translateY(-50%) rotate(${-node.angle}deg)`,
                      }} /* Counter-rotate to keep icon vertical initially */
                    >
                      <motion.div
                        animate={{
                          rotate: node.reverse ? 360 : -360,
                        }} /* Counter-rotate child continuously to keep it upright */
                        transition={{
                          duration: node.duration,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center gap-1 shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-auto hover:border-[#f59e0b]/50 hover:bg-[#1a1a1a] transition-all duration-300"
                      >
                        <node.icon className="w-5 h-5 text-[#f59e0b]" />
                        <span className="text-[8px] font-bold text-gray-400 uppercase leading-none">
                          {node.label}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}

                {/* Decorative Rings */}
                <div className="absolute inset-[28%] border-2 border-dashed border-white/10 rounded-full pointer-events-none opacity-50" />
                <div className="absolute inset-[0%] border border-white/5 rounded-full pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
