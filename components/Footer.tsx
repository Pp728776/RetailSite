import Link from "next/link";
import { shop } from "@/content/shop";
import { departments } from "@/content/departments";

export default function Footer() {
  const cols = departments.slice(0, 3);
  return (
    <footer className="bg-black text-neutral-400 pt-14 pb-10 text-sm">
      <div className="wrap grid grid-cols-2 md:grid-cols-4 gap-6">
        {cols.map(d => (
          <div key={d.slug}>
            <h5 className="text-white text-xs tracking-[2px] uppercase mb-3">{d.name}</h5>
            <ul>{d.subcategories.slice(0, 6).map(s => <li key={s.slug} className="my-1.5"><Link href={`/${d.slug}/${s.slug}/`}>{s.name}</Link></li>)}</ul>
          </div>
        ))}
        <div>
          <h5 className="text-white text-xs tracking-[2px] uppercase mb-3">Store</h5>
          <ul>
            <li className="my-1.5"><Link href="/#visit">Visit us</Link></li>
            <li className="my-1.5"><Link href="/#offers">Offers</Link></li>
            <li className="my-1.5"><a href={`https://instagram.com/${shop.instagram}`}>Instagram</a></li>
            <li className="my-1.5"><a href={`https://facebook.com/${shop.facebook}`}>Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap border-t border-neutral-800 mt-10 pt-5 flex flex-col md:flex-row justify-between gap-2 text-xs">
        <span>{shop.name} · {shop.address.line1}, {shop.address.line2} · {shop.hours.map(h => `${h.days} ${h.time}`).join(" · ")}</span>
        <span>© {new Date().getFullYear()} {shop.name}</span>
      </div>
    </footer>
  );
}
