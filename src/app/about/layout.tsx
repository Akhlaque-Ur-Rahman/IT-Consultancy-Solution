import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | EDUNEX - IT Consulting & Software Development",
  description: "Learn about EDUNEX's journey, values, and the expert team driving digital transformation for businesses since 2015.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
