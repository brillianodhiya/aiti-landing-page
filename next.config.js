/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    styledComponents: {
      minify: true,
      pure: true,
      transpileTemplateLiterals: true,
    },
  },
};

module.exports = nextConfig;
