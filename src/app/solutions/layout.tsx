import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Cloud & Software Solutions | EDUNEX",
  description:
    "Transform your operations with EDUNEX's custom enterprise software solutions, B2B SaaS architecture, and seamlessly integrated scalable workflows.",
  alternates: {
    canonical: "https://edunexservices.in/solutions",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
