import Script from "next/script";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: "EDUNEX Services",
      url: "https://edunexservices.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: url,
    serviceType: "IT Consulting & Business Services",
  };

  return (
    <Script
      id={`service-schema-${name.replace(/\s+/g, "-").toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
