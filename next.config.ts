import type { NextConfig } from "next";

const nextConfig = {
  images: {
    // This allows SVGs to be used with the <Image> component.
    // It's marked as "dangerous" because SVGs can contain executable code.
    // Only enable this if you trust the image source.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // Re-added the placeholder domain
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Kept for future use
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;