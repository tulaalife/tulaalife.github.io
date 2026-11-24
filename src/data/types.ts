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
    goals: readonly string[];
    intensity?: string;
    practiceFrequency?: string;
    suitableTimeOfDay?: readonly string[];
    minMealGap?: string;
}

export type RecommendationOverrides = Record<string, readonly string[]>;

export interface ManualRecommendations {
    overrides: RecommendationOverrides;
}

export interface GuidedAudioPreview {
    slug: string;
    language: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

export interface TipPreview {
    slug: string;
    tip: string;
    benefit: string;
    precaution?: string;
    category?: string;
    icon?: string;
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
}