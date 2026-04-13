import type { Metadata } from "next";
import { SITE_URL } from "@/config/company";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Your Local IT Experts in Patna, Bihar | EDUNEX",
  description:
    "Need a billing software, basic website, or GST help? Contact EDUNEX's local Patna team today for honest tech support in Bihar.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
