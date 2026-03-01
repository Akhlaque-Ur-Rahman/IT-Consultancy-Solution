import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Solutions | EDUNEX Services",
  description:
    "End-to-end enterprise solutions for workflow automation, digital transformation, and business scaling.",
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
