import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - Real Results & Success Stories",
  description:
    "Discover how EDUNEX helps businesses succeed. Improved efficiency, ROI, and digital transformation success stories from our clients.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
