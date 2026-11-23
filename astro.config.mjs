import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { base, siteOrigin } from './src/site.config.mjs';
import { remarkBaseLinks } from './src/lib/remark-base.mjs';

export default defineConfig({
  site: siteOrigin,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.endsWith('/rss.xml'),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkBaseLinks],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
