"use client";
import { motion } from "motion/react";
import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudyCardProps {
  title: string;
  client: string;
  industry: string;
  image: string;
  impact: Record<string, string | undefined>;
  companyType?: string;
  problemSolved?: string;
}

export function CaseStudyCard({
  title,
  client,
  industry,
  image,
  impact,
  companyType,
  problemSolved,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        ease: [0.2, 0.9, 0.2, 1],
        y: { duration: 0.28 },
      }}
      className="group relative h-full"
    >
      <article className="relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_16px_48px_-24px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-[#f59e0b]/35 hover:shadow-[0_28px_64px_-28px_rgba(0,0,0,0.85),0_0_52px_-18px_rgba(245,158,11,0.14)]">
        <div
          className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-[#f59e0b]/[0.05] blur-3xl transition-opacity duration-500 group-hover:bg-[#f59e0b]/[0.09]"
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-90" />

        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-[#0a0a0a] md:h-56">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 24V0h24' fill='none' stroke='%23ffffff' stroke-opacity='0.06'/%3E%3C/svg%3E")`,
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/[0.08] via-transparent to-transparent opacity-80" />
          <ImageWithFallback
            src={`https://source.unsplash.com/800x600/?${encodeURIComponent(image)}`}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />

          <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
            <span className="rounded-lg border border-[#f59e0b]/35 bg-[#f59e0b]/95 px-3 py-1.5 text-xs font-semibold text-black shadow-[0_8px_24px_-8px_rgba(245,158,11,0.5)] backdrop-blur-sm">
              {industry}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-white/50 backdrop-blur-md transition-colors group-hover:border-[#f59e0b]/30 group-hover:text-[#fbbf24]">
            <BarChart3 className="h-4 w-4" aria-hidden />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-[1] p-6 pt-5">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-[#f59e0b]/90">
            {client}
          </p>
          <h3 className="mb-3 line-clamp-2 text-lg font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-[#fbbf24]">
            {title}
          </h3>
          <div className="mb-4 h-px w-10 rounded-full bg-gradient-to-r from-[#f59e0b]/80 to-transparent transition-all duration-300 group-hover:w-14" />

          <div className="mb-4 flex flex-col gap-2">
            {companyType && (
              <span className="inline-flex w-fit rounded-md border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#fbbf24]">
                {companyType}
              </span>
            )}
            {problemSolved && (
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <TrendingUp className="h-3.5 w-3.5 shrink-0 text-[#f59e0b]" aria-hidden />
                <span className="line-clamp-1">{problemSolved}</span>
              </div>
            )}
          </div>

          <div className="mb-5 grid grid-cols-2 gap-2.5">
            {Object.entries(impact)
              .slice(0, 4)
              .map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-all duration-300 group-hover:border-white/[0.12] group-hover:bg-white/[0.05]"
                >
                  <p className="mb-0.5 text-lg font-bold tabular-nums leading-none text-[#fbbf24] md:text-xl">
                    {value}
                  </p>
                  <p className="text-[11px] capitalize leading-tight text-gray-500">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </div>
              ))}
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-gray-300 transition-all duration-300 group-hover:border-[#f59e0b]/35 group-hover:bg-[#f59e0b]/10 group-hover:text-white">
            View case study
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-[0.3] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] opacity-70 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
      </article>
    </motion.div>
  );
}
