import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Software & IT Guides for Bihar Businesses | EDUNEX",
  description:
    "Download free checklists and guides that explain how small businesses in Patna and Bihar can easily start using digital tools and billing software.",
  alternates: {
    canonical: "https://edunexservices.in/resources",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
