import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  compress: true,
  distDir: 'build',
  output: 'export',
  images: {
    domains: ['www.asuna.com.br'],
  },
};

export default nextConfig;
