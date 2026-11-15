// =====================================================================
//  HOME PAGE  (content/home.ts)
//  The home page is a list of SECTIONS shown top to bottom.
//
//  To REORDER sections: move lines up or down in the "sections" list.
//  To HIDE a section: put // at the start of its line.
//  To ADD a new kind of section: see GUIDE.md, "Adding a new section".
//
//  Below the list, each section has its own text you can change.
// =====================================================================

import type { Pattern } from "./departments";

export const sections = [
  "hero",          // big photo with headline
  "departments",   // Women / Men / Kids / Seniors / Ethnic tiles
  "trending",      // one scrolling row per department
  "ethnicEdit",    // saree, sherwani, lehenga, kids ethnic tiles
  "offer",         // red offer band
  "occasions",     // Daily / Office / Festive / Wedding ...
  "services",      // alterations, exchange, trial rooms, payments
  "reviews",       // Google reviews
  "instagram",     // six photo tiles
  "visit",         // map, address, hours
] as const;

export const hero = {
  kicker: "New season · every generation",
  headline: "Dress the whole family",
  text: "Women, men, kids and seniors. Sarees to streetwear, Banarasi to denim, all under one roof in Rohini with free alterations and a 7-day exchange.",
  image: "/images/home/hero.jpg",
  pattern: "zari" as Pattern,
  button1: { text: "Shop by department", link: "#departments" },
  button2: { text: "Visit the store", link: "#visit" },
};

export const departmentsSection = {
  title: "Shop by department",
  subtitle: "Everything we stock, for everyone at home",
  // An extra tile at the end that is not a full department
  extraTile: { name: "Accessories", tagline: "Dupattas, stoles, belts, bags", link: "/women/dupattas", pattern: "stripe" as Pattern, image: "/images/home/accessories.jpg" },
};

export const trendingSection = {
  title: "Trending now",
  subtitle: "Latest arrivals in each department, updated every Thursday",
};

export const ethnicEdit = {
  title: "The ethnic edit",
  subtitle: "What India is wearing this wedding season",
  // First tile is tall (left). The next four are small (right).
  tiles: [
    { name: "Saree edit", text: "Banarasi, Kanjivaram, Chanderi, organza, cotton. Pre-draped options for weddings.", link: "/ethnic/banarasi", pattern: "zari" as Pattern, image: "/images/home/edit-saree.jpg" },
    { name: "Men's sherwani & kurta", link: "/ethnic/sherwanis", pattern: "ikat" as Pattern, image: "/images/home/edit-sherwani.jpg" },
    { name: "Lehengas", link: "/ethnic/lehengas", pattern: "bandhani" as Pattern, image: "/images/home/edit-lehenga.jpg" },
    { name: "Kids' ethnic sets", link: "/kids/ethnic", pattern: "kids" as Pattern, image: "/images/home/edit-kids.jpg" },
    { name: "Family twinning", link: "/kids/partywear", pattern: "block" as Pattern, image: "/images/home/edit-twinning.jpg" },
  ],
};

export const offer = {
  kicker: "Festive offer · till 30 Oct",
  headline: "Flat 20% off kurtas and kurta sets",
  text: "Across women, men, kids and seniors. Plus free blouse stitching on any saree above ₹2,000. Show this page at the counter.",
  pattern: "bandhani" as Pattern,
  image: "/images/home/offer.jpg",
  button: { text: "See all offers", link: "/ethnic" },
  whatsappMessage: "Hi, tell me about the festive offer",
};

export const occasions = {
  title: "Shop by occasion",
  items: [
    { name: "Daily wear", link: "/women/kurta-sets", pattern: "linen" as Pattern, image: "/images/home/occ-daily.jpg" },
    { name: "Office", link: "/men/shirts", pattern: "stripe" as Pattern, image: "/images/home/occ-office.jpg" },
    { name: "Festive", link: "/ethnic", pattern: "bandhani" as Pattern, image: "/images/home/occ-festive.jpg" },
    { name: "Wedding", link: "/ethnic/bridal", pattern: "zari" as Pattern, image: "/images/home/occ-wedding.jpg" },
    { name: "Winter", link: "/seniors/woollens", pattern: "wool" as Pattern, image: "/images/home/occ-winter.jpg" },
    { name: "School", link: "/kids/school", pattern: "kids" as Pattern, image: "/images/home/occ-school.jpg" },
  ],
};

export const services = [
  { icon: "✂️", title: "Free alterations", text: "Same day on most items, every department" },
  { icon: "↺", title: "7-day exchange", text: "With bill and tags, no questions" },
  { icon: "👗", title: "Trial rooms", text: "Four rooms, one wheelchair-friendly" },
  { icon: "₹", title: "UPI, cards, cash, EMI", text: "GST bill on every purchase" },
];

export const reviews = {
  title: "Customers say",
  items: [
    { text: "Bought outfits for all four of us for my brother's wedding in one visit. They altered my father's kurta while we picked the kids' lehenga.", name: "Priya S." },
    { text: "The seniors section is a blessing. Front-open kurtas with pockets for my mother, and the staff were patient with her.", name: "Rahul M." },
    { text: "Honest prices and they tell you straight if a colour doesn't suit you. Been buying here for ten years.", name: "Meena K." },
  ],
};

export const instagram = {
  subtitle: "New stock, styling, behind the counter",
  // Six photos. Put them in public/images/home/ and name them here.
  photos: [
    { image: "/images/home/ig-1.jpg", pattern: "zari" as Pattern },
    { image: "/images/home/ig-2.jpg", pattern: "denim" as Pattern },
    { image: "/images/home/ig-3.jpg", pattern: "kids" as Pattern },
    { image: "/images/home/ig-4.jpg", pattern: "paisley" as Pattern },
    { image: "/images/home/ig-5.jpg", pattern: "stripe" as Pattern },
    { image: "/images/home/ig-6.jpg", pattern: "bandhani" as Pattern },
  ],
};

export const visit = {
  title: "Visit us",
  subtitle: "Five minutes from Rohini West metro",
  // Google Maps > Share > Embed a map > copy ONLY the web address inside src="..."
  // Leave "" to show a plain grey box instead.
  mapEmbedUrl: "",
};
