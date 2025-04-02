/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com, ibb.co", // images.unsplash.com
        },
      ],
    },
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = nextConfig;