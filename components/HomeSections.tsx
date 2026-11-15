// One small component per home-page section. The order they appear in is set
// in content/home.ts ("sections" list), not here.
import Link from "next/link";
import Photo from "./Photo";
import ProductCard from "./ProductCard";
import SectionHead from "./SectionHead";
import { waLink } from "./WhatsApp";
import { shop } from "@/content/shop";
import { departments } from "@/content/departments";
import { products } from "@/content/products";
import * as home from "@/content/home";

export function Hero() {
  const h = home.hero;
  return (
    <Photo image={h.image} pattern={h.pattern} shade={0.55} className="h-[84vh] min-h-[560px] flex items-end text-white">
      <header className="wrap pb-16 md:pb-[70px]">
        <div className="kick">{h.kicker}</div>
        <h1 className="text-[clamp(44px,7vw,96px)] leading-[.95] font-black tracking-[-2px] uppercase my-4">{h.headline}</h1>
        <p className="text-lg max-w-[520px] mb-6 opacity-95">{h.text}</p>
        <div className="flex flex-wrap gap-3">
          <Link href={h.button1.link} className="btn btn-light">{h.button1.text}</Link>
          <Link href={h.button2.link} className="btn btn-ghost">{h.button2.text}</Link>
        </div>
      </header>
    </Photo>
  );
}

export function Departments() {
  const s = home.departmentsSection;
  const tiles = [
    ...departments.map(d => ({ name: d.name, tagline: d.tagline, link: `/${d.slug}/`, image: d.image, pattern: d.pattern, wide: d.wide, cta: `Shop ${d.name}` })),
    { ...s.extraTile, wide: false, cta: "Shop now" },
  ];
  return (
    <section id="departments" className="py-16">
      <div className="wrap">
        <SectionHead title={s.title} subtitle={s.subtitle} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tiles.map(t => (
            <Link key={t.name} href={t.link} className={t.wide ? "md:col-span-2" : ""}>
              <Photo image={t.image} pattern={t.pattern} className="h-[260px] md:h-[380px] flex items-end text-white">
                <div className="p-5 w-full">
                  <h3 className="text-2xl font-black uppercase leading-none">{t.name}</h3>
                  <small className="block text-[13px] opacity-90 mt-1">{t.tagline}</small>
                  <span className="cta">{t.cta}</span>
                </div>
              </Photo>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Trending() {
  const s = home.trendingSection;
  return (
    <section id="trends" className="py-16 bg-[var(--grey)]">
      <div className="wrap">
        <SectionHead title={s.title} subtitle={s.subtitle} />
        {departments.map(d => {
          const items = products.filter(p => p.department === d.slug && p.trending);
          if (!items.length) return null;
          return (
            <div key={d.slug} className="mt-10">
              <SectionHead small title={`Trending in ${d.name}`} subtitle={d.tagline} more={`All ${d.name}`} moreLink={`/${d.slug}/`} />
              <div className="row">
                {items.map(p => <div key={p.name} className="min-w-[280px] snap-start"><ProductCard p={p} tall={false} /></div>)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function EthnicEdit() {
  const s = home.ethnicEdit;
  const [first, ...rest] = s.tiles;
  return (
    <section className="py-16">
      <div className="wrap">
        <SectionHead title={s.title} subtitle={s.subtitle} more="All ethnic" moreLink="/ethnic/" />
        <div className="grid md:grid-cols-3 gap-4">
          <Link href={first.link} className="md:row-span-2">
            <Photo image={first.image} pattern={first.pattern} className="h-[320px] md:h-[520px] flex items-end text-white">
              <div className="p-5"><h3 className="text-2xl font-black uppercase leading-none">{first.name}</h3><small className="block text-[13px] opacity-90 mt-1">{first.text}</small><span className="cta">Explore</span></div>
            </Photo>
          </Link>
          {rest.map(t => (
            <Link key={t.name} href={t.link}>
              <Photo image={t.image} pattern={t.pattern} className="h-[250px] flex items-end text-white">
                <div className="p-5"><h3 className="text-xl font-black uppercase leading-none">{t.name}</h3><span className="cta">Shop</span></div>
              </Photo>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Offer() {
  const o = home.offer;
  return (
    <Photo image={o.image} pattern={o.pattern} shade={0.5} className="min-h-[440px] flex items-center text-white bg-[var(--accent)]">
      <section id="offers" className="wrap py-14 max-w-[560px] md:ml-[calc((100%-1280px)/2+28px)]">
        <div className="kick">{o.kicker}</div>
        <h2 className="text-[clamp(36px,5vw,64px)] font-black uppercase tracking-tight leading-none mt-3">{o.headline}</h2>
        <p className="text-lg my-5 opacity-95">{o.text}</p>
        <div className="flex flex-wrap gap-3">
          <Link href={o.button.link} className="btn btn-light">{o.button.text}</Link>
          <a href={waLink(o.whatsappMessage)} className="btn btn-ghost">Ask on WhatsApp</a>
        </div>
      </section>
    </Photo>
  );
}

export function Occasions() {
  const s = home.occasions;
  return (
    <section className="py-16">
      <div className="wrap">
        <SectionHead title={s.title} />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {s.items.map(o => (
            <Link key={o.name} href={o.link}>
              <Photo image={o.image} pattern={o.pattern} className="h-[200px] md:h-[300px] flex items-end text-white">
                <div className="p-5"><h3 className="text-xl font-black uppercase leading-none">{o.name}</h3></div>
              </Photo>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="py-10 bg-[var(--grey)]">
      <div className="wrap grid grid-cols-2 md:grid-cols-4 gap-4">
        {home.services.map(s => (
          <div key={s.title} className="bg-white p-6">
            <div className="text-2xl mb-2">{s.icon}</div>
            <h4 className="text-[15px] font-extrabold uppercase tracking-wide">{s.title}</h4>
            <p className="text-sm text-neutral-500 mt-1">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Reviews() {
  const r = home.reviews;
  return (
    <section className="py-16">
      <div className="wrap">
        <SectionHead title={r.title} subtitle={`${shop.googleRating} ★ from ${shop.googleReviewCount} Google reviews`} more="Read on Google" moreLink={shop.googleReviewsLink} />
        <div className="grid md:grid-cols-3 gap-4">
          {r.items.map(x => (
            <div key={x.name} className="border border-[var(--line)] p-6">
              <div className="text-amber-500 tracking-[2px] text-sm">★★★★★</div>
              <p className="my-3 text-base leading-relaxed">"{x.text}"</p>
              <div className="text-[13px] text-neutral-500 font-semibold">{x.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Instagram() {
  const s = home.instagram;
  return (
    <section className="py-10">
      <div className="wrap">
        <SectionHead title={`@${shop.instagram}`} subtitle={s.subtitle} more="Follow" moreLink={`https://instagram.com/${shop.instagram}`} />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {s.photos.map((p, i) => <Photo key={i} image={p.image} pattern={p.pattern} shade={0.1} className="h-[160px] md:h-[260px]" />)}
        </div>
      </div>
    </section>
  );
}

export function Visit() {
  const v = home.visit;
  const a = shop.address;
  return (
    <section id="visit" className="py-16">
      <div className="wrap">
        <SectionHead title={v.title} subtitle={v.subtitle} />
        <div className="grid md:grid-cols-[1.2fr_1fr] border border-[var(--line)]">
          {v.mapEmbedUrl
            ? <iframe src={v.mapEmbedUrl} className="w-full min-h-[420px] border-0" loading="lazy" title="Map" />
            : <div className="bg-[#dfe6dc] min-h-[300px] md:min-h-[420px] flex items-center justify-center text-[#4b5f4a] font-bold tracking-wider uppercase text-[13px]">Google Map</div>}
          <div className="p-8 md:p-10">
            <h4 className="info-h">Address</h4><p>{a.line1}, {a.line2}</p><p className="text-neutral-500 text-sm mt-1">{a.landmark}</p>
            <h4 className="info-h">Hours</h4>{shop.hours.map(h => <p key={h.days}>{h.days}: {h.time}</p>)}
            <h4 className="info-h">Reach us</h4><p>{shop.phoneDisplay} · {shop.email}</p><p className="text-neutral-500 text-sm mt-1">{a.parking}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href={a.mapsLink} target="_blank" rel="noopener" className="btn btn-dark">Get directions</a>
              <a href={waLink()} className="btn btn-wa">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Map from the names used in content/home.ts to the components above.
// To add a NEW kind of section: write a component here and add its name to this list.
export const SECTIONS = {
  hero: Hero, departments: Departments, trending: Trending, ethnicEdit: EthnicEdit, offer: Offer,
  occasions: Occasions, services: Services, reviews: Reviews, instagram: Instagram, visit: Visit,
};
