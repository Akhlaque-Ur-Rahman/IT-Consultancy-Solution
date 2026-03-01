import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Compliance | EDUNEX Services",
  description:
    "End-to-end business registration, tax filing, GST compliance, and accounting services for businesses in Bihar.",
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
