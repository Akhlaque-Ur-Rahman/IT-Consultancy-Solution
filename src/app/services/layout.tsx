import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise IT Services & Custom Software | EDUNEX",
  description:
    "Discover our comprehensive suite of managed IT services, including AI-driven custom software development, cloud migration, and data analytics consulting.",
  alternates: {
    canonical: "https://edunexservices.in/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
