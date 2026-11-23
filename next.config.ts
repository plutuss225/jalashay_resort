import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true, // Enables gzip compression for optimized assets
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // Cache optimized images for 1 year to avoid burning Vercel Fast Data Transfer
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
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



