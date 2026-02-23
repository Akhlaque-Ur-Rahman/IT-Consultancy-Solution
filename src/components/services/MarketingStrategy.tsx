"use client";
import React from "react";
import { motion } from "motion/react";
import { BarChart3, Target, PieChart } from "lucide-react";

interface MarketingProps {
  data: {
    channels: string[];
    reporting: string;
  };
}

export const MarketingStrategy = ({ data }: MarketingProps) => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Outcome-Driven Marketing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto italic">
            "We don't measure impressions, we measure impact."
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            className="p-8 rounded-2xl bg-black border border-[#1a1a1a] hover:border-[#f59e0b]/30"
            whileHover={{ y: -5 }}
          >
            <Target className="w-10 h-10 text-[#f59e0b] mb-6" />
            <h4 className="text-xl font-bold text-white mb-4">
              Strategic Targeting
            </h4>
            <div className="flex flex-wrap gap-2">
              {(data.channels && data.channels.length > 0
                ? data.channels
                : ["Meta Ads", "Google Ads"]
              ).map((c) => (
                <span
                  key={c}
                  className="text-xs px-2 py-1 rounded-md bg-[#121212] text-gray-500 border border-[#262626]"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl bg-black border border-[#1a1a1a] hover:border-blue-500/30"
            whileHover={{ y: -5 }}
          >
            <BarChart3 className="w-10 h-10 text-blue-500 mb-6" />
            <h4 className="text-xl font-bold text-white mb-4">
              Growth Analytics
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              {data.reporting ||
                "Real-time interactive dashboards tracking every conversion point."}
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl bg-black border border-[#1a1a1a] hover:border-green-500/30"
            whileHover={{ y: -5 }}
          >
            <PieChart className="w-10 h-10 text-green-500 mb-6" />
            <h4 className="text-xl font-bold text-white mb-4">
              ROI Attribution
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Full-funnel tracking from first click to final conversion,
              ensuring every rupee spent is accounted for.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
