import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["static.vecteezy.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      }
    ],
  },
}; 

export default nextConfig;
