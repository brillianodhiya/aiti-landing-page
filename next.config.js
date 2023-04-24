/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
