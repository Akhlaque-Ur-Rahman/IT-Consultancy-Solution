"use client";

import { motion } from "motion/react";
import { Cloud, Server, Database, ShieldCheck, Globe, Zap } from "lucide-react";

export default function DeploymentOptions() {
  const models = [
    {
      icon: Cloud,
      title: "Cloud-Hosted",
      description:
        "Fully managed, highly available SaaS deployment on our secure global infrastructure.",
      features: [
        "Auto-scaling",
        "99.99% Uptime SLA",
        "Instant Updates",
        "Zero Infrastructure Overhead",
      ],
      tag: "Most Popular",
      color: "border-blue-500/20",
    },
    {
      icon: Database,
      title: "On-Premise",
      description:
        "Complete control with deployment on your own internal servers or private cloud.",
      features: [
        "Full Data Sovereignty",
        "Firewall-Isolated",
        "Custom Resource Allocation",
        "Direct DB Access",
      ],
      tag: "Maximum Control",
      color: "border-[#f59e0b]/20",
    },
    {
      icon: Server,
      title: "Hybrid Mesh",
      description:
        "The best of both. Seamlessly sync between cloud processing and on-premise storage.",
      features: [
        "Edge Computing",
        "Compliance Syncing",
        "Failover Resilience",
        "Burst Capability",
      ],
      tag: "Adaptive",
      color: "border-emerald-500/20",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Flexible <span className="text-[#f59e0b]">Deployment</span>{" "}
            Architecture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Choose the model that aligns with your security protocols and
            infrastructure strategy. All options support enterprise-grade
            encryption.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl bg-[#0a0a0a] border ${model.color} flex flex-col items-center text-center group hover:bg-[#121212] transition-colors`}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                {model.tag}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-[#121212] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <model.icon className="w-8 h-8 text-[#f59e0b]" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {model.title}
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {model.description}
              </p>

              <div className="w-full space-y-3 mt-auto pt-6 border-t border-white/5">
                {model.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#f59e0b]/60 flex-shrink-0" />
                    <span className="text-xs text-gray-500 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
