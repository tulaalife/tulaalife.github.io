import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://tulaalife.com',
    output: 'static',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'hi'],
        routing: {
            // Correct: English at root, Hindi at /hi/
            prefixDefaultLocale: false,
        }
    },
    integrations: [
        sitemap({
            // i18n mapping inside sitemap is CRITICAL for Yoga page linking
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