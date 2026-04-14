"use client";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";
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
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.995 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
        y: { duration: 0.3 },
      }}
      className="group relative h-full"
    >
      <article className="relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.35rem] border border-white/[0.07] bg-[#070707] shadow-[0_28px_72px_-36px_rgba(0,0,0,0.95)] transition-[border-color,box-shadow] duration-500 hover:border-[#f59e0b]/22 hover:shadow-[0_36px_88px_-40px_rgba(0,0,0,0.92),0_0_0_1px_rgba(245,158,11,0.06)]">
        <div
          className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-[#f59e0b]/[0.06] blur-3xl transition-opacity duration-500 group-hover:bg-[#f59e0b]/[0.1]"
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80" />

        {/* Image */}
        <div className="relative aspect-[16/10] min-h-[168px] overflow-hidden bg-[#0a0a0a] sm:min-h-[188px]">
          <div
            className="pointer-events-none absolute inset-0 z-[1] opacity-[0.4]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 24V0h24' fill='none' stroke='%23ffffff' stroke-opacity='0.05'/%3E%3C/svg%3E")`,
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#f59e0b]/[0.07] via-transparent to-transparent" />
          <ImageWithFallback
            src={`https://source.unsplash.com/800x600/?${encodeURIComponent(image)}`}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#070707] via-[#070707]/45 to-black/25" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-br from-black/35 via-transparent to-transparent" />

          <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
            <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] font-medium text-[#fde68a] shadow-lg shadow-black/30 backdrop-blur-md">
              {industry}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-black/50 text-white/70 backdrop-blur-md transition-all duration-300 group-hover:border-[#f59e0b]/35 group-hover:text-[#fbbf24]">
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-[1] flex flex-1 flex-col p-6 pt-5">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#f59e0b]/85">
            {client}
          </p>
          <h3 className="mb-4 line-clamp-2 text-lg font-semibold leading-snug tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#fef3c7]">
            {title}
          </h3>
          <div className="mb-4 h-px w-12 rounded-full bg-gradient-to-r from-[#f59e0b]/70 to-transparent transition-all duration-300 group-hover:w-16" />

          <div className="mb-5 flex flex-col gap-2.5">
            {companyType && (
              <span className="inline-flex w-fit rounded-lg border border-[#f59e0b]/20 bg-[#f59e0b]/[0.07] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#fde68a]/95">
                {companyType}
              </span>
            )}
            {problemSolved && (
              <div className="flex items-start gap-2 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-2.5">
                <TrendingUp
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f59e0b]"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="line-clamp-2 text-xs leading-relaxed text-gray-400">
                  {problemSolved}
                </span>
              </div>
            )}
          </div>

          <div className="mb-6 grid flex-1 grid-cols-2 gap-2">
            {Object.entries(impact)
              .slice(0, 4)
              .map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent px-3 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-colors duration-300 group-hover:border-white/[0.1]"
                >
                  <p className="mb-1 text-lg font-semibold tabular-nums leading-none tracking-tight text-[#fbbf24] md:text-xl">
                    {value}
                  </p>
                  <p className="text-[10px] font-medium uppercase leading-tight tracking-wide text-gray-500">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                </div>
              ))}
          </div>

          <span className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] py-2.5 text-xs font-medium text-gray-300 transition-all duration-300 group-hover:border-[#f59e0b]/35 group-hover:bg-[#f59e0b]/[0.08] group-hover:text-white">
            View case study
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-[0.25] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] opacity-80 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100" />
      </article>
    </motion.div>
  );
}
