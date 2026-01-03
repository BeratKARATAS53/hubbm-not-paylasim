const fs = require('fs');
const path = require('path');

const baseUrl = 'https://hubbm-not-paylasim.dev';
const resourcesDir = path.join(__dirname, '../src/resources');
const sitemapPath = path.join(__dirname, '../src/sitemap.xml');

const staticPages = [
  '/',
  '/home',
  '/privacy'
];

function generateSitemap() {
  const files = fs.readdirSync(resourcesDir);
  const codes = [];

  files.forEach(file => {
    if (file.endsWith('.ts')) {
      const content = fs.readFileSync(path.join(resourcesDir, file), 'utf8');
      const matches = content.matchAll(/code:\s*'([^']+)'/g);
      for (const match of matches) {
        codes.push(match[1]);
      }
    }
  });

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Ana sayfalar
  staticPages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${page === '/' ? '' : page}</loc>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>1.0</priority>\n';
    xml += '  </url>\n';
  });

  // Dinamik ders sayfaları
  codes.forEach(code => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/details/${code}</loc>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  fs.writeFileSync(sitemapPath, xml);
  console.log(`Sitemap başarıyla oluşturuldu: ${sitemapPath}`);
}

generateSitemap();
