/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'trendshift.io',
      },
      {
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'localhost',
      },
    ],
  },
  output: 'standalone',
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
