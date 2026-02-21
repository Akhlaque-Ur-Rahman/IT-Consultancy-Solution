import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "Business registration, GST & tax compliance, trademarks, and legal support services.",
};

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
