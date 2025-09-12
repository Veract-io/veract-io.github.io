import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['veract-website-assets.s3.ap-south-1.amazonaws.com'],
  },
  experimental: {
    // Let Next.js know not to try bundling these CJS-only packages in server routes
    serverComponentsExternalPackages: [
      "mjml",
      "juice",
      "html-minifier",
      "uglify-js",
    ],
  },
};

export default nextConfig;
