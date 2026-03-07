import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Consulting Company in Patna, Bihar | EDUNEX",
  description:
    "Top-rated IT consulting in Patna. From Frazer Road to Kankarbagh, we help local businesses grow with reliable software, billing systems, and expert tech advice.",
  alternates: {
    canonical: "https://edunexservices.in/it-consulting-patna",
  },
};

export default function PatnaITConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
