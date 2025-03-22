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
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
