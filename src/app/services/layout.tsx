import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Everything Your Patna Business Needs",
  description:
    "From fast websites and mobile apps to GST compliance and digital marketing. Simple tech for Bihar's growth.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
