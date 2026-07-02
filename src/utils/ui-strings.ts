// src/utils/ui-strings.ts

export const YOGA_UI = {
    en: {
        title: "Yoga Plans",
        description: "Expert-guided sequences for every need — from pain relief to prenatal care.",
        filterLabel: "Browse by Lifestyle:",
        filterAll: "All Plans",
        filterGeneral: "General Wellness",
        filterSeniors: "Seniors & Beginners",
        filterMedical: "Medical Conditions",
        filterWomens: "Women's Health",
        view: "View Plan",
        prev: "Previous",
        next: "Next",
        metaPage: "Page",
        // Marketing Section
        heroTitleTop: "Yoga for Every Body,",
        heroTitleBottom: "At Every Stage.",
        heroBody: "Scientifically designed yoga for every age & every need.",
        ctaLabel: "Explore All Yoga Plans",
    },
    hi: {
        title: "योग प्लान",
        description: "हर ज़रूरत के लिए विशेषज्ञ द्वारा निर्देशित अभ्यास — दर्द निवारण से प्रसव पूर्व देखभाल तक।",
        filterLabel: "लाइफस्टाइल के अनुसार चुनें:",
        filterAll: "सभी प्लान",
        filterGeneral: "स्वस्थ जीवन",
        filterSeniors: "बुजुर्ग और शुरुआती",
        filterMedical: "मेडिकल स्थितियां",
        filterWomens: "महिलाओं की सेहत",
        view: "प्लान देखें",
        prev: "पिछला",
        next: "अगला",
        metaPage: "पेज",
        // Marketing Section
        heroTitleTop: "हर शरीर के लिए योग,",
        heroTitleBottom: "जीवन के हर पड़ाव पर।",
        heroBody: "हर उम्र और ज़रूरत के लिए विज्ञान-आधारित योग।",
        ctaLabel: "सभी योग प्लान देखें",
    },
} as const;

export type SupportedLang = keyof typeof YOGA_UI;

/**
 * Shared mapping for filtering logic (Internal IDs to Goal IDs)
 */
export const CATEGORY_MAP: Record<string, string[]> = {
    general: ["pain_relief", "stress_relief", "fitness_posture"],
    seniors: ["seniors", "pain_relief"],
    medical: ["yoga_therapy"],
    womens: ["womens_health"],
};