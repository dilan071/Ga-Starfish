import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
// next.config.js
module.exports = {
  experimental: {
    allowedDevOrigins: ['http://192.168.1.78:3000']
  }
};
