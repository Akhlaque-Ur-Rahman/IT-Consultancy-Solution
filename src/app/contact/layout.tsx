import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | EDUNEX Services",
  description:
    "Get in touch with the EDUNEX team. We are ready to help you build, grow, and manage your business technology.",
  alternates: {
    canonical: "https://edunexservices.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
