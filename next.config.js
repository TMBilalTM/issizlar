/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/npm/simple-icons@v9/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'newsroom-deezer.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
