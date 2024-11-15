/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.asuna.com.br',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 100,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.asuna.com.br/sitemap.xml',
    ],
  },
};

module.exports = config;
