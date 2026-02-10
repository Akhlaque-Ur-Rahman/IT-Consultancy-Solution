'use client';
import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-16 md:pt-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#f59e0b] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#f59e0b] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#f59e0b] animate-pulse"></div>
              <span className="text-xs md:text-sm font-medium text-[#f59e0b]">
                Trusted by 500+ Enterprises
              </span>
            </motion.div>

            {/* Main Headline - SEO H1 */}
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Enterprise IT Consulting &amp;{' '}
              <span className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                Software Development
              </span>{' '}
              Company in India
            </motion.h1>

            {/* Subheadline - SEO Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Custom web applications, mobile apps, CRM/ERP systems, digital marketing, e-commerce solutions, and business compliance services for scaling organizations across India
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/contact">
                <Button
                  className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-black font-semibold px-10 py-6 text-base transition-all duration-200 group"
                >
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
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-8 pt-8 border-t border-[#262626]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">500+</p>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">15+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">99.9%</p>
                <p className="text-sm text-gray-400">Uptime</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Illustration - Simplified for Performance */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Main Circle with Subtle Animation */}
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f59e0b]/10 to-[#d97706]/10 blur-2xl"></div>
              </div>

              {/* Floating Card 1 - Project Stats */}
              <motion.div
                className="absolute top-0 right-0 bg-[#121212] border border-[#262626] rounded-lg shadow-2xl p-6 w-52"
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Project Delivered</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-[#262626] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] w-full"></div>
                  </div>
                  <span className="text-xs font-semibold text-[#f59e0b]">100%</span>
                </div>
              </motion.div>

              {/* Floating Card 2 - Performance Metrics */}
              <motion.div
                className="absolute bottom-12 left-0 bg-[#121212] border border-[#262626] rounded-lg shadow-2xl p-6 w-56"
                initial={{ y: 0 }}
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-white">Performance</p>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 7h-2v5.41l4.29 4.3 1.42-1.42-3.71-3.71V7z"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Response Time</span>
                    <span className="font-semibold text-[#f59e0b]">45ms</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Uptime</span>
                    <span className="font-semibold text-[#f59e0b]">99.9%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Users Active</span>
                    <span className="font-semibold text-[#f59e0b]">12.5K</span>
                  </div>
                </div>
              </motion.div>

              {/* Central Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center shadow-[0_0_60px_rgba(245,158,11,0.3)]">
                <div className="w-56 h-56 rounded-full bg-black flex items-center justify-center">
                  <svg className="w-32 h-32 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
