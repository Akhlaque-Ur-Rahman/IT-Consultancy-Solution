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
      title: "Outcome-Based Engineering",
      description:
        "We don't just write code; we solve business bottlenecks. Every architectural decision is weighed against its impact on your bottom line.",
    },
    {
      icon: Scaling,
      title: "Scale-Ready Architectures",
      description:
        "Built for future-state performance. Our systems handle millions of requests natively, ensuring your growth is never capped by technical debt.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance-First Security",
      description:
        "Data sovereignty is our priority. Sophisticated encryption and SOC2-ready protocols safeguard your most valuable intellectual property.",
    },
    {
      icon: Layers,
      title: "Uncompromising Ownership",
      description:
        "You own 100% of the custom IP. No vendor lock-in, no seat-based pricing—just total control over your digital core.",
    },
    {
      icon: Headphones,
      title: "SLA-Backed Expert Support",
      description:
        "Direct access to our senior engineering cell. We provide 24/7 proactive monitoring and guaranteed response times for critical systems.",
    },
    {
      icon: Key,
      title: "Seamless Ecosystem Integration",
      description:
        "Native tool compatibility ensures your existing stack works in harmony with our solutions, reducing tool fragmentation from day one.",
    },
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            The <span className="text-[#f59e0b]">EDUNEX</span> Advantage
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
