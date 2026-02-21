import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Custom CRM, ERP, and tailored software solutions designed for your business workflows.",
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
