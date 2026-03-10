import type { Metadata } from "next";
import { SITE_URL } from "@/config/company";

export const metadata: Metadata = {
  title: "Local IT Consulting & Software Experts in Bihar | EDUNEX",
  description:
    "Partner with EDUNEX, Patna's trusted technology experts. We build custom software, billing systems, and provide reliable IT support for Bihar businesses.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
