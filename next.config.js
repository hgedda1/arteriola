/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Use environment variable if set, otherwise use repository name for GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "/arteriola",
  // Match assetPrefix with basePath for GitHub Pages
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : "/arteriola/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Make base path available to client-side code
  publicRuntimeConfig: {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "/arteriola",
  },
  // Disable source maps in production to reduce bundle size
  productionBrowserSourceMaps: false,
}

// Override settings for development environment
if (process.env.NODE_ENV === "development") {
  nextConfig.basePath = ""
  nextConfig.assetPrefix = ""
  if (nextConfig.publicRuntimeConfig) {
    nextConfig.publicRuntimeConfig.basePath = ""
  }
}

module.exports = nextConfig
