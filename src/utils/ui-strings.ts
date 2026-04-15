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
        heroImg: "yoga-plans-collage",
        heroImgAlt: "Tulaa Yoga Plans Interface",
        ctaLabel: "Explore All Yoga Plans",
        features: {
            pain: {
                title: "Pain Management",
                desc: "Targeted relief for Back, Neck, and Joint pain.",
                icon: "🌿",
                color: "rgba(79, 70, 229, 0.1)",
                link: "/yoga?goal=general"
            },
            womens: {
                title: "Women's Wellness",
                desc: "Care for PCOS, Pregnancy, and Hormone Balance.",
                icon: "🌸",
                color: "rgba(219, 39, 119, 0.1)",
                link: "/yoga?goal=womens"
            },
            seniors: {
                title: "Seniors & Beginners",
                desc: "Gentle routines for Mobility, Balance, and Vitality.",
                icon: "✨",
                color: "rgba(22, 163, 74, 0.1)",
                link: "/yoga?goal=seniors"
            },
            medical: {
                title: "Therapeutic Care",
                desc: "Scientific support for Diabetes, High BP & Spine.",
                icon: "🧬",
                color: "rgba(13, 148, 136, 0.1)",
                link: "/yoga?goal=medical"
            }
        }
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
        heroImg: "yoga-plans-collage-hi",
        heroImgAlt: "योग प्लान इंटरफेस",
        ctaLabel: "सभी योग प्लान देखें",
        features: {
            pain: {
                title: "दर्द प्रबंधन",
                desc: "कमर, गर्दन और जोड़ों के दर्द से वैज्ञानिक राहत।",
                icon: "🌿",
                color: "rgba(79, 70, 229, 0.1)",
                link: "/hi/yoga?goal=general"
            },
            womens: {
                title: "महिला स्वास्थ्य",
                desc: "PCOS, प्रेगनेंसी और हार्मोनल संतुलन के लिए विशेष देखभाल।",
                icon: "🌸",
                color: "rgba(219, 39, 119, 0.1)",
                link: "/hi/yoga?goal=womens"
            },
            seniors: {
                title: "बुजुर्ग और शुरुआती",
                desc: "बेहतर गतिशीलता, संतुलन और ऊर्जा के लिए सुरक्षित योग।",
                icon: "✨",
                color: "rgba(22, 163, 74, 0.1)",
                link: "/hi/yoga?goal=seniors"
            },
            medical: {
                title: "थेरेप्यूटिक केयर",
                desc: "डायबिटीज, हाई बीपी, स्पाइन हेल्थ के लिए वैज्ञानिक योग।",
                icon: "🧬",
                color: "rgba(13, 148, 136, 0.1)",
                link: "/hi/yoga?goal=medical"
            }
        }
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