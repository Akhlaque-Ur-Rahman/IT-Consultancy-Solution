"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ConsultationCTA({
  defaultService = "",
}: {
  defaultService?: string;
}) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 flex items-center gap-3 z-50">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
            className="px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg text-white text-sm font-semibold tracking-wide uppercase shadow-xl"
          >
            Talk to an Expert
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 flex items-center justify-center bg-black/40 backdrop-blur-xl text-white border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden hover:border-[#f59e0b]/50 transition-colors duration-500"
        onClick={() => setIsContactFormOpen(true)}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative flex items-center justify-center shrink-0">
          <MessageCircle className="w-6 h-6 text-[#f59e0b]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#f59e0b] rounded-full border-2 border-black animate-pulse" />
        </div>
      </motion.button>

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        prefilledService={defaultService}
      />
    </div>
  );
}
