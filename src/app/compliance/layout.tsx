import type { Metadata } from "next";
import { SITE_URL } from "@/config/company";

export const metadata: Metadata = {
  title:
    "Business Compliance Patna | GST, FSSAI, Trade License & Shop Act | EDUNEX",
  description:
    "EDUNEX helps Bihar SMEs with GST registration, monthly filing support, FSSAI, Trade License, and Shop Act compliance - with clear documentation and Patna-based coordination.",
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
