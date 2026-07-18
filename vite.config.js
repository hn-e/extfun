import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'fs'
import routes from './src/routes.js'

const BASE_URL = 'https://extroverts.app'

function generateSitemap() {
  const entries = routes
    .filter(r => r.sitemap !== false)
    .map(r => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <changefreq>${r.sitemap.changefreq}</changefreq>
    <priority>${r.sitemap.priority}</priority>
  </url>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-sitemap',
      closeBundle() {
        writeFileSync('dist/sitemap.xml', generateSitemap())
      },
    },
  ],
})
