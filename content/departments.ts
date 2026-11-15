// =====================================================================
//  DEPARTMENTS  (content/departments.ts)
//  Each department gets its own page at /women, /men, etc.
//  To ADD a department: copy one block from { to }, paste it below the
//  last one, change the words, and give it a new unique "slug".
//  To REMOVE one: delete its block (from { to the matching },).
//  To REORDER: move the blocks around.
// =====================================================================

export type Department = {
  slug: string;        // used in the web address, lowercase, no spaces: "women"
  name: string;        // shown to visitors: "Women"
  tagline: string;     // one line under the name
  image: string;       // photo for the department tile, inside public/images/
  pattern: Pattern;    // fallback design used until the photo exists
  wide?: boolean;      // true = double-width tile on the home page
  subcategories: { name: string; slug: string; image?: string }[];
};

// Fabric patterns used when a photo has not been added yet.
export type Pattern =
  | "zari" | "ikat" | "block" | "stripe" | "check" | "denim"
  | "bandhani" | "kids" | "linen" | "paisley" | "wool" | "white";

export const departments: Department[] = [
  {
    slug: "women",
    name: "Women",
    tagline: "Sarees, kurta sets, co-ords, western",
    image: "/images/women/cover.jpg",
    pattern: "zari",
    wide: true,
    subcategories: [
      { name: "Sarees", slug: "sarees" },
      { name: "Kurta sets", slug: "kurta-sets" },
      { name: "Lehengas", slug: "lehengas" },
      { name: "Co-ords", slug: "co-ords" },
      { name: "Tops & tees", slug: "tops" },
      { name: "Jeans & trousers", slug: "jeans" },
      { name: "Dresses", slug: "dresses" },
      { name: "Dupattas", slug: "dupattas" },
    ],
  },
  {
    slug: "men",
    name: "Men",
    tagline: "Kurtas, shirts, sherwanis, denim",
    image: "/images/men/cover.jpg",
    pattern: "ikat",
    subcategories: [
      { name: "Kurtas & kurta-pyjama", slug: "kurtas" },
      { name: "Sherwanis & Nehru jackets", slug: "sherwanis" },
      { name: "Shirts", slug: "shirts" },
      { name: "T-shirts & polos", slug: "tshirts" },
      { name: "Jeans", slug: "jeans" },
      { name: "Trousers & chinos", slug: "trousers" },
      { name: "Jackets", slug: "jackets" },
      { name: "Innerwear & socks", slug: "innerwear" },
    ],
  },
  {
    slug: "kids",
    name: "Kids",
    tagline: "Newborn to 14 years, ethnic and everyday",
    image: "/images/kids/cover.jpg",
    pattern: "kids",
    subcategories: [
      { name: "Newborn (0 to 12 months)", slug: "newborn" },
      { name: "Girls 1 to 6", slug: "girls-1-6" },
      { name: "Girls 7 to 14", slug: "girls-7-14" },
      { name: "Boys 1 to 6", slug: "boys-1-6" },
      { name: "Boys 7 to 14", slug: "boys-7-14" },
      { name: "Ethnic sets", slug: "ethnic" },
      { name: "School & uniform", slug: "school" },
      { name: "Partywear", slug: "partywear" },
    ],
  },
  {
    slug: "seniors",
    name: "Seniors",
    tagline: "Comfort wear for parents and grandparents",
    image: "/images/seniors/cover.jpg",
    pattern: "linen",
    subcategories: [
      { name: "Cotton sarees", slug: "cotton-sarees" },
      { name: "Kurta-pyjama", slug: "kurta-pyjama" },
      { name: "Salwar suits", slug: "salwar-suits" },
      { name: "Shawls & stoles", slug: "shawls" },
      { name: "Night suits", slug: "night-suits" },
      { name: "Easy-fit trousers", slug: "trousers" },
      { name: "Front-open kurtas", slug: "front-open" },
      { name: "Woollens", slug: "woollens" },
    ],
  },
  {
    slug: "ethnic",
    name: "Ethnic edit",
    tagline: "Banarasi to bandhani: what India is wearing now",
    image: "/images/ethnic/cover.jpg",
    pattern: "paisley",
    wide: true,
    subcategories: [
      { name: "Banarasi sarees", slug: "banarasi" },
      { name: "Kanjivaram", slug: "kanjivaram" },
      { name: "Chanderi & Maheshwari", slug: "chanderi" },
      { name: "Bandhani & leheriya", slug: "bandhani" },
      { name: "Lehengas", slug: "lehengas" },
      { name: "Sherwanis", slug: "sherwanis" },
      { name: "Kurta sets", slug: "kurta-sets" },
      { name: "Bridal", slug: "bridal" },
    ],
  },
];
