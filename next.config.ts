import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages: emit static files into /out.
  output: "export",
  // Match the repository path used by the published GitHub Pages site.
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  images: {
    // Static export cannot use the Next.js image optimization server.
    unoptimized: true,
  },
};

export default nextConfig;
