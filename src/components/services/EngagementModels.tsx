"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  SectionHeading,
  SectionHeadingAccent,
} from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import {
  buildContactUrl,
  slugifyEngagementTitle,
} from "@/lib/contactPrefill";

const DEFAULT_ENGAGEMENT_TITLE =
  "Flexible Structures for Every Business Need";

interface EngagementModel {
  title: string;
  desc: string;
  price: string;
  features: string[];
  highlight: boolean;
}

interface EngagementModelsProps {
  title?: string;
  subtitle?: string;
  models?: EngagementModel[];
  /** Service slug - must match `CONTACT_FORM_SERVICES` slugs for form prefill */
  serviceTitle?: string;
  /** e.g. `/services/custom-software-bihar` - stored as `ref` for contact prefill */
  sourcePath?: string;
}

const defaultModels: EngagementModel[] = [
  {
    title: "Project-Based",
    desc: "Best for clearly defined scopes and fixed timelines.",
    price: "Fixed Quote",
    features: [
      "Dedicated project manager",
      "Defined milestones & deliverables",
      "Post-launch support period",
      "Rigorous quality assurance",
    ],
    highlight: false,
  },
  {
    title: "Dedicated Team",
    desc: "Ideal for long-term product development and scaling.",
    price: "Monthly Retainer",
    features: [
      "Full-time dedicated engineers",
      "Direct communication & integration",
      "Flexible scope adjustments",
      "Priority roadmap execution",
    ],
    highlight: true,
  },
  {
    title: "Consulting",
    desc: "Expert guidance for architecture and strategy.",
    price: "Hourly / Weekly",
    features: [
      "Architecture audit & review",
      "Tech stack modernization",
      "Security & compliance advisory",
      "CTO-as-a-Service model",
    ],
    highlight: false,
  },
];

function ModelCard({
  model,
  index,
  serviceSlug,
  sourcePath,
}: {
  model: EngagementModel;
  index: number;
  serviceSlug: string;
  sourcePath?: string;
}) {
  const idx = String(index + 1).padStart(2, "0");
  const contactHref = buildContactUrl({
    serviceSlug,
    engagement: slugifyEngagementTitle(model.title),
    ref: sourcePath,
  });

  return (
    <motion.article
      className={cn(
        "group relative flex flex-col",
        model.highlight
          ? "order-first md:order-none lg:z-[2]"
          : "md:order-none",
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b p-7 md:p-8",
          model.highlight
            ? "border-[#f59e0b]/25 from-[#14100a] via-[#0c0c0c] to-[#080808] shadow-[0_0_0_1px_rgba(245,158,11,0.08),0_24px_80px_-40px_rgba(245,158,11,0.22)] lg:scale-[1.02] lg:shadow-[0_0_0_1px_rgba(245,158,11,0.12),0_32px_100px_-48px_rgba(245,158,11,0.28)]"
            : "border-white/[0.06] from-[#101010] to-[#060606] shadow-[0_12px_48px_-36px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.03]",
        )}
      >
        {/* Ambient sheen - featured only */}
        {model.highlight && (
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(245,158,11,0.35) 0%, transparent 70%)",
            }}
            aria-hidden
          />
        )}

        <span
          className="pointer-events-none absolute right-4 top-3 font-mono text-5xl font-light tabular-nums text-white/[0.04] md:text-6xl"
          aria-hidden
        >
          {idx}
        </span>

        {model.highlight && (
          <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full border border-[#f59e0b]/30 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#fbbf24] backdrop-blur-md">
            Most preferred
          </span>
        )}

        <header className={cn("relative", model.highlight && "mt-8 md:mt-6")}>
          <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
            {model.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            {model.desc}
          </p>
        </header>

        <div className="relative my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent md:my-7" />

        <p className="relative text-xs font-medium uppercase tracking-[0.18em] text-neutral-600">
          Structure
        </p>
        <p className="relative mt-1.5 text-2xl font-semibold tracking-tight text-white md:text-[1.65rem]">
          {model.price}
        </p>

        <ul className="relative mt-6 flex flex-1 flex-col gap-3 md:mt-7">
          {model.features.map((feature) => (
            <li
              key={feature}
              className="flex gap-3 text-[13px] leading-snug text-neutral-400 md:text-sm"
            >
              <span
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border",
                  model.highlight
                    ? "border-[#f59e0b]/30 bg-[#f59e0b]/[0.07] text-[#fbbf24]"
                    : "border-white/[0.08] bg-white/[0.03] text-neutral-500",
                )}
              >
                <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link href={contactHref} className="relative mt-8 block md:mt-9">
          <Button
            variant={model.highlight ? "default" : "secondary"}
            className={cn(
              "h-11 w-full rounded-xl text-sm font-medium",
              model.highlight &&
                "shadow-[0_10px_36px_-14px_rgba(245,158,11,0.45)]",
            )}
          >
            Enquiry now
            <ArrowUpRight className="ml-0.5 h-4 w-4 opacity-90" aria-hidden />
          </Button>
        </Link>
      </div>
    </motion.article>
  );
}

export const EngagementModels = ({
  title = DEFAULT_ENGAGEMENT_TITLE,
  subtitle = "Engagement Models",
  models = defaultModels,
  serviceTitle = "consulting",
  sourcePath,
}: EngagementModelsProps) => {
  const serviceSlug = serviceTitle.toLowerCase().replace(/\s+/g, "-");
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-1/2 top-[15%] h-[min(40vh,380px)] w-[min(90vw,900px)] -translate-x-1/2 opacity-[0.09]"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(245,158,11,0.5) 0%, transparent 62%)",
            filter: "blur(8px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1200px] px-4 md:px-6">
        <SectionHeading
          eyebrow={subtitle}
          align="center"
          className="mb-10 md:mb-14"
        >
          {title === DEFAULT_ENGAGEMENT_TITLE ? (
            <>
              Flexible Structures for{" "}
              <SectionHeadingAccent>Every Business Need</SectionHeadingAccent>
            </>
          ) : (
            title
          )}
        </SectionHeading>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-5 lg:gap-6 lg:pt-2">
          {models.map((model, i) => (
            <ModelCard
              key={model.title}
              model={model}
              index={i}
              serviceSlug={serviceSlug}
              sourcePath={sourcePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
