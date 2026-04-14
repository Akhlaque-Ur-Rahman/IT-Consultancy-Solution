"use client";

import React from "react";
import { motion } from "motion/react";
import { DynamicIcon } from "@/components/DynamicIcon";
import {
  SectionHeading,
  SectionHeadingAccent,
} from "@/components/SectionHeading";

const DEFAULT_DELIVERABLES_TITLE =
  "High-Value Deliverables for the Modern Enterprise";

interface Deliverable {
  title: string;
  desc: string;
  icon: string;
}

type DeliverablesGridProps = {
  items: Deliverable[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export const DeliverablesGrid = ({
  items,
  eyebrow = "Scope of Service",
  title = DEFAULT_DELIVERABLES_TITLE,
  subtitle = "Every engagement is backed by tangible, high-impact outcomes designed to drive sustained business growth.",
}: DeliverablesGridProps) => {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -top-24 left-1/2 h-[min(45vh,420px)] w-[min(100vw,900px)] -translate-x-1/2 opacity-[0.2]"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(245,158,11,0.35) 0%, rgba(245,158,11,0.06) 50%, transparent 72%)",
            filter: "blur(3px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(245,158,11,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.4) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow={eyebrow}
            align="left"
            subtitle={subtitle}
            subtitleClassName="max-w-2xl text-lg font-light text-gray-400 md:text-xl"
            className="mb-12 max-w-3xl md:mb-16"
          >
            {title === DEFAULT_DELIVERABLES_TITLE ? (
              <>
                High-Value Deliverables for the{" "}
                <SectionHeadingAccent>Modern Enterprise</SectionHeadingAccent>
              </>
            ) : (
              title
            )}
          </SectionHeading>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-[1.35rem] border border-white/[0.07] bg-gradient-to-b from-[#111] via-[#0a0a0a] to-[#050505] p-7 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.9)] transition-all duration-500 md:p-8"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-32px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f59e0b]/[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-[1.35rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(245,158,11,0.12)",
                }}
                aria-hidden
              />

              <div className="relative mb-6 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-[#f59e0b] shadow-[0_0_0_1px_rgba(245,158,11,0.08),0_12px_40px_-20px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:border-[#f59e0b]/35 group-hover:shadow-[0_0_32px_-12px_rgba(245,158,11,0.25)]">
                  <DynamicIcon name={item.icon} size={28} />
                </div>
                <span
                  className="font-mono text-3xl font-bold tabular-nums leading-none text-white/[0.06] transition-colors duration-300 group-hover:text-[#f59e0b]/25"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#f59e0b] md:text-2xl">
                {item.title}
              </h3>
              <p className="relative flex-1 text-[15px] leading-relaxed text-gray-400 md:text-base">
                {item.desc}
              </p>

              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-[0.15] bg-gradient-to-r from-[#f59e0b] via-amber-400/90 to-amber-800/80 opacity-80 transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
