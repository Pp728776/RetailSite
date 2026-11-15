# Instructions for AI assistants editing this project

This is a static Next.js 15 (App Router, TypeScript, Tailwind v4) website for a clothing shop,
exported with `output: "export"` and hosted on Cloudflare Pages. There is no server, database,
cart or login. "Buying" means the visitor taps a WhatsApp link.

## Where things live

- `content/shop.ts`: shop identity, contact, hours, announcement bar, accent colour.
- `content/departments.ts`: `departments[]` with `slug`, `name`, `tagline`, `image`, `pattern`,
  `wide`, `subcategories[]`. Each department becomes `/[dept]/`, each subcategory `/[dept]/[sub]/`.
- `content/products.ts`: `products[]`. `department` and `subcategory` must reference existing slugs.
  `trending: true` places the product in the home page rows. `label` is `"New" | "Sale"`.
- `content/home.ts`: `sections` (ordered list of section keys) plus one exported object per section.
- `components/HomeSections.tsx`: one React component per home section and the `SECTIONS` map that
  links a key in `content/home.ts` to its component.
- `components/Photo.tsx`: renders `image` if the file exists under `public/`, else an SVG fabric
  `pattern`. Use it for every image area; do not use `next/image`.
- `app/page.tsx`, `app/[dept]/page.tsx`, `app/[dept]/[sub]/page.tsx`: the three page templates.
  They read everything from `content/` and need no changes for content edits.
- `public/images/<department>/` and `public/images/home/`: photos. Paths in content start with `/images/`.

## Rules

1. For content changes (text, prices, products, photos, section order, departments) edit only
   files in `content/`. Do not touch `app/` or `components/`.
2. For a new home section: add a component to `components/HomeSections.tsx`, add it to the
   `SECTIONS` map, export its text as an object from `content/home.ts`, and add its key to the
   `sections` array there. Keep the component a server component (no `"use client"`), use the
   existing `wrap`, `btn`, `kick`, `cta` CSS classes and `SectionHead`/`Photo` components.
3. Keep the site static: no API routes, no `fetch` at runtime, no client-side data loading, no
   `next/image`, no `dynamic = "force-dynamic"`. Everything must work with `output: "export"`.
4. Slugs are lowercase, hyphenated, unique within their list. Changing a slug changes a URL.
5. Prices are plain integers in rupees. Phone numbers in `shop.whatsapp` are digits only with
   country code.
6. Never add a dependency without a clear need; the project intentionally has only Next, React
   and Tailwind.
7. After any change run `npm run build`. It must finish with no errors and the route list should
   still include `/`, `/[dept]` and `/[dept]/[sub]`.
8. Explain changes to the owner in plain language: which file, which line, what to expect on the site.
