import type { Metadata } from "next";
import { SITE_URL } from "@/config/company";

export const metadata: Metadata = {
  title: "Terms of Service | EDUNEX",
  description:
    "Service terms and conditions for using EDUNEX IT and compliance services.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
