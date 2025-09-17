/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/sustainable-landscaping-platform',
  assetPrefix: '/sustainable-landscaping-platform/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig