/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist', // Custom output directory
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
  },
}

export default nextConfig
