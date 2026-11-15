import { shop } from "@/content/shop";

export function waLink(message = "Hi") {
  return `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(message)}`;
}

// The round green button fixed at the bottom-right of every page
export function WhatsAppFloating() {
  return (
    <a href={waLink()} target="_blank" rel="noopener" aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-30 w-14 h-14 rounded-full bg-[var(--wa)] text-white font-black text-xs flex items-center justify-center shadow-xl">
      WA
    </a>
  );
}
