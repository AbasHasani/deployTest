/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["image.tmdb.org", "lh3.googleusercontent.com","avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
