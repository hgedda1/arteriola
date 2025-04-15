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
  env: {
    NEXT_PUBLIC_BASE_PATH: '/arteriola',
  },
}

module.exports = nextConfig;
