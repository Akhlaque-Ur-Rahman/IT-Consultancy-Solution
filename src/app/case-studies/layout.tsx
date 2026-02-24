import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories — See How We Help Patna Businesses Grow",
  description:
    "Real results for 90+ local business owners in Bihar. See how our simple software solved real problems.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
