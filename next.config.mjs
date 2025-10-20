/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist', // Custom output directory
  output: 'export',
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
  },
}

export default nextConfig
