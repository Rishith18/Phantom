import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Phantom",
  images: { unoptimized: true },
};

export default nextConfig;
