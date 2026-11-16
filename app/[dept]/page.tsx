// DEPARTMENT PAGE, e.g. /women  /men  /kids. One file builds all of them
// from content/departments.ts and content/products.ts.
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import ProductCard from "@/components/ProductCard";
import SectionHead from "@/components/SectionHead";
import { notFound } from "next/navigation";
import { departments } from "@/content/departments";
import { products } from "@/content/products";

export function generateStaticParams() {
  return departments.map(d => ({ dept: d.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: Promise<{ dept: string }> }) {
  const { dept } = await params;
  const d = departments.find(x => x.slug === dept);
  if (!d) notFound();
  return { title: d.name, description: d.tagline };
}

export default async function DepartmentPage({ params }: { params: Promise<{ dept: string }> }) {
  const { dept } = await params;
  const d = departments.find(x => x.slug === dept);
  if (!d) notFound();
  const all = products.filter(p => p.department === d.slug);
  const trending = all.filter(p => p.trending);
  return (
    <>
      <Nav active={d.slug} />
      <Photo image={d.image} pattern={d.pattern} shade={0.5} className="h-[340px] flex items-end text-white">
        <header className="wrap pb-10">
          <div className="text-[13px] opacity-80 mb-3">Home › {d.name}</div>
          <h1 className="text-[clamp(40px,6vw,80px)] leading-[.95] font-black tracking-[-2px] uppercase">{d.name}</h1>
          <p className="text-lg max-w-[560px] mt-3">{d.tagline}. New stock every Thursday; message us a photo and we'll check sizes before you come.</p>
        </header>
      </Photo>

      <section className="py-10"><div className="wrap">
        <SectionHead small title={`Shop ${d.name.toLowerCase()} by category`} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {d.subcategories.map((s, i) => (
            <Link key={s.slug} href={`/${d.slug}/${s.slug}/`}>
              <Photo image={s.image} pattern={all[i % all.length]?.pattern ?? d.pattern} shade={0.3} className="h-[160px] md:h-[200px] flex items-end text-white">
                <div className="p-5"><h3 className="text-lg font-black uppercase leading-none">{s.name}</h3></div>
              </Photo>
            </Link>
          ))}
        </div>
      </div></section>

      {trending.length > 0 && (
        <section className="py-10 bg-[var(--grey)]"><div className="wrap">
          <SectionHead small title={`Trending in ${d.name.toLowerCase()}`} subtitle="What's moving fastest this month" />
          <div className="row">{trending.map(p => <div key={p.name} className="min-w-[280px] snap-start"><ProductCard p={p} tall={false} /></div>)}</div>
        </div></section>
      )}

      <section className="py-16"><div className="wrap">
        <SectionHead small title={`All ${d.name.toLowerCase()}`} subtitle={`${all.length} items`} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">{all.map(p => <ProductCard key={p.name} p={p} />)}</div>
        <div className="bg-[var(--grey)] p-7 text-center text-[15px] mt-10">Didn't find your size or colour? We stock far more in store. <b>Visit us</b> or <b>WhatsApp a photo</b> and we'll check for you.</div>
      </div></section>
      <Footer />
    </>
  );
}
