import type { NextConfig } from "next";

// "export" means the site is built into plain files in the /out folder.
// Those files are what you upload to Cloudflare Pages. No server needed.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
