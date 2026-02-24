"use client";

import { motion } from "motion/react";
import {
  CreditCard,
  BookOpen,
  MessageSquare,
  Cloud,
  Code2,
  Smartphone,
  Globe,
  Database,
} from "lucide-react";

export default function IntegrationsGrid() {
  const categories = [
    {
      name: "Payment Gateways",
      tools: ["Stripe", "Razorpay", "PayPal", "Square"],
      icon: CreditCard,
    },
    {
      name: "Accounting",
      tools: ["QuickBooks", "Xero", "Tally Prime", "Zoho Books"],
      icon: BookOpen,
    },
    {
      name: "Communication",
      tools: ["Slack", "Microsoft Teams", "WhatsApp API", "Twilio"],
      icon: MessageSquare,
    },
    {
      name: "Cloud & Infrastructure",
      tools: ["AWS", "Google Cloud", "Azure", "Docker"],
      icon: Cloud,
    },
  ];

  return (
    <section className="py-24 bg-[#050505] border-y border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              A Unified <span className="text-[#f59e0b]">Ecosystem</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our platform doesn&apos;t live in a silo. We provide native
              integrations with the tools your business already depends on, plus
              a robust API for custom connectivity.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                  Native Connectors
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                  API Coverage
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 group hover:border-[#f59e0b]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <category.icon className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <h3 className="text-white font-bold mb-3">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter px-2 py-1 rounded bg-white/5 border border-white/5 group-hover:text-gray-300 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
