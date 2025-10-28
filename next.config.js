/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable image optimization to bypass domain restrictions
    unoptimized: true,
    // Legacy domains config
    domains: [
      'thumbnails.padre.gg',
      'pbs.twimg.com',
      'ipfs.io',
      'arweave.net',
      'metadata.pumplify.eu',
      'img.fotofolio.xyz',
    ],
    // Allow all external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
