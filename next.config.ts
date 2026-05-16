import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const githubPagesBasePath = "/portfolio";

const nextConfig = (phase: string): NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const basePath = isDev ? "" : githubPagesBasePath;

  return {
    // Required for GitHub Pages: emit static files into /out.
    output: "export",
    ...(basePath
      ? {
          // Match the repository path used by the published GitHub Pages site.
          basePath,
          assetPrefix: `${basePath}/`,
        }
      : {}),
    env: {
      NEXT_PUBLIC_BASE_PATH: basePath,
    },
    images: {
      // Static export cannot use the Next.js image optimization server.
      unoptimized: true,
    },
  };
};

export default nextConfig;
