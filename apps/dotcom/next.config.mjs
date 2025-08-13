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
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.dongascience.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.dongascience.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.dongascience.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nextjs.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
