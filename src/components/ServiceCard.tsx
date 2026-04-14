"use client";
import { motion } from "motion/react";
import { ArrowRight, Check, LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { ServiceSchema } from "./ServiceSchema";
import { SITE_URL } from "@/config/company";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  delay = 0,
}: ServiceCardProps) {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[icon] as LucideIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.2, 0.9, 0.2, 1],
        y: { duration: 0.3 },
      }}
      className="group relative h-full"
    >
      <ServiceSchema
        name={title}
        description={description}
        url={`${SITE_URL}/services#${title.replace(/\s+/g, "-").toLowerCase()}`}
      />
      <div
        className="relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_12px_40px_-18px_rgba(0,0,0,0.85),0_0_0_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-[#f59e0b]/35 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_24px_56px_-20px_rgba(0,0,0,0.75),0_0_48px_-16px_rgba(245,158,11,0.14)]"
      >
        {/* Ambient glow - visible at rest so cards feel less flat */}
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#f59e0b]/[0.07] blur-3xl transition-opacity duration-500 group-hover:bg-[#f59e0b]/[0.11]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-white/[0.03] blur-2xl"
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-[#f59e0b]/[0.02] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10 flex flex-col">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.06] transition-all duration-300 group-hover:border-[#f59e0b]/40 group-hover:shadow-[0_12px_32px_-10px_rgba(245,158,11,0.15)] group-hover:ring-[#f59e0b]/20">
            {IconComponent && (
              <IconComponent className="h-7 w-7 text-gray-200 transition-transform duration-300 group-hover:scale-105 group-hover:text-white" />
            )}
          </div>

          <h3 className="mb-2 text-base font-semibold tracking-tight text-white transition-colors group-hover:text-white">
            {title}
          </h3>
          <div className="mb-3 h-px w-10 rounded-full bg-gradient-to-r from-[#f59e0b]/80 to-transparent opacity-70 transition-all duration-300 group-hover:w-14 group-hover:opacity-100" />

          <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400 [text-wrap:pretty]">
            {description}
          </p>

          <ul className="mb-5 space-y-2">
            {features.slice(0, 3).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs leading-snug text-gray-400"
              >
                <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#f59e0b]/12 ring-1 ring-[#f59e0b]/25">
                  <Check className="h-2.5 w-2.5 text-[#fbbf24]" strokeWidth={3} />
                </span>
                <span className="text-gray-400 group-hover:text-gray-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <span className="mt-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-gray-300 shadow-sm transition-all duration-300 group-hover:border-[#f59e0b]/30 group-hover:bg-[#f59e0b]/10 group-hover:text-white">
            Learn more
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-[0.35] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] opacity-70 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}
