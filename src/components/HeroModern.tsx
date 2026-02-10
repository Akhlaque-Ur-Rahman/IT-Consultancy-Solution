'use client';
import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export function HeroModern() {
  const phrases = [
    'Web-App Development',
    'Mobile App Development',
    'CRM/ERP Implementation',
    'Digital Marketing',
    'UI/UX Design',
    'E‑commerce Solutions',
    'Compliance Services',
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

  return (
    <section className="relative min-h-[calc(100svh-5rem)] flex items-center justify-center overflow-hidden bg-black">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(1200px circle at 50% 40%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.45) 70%)',
        }}
      />
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute rounded-full blur-3xl rotate-45"
          style={{
            top: -80,
            right: -80,
            width: '28rem',
            height: '28rem',
            background:
              'radial-gradient(circle, rgba(245,158,11,0.6) 0%, rgba(245,158,11,0.25) 40%, rgba(245,158,11,0) 70%)',
          }}
          initial={{ opacity: 0.22, scale: 0.98 }}
          animate={{ opacity: [0.18, 0.32, 0.18], scale: [0.98, 1.04, 0.98] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute"
          style={{
            top: -40,
            right: 0,
            width: '60vw',
            height: '18vh',
            transform: 'rotate(-28deg)',
            transformOrigin: 'top right',
            background:
              'linear-gradient(225deg, rgba(245,158,11,0.35) 0%, rgba(245,158,11,0.12) 30%, rgba(245,158,11,0) 70%)',
            filter: 'blur(16px)',
          }}
          initial={{ opacity: 0.22 }}
          animate={{ opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#f59e0b] rounded-full blur-3xl"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{ scale: [1, 1.08, 1], x: [0, -10, 0], y: [0, 6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#f59e0b] rounded-full blur-3xl"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{ scale: [1, 1.1, 1], x: [0, 12, 0], y: [0, -8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="relative w-full max-w-[1000px] mx-auto px-4 md:px-6 pb-16">
        <motion.div
          className="text-center w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6 mx-auto">
            <div className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"></div>
            <span className="text-sm font-medium text-[#f59e0b]">Trusted by 500+ Enterprises</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 md:mb-3 leading-tight">
            Enterprise IT Consulting Company in India
          </h1>
          <div className="text-2xl md:text-4xl font-semibold mb-6 md:mb-8 min-h-[1.4em]">
            <span className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
              {textChars.map((ch, i) => (
                <motion.span
                  key={`${idx}-${i}-${ch}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
            <motion.span
              className="ml-1 inline-block align-middle w-[2px] h-[1em] bg-white/70"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-black font-semibold px-10 py-6 text-base transition-all duration-200 group">
                Request Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button
                variant="outline"
                className="border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black px-10 py-6 text-base transition-all duration-200 group"
              >
                View Case Studies
                <PlayCircle className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8  max-w-3xl mx-auto">
            <div className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl transition-all duration-300 hover:border-[#f59e0b]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/0 to-[#d97706]/0 group-hover:from-[#f59e0b]/15 group-hover:to-[#d97706]/15 transition-all duration-300" />
              <div className="relative">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">500+</p>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
            </div>
            <div className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl transition-all duration-300 hover:border-[#f59e0b]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/0 to-[#d97706]/0 group-hover:from-[#f59e0b]/15 group-hover:to-[#d97706]/15 transition-all duration-300" />
              <div className="relative">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">15+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
            <div className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl transition-all duration-300 hover:border-[#f59e0b]/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/0 to-[#d97706]/0 group-hover:from-[#f59e0b]/15 group-hover:to-[#d97706]/15 transition-all duration-300" />
              <div className="relative">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">99.9%</p>
                <p className="text-sm text-gray-400">Uptime</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
