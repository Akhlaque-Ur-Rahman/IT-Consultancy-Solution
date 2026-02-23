"use client";
import React from "react";
import { motion } from "motion/react";
import { DynamicIcon } from "@/components/DynamicIcon";

interface Deliverable {
  title: string;
  desc: string;
  icon: string;
}

export const DeliverablesGrid = ({ items }: { items: Deliverable[] }) => {
  return (
    <section className="py-32 bg-black relative">
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#f59e0b 0.5px, transparent 0.5px), linear-gradient(90deg, #f59e0b 0.5px, transparent 0.5px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.3em] mb-4">
            Scope of Service
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            High-Value Deliverables for the Modern Enterprise
          </h3>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Every engagement is backed by tangible, high-impact outcomes
            designed to drive sustained business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="group p-10 rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-[#f59e0b]/40 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-[#f59e0b] group-hover:bg-[#f59e0b] group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <DynamicIcon name={item.icon} size={28} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#f59e0b] transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 leading-relaxed font-light text-base">
                {item.desc}
              </p>

              {/* Animation Layer */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f59e0b]/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
