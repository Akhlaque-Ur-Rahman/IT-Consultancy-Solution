import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development in Bihar | EDUNEX",
  description:
    "Affordable custom software development for SMEs across Bihar. We build ERPs, billing systems, and mobile apps for businesses in Patna, Gaya, and Muzaffarpur.",
  alternates: {
    canonical: "https://edunexservices.in/software-development-bihar",
  },
};

export default function BiharSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
