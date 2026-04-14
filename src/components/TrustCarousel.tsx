"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Building2 } from "lucide-react";
import { SectionAmbient } from "@/components/SectionAmbient";

interface TrustCarouselProps {
  logos: string[];
}

function LogoCard({ logo }: { logo: string }) {
  return (
    <div className="group relative w-[200px] shrink-0 sm:w-[220px]">
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,158,11,0.25), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative flex min-h-[92px] flex-col justify-center overflow-visible rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#161616] via-[#101010] to-[#0a0a0a] px-4 py-4 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_16px_48px_-32px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-amber-500/25 hover:shadow-[0_20px_56px_-28px_rgba(0,0,0,0.85),0_0_36px_-20px_rgba(245,158,11,0.1)] md:min-h-[100px]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-70" />
        <div className="relative flex min-h-[44px] w-full items-center justify-center [&_svg]:h-auto [&_svg]:max-h-11 [&_svg]:min-w-0 [&_svg]:w-full [&_svg]:max-w-[200px]">
          {logo.startsWith("<svg") ? (
            <div
              className="flex w-full max-w-full items-center justify-center opacity-[0.9] transition-all duration-300 group-hover:opacity-100 [&_svg]:max-w-full"
              dangerouslySetInnerHTML={{ __html: logo }}
            />
          ) : (
            <span className="px-1 text-center text-[11px] font-bold uppercase leading-tight tracking-wide text-neutral-400 transition-colors group-hover:text-amber-200/90 md:text-xs">
              {logo}
            </span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-amber-400/80 via-amber-500 to-amber-700 transition-transform duration-300 group-hover:scale-x-100" />
      </div>
    </div>
  );
}

export function TrustCarousel({ logos }: TrustCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [loopPx, setLoopPx] = useState(0);

  const loop = [...logos, ...logos];

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      const w = el.scrollWidth;
      const half = w / 2;
      if (half > 1) setLoopPx(Math.round(half));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);

    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(measure);
    });
    const t1 = setTimeout(measure, 50);
    const t2 = setTimeout(measure, 300);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [logos]);

  const durationSec =
    loopPx > 0 ? Math.max(24, Math.min(60, loopPx / 38)) : 40;

  return (
    <SectionAmbient
      preset="ribbon"
      className="border-y border-white/[0.06] py-14 md:py-20 lg:py-24"
    >
      <div className="relative z-[1] mx-auto max-w-[1400px] px-6">
        <motion.div
          className="mb-8 text-center md:mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
            <Building2 className="h-3.5 w-3.5 text-amber-400/75" aria-hidden />
            Trusted by industry leaders
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl md:leading-tight">
            Powering digital transformation at{" "}
            <span className="bg-gradient-to-r from-neutral-100 via-white to-neutral-400 bg-clip-text text-transparent">
              leading enterprises
            </span>
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-500 md:text-base">
            Regional brands and growing teams across Bihar rely on our delivery
            and support.
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden py-2"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client logos, auto-scrolling"
        >
          <motion.div
            key={loopPx > 0 ? `marquee-${loopPx}` : "marquee-pending"}
            ref={trackRef}
            className="flex w-max gap-4 will-change-transform md:gap-6"
            initial={{ x: 0 }}
            animate={loopPx > 0 ? { x: -loopPx } : { x: 0 }}
            transition={{
              duration: durationSec,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
              repeatDelay: 0,
            }}
          >
            {loop.map((logo, index) => (
              <LogoCard key={`slide-${index}`} logo={logo} />
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-[#050505] to-transparent sm:w-16 md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-[#050505] to-transparent sm:w-16 md:w-24" />
        </div>
      </div>
    </SectionAmbient>
  );
}
