/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.asuna.com.br',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 500,
  changefreq: 'daily',
  priority: 1.0,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

module.exports = config;
