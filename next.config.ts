import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    domains: ['asuna.com.br'],
  },
};

export default nextConfig;
