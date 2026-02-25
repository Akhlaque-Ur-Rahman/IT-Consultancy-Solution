"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Calculator,
  HelpCircle,
  Puzzle,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DecisionHelper() {
  const scenarios = [
    {
      icon: Calculator,
      title: "Replacing Legacy Software",
      description:
        "Your current systems are slow, manual, or no longer scaling with your business volume.",
      cta: "Migration Audit",
    },
    {
      icon: Puzzle,
      title: "Connecting Siloed Tools",
      description:
        "Departments are using different tools that don't talk to each other, leading to data errors.",
      cta: "Ecosystem Strategy",
    },
    {
      icon: Scale,
      title: "Preparing for Rapid Scale",
      description:
        "You're expecting 10x growth and need an architecture that won't break under pressure.",
      cta: "Scalability Roadmap",
    },
    {
      icon: HelpCircle,
      title: "Custom Specific Need",
      description:
        "You have a unique business logic that off-the-shelf SaaS simply cannot handle.",
      cta: "Engineering Consult",
    },
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6">
            <span className="text-[10px] font-bold text-[#f59e0b] uppercase tracking-widest">
              Decision Support
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Not Sure Which <span className="text-[#f59e0b]">Path</span> to Take?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            B2B software transitions are high-stakes. We provide the technical
            clarity needed to make the right investment. Select your current
            challenge below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((scenario, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#f59e0b]/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <scenario.icon className="w-6 h-6 text-[#f59e0b]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4 leading-tight">
                {scenario.title}
              </h3>
              <p className="text-gray-500 text-xs mb-8 leading-relaxed">
                {scenario.description}
              </p>
              <Link href="/contact" className="mt-auto w-full">
                <Button
                  variant="outline"
                  className="w-full border-white/10 text-white hover:bg-[#f59e0b] hover:text-black hover:border-[#f59e0b] text-xs font-bold h-10 transition-all"
                >
                  {scenario.cta}
                  <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-1 bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent rounded-3xl">
          <div className="bg-[#050505] rounded-[1.4rem] p-10 lg:p-12 text-center border border-white/5">
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Regardless of your current state, we start every engagement with a{" "}
              <span className="text-white font-bold">
                Complimentary Strategic Audit
              </span>{" "}
              to ensure the best technical fit.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-black h-14 px-10 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.2)]"
              >
                Request Architecture Audit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
