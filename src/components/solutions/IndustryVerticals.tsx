"use client";

import { motion } from "motion/react";
import {
  ShoppingCart,
  Stethoscope,
  Factory,
  Truck,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function IndustryVerticals() {
  const industries = [
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description:
        "Built for 35% improvement in stock turnover with omnichannel inventory and automated logistics.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description:
        "Reduces admin overhead by 40% with HIPAA-compliant patient management and telehealth.",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Enable 99.9% uptime with smart factory monitoring and predictive maintenance systems.",
      color: "from-orange-500/20 to-amber-500/20",
    },
    {
      icon: Truck,
      title: "Logistics",
      description:
        "Cut operational costs by 22% with real-time fleet tracking and last-mile optimization.",
      color: "from-indigo-500/20 to-purple-500/20",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Increase student retention by 25% with automated performance analytics and LMS platforms.",
      color: "from-rose-500/20 to-pink-500/20",
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description:
        "Recover 15+ billable hours per month with automated tracking and outcome-based reporting.",
      color: "from-slate-500/20 to-gray-500/20",
    },
  ];

  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Built for Your <span className="text-[#f59e0b]">Industry</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We don&apos;t believe in one-size-fits-all. Our solutions are
            engineered with industry-specific requirements and compliance in
            mind.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] overflow-hidden transition-all duration-300 hover:border-[#f59e0b]/30`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#121212] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f59e0b] transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {industry.description}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 border-t-2 border-r-2 border-[#f59e0b]/30 rounded-tr-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
