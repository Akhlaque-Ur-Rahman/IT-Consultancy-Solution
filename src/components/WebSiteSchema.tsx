import Script from "next/script";
import { SITE_URL, SITE_URL_HOME } from "@/config/company";

/** WebSite only — no SearchAction until a real /search exists */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "EDUNEX Services",
    url: SITE_URL_HOME,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
