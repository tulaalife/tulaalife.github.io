export type Locale = 'en' | 'hi';

export interface PlanTags {
    body_parts?: string[];
    wellness_focus?: string[];
    pregnancy_stages?: string[];
    medical_conditions?: string[];
}

export interface YogaPlanPreview {
    id: string;
    slug: string;
    language: string;
    title: string;
    subtitle: string;
    description: string;
    benefits: string;
    cautions?: string;
    image: string;
    deeplink: string;
    goals: string[];
    category?: string;
    tags?: PlanTags;
    intensity?: string;
    practiceFrequency?: string;
    suitableTimeOfDay?: string[];
    minMealGap?: string;
    contraindications?: string[];
}

export type RecommendationOverrides = Record<string, readonly string[]>;

export interface ManualRecommendations {
    version: string;
    updated_at: string;
    overrides: RecommendationOverrides;
}

export interface GuidedAudioPreview {
    slug: string;
    language: string;
    translation_group_id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    deeplink: string;
    locale?: Locale;
}

export interface TipPreview {
    slug: string;
    tip: string;
    benefit: string;
    precaution?: string;
    category?: string;
    icon?: string;
    deeplink: string;
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