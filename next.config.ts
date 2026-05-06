import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["animated-backgrounds"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
