import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Business Tech Success Stories in Bihar | EDUNEX",
  description:
    "Explore how EDUNEX helps local shops, clinics, and distributors in Patna and across Bihar save time and money with simple digital solutions.",
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
