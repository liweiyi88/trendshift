/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
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
