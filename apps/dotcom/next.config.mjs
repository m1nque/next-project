import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@repo/ui': path.resolve('../../packages/ui/src'),
    };
    return config;
  },
};

export default nextConfig;
