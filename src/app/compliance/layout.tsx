import type { Metadata } from "next";
import { SITE_URL } from "@/config/company";

export const metadata: Metadata = {
  title: "GST, FSSAI & Business Registration in Patna | EDUNEX",
  description:
    "Fast, hassle-free business compliance in Bihar. Get your GST, Trade License, Shop Act, or FSSAI registration done without visiting government offices.",
  alternates: {
    canonical: `${SITE_URL}/compliance`,
  },
};

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
