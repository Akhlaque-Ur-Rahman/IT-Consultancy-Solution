import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Articles, guides, FAQs, and downloads to support your digital initiatives.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
