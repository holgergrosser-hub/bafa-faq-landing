// generate-sitemap.js
// Run with: node generate-sitemap.js

import { writeFileSync } from 'fs';
import { faqData } from './src/data/faqData.js';

const DOMAIN = 'https://bafa-faq.qm-guru.de';
const TODAY = new Date().toISOString().split('T')[0];

function generateSitemap() {
  const urls = [];

  // Homepage
  urls.push({
    loc: `${DOMAIN}/`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '1.0'
  });

  // Categories and FAQs
  faqData.forEach(category => {
    // Category URL
    urls.push({
      loc: `${DOMAIN}/#${category.id}`,
      lastmod: TODAY,
      changefreq: 'monthly',
      priority: '0.8'
    });

    // Individual FAQ URLs
    category.questions.forEach(faq => {
      urls.push({
        loc: `${DOMAIN}/#${faq.id}`,
        lastmod: TODAY,
        changefreq: 'monthly',
        priority: '0.7'
      });
    });
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('')}
</urlset>`;

  // Write to file
  writeFileSync('./public/sitemap.xml', xml);
  console.log('✅ Sitemap generated successfully!');
  console.log(`📊 Total URLs: ${urls.length}`);
  console.log(`📁 Location: ./public/sitemap.xml`);
}

generateSitemap();
