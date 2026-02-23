"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function HeroModernClient({
  onlyTyping = false,
}: {
  onlyTyping?: boolean;
}) {
  const phrases = [
    "Web-App Development",
    "Mobile App Development",
    "CRM/ERP Implementation",
    "Digital Marketing",
    "UI/UX Design",
    "E‑commerce Solutions",
    "Compliance Services",
  ];
  const [idx, setIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [del, setDel] = useState(false);
  const text = phrases[idx].slice(0, chars);
  const textChars = Array.from(text);

  useEffect(() => {
    const full = phrases[idx];
    const atEnd = chars === full.length;
    const atStart = chars === 0;
    const delay =
      atStart && !del
        ? 400
        : del
          ? 50 + Math.random() * 30
          : atEnd
            ? 2200
            : 100 + Math.random() * 60;
    const t = setTimeout(() => {
      if (!del) {
        setChars((c) => Math.min(full.length, c + 1));
        if (atEnd) setDel(true);
      } else {
        setChars((c) => Math.max(0, c - 1));
        if (atStart) {
          setDel(false);
          setIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [chars, del, idx]);

  if (onlyTyping) {
    return (
      <span className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
        {textChars.map((ch, i) => (
          <motion.span
            key={`${idx}-${i}-${ch}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {ch}
          </motion.span>
        ))}
        <motion.span
          className="ml-1 inline-block align-middle w-[2px] h-[1em] bg-white/70"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
      </span>
    );
  }

  return (
    <>
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute rounded-full blur-3xl rotate-45"
          style={{
            top: -80,
            right: -80,
            width: "28rem",
            height: "28rem",
            background:
              "radial-gradient(circle, rgba(245,158,11,0.6) 0%, rgba(245,158,11,0.25) 40%, rgba(245,158,11,0) 70%)",
          }}
          initial={{ opacity: 0.22, scale: 0.98 }}
          animate={{ opacity: [0.18, 0.32, 0.18], scale: [0.98, 1.04, 0.98] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute"
          style={{
            top: -40,
            right: 0,
            width: "60vw",
            height: "18vh",
            transform: "rotate(-28deg)",
            transformOrigin: "top right",
            background:
              "linear-gradient(225deg, rgba(245,158,11,0.35) 0%, rgba(245,158,11,0.12) 30%, rgba(245,158,11,0) 70%)",
            filter: "blur(16px)",
          }}
          initial={{ opacity: 0.22 }}
          animate={{ opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#f59e0b] rounded-full blur-3xl"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{ scale: [1, 1.08, 1], x: [0, -10, 0], y: [0, 6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#f59e0b] rounded-full blur-3xl"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{ scale: [1, 1.1, 1], x: [0, 12, 0], y: [0, -8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </>
  );
}
