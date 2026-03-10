import type { Metadata } from "next";
import { SITE_URL } from "@/config/company";

export const metadata: Metadata = {
  title: "Custom Billing & Operational Systems in Bihar | EDUNEX",
  description:
    "Simple, fast software made locally in Patna. We build inventory and billing systems that actually match how your godown or shop works.",
  alternates: {
    canonical: `${SITE_URL}/solutions`,
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
