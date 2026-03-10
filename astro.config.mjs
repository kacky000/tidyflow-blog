import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://gettidyflow.com',
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        // Add lastmod to all URLs
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  adapter: vercel(),
  output: 'static',
});
