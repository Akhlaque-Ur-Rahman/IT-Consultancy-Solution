import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | EDUNEX - Start Your Digital Transformation",
  description: "Get in touch with EDUNEX for expert IT consulting, software development, and digital marketing services.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
