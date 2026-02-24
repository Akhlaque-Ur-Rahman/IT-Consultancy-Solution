import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bihar Business Blog — Tech Insights for Local Success",
  description:
    "Practical technology tips, GST guides, and growth strategies specifically for business owners in Patna and across Bihar.",
  keywords:
    "Patna Business, Bihar Technology, Local SEO Bihar, GST Filing Patna, SDM Bihar",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
