import type { Metadata } from "next";
import "./globals.css";
import { shop } from "@/content/shop";
import { WhatsAppFloating } from "@/components/WhatsApp";

export const metadata: Metadata = {
  title: { default: `${shop.name} | ${shop.tagline}`, template: `%s | ${shop.name}` },
  description: shop.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ ["--accent" as string]: shop.colors.accent, ["--wa" as string]: shop.colors.whatsapp }}>
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
