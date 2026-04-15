import type { Metadata } from "next";
import { SITE_URL } from "@/config/company";

export const metadata: Metadata = {
  title: "Business Solutions for Shops & Clinics in Bihar | EDUNEX",
  description:
    "End-to-End Digital Solutions Provider in Patna. Billing, stock, follow-up, and filings built for real counters and godowns. Local support since 2018.",
  keywords: [
    "business solutions Patna",
    "billing and stock Bihar",
    "digital solutions for shops",
    "godown software Patna",
  ],
  alternates: {
    canonical: `${SITE_URL}/solutions`,
  },
  openGraph: {
    url: `${SITE_URL}/solutions`,
    title: "Simple Business Solutions | EDUNEX Patna",
    description:
      "Fewer mistakes, faster days, clearer numbers. One Patna team for apps, growth, and rules.",
    type: "website",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
