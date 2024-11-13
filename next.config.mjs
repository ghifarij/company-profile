/** @type {import('next').NextConfig} */

const nextConfig = {
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
