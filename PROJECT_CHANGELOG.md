# Project changelog — EDUNEX website

This document records substantive changes made to **canonical domain strategy**, **Search Console–related SEO**, **hosting/DNS alignment**, and **UI/CRO (60-30-10 color hierarchy)**.

---

## 1. Canonical domain & redirects (SEO)

**Target canonical:** `https://edunexservices.in/` — HTTPS, non-www, trailing slash on root only via `SITE_URL_HOME`.

| Change | Purpose |
|--------|---------|
| `src/middleware.ts` | Single-hop **301** to `https://edunexservices.in` when host is `www.edunexservices.in` or `x-forwarded-proto` is `http`. Skips `localhost`, `127.0.0.1`, `*.vercel.app`. |
| `vercel.json` | Platform-level **permanent redirect** from `www.edunexservices.in` → `https://edunexservices.in/:path*`. |
| `next.config.mjs` | **`redirects()`** backup: same www → non-www (301). |
| `src/config/company.ts` | `SITE_URL` = `https://edunexservices.in`; added **`SITE_URL_HOME`** = `https://edunexservices.in/` for homepage canonical + OG. |
| `src/app/page.tsx` | `alternates.canonical` + `openGraph.url` use **`SITE_URL_HOME`**. |
| `src/components/WebSiteSchema.tsx` | `WebSite` schema **`url`** uses **`SITE_URL_HOME`**. |
| `src/app/contact/page.tsx` + `ContactClient.tsx` | Server **`page.tsx`** exports metadata with canonical **`/contact`** (no query-string duplication for crawlers). |
| `src/app/services/page.tsx` + `ServicesClient.tsx` | Same pattern for **`/services`**. |
| `src/app/contact/layout.tsx`, `services/layout.tsx` | Metadata removed from layouts (moved to server `page.tsx`). |
| `src/app/sitemap.ts` / `src/app/robots.ts` | Already use `NEXT_PUBLIC_BASE_URL \|\| SITE_URL` — ensure env is **non-www** in production. |

**Hosting note:** Redirect loops were resolved by aligning **Vercel Domains** (apex → Production; **www** → **308 permanent** to `edunexservices.in`) and **Cloudflare** (SSL **Full** / **Full (strict)**; optional **DNS only** / grey cloud to avoid proxy conflicts).

---

## 2. Content & metadata (indexing)

| Area | Change |
|------|--------|
| `src/app/compliance/page.tsx` | Added long-form section **“Our compliance process, documentation standards & data handling”** (~400+ words) for depth and uniqueness. |
| `src/app/compliance/layout.tsx` | Stronger, more specific **title** and **meta description**. |

---

## 3. UI / CRO — 60-30-10 color discipline

**Goal:** Reserve **amber/gold** (`#f59e0b` / `#d97706`) mainly for **primary CTAs** and **rare headline accents**; reduce “color noise” on icons, footers, and secondary actions.

| File | Summary |
|------|---------|
| `src/styles/theme.css` | Comment documenting accent usage for CRO. |
| `src/components/HeroModernAnimated.tsx` | Neutral eyebrow pill; **Portfolio** CTA → neutral outline; stat tiles → **white** numbers, neutral hovers (no gold stats). |
| `src/app/page.tsx` | Category cards: gray icons, gold **on hover only**; authority **h3** → white + **left gold border**; case-study eyebrow neutral; **View All Services / Case Studies** → outline (not gold gradient); final CTA **Learn More** neutral; background blurs → **white** at low opacity; FAQ title subtitle gray. |
| `src/components/ServiceCard.tsx` | Neutral icon tile; gray feature bullets; hover border/overlay neutral; **gold** retained as thin **bottom accent line** on hover. |
| `src/components/Footer.tsx` | Contact icons + trust SVGs **gray**; column titles **white**; link hovers **white**; newsletter focus neutral; **Subscribe** stays **gold**; social hover **gray**, not gold. |

**Unchanged (still primary conversion):** Header **Get Started**, Hero primary consultation CTA, final **Schedule Free Consultation**, footer **Subscribe**.

---

## 4. Files reference (quick list)

- **SEO / routing:** `src/middleware.ts`, `vercel.json`, `next.config.mjs`, `src/config/company.ts`, `src/app/layout.tsx` (existing `SITE_URL`), `src/app/page.tsx`, `src/app/contact/*`, `src/app/services/*`, `src/components/WebSiteSchema.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`
- **Compliance:** `src/app/compliance/page.tsx`, `src/app/compliance/layout.tsx`
- **CRO UI:** `src/styles/theme.css`, `src/components/HeroModernAnimated.tsx`, `src/app/page.tsx`, `src/components/ServiceCard.tsx`, `src/components/Footer.tsx`

---

## 5. Post-deploy checklist (Search Console)

1. Property uses **`https://edunexservices.in`** where applicable.  
2. Submit sitemap: `https://edunexservices.in/sitemap.xml`.  
3. **URL Inspection** on homepage and key URLs (non-www).  
4. **Indexing → Pages** → **Validate fix** per issue category after redirects stabilize.  
5. Expect **1–2+ weeks** for coverage to reflect changes.

---

*Last updated from development session documenting SEO, hosting alignment, and CRO UI passes.*
