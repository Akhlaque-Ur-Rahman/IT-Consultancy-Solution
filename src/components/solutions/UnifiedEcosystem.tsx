"use client";

import { motion } from "motion/react";
import { Network, Zap, Shield, BarChart } from "lucide-react";

export default function UnifiedEcosystem() {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-gradient-to-br from-[#121212] to-black border border-white/5 rounded-[3rem] p-12 lg:p-20 relative">
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

              <ul className="space-y-4">
                {[
                  "Eliminate tool fragmentation and data duplication",
                  "Unified cross-department visibility (Full Spectrum)",
                  "Absolute data consistency for rapid decision-making",
                  "Single platform control for reduced operational risk",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-square max-w-md mx-auto w-full">
              {/* Decorative Ecosystem Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-3xl bg-black border border-[#f59e0b] flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.2)] z-20">
                  <img
                    src="/logo.jpg"
                    alt="EDUNEX Logo"
                    className="w-12 h-12 invert opacity-20"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#f59e0b] font-black text-2xl uppercase tracking-tighter">
                      EDUNEX
                    </span>
                  </div>
                </div>

                {/* Orbiting Symbols */}
                {[
                  { icon: Zap, label: "Billing", angle: 0 },
                  { icon: Shield, label: "Security", angle: 90 },
                  { icon: BarChart, label: "ERP", angle: 180 },
                  { icon: Network, label: "CRM", angle: 270 },
                ].map((node, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 pointer-events-none"
                    style={{ rotate: node.angle }}
                  >
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `rotate(${-node.angle}deg)`,
                      }} /* Counter-rotate to keep icon vertical */
                    >
                      <motion.div
                        animate={{
                          rotate: -360,
                        }} /* Counter-rotate child to keep it upright */
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-16 h-16 rounded-2xl bg-[#121212] border border-white/10 flex flex-col items-center justify-center gap-1 shadow-2xl pointer-events-auto"
                      >
                        <node.icon className="w-5 h-5 text-[#f59e0b]" />
                        <span className="text-[8px] font-bold text-gray-500 uppercase">
                          {node.label}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}

                {/* Decorative Rings */}
                <div className="absolute inset-[20%] border border-white/5 rounded-full" />
                <div className="absolute inset-[10%] border border-white/5 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
