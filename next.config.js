/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['images.ctfassets.net', 'unsplash.com']
  }
}

module.exports = nextConfig
