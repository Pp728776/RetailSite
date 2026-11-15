import Link from "next/link";

export default function SectionHead({ title, subtitle, more, moreLink, small }: { title: string; subtitle?: string; more?: string; moreLink?: string; small?: boolean }) {
  return (
    <div className="flex justify-between items-end mb-6">
      <div>
        <h2 className={`${small ? "text-2xl" : "text-3xl md:text-[34px]"} font-black uppercase tracking-tight leading-none`}>{title}</h2>
        {subtitle && <div className="text-neutral-500 mt-1.5 text-[15px]">{subtitle}</div>}
      </div>
      {more && moreLink && <Link href={moreLink} className="font-bold text-[13px] tracking-wider uppercase border-b-2 border-black whitespace-nowrap">{more}</Link>}
    </div>
  );
}
