import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pagedone.io",
        port: "",
        pathname: "/asset/**",
      },
      {
        hostname: "images.ctfassets.net",
      },
    ],
    domains: ["randomuser.me"],
  },
};

export default nextConfig;
