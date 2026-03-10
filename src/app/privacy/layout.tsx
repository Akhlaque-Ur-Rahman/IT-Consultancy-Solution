import type { Metadata } from "next";
import { SITE_URL } from "@/config/company";

export const metadata: Metadata = {
  title: "Privacy Policy | EDUNEX",
  description:
    "Read our Privacy Policy to understand how we collect, use, and protect your information.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
