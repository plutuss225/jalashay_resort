import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true, // Enables gzip compression for optimized assets
  reactStrictMode: true,
  images: {
    unoptimized: true, // Serve images directly as static files, completely bypassing Vercel Image Optimization compute and quotas
  },
  async headers() {
    return [
      {
        // Cache all static media (videos, images, fonts) aggressively so repeated visits don't hit Vercel Fast Data Transfer
        source: '/:path*\\.(mp4|webm|webp|avif|jpg|jpeg|png|svg|ico|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;



