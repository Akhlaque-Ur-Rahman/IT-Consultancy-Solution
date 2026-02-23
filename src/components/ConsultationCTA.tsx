"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function ConsultationCTA({
  defaultService = "",
}: {
  defaultService?: string;
}) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 px-6 py-3 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black font-semibold rounded-md shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-200 z-50 group"
        onClick={() => setIsContactFormOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Request Consultation
        </span>
      </motion.button>

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        prefilledService={defaultService}
      />
    </>
  );
}
