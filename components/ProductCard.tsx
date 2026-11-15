import Photo from "./Photo";
import { waLink } from "./WhatsApp";
import type { Product } from "@/content/products";

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export default function ProductCard({ p, tall = true }: { p: Product; tall?: boolean }) {
  return (
    <div className="block">
      <Photo image={p.image} pattern={p.pattern} shade={0.15} className={tall ? "h-[420px]" : "h-[360px]"}>
        {p.label && (
          <span className={`absolute top-3 left-3 text-[11px] font-extrabold tracking-wider uppercase px-2 py-1 ${p.label === "Sale" ? "bg-[var(--accent)] text-white" : "bg-white text-black"}`}>{p.label}</span>
        )}
      </Photo>
      <div className="font-bold mt-3 text-[15px]">{p.name}</div>
      <div className="text-neutral-500 text-[13px]">{p.description}{p.sizes ? ` · ${p.sizes}` : ""}</div>
      <div className="font-extrabold mt-1 text-[15px]">{inr(p.price)}</div>
      <a href={waLink(`Hi, I'm interested in ${p.name} (${inr(p.price)})`)} target="_blank" rel="noopener"
        className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-bold text-green-700">Ask on WhatsApp →</a>
    </div>
  );
}
