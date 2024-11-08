/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: [], // Add any external image domains if needed
  },
  trailingSlash: true,
};

module.exports = nextConfig;
