import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team — Simple Tech for Patna Business Success",
  description:
    "Learn why Patna business owners trust EDUNEX for honest technology, expert advice, and reliable software since 2012.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
