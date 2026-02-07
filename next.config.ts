import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    // Avoid Next.js picking up unrelated lockfiles outside this repo.
    root: __dirname,
  },
};

export default nextConfig;
