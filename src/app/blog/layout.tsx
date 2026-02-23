import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | EDUNEX - Insights on Digital Transformation & Regional Growth",
  description:
    "Explore the latest insights, technology trends, and business strategies for regional enterprises and growing businesses.",
  keywords:
    "IT Blog, Digital Transformation, Regional Business Bihar, Software Development Insights",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
