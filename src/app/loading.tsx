"use client";

import { motion } from "motion/react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="relative">
        {/* Outer Glow */}
        <div className="absolute -inset-10 blur-3xl bg-[#f59e0b]/10 rounded-full animate-pulse" />

        {/* Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full border-t-2 border-r-2 border-[#f59e0b] border-l-2 border-l-transparent border-b-2 border-b-transparent"
        />

        {/* Center Dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-[#f59e0b]"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-sm font-semibold text-gray-500 uppercase tracking-widest"
      >
        Waking up the server...
      </motion.p>
    </div>
  );
}
