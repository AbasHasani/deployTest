/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverActions: true
    },
    images: {
        domains: ["image.tmdb.org"]
    }
}

module.exports = nextConfig
