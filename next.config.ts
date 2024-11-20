import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true, 
  distDir: 'build', 
  poweredByHeader: false, 
  trailingSlash: false, 
  staticPageGenerationTimeout: 60, 
  crossOrigin: "anonymous",
  images: { 
    domains: ['www.asuna.com.br'], 
    unoptimized: true, 
  },
  compiler: { 
    removeConsole: true, 
  },
  experimental: {
    externalDir: true,
    typedRoutes: false,
    nextScriptWorkers: true,
    optimizeCss: {
      minify: true,
      treeShaking: true, 
    },
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },

};

export default nextConfig;
