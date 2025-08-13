/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        '@repo/ui': '../../packages/ui/dist',
      },
    },
  },
  transpilePackages: ['@repo/ui'],
};

export default nextConfig;
