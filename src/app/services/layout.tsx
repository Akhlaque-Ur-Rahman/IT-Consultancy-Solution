import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | EDUNEX - Comprehensive IT Solutions",
  description: "End-to-end IT services including web development, mobile apps, CRM/ERP systems, digital marketing, and business compliance.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
