"use client";
import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

export function Hero() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    const id = setInterval(() => api.scrollNext(), 6000);
    return () => {
      api.off("select", onSelect);
      clearInterval(id);
    };
  }, [api]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-16 ">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#f59e0b] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#f59e0b] rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-12 w-full">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#f59e0b] animate-pulse"></div>
                    <span className="text-xs md:text-sm font-medium text-[#f59e0b]">
                      Trusted by 48+ Organizations
                    </span>
                  </motion.div>
                  <motion.h1
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Enterprise IT Consulting &amp;{" "}
                    <span className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                      Software Development
                    </span>{" "}
                    Company in India
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Custom web applications, mobile apps, CRM/ERP systems,
                    digital marketing, e-commerce solutions, and business
                    compliance services for scaling organizations across India
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap items-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link href="/contact">
                      <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-black font-semibold px-10 py-6 text-base transition-all duration-200 group">
                        Request Free Consultation
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/case-studies">
                      <Button
                        variant="outline"
                        className="border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text:black px-10 py-6 text-base transition-all duration-200 group"
                      >
                        View Case Studies
                        <PlayCircle className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    className="flex flex-wrap items-center gap-8 pt-8 border-t border-[#262626]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                        48+
                      </p>
                      <p className="text-sm text-gray-400">Happy Clients</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                        12+
                      </p>
                      <p className="text-sm text-gray-400">Years Experience</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                        High
                      </p>
                      <p className="text-sm text-gray-400">Availability</p>
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="relative hidden lg:block"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    <div className="relative w-full aspect-square">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#f59e0b]/15 to-[#d97706]/15 blur-2xl"></div>
                    </div>
                    <motion.div
                      className="absolute top-0 right-0 bg-[#121212] border border-[#262626] rounded-lg shadow-2xl p-6 w-52"
                      initial={{ y: 0 }}
                      animate={{ y: [-5, 5, -5] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text:black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Project Delivered
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-[#262626] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] w-full"></div>
                        </div>
                        <span className="text-xs font-semibold text-[#f59e0b]">
                          99.6%
                        </span>
                      </div>
                    </motion.div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-3xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center shadow-[0_0_60px_rgba(245,158,11,0.3)]">
                      <div className="w-56 h-56 rounded-3xl bg-black flex items-center justify-center">
                        <svg
                          className="w-32 h-32 text-[#f59e0b]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h2
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    CRM/ERP Implementation That Scales
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Streamline operations with tailored CRM/ERP solutions,
                    integrations, and analytics for decision-making.
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap items-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link href="/services?category=development">
                      <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black font-semibold px-10 py-6 text-base transition-all duration-200 group">
                        Explore Implementations
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/case-studies">
                      <Button
                        variant="outline"
                        className="border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black px-10 py-6 text-base transition-all duration-200 group"
                      >
                        See Results
                        <PlayCircle className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="relative hidden lg:block"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative w-full aspect-[4/3] rounded-3xl border border-[#262626] bg-[#121212]">
                    <div className="absolute inset-6 grid grid-cols-3 gap-4">
                      <div className="rounded-lg bg-gradient-to-b from-[#f59e0b]/30 to-transparent"></div>
                      <div className="rounded-lg bg-gradient-to-b from-[#f59e0b]/20 to-transparent"></div>
                      <div className="rounded-lg bg-gradient-to-b from-[#f59e0b]/10 to-transparent"></div>
                      <div className="rounded-lg bg-[#0a0a0a] border border-[#262626]"></div>
                      <div className="rounded-lg bg-[#0a0a0a] border border-[#262626]"></div>
                      <div className="rounded-lg bg-[#0a0a0a] border border-[#262626]"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h2
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Growth-Focused Digital Marketing
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Performance SEO, social campaigns, analytics, and CRO
                    aligned to business KPIs.
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap items-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link href="/services?category=marketing">
                      <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black font-semibold px-10 py-6 text-base transition-all duration-200 group">
                        View Marketing Services
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/resources">
                      <Button
                        variant="outline"
                        className="border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black px-10 py-6 text-base transition-all duration-200 group"
                      >
                        Read Insights
                        <PlayCircle className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="relative hidden lg:block"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#f59e0b]/20 to-[#d97706]/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 rounded-full border border-[#f59e0b]/40 shadow-[0_0_60px_rgba(245,158,11,0.15)]"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {[0, 1, 2].map((i) => (
              <motion.button
                key={i}
                onClick={() => api?.scrollTo(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selectedIndex === i
                    ? "w-12 bg-[#f59e0b]"
                    : "w-6 bg-[#2a2a2a] hover:bg-[#3a3a3a]"
                }`}
              />
            ))}
          </div>
          <CarouselPrevious className="hidden md:flex left-4 bg-black/60 backdrop-blur-md border-[#2a2a2a] hover:border-[#f59e0b] hover:bg-black/80 transition-all" />
          <CarouselNext className="hidden md:flex right-4 bg-black/60 backdrop-blur-md border-[#2a2a2a] hover:border-[#f59e0b] hover:bg-black/80 transition-all" />
        </Carousel>
      </div>
    </section>
  );
}
