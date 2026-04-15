export type Locale = 'en' | 'hi'; // keep for future, we’re not setting it yet

export interface YogaPlanPreview {
    slug: string;
    language: string;
    title: string;
    subtitle: string;
    description: string;
    benefits: string;
    image: string;
    deeplink: string;
    goals: string[];
}

export interface GuidedAudioPreview {
    slug: string;
    language: string;
    translation_group_id: string;
    title: string;
    subtitle: string;
    description: string;
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
    translation_group_id: string;
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