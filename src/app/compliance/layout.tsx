import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Compliance Services - GST, Tax & Legal",
  description:
    "Complete business compliance solutions in India. Expert assistance with Company Registration, GST filing, Trademark, and Legal documentation.",
};

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
