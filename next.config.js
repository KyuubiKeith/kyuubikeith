/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  images: {
    domains: ['images.ctfassets.net', 'unsplash.com']
  }
}

module.exports = nextConfig
