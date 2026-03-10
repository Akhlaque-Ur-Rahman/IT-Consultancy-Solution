import type { Metadata } from "next";
import { SITE_URL } from "@/config/company";

export const metadata: Metadata = {
  title: "Free Software & IT Guides for Bihar Businesses | EDUNEX",
  description:
    "Download free checklists and guides that explain how small businesses in Patna and Bihar can easily start using digital tools and billing software.",
  alternates: {
    canonical: `${SITE_URL}/resources`,
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
