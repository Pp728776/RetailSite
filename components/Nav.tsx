import Link from "next/link";
import { shop } from "@/content/shop";
import { departments } from "@/content/departments";
import { waLink } from "./WhatsApp";

export default function Nav({ active }: { active?: string }) {
  return (
    <>
      {shop.announcement.text && (
        <div className="bg-black text-white text-[12px] tracking-[1.2px] uppercase text-center px-3 py-2">{shop.announcement.text}</div>
      )}
      <nav className="sticky top-0 z-20 bg-white border-b border-[var(--line)]">
        <div className="wrap flex items-center justify-between h-16 gap-5">
          <Link href="/" className="font-black text-2xl tracking-tight">{shop.name}<span className="text-[var(--accent)]">.</span></Link>
          <ul className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wide">
            {departments.map(d => (
              <li key={d.slug}><Link href={`/${d.slug}/`} className={active === d.slug ? "border-b-2 border-black pb-1" : ""}>{d.name}</Link></li>
            ))}
            <li><Link href="/#offers">Offers</Link></li>
            <li><Link href="/#visit">Visit</Link></li>
          </ul>
          <a href={waLink()} className="btn btn-wa !py-2.5 !px-4">WhatsApp</a>
        </div>
      </nav>
    </>
  );
}
