// src/utils/ui-strings.ts

export const YOGA_UI = {
    en: {
        title: "Yoga Plans",
        description: "Expert-guided sequences for every need — from pain relief to prenatal care.",
        filterLabel: "Browse by Lifestyle:",
        filterAll: "All Plans",
        // Broad Categories
        filterGeneral: "General Wellness",
        filterSeniors: "Seniors & Beginners",
        filterMedical: "Medical Conditions",

        view: "View Plan",
        prev: "Previous",
        next: "Next",
        metaPage: "Page",
    },
    hi: {
        title: "योग प्लान",
        description: "हर ज़रूरत के लिए विशेषज्ञ द्वारा निर्देशित अभ्यास — दर्द निवारण से प्रसव पूर्व देखभाल तक।",
        filterLabel: "लाइफस्टाइल के अनुसार चुनें:",
        filterAll: "सभी प्लान",
        // Broad Categories
        filterGeneral: "स्वस्थ जीवन",
        filterSeniors: "बुजुर्ग और शुरुआती",
        filterMedical: "मेडिकल स्थितियां",

        view: "प्लान देखें",
        prev: "पिछला",
        next: "अगला",
        metaPage: "पेज",
    },
} as const;

export type SupportedLang = keyof typeof YOGA_UI;

/**
 * Mapping broader categories to underlying goal_ids
 */
export const CATEGORY_MAP = {
    general: ['pain_relief', 'stress_relief', 'fitness_posture'],
    seniors: ['pain_relief', 'seniors'],
    medical: ['yoga_therapy', 'womens_health'] // Added womens_health here as it fits medical management
};