import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://tulaalife.com',
    output: 'static',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'hi'],
        routing: {
            // Keeps English pages at the root (tulaalife.com/yoga) 
            // and places Hindi pages under the /hi/ path (tulaalife.com/hi/yoga)
            prefixDefaultLocale: false,
        }
    },
    integrations: [sitemap()],
});