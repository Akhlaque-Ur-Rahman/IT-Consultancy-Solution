"use client";

import type { ReactNode } from "react";
import { FAQSection } from "@/components/FAQSection";
import { SectionHeadingAccent } from "@/components/SectionHeading";

interface FAQ {
  q: string;
  a: string;
}

type ServiceFAQsProps = {
  items: FAQ[];
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  /** Passed to the inner FAQ section (e.g. transparent when wrapped in SectionAmbient) */
  sectionClassName?: string;
};

/**
 * Service detail FAQs — same accordion UI as the homepage {@link FAQSection}.
 */
export const ServiceFAQs = ({
  items,
  title,
  subtitle,
  description,
  sectionClassName,
}: ServiceFAQsProps) => {
  const faqs = items.map((item) => ({
    question: item.q,
    answer: item.a,
  }));

  const headingTitle =
    title === undefined ||
    (typeof title === "string" && title === "Common Inquiries") ? (
      <>
        Common <SectionHeadingAccent>Inquiries</SectionHeadingAccent>
      </>
    ) : (
      title
    );

  const eyebrow =
    typeof subtitle === "string" ? subtitle : "Support & clarity";

  return (
    <FAQSection
      faqs={faqs}
      title={headingTitle}
      description={description}
      eyebrow={eyebrow}
      defaultOpenIndex={0}
      sectionClassName={sectionClassName}
    />
  );
};
