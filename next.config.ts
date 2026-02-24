import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85], // 👈 ADD THIS
  },
};

export default nextConfig;