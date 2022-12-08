/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: [
      "assets.stickpng.com",
      "images.unsplash.com",
      "res.cloudinary.com",
      "unsplash.com",
    ],
  },
};

module.exports = nextConfig;
