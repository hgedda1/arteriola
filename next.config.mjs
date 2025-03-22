/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // required for static export
  basePath: isProd ? "/arteriola" : "",
  assetPrefix: isProd ? "/arteriola/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

export default nextConfig;
