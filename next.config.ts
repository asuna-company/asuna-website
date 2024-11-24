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
  async headers() {
    return [
      {
        source: '/posts/:path*.json', // Alvo arquivos .json no caminho /posts/
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Permite acesso de qualquer origem
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, OPTIONS', // Métodos permitidos
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization', // Headers permitidos
          },
        ],
      },
    ];
  },
};

export default nextConfig;
