// SUB-CATEGORY PAGE, e.g. /women/sarees. Built automatically for every
// subcategory listed in content/departments.ts.
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import SectionHead from "@/components/SectionHead";
import { departments } from "@/content/departments";
import { products } from "@/content/products";
import { waLink } from "@/components/WhatsApp";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return departments.flatMap(d => d.subcategories.map(s => ({ dept: d.slug, sub: s.slug })));
}
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: Promise<{ dept: string; sub: string }> }) {
  const { dept, sub } = await params;
  const d = departments.find(x => x.slug === dept);
  const s = d?.subcategories.find(x => x.slug === sub);
  if (!d || !s) notFound();
  return { title: `${s.name} for ${d.name}` };
}

export default async function SubPage({ params }: { params: Promise<{ dept: string; sub: string }> }) {
  const { dept, sub } = await params;
  const d = departments.find(x => x.slug === dept);
  const s = d?.subcategories.find(x => x.slug === sub);
  if (!d || !s) notFound();
  const items = products.filter(p => p.department === d.slug && p.subcategory === s.slug);
  return (
    <>
      <Nav active={d.slug} />
      <section className="py-10"><div className="wrap">
        <div className="text-[13px] text-neutral-500 mb-4"><Link href="/">Home</Link> › <Link href={`/${d.slug}/`}>{d.name}</Link> › {s.name}</div>
        <SectionHead title={s.name} subtitle={`${d.name} · ${items.length} item${items.length === 1 ? "" : "s"} online, more in store`} />
        <div className="flex gap-2.5 flex-wrap mb-6">
          {d.subcategories.map(x => <Link key={x.slug} href={`/${d.slug}/${x.slug}/`} className={`px-4 py-2.5 border-[1.5px] border-black text-[13px] font-bold uppercase tracking-wide ${x.slug === s.slug ? "bg-black text-white" : ""}`}>{x.name}</Link>)}
        </div>
        {items.length
          ? <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">{items.map(p => <ProductCard key={p.name} p={p} />)}</div>
          : <div className="bg-[var(--grey)] p-10 text-center">We haven't photographed our {s.name.toLowerCase()} yet, but they're in store. <a className="underline font-bold" href={waLink(`Hi, what ${s.name.toLowerCase()} do you have for ${d.name.toLowerCase()}?`)}>Ask on WhatsApp</a>.</div>}
      </div></section>
      <Footer />
    </>
  );
}
