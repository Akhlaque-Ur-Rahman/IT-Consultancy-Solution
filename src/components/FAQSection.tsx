"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SectionHeading,
  SectionHeadingAccent,
} from "@/components/SectionHeading";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: React.ReactNode;
  description?: React.ReactNode;
  sectionClassName?: string;
  /** SectionHeading eyebrow (homepage default: "FAQ") */
  eyebrow?: string;
  /** e.g. `0` to open the first item on load */
  defaultOpenIndex?: number | null;
}

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  description,
  sectionClassName,
  eyebrow = "FAQ",
  defaultOpenIndex = null,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const baseId = useId();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 md:py-24",
        sectionClassName,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_-15%,rgba(245,158,11,0.07),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_80%,rgba(255,255,255,0.03),transparent_45%)]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-[880px] px-6">
        <motion.div
          className="mb-12 md:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeading eyebrow={eyebrow} align="center" className="mb-0">
            {typeof title === "string" &&
            (title === "Frequently Asked Questions" || !title) ? (
              <>
                Frequently Asked{" "}
                <SectionHeadingAccent>Questions</SectionHeadingAccent>
              </>
            ) : (
              title
            )}
          </SectionHeading>
          {description ? (
            <div className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-neutral-400 [text-wrap:balance]">
              {description}
            </div>
          ) : null}
        </motion.div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const headerId = `${baseId}-header-${index}`;
            const num = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border transition-all duration-300",
                  isOpen
                    ? "border-amber-500/25 bg-gradient-to-b from-[#181818] via-[#121212] to-[#0c0c0c] shadow-[0_0_0_1px_rgba(245,158,11,0.08),0_24px_56px_-32px_rgba(0,0,0,0.9),0_0_48px_-28px_rgba(245,158,11,0.08)]"
                    : "border-white/[0.07] bg-gradient-to-b from-[#141414] to-[#0a0a0a] hover:border-white/[0.12]",
                )}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-amber-500/[0.05] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <div
                  className={cn(
                    "absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700 transition-opacity duration-300",
                    isOpen ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden
                />

                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(index)}
                  className="relative flex w-full items-start gap-4 px-5 py-5 text-left md:gap-5 md:px-6 md:py-5"
                >
                  <span
                    className={cn(
                      "mt-0.5 shrink-0 tabular-nums text-xs font-medium tracking-widest transition-colors",
                      isOpen ? "text-amber-400/90" : "text-neutral-600 group-hover:text-neutral-500",
                    )}
                    aria-hidden
                  >
                    {num}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block text-base font-semibold leading-snug transition-colors md:text-[17px]",
                        isOpen ? "text-white" : "text-neutral-200 group-hover:text-white",
                      )}
                    >
                      {faq.question}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300",
                      isOpen
                        ? "border-amber-500/35 bg-amber-500/10 text-amber-300"
                        : "border-white/[0.08] bg-white/[0.03] text-neutral-500 group-hover:border-white/15 group-hover:text-neutral-300",
                    )}
                  >
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/[0.06] px-5 pb-5 pt-0 md:px-6 md:pb-6">
                        <p className="ml-0 border-l-2 border-amber-500/25 pl-4 text-[15px] leading-relaxed text-neutral-400 md:ml-[2.75rem] md:pl-5 [text-wrap:pretty]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
