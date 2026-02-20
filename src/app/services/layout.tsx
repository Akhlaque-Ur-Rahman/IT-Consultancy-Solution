import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services - Web Development, App Dev & Marketing",
  description:
    "Explore our comprehensive IT services: Custom Web Development, Mobile Apps, Digital Marketing, and strategic IT Consulting for growth.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
