// =====================================================================
//  SHOP DETAILS  (content/shop.ts)
//  Everything about the shop itself: name, phone, address, hours, colours.
//  Change the text between the quotes. Keep the quotes and commas.
// =====================================================================

export const shop = {
  // Shop name as shown in the top-left logo and the browser tab
  name: "Chaudhary Vastralaya",

  // One line that appears in Google search results under the shop name
  tagline: "Clothing for the whole family in Rohini, Delhi",

  // WhatsApp number with country code, digits only (91 = India). No spaces, no +.
  whatsapp: "919800000000",

  // Phone number as you want people to SEE it
  phoneDisplay: "98xxx xxxxx",
  email: "hello@vastra.in",

  address: {
    line1: "Shop 12, Main Market, Sector 7",
    line2: "Rohini, Delhi 110085",
    landmark: "Opposite the SBI branch, five minutes from Rohini West metro",
    parking: "Parking in the market lot behind the shop",
    // Paste the link you get from Google Maps > Share > Copy link
    mapsLink: "https://maps.google.com/?q=Sector+7+Market+Rohini+Delhi",
  },

  hours: [
    { days: "Monday to Saturday", time: "10:30 am to 9:00 pm" },
    { days: "Sunday", time: "11:00 am to 8:00 pm" },
  ],

  // Social handles (without the @)
  instagram: "vastra.rohini",
  facebook: "vastra.rohini",

  // Google review summary shown on the home page
  googleRating: "4.7",
  googleReviewCount: "180+",
  // Paste your Google Business "write a review" or reviews link
  googleReviewsLink: "https://g.page/your-shop/review",

  // The yellow line at the very top of every page. Leave text "" to hide it.
  announcement: {
    text: "Festive sale: flat 20% off kurtas and kurta sets · free blouse stitching on sarees above ₹2,000 · free alterations in store",
  },

  // Colours. Use any colour code from https://htmlcolorcodes.com
  colors: {
    accent: "#c8342a",   // red used for sale labels and the offer band
    whatsapp: "#25d366", // leave as is
  },
};
