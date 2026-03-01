import Script from "next/script";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EDUNEX Services",
    url: "https://edunexservices.in",
    logo: "https://edunexservices.in/logo.png",
    description:
      "Enterprise digital transformation and business compliance consulting based in Patna, Bihar.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ward 15, Phulwari Sharif",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "801505",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7070809208",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/edunexservices",
      "https://twitter.com/edunexservices",
      "https://www.facebook.com/edunexservices",
    ],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
