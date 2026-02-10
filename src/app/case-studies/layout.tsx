import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | EDUNEX - Success Stories & Client Impact",
  description: "Explore real-world examples of how EDUNEX has helped businesses achieve measurable success through custom technology solutions.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
