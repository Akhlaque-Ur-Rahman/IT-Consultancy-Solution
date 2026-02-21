import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore EDUNEX’s complete portfolio: development, CRM/ERP, marketing, UI/UX, and compliance.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
