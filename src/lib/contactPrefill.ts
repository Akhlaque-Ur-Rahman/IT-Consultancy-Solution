import { CONTACT_FORM_SERVICES } from "@/lib/contactFormOptions";

/** Map URL `engagement=` slugs to readable labels (engagement model cards). */
const ENGAGEMENT_LABELS: Record<string, string> = {
  "project-based": "Project-Based - Fixed Quote",
  "dedicated-team": "Dedicated Team - Monthly Retainer",
  consulting: "Consulting - Hourly / Weekly",
  "fixed-project": "Fixed project - Fixed quote",
  "monthly-partner": "Monthly partner - Monthly retainer",
  "advice-blocks": "Advice blocks - Hourly or weekly",
};

/**
 * Resolve `service` query value to a valid CONTACT_FORM_SERVICES slug.
 */
export function resolveContactServiceSlug(
  raw: string | null | undefined,
): string {
  if (!raw) return "consulting";
  const n = raw.toLowerCase().trim();
  const exact = CONTACT_FORM_SERVICES.find((s) => s.slug === n);
  if (exact) return exact.slug;
  const dashed = n.replace(/\s+/g, "-");
  const alt = CONTACT_FORM_SERVICES.find((s) => s.slug === dashed);
  if (alt) return alt.slug;
  return "other";
}

export function getServiceLabelForSlug(slug: string): string {
  return (
    CONTACT_FORM_SERVICES.find((s) => s.slug === slug)?.label ?? "Other"
  );
}

export function getEngagementLabel(
  engagementSlug: string | null | undefined,
): string | null {
  if (!engagementSlug) return null;
  const k = engagementSlug.toLowerCase().trim();
  return ENGAGEMENT_LABELS[k] ?? null;
}

/**
 * Default message body when arriving from service / engagement CTAs.
 */
export function buildContactPrefillMessage(args: {
  serviceSlug: string;
  engagementSlug?: string | null;
  refPath?: string | null;
}): string {
  const serviceLabel = getServiceLabelForSlug(args.serviceSlug);
  const eng = getEngagementLabel(args.engagementSlug);
  const lines: string[] = [];
  if (eng) {
    lines.push(`I'm interested in: ${eng}.`);
  }
  lines.push(`Service focus: ${serviceLabel}.`);
  if (args.refPath) {
    lines.push(`Opened from: ${args.refPath}`);
  }
  lines.push("");
  lines.push("Tell us about your goals and timeline:");
  return lines.join("\n");
}

/**
 * Compact source string for analytics / CRM (stored with submission).
 */
export function buildContactSubmissionSource(args: {
  refPath?: string | null;
  engagementSlug?: string | null;
}): string {
  const parts = ["contact_page"];
  if (args.refPath) parts.push(`ref:${args.refPath}`);
  if (args.engagementSlug) parts.push(`eng:${args.engagementSlug}`);
  return parts.join("|");
}

/** Stable slug for engagement card titles (Project-Based → project-based). */
export function slugifyEngagementTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Contact page URL with optional service, engagement model, and referring path.
 */
export function buildContactUrl(args: {
  serviceSlug: string;
  engagement?: string;
  ref?: string;
}): string {
  const p = new URLSearchParams();
  p.set("service", args.serviceSlug);
  if (args.engagement) p.set("engagement", args.engagement);
  if (args.ref) p.set("ref", args.ref);
  return `/contact?${p.toString()}`;
}
