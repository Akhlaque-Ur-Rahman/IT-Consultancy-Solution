'use client';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';
import { SectionAmbient } from '@/components/SectionAmbient';
import { Users, FolderKanban, Shield, TrendingUp } from 'lucide-react';

export interface MetricProps {
  label: string;
  /** Animated number; omit when using `emphasis`. */
  value?: number;
  suffix?: string;
  /** Short qualitative headline (no fabricated client counts). */
  emphasis?: string;
  delay?: number;
}

const METRIC_ICONS = [Users, FolderKanban, Shield, TrendingUp] as const;

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView && value !== undefined) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const displayValue =
          suffix === '%' ? latest.toFixed(1) : Math.floor(latest).toLocaleString();
        ref.current.textContent = `${displayValue}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  const initial = suffix === '%' ? `0.0${suffix}` : `0${suffix}`;

  return (
    <div
      ref={ref}
      className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-4xl font-bold tabular-nums tracking-tight text-transparent md:text-5xl md:leading-none"
      aria-live="polite"
    >
      {initial}
    </div>
  );
}

export function MetricsCounter({ metrics }: { metrics: MetricProps[] }) {
  return (
    <SectionAmbient preset="surfaceRaised" className="border-y border-[#262626] py-16 md:py-24">
      <div className="relative mx-auto max-w-[1400px] px-6">
        <motion.div
          className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {metrics.map((metric, index) => {
            const Icon = METRIC_ICONS[index % METRIC_ICONS.length];
            return (
              <motion.div
                key={metric.label}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] p-5 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_12px_40px_-18px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#f59e0b]/30 hover:shadow-[0_24px_56px_-20px_rgba(0,0,0,0.75),0_0_48px_-16px_rgba(245,158,11,0.12)] md:p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[#f59e0b]/[0.06] blur-3xl transition-opacity duration-500 group-hover:bg-[#f59e0b]/[0.1]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/[0.04] blur-2xl"
                  aria-hidden
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-[#f59e0b]/[0.02] opacity-90" />

                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.1] bg-gradient-to-br from-white/[0.07] to-white/[0.02] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.06] transition-all duration-300 group-hover:border-[#f59e0b]/35 group-hover:ring-[#f59e0b]/15">
                    <Icon className="h-5 w-5 text-gray-300 transition-colors group-hover:text-[#fbbf24]" aria-hidden />
                  </div>
                  {metric.emphasis ? (
                    <p className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-center text-2xl font-bold leading-tight tracking-tight text-transparent md:text-3xl md:leading-none [text-wrap:balance]">
                      {metric.emphasis}
                    </p>
                  ) : (
                    <AnimatedNumber
                      value={metric.value ?? 0}
                      suffix={metric.suffix ?? ""}
                    />
                  )}
                  <p className="mt-3 max-w-[14rem] text-sm font-medium leading-snug text-gray-300 [text-wrap:balance] md:text-base">
                    {metric.label}
                  </p>
                  <div className="mt-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-[#f59e0b]/70 to-transparent opacity-60 transition-all duration-300 group-hover:w-12 group-hover:opacity-100" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-[0.28] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] opacity-60 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionAmbient>
  );
}
