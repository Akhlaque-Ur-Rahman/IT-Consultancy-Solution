"use client";
import React from "react";
import { motion } from "motion/react";

export const AbstractVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#f59e0b]/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Animated Elements */}
      <div className="relative w-full h-full">
        {/* Central Orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#f59e0b]/30 bg-gradient-to-br from-[#f59e0b]/10 to-transparent backdrop-blur-sm flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.1)]"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        >
          <div className="w-32 h-32 rounded-full border border-[#f59e0b]/50 border-dashed animate-spin-slow" />
        </motion.div>

        {/* Floating Nodes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-[#f59e0b] shadow-[0_0_15px_#f59e0b]"
            initial={{
              x: "50%",
              y: "50%",
              opacity: 0,
            }}
            animate={{
              x: `${50 + Math.cos((i * 60 * Math.PI) / 180) * 35}%`,
              y: `${50 + Math.sin((i * 60 * Math.PI) / 180) * 35}%`,
              opacity: [0, 1, 0.5, 1, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Dynamic Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 400 400"
        >
          <motion.path
            d="M 200 200 L 350 100"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 200 200 L 100 300"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 200 200 L 300 350"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Floating Glass Cards */}
        <motion.div
          className="absolute top-[20%] right-[15%] w-32 h-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex flex-col justify-center p-4"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-12 h-1 bg-[#f59e0b] rounded-full mb-2" />
          <div className="w-full h-1 bg-white/10 rounded-full mb-1" />
          <div className="w-2/3 h-1 bg-white/10 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-[25%] left-[10%] w-28 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex flex-col justify-center p-3"
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <div className="w-10 h-1 bg-white/20 rounded-full" />
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};
