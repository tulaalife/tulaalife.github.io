export type Locale = 'en' | 'hi'; // keep for future, we’re not setting it yet

export interface YogaPlanPreview {
    slug: string;
    title: string;
    subtitle: string;
    teaser: string;      // short description (~160 chars)
    benefits?: string;   // flattened from insights[]
    image: string;       // absolute URL
    deeplink: string;    // tulaa://yoga/{slug}
    locale?: Locale;
}

export interface GuidedAudioPreview {
    slug: string;
    title: string;
    subtitle: string;
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
    deeplink: string;    // tulaa://tips/{slug}
    locale?: Locale;
}

export interface BlogPost {
    slug: string;
    language: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    metaTitle?: string;
    metaDescription?: string;
    content: {
        ops: any[];
    };
    cta?: {
        link: string;
        text: string;
    } | null;
    goals?: string[];
    timeOfDay?: string[];
}