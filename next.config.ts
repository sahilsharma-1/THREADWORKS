import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Swap these demo photos for your own product shots in /public/products
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
