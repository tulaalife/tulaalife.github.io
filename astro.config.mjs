import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://tulaalife.com',
    output: 'static',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'hi'],
        routing: {
            prefixDefaultLocale: false,
        }
    },
    integrations: [
        sitemap({
            i18n: {
                defaultLocale: 'en',
                locales: {
                    en: 'en-US',
                    hi: 'hi-IN',
                },
            },
        })
    ],
});