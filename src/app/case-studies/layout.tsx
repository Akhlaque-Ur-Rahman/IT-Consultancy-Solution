import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | EDUNEX Services",
  description:
    "Explore our success stories and see how we've helped businesses in Patna scale with custom software and strategic consulting.",
  alternates: {
    canonical: "https://edunexservices.in/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
