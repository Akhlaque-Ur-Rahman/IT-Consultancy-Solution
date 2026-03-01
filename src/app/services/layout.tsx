import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | EDUNEX Services",
  description:
    "Custom websites, mobile apps, CRM solutions, digital marketing, and business compliance services for companies in Patna.",
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
