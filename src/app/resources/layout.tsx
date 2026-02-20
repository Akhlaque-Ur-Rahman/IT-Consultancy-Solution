import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - Tech Insights, Blogs & Whitepapers",
  description:
    "Stay updated with the latest in technology. Access EDUNEX's blogs, whitepapers, and guides on Digital Transformation and IT trends.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
