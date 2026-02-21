import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore case studies showcasing measurable results across industries with EDUNEX.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
