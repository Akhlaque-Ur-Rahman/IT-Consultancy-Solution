"use client";

import React, { Fragment } from "react";
import { motion } from "motion/react";
import { Code2, GraduationCap, MapPin, PenLine, Sparkles } from "lucide-react";
import {
  SectionHeading,
  SectionHeadingAccent,
} from "@/components/SectionHeading";

interface Step {
  title: string;
  desc: string;
}

const STEP_ICONS = [MapPin, PenLine, Code2, GraduationCap] as const;

const STROKE = "rgba(245, 158, 11, 0.42)";
const STROKE_END = "rgba(245, 158, 11, 0.65)";

/**
 * Sleek elbow connector (no vertical SVG stretch): left column → right column.
 * Orthogonal path reads as a diagram, not a heavy swoosh.
 */
function ConnectorLeftToRight({ id }: { id: string }) {
  const mid = `pf-elbow-${id}`;
  return (
    <div className="flex h-9 w-full items-center justify-center px-6 md:px-12">
      <svg
        className="h-9 w-full max-w-md"
        viewBox="0 0 200 32"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id={`${mid}-s`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={STROKE} />
            <stop offset="100%" stopColor={STROKE_END} />
          </linearGradient>
          <marker
            id={`${mid}-a`}
            markerUnits="userSpaceOnUse"
            markerWidth="5"
            markerHeight="5"
            refX="4"
            refY="2.5"
            orient="auto"
          >
            <path
              d="M0 0 L0 5 L5 2.5 Z"
              fill={STROKE_END}
            />
          </marker>
        </defs>
        <path
          d="M 86 3 L 86 15 L 114 15 L 114 29"
          stroke={`url(#${mid}-s)`}
          strokeWidth={1.15}
          strokeLinecap="round"
          strokeLinejoin="round"
          markerEnd={`url(#${mid}-a)`}
        />
      </svg>
    </div>
  );
}

/** Right column → left column (mirror elbow). */
function ConnectorRightToLeft({ id }: { id: string }) {
  const mid = `pf-elbow-${id}`;
  return (
    <div className="flex h-9 w-full items-center justify-center px-6 md:px-12">
      <svg
        className="h-9 w-full max-w-md"
        viewBox="0 0 200 32"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id={`${mid}-s`} x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={STROKE} />
            <stop offset="100%" stopColor={STROKE_END} />
          </linearGradient>
          <marker
            id={`${mid}-a`}
            markerUnits="userSpaceOnUse"
            markerWidth="5"
            markerHeight="5"
            refX="4"
            refY="2.5"
            orient="auto"
          >
            <path
              d="M0 0 L0 5 L5 2.5 Z"
              fill={STROKE_END}
            />
          </marker>
        </defs>
        <path
          d="M 114 3 L 114 15 L 86 15 L 86 29"
          stroke={`url(#${mid}-s)`}
          strokeWidth={1.15}
          strokeLinecap="round"
          strokeLinejoin="round"
          markerEnd={`url(#${mid}-a)`}
        />
      </svg>
    </div>
  );
}

function ProcessCard({
  step,
  i,
  isLeft,
}: {
  step: Step;
  i: number;
  isLeft: boolean;
}) {
  const Icon = STEP_ICONS[i % STEP_ICONS.length] ?? Sparkles;
  const phase = String(i + 1).padStart(2, "0");

  return (
    <motion.div
      className={
        isLeft
          ? "col-start-1 justify-self-stretch md:max-w-none"
          : "col-start-2 justify-self-stretch md:max-w-none"
      }
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#121212] via-[#0a0a0a] to-[#060606] p-7 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.03] transition-[border-color,box-shadow] duration-300 hover:border-[#f59e0b]/18 hover:shadow-[0_16px_48px_-32px_rgba(245,158,11,0.12)] ${
          isLeft ? "text-right" : "text-left"
        }`}
      >
        <span
          className="pointer-events-none absolute right-3 top-2 font-mono text-6xl font-semibold leading-none text-white/[0.03] md:text-7xl md:text-white/[0.025]"
          aria-hidden
        >
          {phase}
        </span>
        <div
          className={`relative mb-3.5 flex items-center gap-2.5 ${
            isLeft ? "flex-row-reverse justify-end" : ""
          }`}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] text-[#e8a035]">
            <Icon className="h-[18px] w-[18px]" strokeWidth={1.65} aria-hidden />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d4a574]/95">
            Phase {phase}
          </span>
        </div>
        <h3 className="relative mb-1.5 text-lg font-semibold tracking-tight text-white md:text-xl">
          {step.title}
        </h3>
        <p className="relative text-[14px] leading-relaxed text-neutral-500 md:text-[15px]">
          {step.desc}
        </p>
        <div
          className={`pointer-events-none absolute bottom-0 left-0 right-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#f59e0b]/50 to-transparent transition-transform duration-500 group-hover:scale-x-100 ${
            isLeft ? "origin-center" : "origin-center"
          }`}
          aria-hidden
        />
      </div>
    </motion.div>
  );
}

export const ProcessFlow = ({ steps }: { steps: Step[] }) => {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-1/2 top-[6%] h-[min(48vh,420px)] w-[min(92vw,720px)] -translate-x-1/2 opacity-[0.12]"
          style={{
            background:
              "radial-gradient(ellipse 50% 45% at 50% 0%, rgba(245,158,11,0.35) 0%, transparent 65%)",
            filter: "blur(6px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `linear-gradient(rgba(245,158,11,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.45) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1120px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeading
            eyebrow="Our process"
            align="center"
            subtitle="Four clear phases - from first conversation to confident users on the ground in Bihar."
            className="mb-10 md:mb-14"
          >
            <>
              A structured path to{" "}
              <SectionHeadingAccent>excellence</SectionHeadingAccent>
            </>
          </SectionHeading>
        </motion.div>

        {/* Mobile */}
        <div className="relative space-y-0 md:hidden">
          {steps.map((step, i) => {
            const Icon =
              STEP_ICONS[i % STEP_ICONS.length] ?? Sparkles;
            const phase = String(i + 1).padStart(2, "0");
            return (
              <Fragment key={step.title}>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#121212] via-[#0a0a0a] to-[#060606] p-5 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.03]">
                    <span
                      className="pointer-events-none absolute right-3 top-2 font-mono text-5xl font-semibold text-white/[0.03]"
                      aria-hidden
                    >
                      {phase}
                    </span>
                    <div className="relative mb-3 flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] text-[#e8a035]">
                        <Icon className="h-4 w-4" strokeWidth={1.65} aria-hidden />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4a574]/95">
                        Phase {phase}
                      </span>
                    </div>
                    <h3 className="relative mb-1 text-base font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="relative text-sm leading-relaxed text-neutral-500">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
                {i < steps.length - 1 && (
                  <div
                    className="flex justify-center py-2"
                    aria-hidden
                  >
                    <svg
                      className="h-5 w-3 text-[#f59e0b]/50"
                      viewBox="0 0 24 28"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 2v20"
                        stroke="currentColor"
                        strokeWidth="1.15"
                        strokeLinecap="round"
                      />
                      <path
                        d="m7.5 19.5 4.5 4.5 4.5-4.5"
                        stroke="currentColor"
                        strokeWidth="1.15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>

        {/* Desktop: zigzag + minimal elbows */}
        <div className="relative mx-auto hidden max-w-4xl md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-0">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Fragment key={step.title}>
                <ProcessCard step={step} i={i} isLeft={isLeft} />
                {i < steps.length - 1 && (
                  <div className="col-span-2 py-0.5" aria-hidden>
                    {i % 2 === 0 ? (
                      <ConnectorLeftToRight id={`lr-${i}`} />
                    ) : (
                      <ConnectorRightToLeft id={`rl-${i}`} />
                    )}
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
