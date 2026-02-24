"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Scaling,
  Cpu,
  Headphones,
  Key,
  Layers,
} from "lucide-react";

export default function ValuePropositions() {
  const values = [
    {
      icon: Cpu,
      title: "Bespoke Engineering",
      description:
        "No off-the-shelf templates. Every line of code is written to solve your specific business logic and performance requirements.",
    },
    {
      icon: Scaling,
      title: "Hyper-Scalable",
      description:
        "Architected on modern cloud-native stacks (Next.js, Go/Node, PostgreSQL) that handle millions of requests without breaking a sweat.",
    },
    {
      icon: ShieldCheck,
      title: "Military-Grade Security",
      description:
        "Advanced encryption, SOC2-ready protocols, and frequent penetration testing to safeguard your organization's most valuable data.",
    },
    {
      icon: Layers,
      title: "Modular Freedom",
      description:
        "Built with a plug-and-play architecture. Add new modules or change providers without needing to rebuild your entire ecosystem.",
    },
    {
      icon: Headphones,
      title: "Priority Engineering Support",
      description:
        "Direct access to the engineers who built your system. We offer 24/7 incident response and proactive platform monitoring.",
    },
    {
      icon: Key,
      title: "Full Source Ownership",
      description:
        "Unlike rigid SaaS providers, you own the intellectual property of your custom modules, ensuring no vendor lock-in.",
    },
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            The <span className="text-[#f59e0b]">Antigravity</span> Advantage
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Why forward-thinking enterprises choose us to power their digital
            core.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6 text-[#f59e0b]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
