"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buildContactUrl } from "@/lib/contactPrefill";

interface ServiceCTAProps {
  badge?: string;
  title?: React.ReactNode;
  description?: string;
  serviceTitle?: string;
}

const AVATARS = ["/avatars/129416.jpg", "/avatars/21597.jpg", "/avatars/2827.jpg"];

export const ServiceCTA = ({
  badge = "Start Your Transformation",
  title = "Ready to Accelerate Your Digital Growth?",
  description = "Join the forward-thinking organizations scaling with EDUNEX. We combine engineering excellence with strategic marketing to deliver true business impact.",
  serviceTitle = "Consulting",
}: ServiceCTAProps) => {
  const serviceSlug = serviceTitle.toLowerCase().replace(/\s+/g, "-");
  const contactHref = buildContactUrl({
    serviceSlug,
    ref: /^[a-z0-9]+(-[a-z0-9]+)*$/.test(serviceSlug)
      ? `/services/${serviceSlug}`
      : undefined,
  });

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-black py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(245,158,11,0.09),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[min(60vh,520px)] w-[min(90vw,600px)] translate-x-1/4 translate-y-1/4 rounded-full bg-amber-500/[0.04] blur-[100px]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-gradient-to-b from-[#0e0e0e] via-[#060606] to-[#030303] shadow-[0_40px_100px_-60px_rgba(0,0,0,0.95)] ring-1 ring-white/[0.04] md:rounded-[2rem]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(135deg,rgba(245,158,11,0.06)_0%,transparent_42%,transparent_58%,rgba(245,158,11,0.04)_100%)]" />

          <div className="relative grid min-h-0 lg:grid-cols-12 lg:min-h-[380px]">
            {/* Copy + actions — left, editorial */}
            <div className="flex flex-col justify-center border-b border-white/[0.06] p-8 md:p-10 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-12 lg:pr-10">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05, duration: 0.4 }}
                className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]/90"
                  aria-hidden
                />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  {badge}
                </span>
              </motion.div>

              <h2 className="mb-5 max-w-xl text-left text-3xl font-semibold leading-[1.12] tracking-tight text-white md:text-4xl lg:text-[2.65rem] lg:leading-[1.08]">
                {title}
              </h2>

              <p className="mb-8 max-w-lg text-left text-[15px] leading-relaxed text-neutral-500 md:text-base">
                {description}
              </p>

              <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href={contactHref} className="sm:inline-flex">
                  <Button
                    variant="default"
                    className="h-11 w-full rounded-xl border-0 bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-6 text-sm font-semibold text-black shadow-[0_12px_40px_-18px_rgba(245,158,11,0.45)] transition-all hover:from-[#fbbf24] hover:to-[#f59e0b] sm:w-auto"
                  >
                    Enquiry now
                    <ArrowUpRight
                      className="ml-1.5 h-4 w-4 opacity-90"
                      aria-hidden
                    />
                  </Button>
                </Link>
                <Link href="/case-studies" className="sm:inline-flex">
                  <Button
                    variant="secondary"
                    className="h-11 w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-6 text-sm font-medium text-neutral-200 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.06] sm:w-auto"
                  >
                    View case studies
                  </Button>
                </Link>
              </div>

              {/* Trust — single quiet row */}
              <div className="flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex -space-x-2">
                  {AVATARS.map((src, i) => (
                    <div
                      key={src}
                      className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#0a0a0a] bg-neutral-800 ring-1 ring-white/10"
                      style={{ zIndex: 3 - i }}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <div className="flex gap-0.5 text-[#f59e0b]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5"
                        fill="currentColor"
                        strokeWidth={0}
                        aria-hidden
                      />
                    ))}
                  </div>
                  <span className="hidden h-3 w-px bg-white/15 sm:block" />
                  <p className="text-xs text-neutral-500 md:text-[13px]">
                    Trusted by SME &amp; enterprise teams across Bihar
                  </p>
                </div>
              </div>
            </div>

            {/* Visual panel — right, abstract depth */}
            <div className="relative flex flex-col items-center justify-center overflow-hidden bg-black/20 p-10 lg:col-span-5 lg:p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-500/15 blur-3xl" />
              <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-amber-600/10 blur-3xl" />

              <motion.div
                className="relative flex aspect-square w-[min(100%,240px)] items-center justify-center"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                {[0, 1, 2, 3].map((ring) => (
                  <div
                    key={ring}
                    className="absolute rounded-full border border-amber-500/20"
                    style={{
                      inset: `${ring * 12}%`,
                      opacity: 0.95 - ring * 0.18,
                    }}
                  />
                ))}
                <div className="relative z-[1] flex h-24 w-24 items-center justify-center rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent shadow-[0_0_60px_-20px_rgba(245,158,11,0.35)]">
                  <div className="text-center">
                    <p className="font-mono text-2xl font-semibold tabular-nums text-[#fbbf24]">
                      4.9
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                      Avg. rating
                    </p>
                  </div>
                </div>
              </motion.div>

              <p className="relative z-[1] mt-8 max-w-[12rem] text-center text-[11px] leading-relaxed text-neutral-600">
                Local discovery call · Clear scope · No jargon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
