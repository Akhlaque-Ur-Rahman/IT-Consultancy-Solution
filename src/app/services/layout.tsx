import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services, Custom App & Software Development Bihar | EDUNEX",
  description:
    "Discover our affordable IT services for SMEs in Bihar: Custom software, offline billing, local SEO, website design, and GST compliance automation.",
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
