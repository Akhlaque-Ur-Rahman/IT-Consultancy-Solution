# Image Placeholder Locations and Recommendations

This document outlines all image placeholder locations found in the codebase and provides recommendations for suitable replacement images.

## 1. Dynamic Data Placeholders (src/data/mockData.ts)

These images are dynamically generated using keywords in the `mockData.ts` file.

### Case Studies
*   **RetailCo (ID: 1)**
    *   **Current Keyword:** ecommerce retail
    *   **Recommendation:** Modern warehouse automation or sleek e-commerce dashboard on a screen.
    *   **Dimensions:** 800x600
    *   **Color Reference:** Dark industrial tones (Grays/Blacks) with Amber/Gold highlights (`#f59e0b`) to match the "Elite Black-Gold" theme.

*   **MediCare (ID: 2)**
    *   **Current Keyword:** healthcare medical
    *   **Recommendation:** Doctor using a tablet/digital interface or clean hospital lobby.
    *   **Dimensions:** 800x600
    *   **Color Reference:** Clean White/Blue tints, but with deep shadows or high contrast to pop against the `#121212` card background.

*   **QuickServe (ID: 3)**
    *   **Current Keyword:** delivery logistics
    *   **Recommendation:** Delivery fleet map visualization or courier with a mobile device.
    *   **Dimensions:** 800x600
    *   **Color Reference:** Night-time city logistics scene (Dark Blue/Black) with warm streetlights or orange accent markers (`#ea580c`).

### Testimonials
*   **Vikram (ID: 1)**
    *   **Current Keyword:** business professional
    *   **Recommendation:** Professional headshot, male, corporate attire (suit/blazer).
    *   **Dimensions:** 200x200
    *   **Color Reference:** Neutral background (Dark Gray `#262626` or Light Gray `#f5f5f5`) to maintain focus on the face.

*   **Anjali (ID: 2)**
    *   **Current Keyword:** business woman
    *   **Recommendation:** Professional headshot, female, smart business casual.
    *   **Dimensions:** 200x200
    *   **Color Reference:** Soft lighting, neutral background; avoid overly bright/neon colors that clash with the Gold accent.

*   **Rohit (ID: 3)**
    *   **Current Keyword:** entrepreneur
    *   **Recommendation:** Modern entrepreneur headshot, perhaps in a startup office setting.
    *   **Dimensions:** 200x200
    *   **Color Reference:** Warm ambient lighting (`#fbbf24` tones) or dark office backdrop (`#0a0a0a`).

### Blog Posts
*   **Tech Trends (ID: 1)**
    *   **Current Keyword:** technology trends
    *   **Recommendation:** Abstract digital network, AI visualization, or futuristic cityscape.
    *   **Dimensions:** 800x600
    *   **Color Reference:** Cyberpunk/Tech aesthetic: Deep Blacks (`#000000`) with glowing Gold (`#f59e0b`) or Cyan lines.

*   **GST Guide (ID: 2)**
    *   **Current Keyword:** business compliance
    *   **Recommendation:** Close-up of signing a document, calculator, or neatly organized paperwork.
    *   **Dimensions:** 800x600
    *   **Color Reference:** Muted, professional tones (Slate Gray `#404040`, Gold `#d97706` for pens/details).

*   **E-commerce (ID: 3)**
    *   **Current Keyword:** ecommerce platform
    *   **Recommendation:** Online shopping concept, credit card payment, or shopping cart on laptop.
    *   **Dimensions:** 800x600
    *   **Color Reference:** Sleek Dark Mode UI concept or Black/Gold product photography style.

### Team Members
*   **Arjun - CEO (ID: 1)**
    *   **Current Keyword:** business leader male
    *   **Recommendation:** Executive portrait, confident, office background.
    *   **Dimensions:** 400x600
    *   **Color Reference:** Dark suit, dramatic lighting (Rembrandt style), background falling into deep shadow (`#121212`).

*   **Priya - CTO (ID: 2)**
    *   **Current Keyword:** tech leader female
    *   **Recommendation:** Tech-focused portrait, maybe with a laptop or server room background.
    *   **Dimensions:** 400x600
    *   **Color Reference:** Cool Blue/Gray tones with warm key light (`#fcd34d`) on the face.

*   **Rahul - Design (ID: 3)**
    *   **Current Keyword:** designer male
    *   **Recommendation:** Creative portrait, casual-professional, maybe in a studio.
    *   **Dimensions:** 400x600
    *   **Color Reference:** Minimalist Black & White or monochromatic with a single Gold accent prop.

*   **Neha - Compliance (ID: 4)**
    *   **Current Keyword:** professional female
    *   **Recommendation:** Formal professional portrait, solid color or library background.
    *   **Dimensions:** 400x600
    *   **Color Reference:** Rich, deep background colors (Dark Teal `#115e59` or Charcoal `#262626`).

## 2. Component-Specific Placeholders

These are hardcoded or static references in the component files.

*   **Header Logo**
    *   **Location:** src/components/Header.tsx
    *   **Context:** Site Logo
    *   **Recommendation:** EDUNEX Logo. High-contrast, transparent background (PNG/SVG).
    *   **Dimensions:** Height: ~56px
    *   **Color Reference:** **Primary:** Gold (`#f59e0b`) or White (`#ffffff`) icon/text. **Background:** Transparent (must work on `#000000` header).

*   **Footer Logo**
    *   **Location:** src/components/Footer.tsx
    *   **Context:** Site Logo
    *   **Recommendation:** EDUNEX Logo. White/Light version for dark background.
    *   **Dimensions:** Height: ~56px
    *   **Color Reference:** **Primary:** All White (`#ffffff`) or Muted Gold (`#d97706`). **Background:** Transparent (must work on `#000000` footer).

*   **About Page Story Image**
    *   **Location:** src/app/about/page.tsx
    *   **Context:** "Our Story" Section
    *   **Recommendation:** Modern Office Team. A collaborative meeting scene, open-plan office, or team working on whiteboards.
    *   **Dimensions:** 800x600
    *   **Color Reference:** Warm, inviting atmosphere (`#fbbf24` lighting) but with dark clothing/furniture to ground the image in the site's theme.

## 3. Potential Image Upgrades

These sections currently use text or CSS fallbacks but would benefit from real images.

*   **Client Logos (TrustCarousel.tsx)**
    *   **Current State:** Displays text names (Apollo Hospitals, HDFC Bank, Flipkart, etc.)
    *   **Recommendation:** Company Logos. Grayscale or monochrome SVGs for a unified, professional look.
    *   **Color Reference:** **Grayscale:** Opacity 50-70% White (`rgba(255,255,255,0.6)`) on inactive, Full Gold (`#f59e0b`) or White on hover.

*   **Reviews (GMBStyleReviews.tsx)**
    *   **Current State:** Displays initials (e.g., "R")
    *   **Recommendation:** User Avatars. Small headshots of real reviewers to increase trust.
    *   **Color Reference:** Natural photography, but ensure the surrounding ring/border uses the Gold accent (`#f59e0b`).
