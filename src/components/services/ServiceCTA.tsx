"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Star } from "lucide-react";
import Link from "next/link";

interface ServiceCTAProps {
  badge?: string;
  title?: React.ReactNode;
  description?: string;
  serviceTitle?: string;
}

export const ServiceCTA = ({
  badge = "Start Your Transformation",
  title = "Ready to Accelerate Your Digital Growth?",
  description = "Join the forward-thinking organizations scaling with EDUNEX. We combine engineering excellence with strategic marketing to deliver true business impact.",
  serviceTitle = "Consulting",
}: ServiceCTAProps) => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background abstract glow with float animation */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#f59e0b]/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          className="relative rounded-[48px] bg-[#0a0a0a] border border-white/5 p-12 md:p-24 overflow-hidden text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Mesh Grid */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Subtle radial highlights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-[100px] -ml-48 -mb-48" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_10px_#f59e0b] animate-pulse" />
              <span className="text-xs font-bold text-gray-200 uppercase tracking-[0.2em]">
                {badge}
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
              {title}
            </h2>

            <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href={`/contact?service=${serviceTitle.toLowerCase().replace(/ /g, "-")}`}
              >
                <Button
                  variant="default"
                  className="px-6 py-4 text-xl font-black rounded-2xl h-auto group border-none"
                >
                  Enquiry Now
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform ease-in-out" />
                </Button>
              </Link>
              <Link
                href={`/contact?service=${serviceTitle.toLowerCase().replace(/ /g, "-")}`}
              >
                <Button
                  variant="secondary"
                  className="px-6 py-4 text-xl font-bold rounded-2xl h-auto backdrop-blur-md sm:w-auto w-full group"
                >
                  <MessageSquare className="mr-3 w-8 h-8 text-[#f59e0b]" />
                  Talk to an Expert
                </Button>
              </Link>
            </div>

            <div className="mt-16 flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="flex -space-x-3 overflow-hidden p-1">
                  {[
                    "/avatars/129416.jpg",
                    "/avatars/21597.jpg",
                    "/avatars/2827.jpg",
                  ].map((src, i) => (
                    <motion.div
                      key={i}
                      className="inline-block h-12 w-12 rounded-full border-2 border-[#0a0a0a] bg-white/5 shadow-2xl overflow-hidden ring-2 ring-white/5"
                      whileHover={{ y: -4, scale: 1.1, zIndex: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <img
                        src={src}
                        alt={`Tech Leader ${i + 1}`}
                        className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-4 py-2 px-5 rounded-full bg-white/5 border border-white/5 shadow-inner">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="currentColor"
                        stroke="none"
                      />
                    ))}
                  </div>
                  <div className="w-px h-4 bg-white/10" />
                  <p className="text-gray-400 text-sm font-medium tracking-wide">
                    Trusted by <span className="text-white font-bold">48+</span>{" "}
                    Technology Leaders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
