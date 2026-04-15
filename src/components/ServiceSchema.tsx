import Script from "next/script";
import { SITE_URL } from "@/config/company";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  /** Absolute image URL for rich results (matches page hero asset). */
  image?: string;
}

export function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    ...(image ? { image } : {}),
    provider: {
      "@type": "Organization",
      name: "EDUNEX Services",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: url,
    serviceType: "Digital Business Solutions",
  };

  return (
    <Script
      id={`service-schema-${name.replace(/\s+/g, "-").toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
