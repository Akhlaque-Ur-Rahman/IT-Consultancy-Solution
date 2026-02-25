"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import GoToTopButton from "@/components/GoToTopButton";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const routes = [
    "/",
    "/about",
    "/services",
    "/solutions",
    "/case-studies",
    "/compliance",
    "/contact",
    "/resources",
    "/blog",
  ];

  const showChrome = routes.some((r) => {
    if (r === "/") return pathname === "/";
    return pathname.startsWith(r);
  });

  if (!showChrome) {
    return <main className="min-h-screen">{children}</main>;
  }

  // Extract current service slug if on a service page
  const currentService = pathname.startsWith("/services/")
    ? pathname.split("/services/")[1].split("/")[0]
    : "";

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">{children}</main>
      <GoToTopButton />
      <Footer />
      <ConsultationCTA defaultService={currentService} />
    </>
  );
}
