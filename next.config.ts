import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  compress: true,
};

export default nextConfig;
