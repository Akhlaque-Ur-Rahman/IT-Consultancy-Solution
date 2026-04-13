import type { Metadata } from "next";
import { SITE_URL } from "@/config/company";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "IT Services, Custom App & Software Development Bihar | EDUNEX",
  description:
    "Discover our affordable IT services for SMEs in Bihar: Custom software, offline billing, local SEO, website design, and GST compliance automation.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
