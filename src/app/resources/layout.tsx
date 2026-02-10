import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Insights | EDUNEX - Knowledge Hub",
  description: "Access whitepapers, guides, and blog posts on digital transformation, cloud computing, and enterprise technology trends.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
