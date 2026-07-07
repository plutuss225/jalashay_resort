import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true, // Enables gzip compression for optimized assets
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;


