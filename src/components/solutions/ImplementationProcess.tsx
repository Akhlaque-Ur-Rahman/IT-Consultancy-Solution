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
      title: "Discovery & Planning",
      duration: "1 Week",
      description:
        "We study your business needs and create a clear roadmap for your project.",
    },
    {
      icon: Settings2,
      title: "Custom Development",
      duration: "4-6 Weeks",
      description:
        "Our experts build your system and connect it with the tools you already use.",
    },
    {
      icon: ClipboardCheck,
      title: "Testing & Review",
      duration: "2 Weeks",
      description:
        "We test everything thoroughly to make sure it works perfectly for your team.",
    },
    {
      icon: Rocket,
      title: "Launch & Training",
      duration: "1 Week",
      description:
        "We move your data and help your team get started with the new system.",
    },
    {
      icon: LifeBuoy,
      title: "Ongoing Support",
      duration: "Ongoing",
      description:
        "We provide 24/7 help and maintenance to keep your system running smoothly.",
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
            A simple, step-by-step approach to building your enterprise systems.
            We don&apos;t just deliver software; we help your business grow.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-gradient-to-r from-[#f59e0b]/0 via-[#f59e0b]/30 to-[#f59e0b]/0 -z-10" />

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
                    <step.icon className="w-7 h-7 text-[#f59e0b] group-hover:text-black transition-colors" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#121212] border border-white/20 text-[10px] font-black text-[#f59e0b] flex items-center justify-center shadow-xl">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="text-white font-bold mb-1 group-hover:text-[#f59e0b] transition-colors">
                  {step.title}
                </h3>
                <div className="text-[10px] text-[#f59e0b]/60 font-medium uppercase tracking-widest mb-3">
                  {step.duration}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
