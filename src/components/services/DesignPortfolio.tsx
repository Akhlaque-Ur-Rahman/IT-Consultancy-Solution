"use client";
import React from "react";
import { motion } from "motion/react";
import { Compass, Palette, Feather } from "lucide-react";
import {
  SectionHeading,
  SectionHeadingAccent,
} from "@/components/SectionHeading";

interface DesignProps {
  data: {
    gallery: string[];
    philosophy: string;
  };
}

export const DesignPortfolio = ({ data }: DesignProps) => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            {(data.gallery && data.gallery.length > 0
              ? data.gallery
              : ["UI Excellence", "Visual Story"]
            ).map((item, i) => (
              <motion.div
                key={item}
                className={`rounded-2xl bg-[#121212] border border-[#1a1a1a] aspect-video flex items-center justify-center relative overflow-hidden group ${i === 0 ? "col-span-2" : ""}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-bold">{item}</span>
                </div>
                <Palette className="w-8 h-8 text-[#f59e0b]/20" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex rounded-2xl bg-[#f59e0b]/10 p-3">
              <Compass className="h-6 w-6 text-[#f59e0b]" />
            </div>
            <SectionHeading
              eyebrow="Design"
              align="left"
              className="mb-6"
              titleClassName="leading-tight md:text-5xl"
            >
              <>
                Art Meets <SectionHeadingAccent>Logic</SectionHeadingAccent>
              </>
            </SectionHeading>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">
              {data.philosophy ||
                "Design that doesn\u2019t just look good, but works perfectly for your users."}
            </p>
            <div className="p-6 rounded-2xl border-l-4 border-[#f59e0b] bg-[#121212] flex items-center gap-4">
              <Feather className="w-8 h-8 text-gray-500" />
              <p className="text-gray-300 italic">
                <span aria-hidden>&ldquo;</span>
                Design is not just what it looks like and feels like. Design is
                how it works.
                <span aria-hidden>&rdquo;</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
