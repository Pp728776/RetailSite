// =====================================================================
//  PRODUCTS  (content/products.ts)
//  Every item shown on the site. Each product is one block { ... }.
//
//  To ADD a product: copy a block, paste it at the end of the list
//    (before the final ];), change the words.
//  To REMOVE: delete its block.
//  To CHANGE A PRICE: edit the number after price: (no commas, no ₹)
//  To ADD A PHOTO: put the photo in  public/images/<department>/  and
//    write its path here, e.g. image: "/images/women/saree-banarasi.jpg"
//    Until a photo exists, the "pattern" design is shown instead.
//
//  Fields:
//    department  must match a department slug in departments.ts
//    subcategory must match a subcategory slug of that department
//    label       optional: "New" or "Sale" (shows a small tag on the photo)
//    trending    true = also shows in the "Trending" row on the home page
// =====================================================================

import type { Pattern } from "./departments";

export type Product = {
  name: string;
  description: string;
  price: number;
  sizes?: string;
  department: string;
  subcategory: string;
  image?: string;
  pattern: Pattern;
  label?: "New" | "Sale";
  trending?: boolean;
};

export const products: Product[] = [
  // ---------- WOMEN ----------
  { name: "Pre-draped saree", description: "Wedding season's easy saree", price: 2499, sizes: "Free size", department: "women", subcategory: "sarees", pattern: "zari", label: "New", trending: true },
  { name: "Organza saree with sequins", description: "Lightweight festive", price: 3299, sizes: "Free size", department: "women", subcategory: "sarees", pattern: "paisley", label: "New", trending: true },
  { name: "Printed co-ord set", description: "Office to dinner", price: 1899, sizes: "XS to XL", department: "women", subcategory: "co-ords", pattern: "linen", trending: true },
  { name: "Anarkali kurta set", description: "Floor-length, with dupatta", price: 2799, sizes: "S to XXL", department: "women", subcategory: "kurta-sets", pattern: "block", trending: true },
  { name: "Straight-fit jeans", description: "High waist", price: 1499, sizes: "26 to 40", department: "women", subcategory: "jeans", pattern: "denim", label: "Sale", trending: true },
  { name: "Oversized cotton shirt", description: "The weekend staple", price: 999, sizes: "S to XL", department: "women", subcategory: "tops", pattern: "stripe", trending: true },
  { name: "Chanderi kurta set", description: "Sheer, handwoven", price: 2999, sizes: "S to XXL", department: "women", subcategory: "kurta-sets", pattern: "block" },
  { name: "Bandhani dupatta", description: "Jaipur tie-dye", price: 699, department: "women", subcategory: "dupattas", pattern: "bandhani" },
  { name: "Floral midi dress", description: "Viscose, lined", price: 1699, sizes: "S to XL", department: "women", subcategory: "dresses", pattern: "kids" },

  // ---------- MEN ----------
  { name: "Chikankari kurta", description: "Lucknow hand embroidery", price: 1799, sizes: "38 to 46", department: "men", subcategory: "kurtas", pattern: "white", label: "New", trending: true },
  { name: "Nehru jacket, raw silk", description: "Over a plain kurta", price: 2499, sizes: "38 to 46", department: "men", subcategory: "sherwanis", pattern: "paisley", label: "New", trending: true },
  { name: "Relaxed linen shirt", description: "Breathable", price: 1299, sizes: "38 to 46", department: "men", subcategory: "shirts", pattern: "linen", trending: true },
  { name: "Baggy-fit jeans", description: "This year's cut", price: 1699, sizes: "28 to 40", department: "men", subcategory: "jeans", pattern: "denim", trending: true },
  { name: "Printed resort shirt", description: "Holiday and Sunday", price: 1099, sizes: "M to XXL", department: "men", subcategory: "shirts", pattern: "ikat", label: "Sale", trending: true },
  { name: "Bandhgala set", description: "Wedding guest ready", price: 6999, sizes: "38 to 46", department: "men", subcategory: "sherwanis", pattern: "zari", trending: true },
  { name: "Cotton kurta-pyjama set", description: "Daily and pooja wear", price: 1299, sizes: "38 to 46", department: "men", subcategory: "kurtas", pattern: "stripe" },
  { name: "Slim chinos", description: "Stretch cotton", price: 1399, sizes: "28 to 40", department: "men", subcategory: "trousers", pattern: "check" },

  // ---------- KIDS ----------
  { name: "Girls' lehenga choli", description: "Festive", price: 1499, sizes: "2 to 12 years", department: "kids", subcategory: "ethnic", pattern: "bandhani", label: "New", trending: true },
  { name: "Boys' kurta-pyjama set", description: "Matching dad's", price: 899, sizes: "1 to 14 years", department: "kids", subcategory: "ethnic", pattern: "block", label: "New", trending: true },
  { name: "Twinning sets", description: "Mother-daughter, father-son", price: 2999, department: "kids", subcategory: "partywear", pattern: "zari", trending: true },
  { name: "Printed cotton frocks", description: "Soft, breathable", price: 599, sizes: "1 to 6 years", department: "kids", subcategory: "girls-1-6", pattern: "kids", trending: true },
  { name: "Denim dungarees", description: "Play-proof", price: 899, sizes: "2 to 10 years", department: "kids", subcategory: "boys-1-6", pattern: "denim", label: "Sale", trending: true },
  { name: "School uniform pack", description: "Shirts, trousers, socks", price: 1299, sizes: "All school sizes", department: "kids", subcategory: "school", pattern: "white", trending: true },
  { name: "Newborn gift set", description: "Six-piece mul cotton", price: 799, sizes: "0 to 6 months", department: "kids", subcategory: "newborn", pattern: "linen" },

  // ---------- SENIORS ----------
  { name: "Soft cotton sarees", description: "Daily wear, easy drape", price: 899, department: "seniors", subcategory: "cotton-sarees", pattern: "stripe", label: "New", trending: true },
  { name: "Front-open kurta", description: "Easy buttons, side pockets", price: 999, sizes: "M to 4XL", department: "seniors", subcategory: "front-open", pattern: "linen", label: "New", trending: true },
  { name: "Pashmina-feel shawl", description: "Winter gifting favourite", price: 1499, department: "seniors", subcategory: "shawls", pattern: "wool", trending: true },
  { name: "Elastic-waist trousers", description: "Comfortable all day", price: 899, sizes: "30 to 46", department: "seniors", subcategory: "trousers", pattern: "check", trending: true },
  { name: "Printed night suit set", description: "Cotton, pre-shrunk", price: 799, sizes: "M to 4XL", department: "seniors", subcategory: "night-suits", pattern: "block", label: "Sale", trending: true },
  { name: "Mul-cotton salwar suit", description: "Light and airy", price: 1299, sizes: "M to 4XL", department: "seniors", subcategory: "salwar-suits", pattern: "bandhani", trending: true },

  // ---------- ETHNIC EDIT ----------
  { name: "Banarasi silk saree", description: "Zari border, blouse piece", price: 5999, department: "ethnic", subcategory: "banarasi", pattern: "zari", label: "New", trending: true },
  { name: "Kanjivaram saree", description: "Temple border", price: 8999, department: "ethnic", subcategory: "kanjivaram", pattern: "paisley", label: "New", trending: true },
  { name: "Bandhani dupatta", description: "Jaipur tie-dye", price: 699, department: "ethnic", subcategory: "bandhani", pattern: "bandhani", trending: true },
  { name: "Chanderi kurta set", description: "Sheer, handwoven", price: 2999, sizes: "S to XXL", department: "ethnic", subcategory: "chanderi", pattern: "block", trending: true },
  { name: "Men's sherwani", description: "With churidar and stole", price: 9999, sizes: "38 to 46", department: "ethnic", subcategory: "sherwanis", pattern: "ikat", trending: true },
  { name: "Bridal lehenga", description: "Made to measure", price: 24999, department: "ethnic", subcategory: "bridal", pattern: "zari", trending: true },
];
