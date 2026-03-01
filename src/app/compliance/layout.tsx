import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Compliance & Risk Management | EDUNEX",
  description:
    "Expert regulatory compliance and comprehensive risk management for enterprises. Protect your business with our tailored corporate governance solutions.",
  alternates: {
    canonical: "https://edunexservices.in/compliance",
  },
};

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
