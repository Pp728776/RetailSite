# VASTRA website: owner's guide

This website has two parts:

- **`content/` folder: the words, prices, photos and section order.** This is the only folder you edit.
- Everything else (`app/`, `components/`): the layout. You never need to open it.

You can edit the `content/` files in any text editor (VS Code is free), or paste a file into an
AI tool (ChatGPT, Claude, Cursor) and say what you want changed. `AI-INSTRUCTIONS.md` tells the
AI how the project works, so share that file with it too.

---

## The four content files

| File | What is in it |
|---|---|
| `content/shop.ts` | Shop name, WhatsApp number, address, hours, Instagram, announcement bar, colours |
| `content/departments.ts` | Women / Men / Kids / Seniors / Ethnic and their sub-categories |
| `content/products.ts` | Every product: name, price, sizes, photo, which department |
| `content/home.ts` | Home page: section order and the text of each section |

Rules for all of them: change only the text between quotes `"..."` or the numbers; keep the
quotes, the colons and the commas exactly as they are. If the site stops building, you deleted
a quote or a comma somewhere. Undo your last change.

---

## Common tasks

### Change the WhatsApp number, address or hours
Open `content/shop.ts`. Edit `whatsapp` (digits only, starting with 91), `address`, `hours`.

### Change the announcement bar at the top
`content/shop.ts` → `announcement.text`. Set it to `""` to hide the bar.

### Change a price
`content/products.ts` → find the product by name → change the number after `price:`.
Write `1299`, not `₹1,299`.

### Add a product
`content/products.ts`. Copy any one line that starts with `{ name:` and paste it just above the
final `];`. Change the words. Make sure `department` and `subcategory` match slugs that exist in
`departments.ts` (for example `department: "women", subcategory: "sarees"`).
Add `trending: true` to also show it in the home page scrolling row.
Add `label: "New"` or `label: "Sale"` for the small tag on the photo.

### Remove a product
Delete its whole line in `content/products.ts`.

### Add a photo to a product
1. Resize the photo to about 1200 px tall (any free tool, or just use the phone's "small" export).
2. Save it as `.jpg` with a simple name, lowercase, no spaces: `saree-banarasi-red.jpg`
3. Put it in `public/images/<department>/` (e.g. `public/images/women/`).
4. In `content/products.ts` add to that product: `image: "/images/women/saree-banarasi-red.jpg",`

Until a photo exists, the site shows a fabric pattern in its place, so nothing breaks.

### Change the big photos (hero, department tiles, offer, occasions)
Each of those has an `image:` line in `content/home.ts` or `content/departments.ts` pointing to a
file in `public/images/home/` or `public/images/<department>/cover.jpg`. Put your photo at that
path with that name and it appears. The hero photo should be wide (at least 1920 × 1080).

### Reorder, hide or show home page sections
`content/home.ts` → the `sections` list at the top. Move lines up or down to reorder.
Put `//` in front of a line to hide that section. Remove the `//` to show it again.

### Add a department (for example "Footwear")
`content/departments.ts`. Copy one department block (from its `{` to its `},`), paste it after
the last one, change `slug` (lowercase, no spaces, must be unique), `name`, `tagline`, and its
`subcategories`. It gets its own page and nav link automatically. Then add products for it.

### Add a sub-category (for example "Sharara sets" under Women)
`content/departments.ts` → inside Women's `subcategories` add
`{ name: "Sharara sets", slug: "sharara-sets" },`. It gets its own page automatically.

### Change the red accent colour
`content/shop.ts` → `colors.accent`. Pick a colour code from htmlcolorcodes.com.

### Add the Google map
Google Maps → search your shop → Share → Embed a map → copy. From the copied text take only the
web address inside `src="..."` and paste it into `content/home.ts` → `visit.mapEmbedUrl`.

### Add a completely new section (for example "Our story")
This is the one task that touches layout code. Ask an AI tool with `AI-INSTRUCTIONS.md`:
"Add a new home section called ourStory with a photo on the left and two paragraphs on the right."
It will add a component in `components/HomeSections.tsx`, register it in `SECTIONS`, add its text
to `content/home.ts`, and add `"ourStory"` to the `sections` list.

---

## Seeing your changes

One-time setup: install Node.js from nodejs.org (the LTS button). Then in a terminal, inside
this folder, run `npm install` once.

- `npm run dev` then open http://localhost:3000. Edits appear as you save.
- `npm run build` creates the finished site in the `out/` folder. If this prints an error,
  read the file name and line number it gives; it is nearly always a missing quote or comma.

## Putting it live on Cloudflare Pages (free)

Option A, no tools: run `npm run build`, go to dash.cloudflare.com → Workers & Pages → Create →
Pages → Upload assets → drag the `out/` folder → Deploy. You get `https://<name>.pages.dev`.
Repeat the upload whenever you change something.

Option B, automatic: put this folder on GitHub, connect the repository in Cloudflare Pages with
build command `npm run build` and output directory `out`. Every change you push goes live in a minute.

Custom domain: Cloudflare Pages → your project → Custom domains → add `www.yourshop.in`.
