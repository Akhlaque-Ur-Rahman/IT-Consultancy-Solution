"use client";

import { motion } from "motion/react";
import {
  Search,
  Settings2,
  Rocket,
  LifeBuoy,
  ChevronRight,
  ClipboardCheck,
} from "lucide-react";

export default function ImplementationProcess() {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Audit",
      description:
        "We deep-dive into your existing workflows, identify bottlenecks, and map out the data architecture.",
    },
    {
      icon: Settings2,
      title: "Custom Engineering",
      description:
        "Our engineers build or configure the solution, integrating it with your current tech stack.",
    },
    {
      icon: ClipboardCheck,
      title: "Validation & Testing",
      description:
        "Rigorous UAT and stress testing to ensure the system handles your peak business loads.",
    },
    {
      icon: Rocket,
      title: "Go-Live & Migration",
      description:
        "Seamless cutover with data migration support to ensure zero business interruption.",
    },
    {
      icon: LifeBuoy,
      title: "24/7 Managed Support",
      description:
        "Dedicated account managers and technical support to ensure long-term platform health.",
    },
  ];

  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            The Roadmap to <span className="text-[#f59e0b]">Success</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured, engineering-first approach to deploying complex
            enterprise systems. We don&apos;t just deliver software; we deliver
            operational transformation.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.75rem] left-0 right-0 h-0.5 bg-gradient-to-r from-[#f59e0b]/0 via-[#f59e0b]/30 to-[#f59e0b]/0 -z-10" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex relative">
                  <div className="w-14 h-14 rounded-full bg-black border-2 border-[#f59e0b]/30 flex items-center justify-center mb-6 group-hover:bg-[#f59e0b] group-hover:border-[#f59e0b] transition-all duration-500 relative z-10">
                    <step.icon className="w-6 h-6 text-[#f59e0b] group-hover:text-black transition-colors" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#121212] border border-white/10 text-[10px] font-bold text-[#f59e0b] flex items-center justify-center">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="text-white font-bold mb-3 group-hover:text-[#f59e0b] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed px-2">
                  {step.description}
                </p>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[2.1rem] transform translate-x-1/2 right-[calc(-4rem)]">
                    <ChevronRight className="w-5 h-5 text-[#f59e0b]/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
