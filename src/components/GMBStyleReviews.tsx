"use client";

import { motion } from "motion/react";
import { CheckCircle2, Quote, Shield, Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Review {
  id: string;
  author: string;
  company: string;
  rating: number;
  date: string;
  text: string;
  avatar?: string;
}

interface GMBStyleReviewsProps {
  reviews: Review[];
  /** Merge classes on the outer section (e.g. transparent bg when wrapped in SectionAmbient). */
  sectionClassName?: string;
}

function StarRow({
  count,
  size = "md",
  className,
}: {
  count: number;
  size?: "sm" | "md";
  className?: string;
}) {
  const starClass =
    size === "sm"
      ? "h-3.5 w-3.5"
      : "h-[1.15rem] w-[1.15rem] md:h-5 md:w-5";
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-hidden>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            starClass,
            star <= count
              ? "fill-amber-400/85 text-amber-400/90 drop-shadow-[0_0_8px_rgba(251,191,36,0.12)]"
              : "fill-neutral-700 text-neutral-700",
          )}
        />
      ))}
    </div>
  );
}

export function GMBStyleReviews({
  reviews,
  sectionClassName,
}: GMBStyleReviewsProps) {
  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section
      className={cn(
        "relative overflow-hidden border-t border-white/[0.06] py-20 md:py-24",
        sectionClassName,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-8%,rgba(245,158,11,0.09),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(255,255,255,0.03),transparent_50%)]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-[1100px] px-6">
        {/* Header */}
        <motion.div
          className="mb-14 text-center md:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
            <Sparkles className="h-3.5 w-3.5 text-amber-400/70" aria-hidden />
            Social proof
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Client reviews &{" "}
            <span className="bg-gradient-to-r from-neutral-100 via-white to-neutral-300 bg-clip-text text-transparent">
              testimonials
            </span>
          </h2>

          <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-6 py-5 shadow-[0_24px_64px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <StarRow count={5} />
              <span className="text-2xl font-semibold tabular-nums text-white">
                {avgRating}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-500 [text-wrap:balance]">
              Verified feedback from regional businesses (Google &amp; direct).
              Highlights below—focused on clarity, not volume claims.
            </p>
          </div>
        </motion.div>

        {/* Reviews: balanced 2×2 on md+ (no orphan slot) */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#151515] via-[#101010] to-[#0a0a0a] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_20px_50px_-36px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-amber-500/20 hover:shadow-[0_28px_60px_-32px_rgba(0,0,0,0.85),0_0_0_1px_rgba(251,191,36,0.06)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-amber-500/[0.06] blur-2xl transition-opacity duration-500 group-hover:bg-amber-500/[0.09]"
                aria-hidden
              />
              <Quote
                className="pointer-events-none absolute right-4 top-4 h-16 w-16 text-amber-500/[0.07] transition-colors duration-300 group-hover:text-amber-500/[0.11]"
                strokeWidth={1}
                aria-hidden
              />

              <div className="relative flex items-start gap-4">
                {review.avatar ? (
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10 ring-offset-2 ring-offset-[#101010] transition-shadow duration-300 group-hover:ring-amber-400/25">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/100x100/?${encodeURIComponent(review.avatar)}`}
                      alt={review.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neutral-600 to-neutral-800 text-sm font-semibold text-white ring-2 ring-white/10 ring-offset-2 ring-offset-[#101010]">
                    {review.author.charAt(0)}
                  </div>
                )}
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">{review.author}</p>
                      <p className="text-sm text-neutral-500">{review.company}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <StarRow count={review.rating} size="sm" />
                    <span className="text-neutral-600">·</span>
                    <span className="text-xs text-neutral-500">{review.date}</span>
                  </div>
                </div>
              </div>

              <p className="relative mt-5 border-l-2 border-amber-500/25 pl-4 text-[15px] leading-relaxed text-neutral-300 [text-wrap:pretty] transition-colors duration-300 group-hover:border-amber-400/35 group-hover:text-neutral-200">
                “{review.text}”
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>

        {/* Trust row — muted icons + neutral copy; gold only where it reads as “premium” */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          {[
            {
              icon: CheckCircle2,
              label: "Verified reviews",
              sub: "Real local businesses",
            },
            {
              icon: Shield,
              label: "Trusted partner",
              sub: "Since 2018",
            },
            {
              icon: Star,
              label: "Strong average rating",
              sub: "From displayed testimonials",
            },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex min-w-[200px] max-w-[260px] flex-1 items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 transition-colors duration-300 hover:border-white/12 hover:bg-white/[0.05]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-amber-400/80">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="min-w-0 text-left">
                <p className="text-sm font-medium text-neutral-200">{label}</p>
                <p className="text-xs text-neutral-500">{sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
