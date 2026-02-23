"use client";
import React from "react";
import { motion } from "motion/react";
import { Star, Shield, Users, Clock } from "lucide-react";

interface TrustItem {
  icon: any;
  label: string;
  color: string;
}

const defaultTrustItems = [
  { icon: Star, label: "4.9/5 Rating", color: "text-[#f59e0b]" },
  { icon: Users, label: "48+ Enterprise Clients", color: "text-[#f59e0b]" },
  { icon: Clock, label: "24/7 Priority Support", color: "text-[#f59e0b]" },
  { icon: Shield, label: "ISO 9001:2015 Certified", color: "text-[#f59e0b]" },
];

export const TrustStrip = ({
  items = defaultTrustItems,
}: {
  items?: TrustItem[];
}) => {
  return (
    <div className="bg-black border-y border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-3 group cursor-default"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#f59e0b]/30 transition-colors">
                <item.icon
                  className={`w-5 h-5 ${item.color} opacity-70 group-hover:opacity-100 transition-opacity`}
                />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
