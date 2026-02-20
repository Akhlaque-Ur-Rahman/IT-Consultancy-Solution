import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About EDUNEX - Leading IT Consulting Firm in India",
  description:
    "Learn about EDUNEX's mission to drive digital transformation. We provide top-tier IT consulting and software solutions for global businesses.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
