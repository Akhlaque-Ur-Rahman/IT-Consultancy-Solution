import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Whitepapers | EDUNEX Services",
  description:
    "Insights, guides, and knowledge to help you make informed decisions for your business growth.",
  alternates: {
    canonical: "https://edunexservices.in/resources",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
