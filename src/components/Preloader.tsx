"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

/** First-visit intro: hold before shutters part (ms) */
const HOLD_MS = 950;
/** Shutter travel — short but smooth */
const SHUTTER_DURATION = 0.52;
/** Micro-stagger top vs bottom for a ribbon-style reveal */
const SHUTTER_STAGGER = 0.045;

const shutterEase = [0.22, 0.99, 0.36, 1] as const;

export function Preloader() {
  const [loading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    const hasSeen = localStorage.getItem("edunex_preloader_seen");

    if (hasSeen) {
      queueMicrotask(() => setLoading(false));
      return;
    }

    queueMicrotask(() => {
      setLoading(true);
      document.body.style.overflow = "hidden";
    });

    const timer = setTimeout(() => {
      setLoading(false);
      localStorage.setItem("edunex_preloader_seen", "true");
    }, HOLD_MS);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (loading === null) return null;

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        document.body.style.overflow = "unset";
      }}
    >
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          {/* Ambient vignette — soft edge falloff */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_0%,rgba(0,0,0,0.45)_100%)]"
            aria-hidden
          />

          {/* Top shutter */}
          <motion.div
            className="absolute top-0 left-0 h-[50.5%] w-full origin-top will-change-transform"
            style={{
              background:
                "linear-gradient(180deg, #050505 0%, #0c0c0c 55%, #080808 100%)",
              boxShadow: "inset 0 -1px 0 rgba(245, 158, 11, 0.12)",
            }}
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: SHUTTER_DURATION,
              ease: shutterEase,
              delay: 0,
            }}
          />

          {/* Bottom shutter */}
          <motion.div
            className="absolute bottom-0 left-0 h-[50.5%] w-full origin-bottom will-change-transform"
            style={{
              background:
                "linear-gradient(0deg, #050505 0%, #0c0c0c 55%, #080808 100%)",
              boxShadow: "inset 0 1px 0 rgba(245, 158, 11, 0.12)",
            }}
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              duration: SHUTTER_DURATION,
              ease: shutterEase,
              delay: SHUTTER_STAGGER,
            }}
          />

          {/* Center seam — light line that breathes, then clears with shutters */}
          <motion.div
            className="pointer-events-none absolute left-0 right-0 top-1/2 z-[9998] h-px -translate-y-1/2"
            initial={{ opacity: 0, scaleX: 0.35 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 1.15 }}
            transition={{
              opacity: { duration: 0.45, ease: "easeOut" },
              scaleX: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            }}
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.15) 20%, rgba(245,158,11,0.85) 50%, rgba(245,158,11,0.15) 80%, transparent 100%)",
              boxShadow:
                "0 0 24px rgba(245,158,11,0.35), 0 0 60px rgba(245,158,11,0.12)",
            }}
            aria-hidden
          />

          {/* Brand block */}
          <div className="relative z-[10000] flex flex-col items-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)", y: -6 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mb-7"
            >
              <div className="absolute inset-0 rounded-full bg-[#f59e0b]/15 blur-3xl" />
              <Image
                src="/logo.jpg"
                alt="EDUNEX Logo"
                width={112}
                height={112}
                className="relative rounded-2xl shadow-[0_0_48px_rgba(245,158,11,0.18)] ring-1 ring-white/[0.06]"
                priority
              />
            </motion.div>

            <motion.div
              className="h-[2px] overflow-hidden rounded-full bg-white/[0.06]"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 168, opacity: 1 }}
              exit={{ opacity: 0, scaleX: 0.92 }}
              transition={{
                width: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
                opacity: { duration: 0.35, delay: 0.12 },
                scaleX: { duration: 0.22 },
              }}
            >
              <motion.div
                className="h-full w-full bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent"
                initial={{ x: "-40%" }}
                animate={{ x: "40%" }}
                transition={{
                  duration: 1.25,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{
                duration: 0.4,
                delay: 0.35,
                ease: "easeOut",
              }}
              className="mt-5 text-center text-[13px] font-medium uppercase tracking-[0.28em] text-[#f59e0b]/95"
            >
              Simple Tech. Real Growth.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
