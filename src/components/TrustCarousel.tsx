"use client";
import { motion } from "motion/react";

interface TrustCarouselProps {
  logos: string[];
}

export function TrustCarousel({ logos }: TrustCarouselProps) {
  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-black border-y border-[#262626]">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Trusted by Industry Leaders
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Powering Digital Transformation at Leading Enterprises
          </h3>
        </motion.div>

        {/* Infinite Scroll Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-20 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-44 h-16 rounded-xl bg-[#121212] border border-[#262626] hover:border-[#f59e0b]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] group px-4">
                    {logo.startsWith("<svg") ? (
                      <div
                        className="w-full h-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity"
                        dangerouslySetInnerHTML={{ __html: logo }}
                      />
                    ) : (
                      <span className="text-sm font-bold text-gray-400 group-hover:text-[#f59e0b] transition-colors tracking-tight">
                        {logo}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
