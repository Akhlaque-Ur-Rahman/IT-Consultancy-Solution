"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

export const ServiceFAQs = ({
  items,
  title = "Common Inquiries",
  subtitle = "Support & Clarity",
}: {
  items: FAQ[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#f59e0b] uppercase tracking-[0.3em] mb-4">
            {subtitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h3>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/5 bg-[#0a0a0a] overflow-hidden transition-all duration-300 hover:border-white/10"
            >
              <button
                className="w-full p-8 text-left flex items-center justify-between group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg font-bold text-white pr-8 group-hover:text-[#f59e0b] transition-colors">
                  {item.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${openIndex === i ? "bg-[#f59e0b] border-[#f59e0b]" : ""}`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-black" : "text-gray-500"}`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-gray-400 leading-relaxed font-light text-base border-t border-white/5 pt-6 mx-0">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
