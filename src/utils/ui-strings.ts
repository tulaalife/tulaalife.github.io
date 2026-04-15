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
            womens: {
                title: "Women's Health & Wellness",
                desc: "Specialized care for PCOS, Menstrual comfort, and all Prenatal trimesters.",
                icon: "✨",
                color: "rgba(236, 72, 153, 0.15)",
                link: "/yoga?goal=womens"
            },
            pain: {
                title: "Therapeutic Pain Relief",
                desc: "Fix 'Tech Neck', Sciatica, and Lower Back stiffness with targeted flows.",
                icon: "🧘",
                color: "rgba(99, 102, 241, 0.15)",
                link: "/yoga?goal=general"
            },
            seniors: {
                title: "Seniors & Gentle Aging",
                desc: "Maintain independence with Chair Yoga, Arthritis care, and Balance routines.",
                icon: "🦯",
                color: "rgba(34, 197, 94, 0.15)",
                link: "/yoga?goal=seniors"
            },
            medical: {
                title: "Metabolic & Spine Care",
                desc: "Scientific management for Diabetes, Thyroid, and Scoliosis alignment.",
                icon: "🔬",
                color: "rgba(20, 184, 166, 0.15)",
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
            womens: {
                title: "महिला स्वास्थ्य और कल्याण",
                desc: "PCOS, मासिक धर्म में राहत और प्रेगनेंसी के सभी चरणों के लिए विशेष योग।",
                icon: "✨",
                color: "rgba(236, 72, 153, 0.15)",
                link: "/hi/yoga?goal=womens"
            },
            pain: {
                title: "दर्द से वैज्ञानिक राहत",
                desc: "'टेक नेक', साइटिका और कमर दर्द के लिए खास तौर पर तैयार रूटीन।",
                icon: "🧘",
                color: "rgba(99, 102, 241, 0.15)",
                link: "/hi/yoga?goal=general"
            },
            seniors: {
                title: "बुजुर्गों के लिए सुरक्षित योग",
                desc: "चेयर योगा, गठिया (Arthritis) की देखभाल और संतुलन सुधारने के लिए।",
                icon: "🦯",
                color: "rgba(34, 197, 94, 0.15)",
                link: "/hi/yoga?goal=seniors"
            },
            medical: {
                title: "मेटाबॉलिक और स्पाइन केयर",
                desc: "डायबिटीज, थायराइड और रीढ़ की हड्डी की देखभाल के लिए वैज्ञानिक समाधान।",
                icon: "🔬",
                color: "rgba(20, 184, 166, 0.15)",
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