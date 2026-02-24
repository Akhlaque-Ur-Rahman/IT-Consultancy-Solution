import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailored Solutions — Built for Bihar Business Workflows",
  description:
    "Custom billing software, CRM, and ERP systems designed to solve the unique challenges of businesses in Patna.",
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
