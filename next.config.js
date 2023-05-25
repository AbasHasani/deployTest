/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["image.tmdb.org", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
