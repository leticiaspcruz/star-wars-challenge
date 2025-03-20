import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: '/',
      destination: '/home',
      permanent: false,
    },
  ],
  images: {
    domains: ['example.com'],
  },
};

export default nextConfig;
