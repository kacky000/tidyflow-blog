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
  redirects: {
    // WordPress旧URL → Astro新URL（/blog/付き）への301リダイレクト
    '/50-30-20-budget-rule-notion': '/blog/50-30-20-budget-rule-notion/',
    '/best-notion-budget-templates-2026': '/blog/best-notion-budget-templates-2026/',
    '/budgeting-mistakes-to-avoid': '/blog/budgeting-mistakes-to-avoid/',
    '/how-to-save-money-college-student': '/blog/how-to-save-money-college-student/',
    '/how-to-track-expenses-in-notion': '/blog/how-to-track-expenses-in-notion/',
    '/monthly-budget-checklist': '/blog/monthly-budget-checklist/',
    '/notion-templates-worth-paying-for': '/blog/notion-templates-worth-paying-for/',
    '/notion-vs-excel-budgeting': '/blog/notion-vs-excel-budgeting/',
    '/track-multiple-income-streams-notion': '/blog/track-multiple-income-streams-notion/',
    '/why-people-fail-at-budgeting': '/blog/why-people-fail-at-budgeting/',
  },
  adapter: vercel(),
  output: 'static',
});
