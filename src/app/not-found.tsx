"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  const [joke, setJoke] = useState(
    "We can't find this page, but we can find your business more leads.",
  );
  const jokes = [
    "We can't find this page, but we can help find your business more leads.",
    "This page is missing, but our GST expert isn't. Need tax help?",
    "404: The page went for a tea break in Patna.",
    "Oops! Even our best code gets lost sometimes.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[100svh] bg-black text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f0f0f] via-[#0a0a0a] to-black" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Sticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="mb-10 relative"
        >
          <div className="absolute -inset-12 blur-3xl bg-[#f59e0b]/15 rounded-full" />
          <div className="mx-auto w-[220px] rounded-2xl border border-[#f59e0b]/40 bg-[#0b0b0b] shadow-[0_0_60px_rgba(245,158,11,0.15)] relative px-5 py-4">
            <div className="absolute -top-2 -left-2 rotate-[-6deg] bg-[#f59e0b] text-black text-xs font-bold px-2 py-1 rounded">
              Oops!
            </div>
            <div className="text-sm text-gray-300">
              We misplaced this page somewhere in the cloud.
            </div>
          </div>
        </motion.div>

        {/* 404 Title */}
        <div className="relative inline-block mb-3">
          <div className="absolute -inset-6 blur-3xl bg-[#f59e0b]/20 rounded-full" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-7xl md:text-8xl font-extrabold tracking-tight"
          >
            404
          </motion.h1>
        </div>

        {/* Emoji */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="mx-auto mb-3 text-3xl select-none"
        >
          😅
        </motion.div>

        {/* Joke */}
        <motion.p
          key={joke}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-lg md:text-xl text-gray-300 mb-8 h-8"
        >
          {joke}
        </motion.p>

        {/* Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/">
            <Button className="bg-[#f59e0b] text-black hover:bg-[#d97706] font-semibold px-8 py-6 text-lg rounded-full">
              Go Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
