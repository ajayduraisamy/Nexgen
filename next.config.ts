// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/diazxuntv/image/upload/**", // matches your Cloudinary path
      },
    ],
  },
};

module.exports = nextConfig;
