"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  PlayCircle,
  Shield,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { buildContactUrl } from "@/lib/contactPrefill";

const DEFAULT_HERO_IMAGE = "/Services/web-app.webp";

/** Single proof strip below hero (rating, scale, support, certification) */
const HERO_STATS = [
  { headline: "4.9/5", sub: "Avg. rating", icon: Star },
  { headline: "8+", sub: "Years shipping", icon: Users },
  { headline: "24/7", sub: "Priority support", icon: Clock },
  { headline: "ISO 9001", sub: "2015 certified", icon: Shield },
] as const;

interface ServiceHeroProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  benefits: string[];
  serviceTitle?: string;
  /** Optional preview image; defaults to web app style asset */
  heroImageSrc?: string;
  heroImageAlt?: string;
  /** LCP for this route: keep true so the hero image loads immediately */
  heroImagePriority?: boolean;
}

export const ServiceHero = ({
  badge,
  title,
  description,
  benefits,
  serviceTitle = "Consulting",
  heroImageSrc = DEFAULT_HERO_IMAGE,
  heroImageAlt = "EDUNEX software and workflow preview",
  heroImagePriority = true,
}: ServiceHeroProps) => {
  const serviceSlug = serviceTitle.toLowerCase().replace(/\s+/g, "-");
  const contactHref = buildContactUrl({
    serviceSlug,
    ref: /^[a-z0-9]+(-[a-z0-9]+)*$/.test(serviceSlug)
      ? `/services/${serviceSlug}`
      : undefined,
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden bg-[#050505]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -top-40 left-1/2 h-[min(70vh,640px)] w-[min(140vw,1200px)] -translate-x-1/2 opacity-[0.42]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.5) 0%, rgba(245,158,11,0.12) 45%, transparent 72%)",
            filter: "blur(2px)",
          }}
        />
        <div
          className="absolute left-1/2 top-[22%] h-[420px] w-[min(90vw,720px)] -translate-x-1/2 opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.35) 0%, transparent 68%)",
            filter: "blur(60px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
          {/* Copy */}
          <div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 md:mb-6"
            >
              <span
                className="h-2 w-2 rounded-full bg-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.75)]"
                aria-hidden
              />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                {badge}
              </span>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mb-5 md:mb-6"
            >
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl md:leading-[1.08] lg:text-6xl">
                {title}
              </h1>
            </motion.div>

            <motion.p
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mb-8 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl"
            >
              {description}
            </motion.p>

            <motion.ul
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mb-9 space-y-3 md:mb-10"
              aria-label="Key outcomes"
            >
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 backdrop-blur-sm transition-colors hover:border-[#f59e0b]/20"
                >
                  <CheckCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#f59e0b]"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span className="text-[15px] font-medium leading-snug text-gray-200 md:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link href={contactHref} className="sm:shrink-0">
                <Button className="group h-auto w-full rounded-full border-2 border-[#f59e0b] bg-black/70 px-7 py-5 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgba(245,158,11,0.55),0_12px_40px_-18px_rgba(0,0,0,0.9)] transition-all duration-200 hover:bg-black/85 hover:shadow-[0_0_48px_-6px_rgba(245,158,11,0.65)] sm:w-auto">
                  Get a free consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/case-studies" className="sm:shrink-0">
                <Button
                  variant="outline"
                  className="h-auto w-full rounded-full border border-white/20 bg-transparent px-7 py-5 text-base text-white transition-all duration-200 hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  See results &amp; case studies
                  <PlayCircle className="ml-2 h-5 w-5 opacity-80" />
                </Button>
              </Link>
            </motion.div>

            <motion.p
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.55, delay: 0.36 }}
              className="mt-5 text-sm text-neutral-500"
            >
              Free scoping call · Local team in Patna · No obligation to
              proceed
            </motion.p>
          </div>

          {/* Visual */}
          <div className="relative">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full"
            >
              <div
                className="pointer-events-none absolute -inset-1 rounded-[1.35rem] opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.32) 0%, rgba(245,158,11,0.06) 42%, transparent 65%)",
                  filter: "blur(20px)",
                }}
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl border border-[#f59e0b]/40 bg-[#121212] shadow-[0_0_0_1px_rgba(245,158,11,0.12),0_28px_90px_-24px_rgba(0,0,0,0.95),0_0_80px_-20px_rgba(245,158,11,0.35)]">
                <div className="absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[#f59e0b]/50 to-transparent" />
                <Image
                  src={heroImageSrc}
                  alt={heroImageAlt}
                  width={1600}
                  height={1000}
                  priority={heroImagePriority}
                  loading={heroImagePriority ? undefined : "lazy"}
                  decoding="async"
                  className="h-auto w-full object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Full-width outcome strip - icon + metric, matches home/trust rhythm */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ duration: 0.55, delay: 0.38 }}
          className="mt-12 border-t border-white/[0.07] pt-10 md:mt-14 md:pt-12"
          aria-label="Service highlights"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {HERO_STATS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.sub}
                  className="group relative flex min-h-[4.5rem] items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#141414] to-[#0a0a0a] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[#f59e0b]/35 hover:shadow-[0_0_32px_-12px_rgba(245,158,11,0.25)] sm:min-h-0 sm:gap-4 sm:px-4 sm:py-4"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#f59e0b]/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-gradient-to-b from-white/[0.09] to-white/[0.02] shadow-[0_0_20px_-8px_rgba(245,158,11,0.4)] ring-1 ring-[#f59e0b]/20 transition-transform duration-300 group-hover:scale-105 group-hover:ring-[#f59e0b]/40">
                    <Icon
                      className="h-[18px] w-[18px] text-[#f59e0b]"
                      strokeWidth={1.85}
                      aria-hidden
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold tabular-nums leading-none text-white [font-feature-settings:'tnum'] text-lg sm:text-xl">
                      {item.headline}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-neutral-500 transition-colors group-hover:text-neutral-400 sm:text-[11px] sm:tracking-[0.18em]">
                      {item.sub}
                    </p>
                  </div>
                  <div
                    className="pointer-events-none absolute bottom-0 left-3 right-3 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#f59e0b]/60 to-transparent transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
