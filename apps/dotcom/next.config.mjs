/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        '@repo/ui': '../../packages/ui/src',
      },
    },
  },
};

export default nextConfig;
