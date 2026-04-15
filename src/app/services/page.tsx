import type { Metadata } from "next";
import { SITE_URL } from "@/config/company";

import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Digital Solutions for Shops & Clinics in Bihar | EDUNEX",
  description:
    "End-to-End Digital Solutions Provider in Patna. Billing, stock, apps, local reach, design, and filings. Simple talk. Local support since 2018.",
  keywords: [
    "business software Patna",
    "billing software Bihar",
    "digital solutions Patna",
    "GST help Patna",
    "local business software Bihar",
  ],
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    url: `${SITE_URL}/services`,
    title: "Digital Solutions for Bihar Businesses | EDUNEX",
    description:
      "Simple systems for billing, stock, growth, and rules. One Patna team for shops, clinics, and godowns.",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
