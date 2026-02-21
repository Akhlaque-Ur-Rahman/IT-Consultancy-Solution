import type { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "About EDUNEX",
  description:
    "Our story, mission, values, and the team behind EDUNEX’s enterprise solutions.",
};
 
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
