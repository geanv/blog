import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.x-1.me',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
