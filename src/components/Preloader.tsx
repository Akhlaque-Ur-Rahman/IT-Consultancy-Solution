"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export function Preloader() {
  const [loading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if preloader has been seen
    const hasSeen = localStorage.getItem("edunex_preloader_seen");

    if (hasSeen) {
      setLoading(false);
      return;
    }

    // If not seen, start the sequence
    setLoading(true);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      localStorage.setItem("edunex_preloader_seen", "true");
      document.body.style.overflow = "unset";
    }, 3000); // Fixed duration for animations

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  // Don't render anything until we know the state
  if (loading === null) return null;

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
          {/* Shutter Top */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[50%] bg-[#0a0a0a] border-b border-[#f59e0b]/20"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1], delay: 2.2 }}
          />

          {/* Shutter Bottom */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[50%] bg-[#0a0a0a] border-t border-[#f59e0b]/20"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1], delay: 2.2 }}
          />

          {/* Center Logo Content */}
          <div className="relative z-[10000] flex flex-col items-center">
            {/* Logo Container with subtle glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-6"
            >
              <div className="absolute inset-0 bg-[#f59e0b]/20 rounded-full blur-2xl animate-pulse" />
              <Image
                src="/logo.jpg"
                alt="EDUNEX Logo"
                width={120}
                height={120}
                className="relative rounded-2xl shadow-[0_0_40px_rgba(245,158,11,0.2)]"
                priority
              />
            </motion.div>

            {/* Pulsing Loading Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 text-[#f59e0b] text-sm font-medium tracking-[0.2em] uppercase"
            >
              Simple Tech. Real Growth.
            </motion.p>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
