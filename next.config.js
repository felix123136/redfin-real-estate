/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "assets.vercel.com",
      "bayut-production.s3.eu-central-1.amazonaws.com",
      "ssl.cdn-redfin.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
