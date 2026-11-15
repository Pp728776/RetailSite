// Shows a photo if the file exists in /public, otherwise a fabric pattern.
// You never need to edit this file: set "image" and "pattern" in the content files.
import fs from "node:fs";
import path from "node:path";
import type { Pattern } from "@/content/departments";

const SVG: Record<Pattern, string> = {
  block: `<rect width="80" height="80" fill="#8c2f27"/><circle cx="20" cy="20" r="9" fill="#e7b97a" opacity=".85"/><circle cx="60" cy="60" r="9" fill="#e7b97a" opacity=".85"/><path d="M60 10 l10 10 -10 10 -10 -10z M20 50 l10 10 -10 10 -10 -10z" fill="#f3e2c3" opacity=".7"/>`,
  ikat: `<rect width="80" height="80" fill="#1f3a5f"/><path d="M0 40 L20 20 L40 40 L60 20 L80 40 L60 60 L40 40 L20 60 Z" fill="#d9a441" opacity=".8"/><path d="M0 0 L10 10 L0 20z M80 0 L70 10 L80 20z M0 60 L10 70 L0 80z M80 60 L70 70 L80 80z" fill="#f0e6d2" opacity=".6"/>`,
  zari: `<rect width="80" height="80" fill="#5b1a36"/><path d="M40 4 C50 20 70 20 76 40 C70 60 50 60 40 76 C30 60 10 60 4 40 C10 20 30 20 40 4z" fill="none" stroke="#e5c15a" stroke-width="2.5"/><circle cx="40" cy="40" r="6" fill="#e5c15a"/>`,
  stripe: `<rect width="80" height="80" fill="#f1ece3"/><rect width="12" height="80" fill="#2b2b2b"/><rect x="24" width="4" height="80" fill="#2b2b2b"/><rect x="40" width="12" height="80" fill="#b0453a"/><rect x="64" width="4" height="80" fill="#2b2b2b"/>`,
  check: `<rect width="80" height="80" fill="#e9e2d3"/><rect width="40" height="40" fill="#3e5c47" opacity=".9"/><rect x="40" y="40" width="40" height="40" fill="#3e5c47" opacity=".9"/><rect x="36" width="8" height="80" fill="#c9a24d" opacity=".7"/><rect y="36" width="80" height="8" fill="#c9a24d" opacity=".7"/>`,
  denim: `<rect width="80" height="80" fill="#243b5a"/><path d="M0 0 L80 80 M-20 0 L60 80 M20 0 L100 80 M0 20 L60 80" stroke="#2f4c73" stroke-width="3"/><path d="M0 40 L40 0 M40 80 L80 40" stroke="#1a2c45" stroke-width="2"/>`,
  bandhani: `<rect width="80" height="80" fill="#c8342a"/><g fill="#fff3d6"><circle cx="10" cy="10" r="3"/><circle cx="30" cy="10" r="3"/><circle cx="50" cy="10" r="3"/><circle cx="70" cy="10" r="3"/><circle cx="20" cy="30" r="3"/><circle cx="40" cy="30" r="3"/><circle cx="60" cy="30" r="3"/><circle cx="10" cy="50" r="3"/><circle cx="30" cy="50" r="3"/><circle cx="50" cy="50" r="3"/><circle cx="70" cy="50" r="3"/><circle cx="20" cy="70" r="3"/><circle cx="40" cy="70" r="3"/><circle cx="60" cy="70" r="3"/></g>`,
  kids: `<rect width="80" height="80" fill="#f6c84c"/><circle cx="20" cy="20" r="10" fill="#ff6f61"/><rect x="48" y="12" width="20" height="20" rx="4" fill="#3aa0d8"/><path d="M20 70 l10 -18 10 18z" fill="#4caf50"/><circle cx="60" cy="60" r="9" fill="#9b59b6"/>`,
  linen: `<rect width="80" height="80" fill="#d8cdb8"/><path d="M0 10 H80 M0 30 H80 M0 50 H80 M0 70 H80" stroke="#c7b99f" stroke-width="2"/><path d="M10 0 V80 M30 0 V80 M50 0 V80 M70 0 V80" stroke="#cbbda3" stroke-width="2"/>`,
  paisley: `<rect width="80" height="80" fill="#143d33"/><path d="M40 10 C62 10 66 44 46 56 C30 66 18 52 26 42 C32 34 44 38 42 48 M40 10 C26 12 20 26 26 36" fill="none" stroke="#d9a441" stroke-width="2.5"/><circle cx="60" cy="66" r="4" fill="#d9a441"/><circle cx="14" cy="14" r="3" fill="#d9a441"/>`,
  wool: `<rect width="80" height="80" fill="#6b5a4e"/><path d="M0 20 Q20 0 40 20 T80 20 M0 60 Q20 40 40 60 T80 60" fill="none" stroke="#8d7a6b" stroke-width="6"/><path d="M0 40 Q20 20 40 40 T80 40 M0 80 Q20 60 40 80 T80 80" fill="none" stroke="#574840" stroke-width="6"/>`,
  white: `<rect width="80" height="80" fill="#eceae4"/><path d="M0 0 L80 80 M80 0 L0 80" stroke="#e1ded6" stroke-width="1"/>`,
};

function patternUrl(p: Pattern) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">${SVG[p]}</svg>`;
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
}

function imageExists(src?: string) {
  if (!src) return false;
  try { return fs.existsSync(path.join(process.cwd(), "public", src)); } catch { return false; }
}

type Props = {
  image?: string;
  pattern: Pattern;
  className?: string;
  shade?: number;          // 0 to 1, how dark the bottom gets so white text is readable
  children?: React.ReactNode;
};

export default function Photo({ image, pattern, className = "", shade = 0.35, children }: Props) {
  const hasImage = imageExists(image);
  const bg = hasImage ? `url("${image}")` : patternUrl(pattern);
  const style: React.CSSProperties = {
    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,${shade * 0.4}) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,${shade + 0.25}) 100%), ${bg}`,
    backgroundSize: hasImage ? "auto, cover" : "auto, 96px 96px",
    backgroundPosition: "center",
  };
  return <div className={`relative ${className}`} style={style}>{children}</div>;
}
