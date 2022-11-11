/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["assets.stickpng.com", "unsplash.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
