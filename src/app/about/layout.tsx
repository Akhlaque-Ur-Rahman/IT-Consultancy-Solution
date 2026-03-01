import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | EDUNEX Services",
  description:
    "Meet the team behind EDUNEX. We've been helping Patna business owners grow with simple, honest technology and expert advice since 2012.",
  alternates: {
    canonical: "https://edunexservices.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
