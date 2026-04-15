/** Canonical origin (HTTPS, non-www). No trailing slash - append paths as `/path`. */
export const SITE_URL = "https://edunexservices.in";

/** Homepage canonical URL per Search Console preference (root uses trailing slash). */
export const SITE_URL_HOME = `${SITE_URL}/`;

/** Default Open Graph / Twitter share image (public path). Keep alt text human-readable for accessibility in social previews. */
export const OG_SHARE_IMAGE_PATH = "/Services/Home_Hero.webp";
export const OG_SHARE_IMAGE_ALT =
  "EDUNEX digital solutions preview for shops and clinics in Bihar";
/** Declared dimensions match next/image hero asset to avoid CLS hints in metadata. */
export const OG_SHARE_IMAGE_WIDTH = 1600;
export const OG_SHARE_IMAGE_HEIGHT = 1000;

/** SEO limits: Google typically truncates at ~60 title / ~160 description chars */
export const META_TITLE_MAX = 65;
export const META_DESC_MAX = 165;

export function truncateMeta(s: string, max: number): string {
  if (s.length <= max) return s;
  const trimmed = s.slice(0, max - 3).trim();
  const lastSpace = trimmed.lastIndexOf(" ");
  return lastSpace > max * 0.6 ? trimmed.slice(0, lastSpace) + "…" : trimmed + "…";
}

/** High-volume keywords for Patna/Bihar - used in metadata and content */
export const SEO_KEYWORDS = {
  primary: [
    "Software Development Patna",
    "Business Software Patna",
    "Billing Software Patna",
    "GST Registration Patna",
    "Custom Software Bihar",
    "ERP Software Patna",
    "Web Development Patna",
    "Digital Marketing Patna",
    "Local SEO Patna",
    "Digital Solutions Bihar",
  ],
  secondary: [
    "Mobile App Development Patna",
    "E-commerce Development Patna",
    "GST Registration Bihar",
    "Billing Software Bihar",
    "Hospital Management Software Patna",
    "Retail Billing Software Patna",
    "Company Registration Patna",
    "FSSAI License Patna",
    "Business Registration Bihar",
  ],
  location: ["Patna", "Bihar", "Phulwari Sharif", "Kankarbagh", "Boring Road"],
  /** Per-service keywords for metadata */
  serviceKeywords: {
    "custom-software-bihar": [
      "Custom Software Development Patna",
      "Business Software Patna",
      "Web App Development Bihar",
      "Mobile App Development Patna",
    ],
    "erp-billing-software": [
      "Billing Software Patna",
      "GST Billing Software Patna",
      "ERP Software Patna",
      "Inventory Software Bihar",
    ],
    "local-seo-marketing": [
      "Digital Marketing Patna",
      "Local SEO Patna",
      "Google Maps SEO Bihar",
    ],
    "ui-ux-design": ["UI/UX Design Patna", "App Design Bihar"],
    "ecommerce-solutions": [
      "E-commerce Development Patna",
      "Online Store Bihar",
    ],
    "gst-business-registration": [
      "GST Registration Patna",
      "GST Registration Bihar",
      "Business Registration Patna",
      "Company Registration Bihar",
    ],
    "lead-management-systems": ["CRM Patna", "Lead Management Bihar"],
    "ivr-calling-solutions": ["IVR Solution Patna", "Business Phone System Bihar"],
    "hyperlocal-platform-dev": ["Delivery App Patna", "Hyperlocal Platform Bihar"],
    "seo-optimization-expert": ["SEO Patna", "Website Optimization Bihar"],
    "animation-graphics-design": ["Video Animation Patna", "Explainer Videos Bihar"],
  } as Record<string, string[]>,
};

export const COMPANY_INFO = {
  /** Operating years from founding (2018 → present). */
  yearsOfExperience: 8,
  team: {
    ceo: {
      name: "Md Nafees Hussain",
      role: "CEO and Founder"
    },
    coFounder: {
      name: "Md Hafeez Hussain",
      role: "Co-Founder"
    },
    cto: {
      name: "Akhlaque Ur Rahman",
      role: "CTO"
    }
  }
};
