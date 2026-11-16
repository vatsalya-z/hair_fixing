# Hair Fixing Studio – Web Application

A high-performance Next.js 16 (App Router) website for **ozzone Hair Fixing & Replacement Studio**, serving clients in Thiruvananthapuram (Kerala) and Bangalore (Karnataka). Built with React 19, TypeScript, Tailwind CSS v4, and modern SEO & UI/UX best practices.

---

## Individual Service Pages

The website features six dedicated individual service detail pages built on dynamic App Router architecture (`app/services/[slug]/page.tsx`), providing deep informational content, service-specific FAQs, interactive Google Maps for verified studio locations, realistic imagery, technical SEO schemas, and internal silo linking.

### 1. Implemented Service Pages & Routes

| # | Service Name | Dedicated Route URL | Canonical URL | Category |
|---|---|---|---|---|
| 1 | **Custom Hair Patching System** | `/services/custom-hair-patching/` | `https://hair-fixing.vercel.app/services/custom-hair-patching/` | Hair Patch Systems |
| 2 | **Dermatological Hair Bonding** | `/services/dermatological-hair-bonding/` | `https://hair-fixing.vercel.app/services/dermatological-hair-bonding/` | Hair Bonding Methods |
| 3 | **Non-Surgical Hair Weaving** | `/services/non-surgical-hair-weaving/` | `https://hair-fixing.vercel.app/services/non-surgical-hair-weaving/` | Weaving Techniques |
| 4 | **Full Scalp Non-Surgical Replacement** | `/services/full-scalp-non-surgical-replacement/` | `https://hair-fixing.vercel.app/services/full-scalp-non-surgical-replacement/` | Full Cranial Systems |
| 5 | **Women's Crown Toppers & Extensions** | `/services/womens-crown-toppers-extensions/` | `https://hair-fixing.vercel.app/services/womens-crown-toppers-extensions/` | Women's Hair Systems |
| 6 | **Hair Patch Servicing & Scalp Spa** | `/services/hair-patch-servicing-scalp-spa/` | `https://hair-fixing.vercel.app/services/hair-patch-servicing-scalp-spa/` | Maintenance & Servicing |

---

### 2. Service Page Folder & File Structure

```text
hair_fixing/
├── app/
│   ├── services/
│   │   ├── page.tsx                     # Main Services listing page (updated with 6 service cards & anchor targets)
│   │   └── [slug]/
│   │       └── page.tsx                 # Dynamic service detail page (SSG with generateStaticParams)
│   ├── sitemap.ts                       # Dynamic Next.js sitemap including all 6 service routes
│   └── robots.ts                        # Crawler configuration
├── components/
│   ├── ServiceFAQAccordion.tsx          # Accessible, animated accordion for service FAQs
│   ├── ServiceMapsSection.tsx           # Multi-location interactive Google Maps embed (Trivandrum & Bangalore)
│   ├── Header.tsx                       # Global header navigation
│   └── Footer.tsx                       # Global footer with direct links to all 6 service pages
├── data/
│   ├── serviceDetailData.ts             # Rich structured content, FAQs, process steps, and highlights for 6 services
│   └── siteData.ts                      # Core site data and SERVICES_DATA array with href mappings
└── public/
    ├── sitemap.xml                      # Production XML sitemap with 6 service routes
    └── images/
        └── services/                    # Organized service imagery directory
            ├── custom-hair-patching-hero.webp
            ├── custom-hair-patching-detail.webp
            ├── hair-bonding-hero.webp
            ├── hair-bonding-detail.webp
            ├── hair-weaving-hero.webp
            ├── hair-weaving-detail.webp
            ├── full-scalp-replacement-hero.webp
            ├── full-scalp-replacement-detail.webp
            ├── womens-crown-toppers-hero.webp
            ├── womens-crown-toppers-detail.webp
            ├── hair-patch-servicing-hero.webp
            └── hair-patch-servicing-detail.webp
```

---

### 3. Reusable Components

- **`ServiceFAQAccordion.tsx`**: Client component managing accessible open/close state for service-specific FAQs with smooth CSS transitions, numbered badges, and SVG chevron rotation.
- **`ServiceMapsSection.tsx`**: Client component featuring a studio switcher tab between **Thiruvananthapuram (Palayam)** and **Bengaluru (Indiranagar)**. Displays verified studio addresses, landmarks, direct contact numbers, and responsive Google Maps iframes with zero horizontal overflow.

---

### 4. Image Folder Structure

All service images are stored in `/public/images/services/`:
- **Unique Hero Images**: Full-width commercial photography with natural Indian models, realistic hair textures, undetectable hairlines, and modern studio lighting matching the brand's blue/cyan aesthetic (`#075078`, `#29B6EB`).
- **Supporting Detail Images**: Macro and close-up views illustrating Swiss lace construction, hypoallergenic bonding preparations, micro-track weaving links, full cranial units, silk-base partings, and scalp spa treatments.

---

### 5. SEO Metadata & Canonical Implementation

Each service page implements comprehensive Next.js metadata via `generateMetadata()`:
1. **Title**: Unique, keyword-optimized title format (`<Service Title> | ozzone Hair`).
2. **Meta Description**: Specific description highlighting benefits, materials, and consultation availability.
3. **Canonical URL**: Self-referencing canonical URL pointing to `https://hair-fixing.vercel.app/services/<slug>/`.
4. **Open Graph & Twitter Cards**: Full-width social cards with optimized title, description, and 1200x675 image.
5. **Schema.org Structured Data (JSON-LD)**:
   - `Service`: Defines service name, description, provider details, telephone, and area served (Trivandrum & Bengaluru).
   - `BreadcrumbList`: `Home > Services > <Service Title>`.
   - `FAQPage`: Questions and answers for search engine rich snippets.

---

### 6. SEO Silo Architecture & Internal Linking

The implementation enforces a strict hierarchical SEO silo:
1. **Top-Level Hub (`/services/`)**: Displays the full catalog of specialized services, linking directly to each detail page while retaining backward-compatible anchor IDs (`#hair-patching`, `#hair-bonding`, etc.).
2. **Breadcrumb Silo**: Every service detail page includes breadcrumbs linking back to `/` and `/services/`.
3. **Contextual Cross-Linking (Related Services)**: Every service detail page features an **"Explore Our Other Services"** section presenting the other 5 services with complete clickable cards (excluding the current page).
4. **Location & Conversion Funnels**: Sticky consultation sidebars and full-width CTA sections link to `/contact/`, Trivandrum/Bangalore studio helplines, and WhatsApp booking routes.
5. **Global Navigation**: The global `Footer.tsx` directly links to all six dedicated routes.

---

### 7. Sitemap Integration

All six service pages are integrated into:
- `hair_fixing/app/sitemap.ts` (Next.js App Router dynamic sitemap) with `changeFrequency: 'weekly'` and `priority: 0.9`.
- `hair_fixing/public/sitemap.xml` (Static XML sitemap matching canonical URLs).

---

### 8. How to Add Another Service Page in the Future

Adding a new service page requires only two simple steps thanks to the centralized dynamic architecture:

#### Step 1: Add the Service Entry in `data/serviceDetailData.ts`
```typescript
// in hair_fixing/data/serviceDetailData.ts
export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  // ... existing services ...
  'laser-hair-therapy': {
    slug: 'laser-hair-therapy',
    legacyAnchor: 'laser-therapy',
    title: 'Low-Level Laser Hair Therapy',
    shortDesc: 'Non-invasive phototherapy stimulation for hair maintenance.',
    category: 'Therapies',
    heroBadge: 'Scalp Therapy',
    heroDescription: 'Clinical scalp photobiomodulation in private suites.',
    heroImage: '/images/services/laser-therapy-hero.webp',
    heroImageAlt: 'Low-Level Laser Hair Therapy',
    metaTitle: 'Low-Level Laser Hair Therapy | ozzone Hair',
    metaDescription: 'Non-invasive laser hair therapy sessions in Trivandrum & Bangalore.',
    canonicalUrl: 'https://hair-fixing.vercel.app/services/laser-hair-therapy/',
    introHeading: 'Clinical Photobiomodulation for Follicle Vitality',
    introParagraphs: ['Paragraph 1...', 'Paragraph 2...'],
    introImage: '/images/services/laser-therapy-detail.webp',
    introImageAlt: 'Laser therapy session in studio',
    targetAudience: ['Early thinning clients', 'Maintenance clients'],
    sections: [
      {
        heading: 'How Low-Level Light Therapy Works',
        paragraphs: ['Detailed explanation...']
      }
    ],
    inArticleImage: {
      src: '/images/services/laser-therapy-detail.webp',
      alt: 'Laser hood equipment in studio',
      caption: 'Certified phototherapy equipment.'
    },
    processHeading: 'Treatment Protocol',
    processSubheading: 'Relaxing 30-minute sessions.',
    processSteps: [
      { step: '01', title: 'Consultation', description: 'Scalp scan...' },
      { step: '02', title: 'Application', description: 'Laser hood...' }
    ],
    keyHighlights: [
      { title: 'Pain-Free', description: 'Zero heat, zero pain.' }
    ],
    faqs: [
      { question: 'Is laser therapy safe?', answer: 'Yes, completely non-thermal.' }
    ],
    relatedSlugs: ['custom-hair-patching', 'hair-patch-servicing-scalp-spa']
  }
}
```

#### Step 2: Add Images to `/public/images/services/`
Place your hero and detail images in `/public/images/services/`:
- `laser-therapy-hero.webp`
- `laser-therapy-detail.webp`

Because `app/services/[slug]/page.tsx` uses `generateStaticParams()` from `Object.keys(SERVICE_DETAILS)`, the new route `/services/laser-hair-therapy/` will automatically be generated at build time, receive full SEO metadata, render all 9 standard sections, and appear in `sitemap.ts`!
