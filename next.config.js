/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/arteriola',
  assetPrefix: '/arteriola/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig;
