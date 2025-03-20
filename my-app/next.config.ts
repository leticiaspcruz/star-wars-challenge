import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  redirects: async () => [],
  images: {
    domains: ['example.com'],
  },
};

export default nextConfig;
