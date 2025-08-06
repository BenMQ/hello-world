/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['*.github.dev', '*.app.github.dev', 'localhost:3000'],
    },
  },

};

export default nextConfig;
