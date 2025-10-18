export type Locale = 'en' | 'hi'; // keep for future, we’re not setting it yet

export interface YogaPlanPreview {
    slug: string;
    title: string;
    subtitle?: string;
    teaser: string;      // short description (~160 chars)
    benefits?: string;   // flattened from insights[]
    image: string;       // absolute URL
    deeplink: string;    // tulaa://yoga/{slug}
    locale?: Locale;
}

export interface GuidedAudioPreview {
    slug: string;
    title: string;
    teaser: string;
    image: string;
    deeplink: string;    // tulaa://audio/{slug}
    locale?: Locale;
}

export interface TipPreview {
    slug: string;
    tip: string;
    benefit: string;
    precaution?: string;
    category?: string;
    icon?: string;       // emoji or URL
    source?: { name?: string; url?: string };
    deeplink: string;    // tulaa://tips/{slug}
    locale?: Locale;
}