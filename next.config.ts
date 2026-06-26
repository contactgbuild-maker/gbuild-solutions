import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "aventure.dz",
      },
      {
        protocol: "https",
        hostname: "www.cor.europa.eu",
      },
      {
        protocol: "https",
        hostname: "www.icex.es",
      },
      {
        protocol: "https",
        hostname: "www.giz.de",
      },
      {
        protocol: "https",
        hostname: "gardenofbabylon.tech",
      },
      {
        protocol: "https",
        hostname: "www.cellularvoyages-immo.fr",
      },
      {
        protocol: "https",
        hostname: "www.sta-pra.com",
      },
      {
        protocol: "https",
        hostname: "aircrop.io",
      },
      {
        protocol: "https",
        hostname: "voltagaz.com",
      },
    ],
  },
};

export default nextConfig;
