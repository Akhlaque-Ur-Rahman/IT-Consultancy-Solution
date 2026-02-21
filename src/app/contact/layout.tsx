import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact EDUNEX",
  description:
    "Contact EDUNEX for consulting, development, CRM/ERP, and marketing solutions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
