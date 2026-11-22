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
        heroTitleTop: "Yoga for Every Body,",
        heroTitleBottom: "At Every Stage.",
        heroBody: "Tailored routines for neck & back stiffness, PCOS, prenatal care, thyroid, diabetes, and joint mobility—with zero paywalls.",
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
        heroTitleTop: "हर शरीर के लिए योग,",
        heroTitleBottom: "उम्र और ज़रूरत के हिसाब से।",
        heroBody: "गर्दन व कमर दर्द, PCOS, प्रेगनेंसी, थायरॉइड, डायबिटीज और जोड़ों के दर्द के लिए खास तौर पर तैयार किए गए रूटीन।",
        ctaLabel: "सभी योग प्लान देखें",
    },
} as const;

export type SupportedLang = keyof typeof YOGA_UI;

export const CATEGORY_MAP: Record<string, string[]> = {
    general: ["pain_relief", "stress_relief", "fitness_posture"],
    seniors: ["seniors", "pain_relief"],
    medical: ["yoga_therapy"],
    womens: ["womens_health"],
};

export interface FinderOption {
    key: string;
    en: string;
    hi: string;
}

export interface FinderBranch {
    id: string;
    enLabel: string;
    hiLabel: string;
    enSub: string;
    hiSub: string;
    enPrompt: string;
    hiPrompt: string;
    options: readonly FinderOption[];
}

export const PLAN_FINDER_BRANCHES: readonly FinderBranch[] = [
    {
        id: "pain",
        enLabel: "Body Pain & Stiffness",
        hiLabel: "शरीर दर्द और जकड़न",
        enSub: "Back, neck, knees, joints & posture",
        hiSub: "कमर, गर्दन, घुटने और जोड़ों का दर्द",
        enPrompt: "Where do you feel pain or stiffness?",
        hiPrompt: "आपको कहाँ दर्द या जकड़न महसूस होती है?",
        options: [
            { key: "pain:lower_back", en: "Lower Back & Tailbone", hi: "निचली कमर और टेलबोन" },
            { key: "pain:neck", en: "Neck Stiffness", hi: "गर्दन की जकड़न" },
            { key: "pain:shoulders", en: "Shoulders", hi: "कंधों का दर्द" },
            { key: "pain:upper_back", en: "Upper Back & Posture", hi: "ऊपरी पीठ और पॉश्चर" },
            { key: "pain:knees", en: "Knees & Walking", hi: "घुटनों का दर्द" },
            { key: "pain:hips", en: "Hips & Sciatica", hi: "कूल्हे और साइटिका" },
            { key: "pain:spine", en: "Spine Alignment", hi: "रीढ़ की जकड़न" },
            { key: "pain:head", en: "Headache & Tension", hi: "सिरदर्द और तनाव" },
            { key: "pain:eyes", en: "Tired Eyes (Screen Strain)", hi: "आँखों की थकान" },
            { key: "pain:wrist_and_hands", en: "Wrists & Hands", hi: "कलाई और हाथ" },
            { key: "pain:ankles_and_feet", en: "Ankles & Feet", hi: "टखने और पैर" },
            { key: "pain:pelvic_floor", en: "Pelvic Floor", hi: "पेल्विक फ्लोर" },
            { key: "pain:core", en: "Core & Abs", hi: "कोर और पेट" },
            { key: "pain:hamstrings", en: "Hamstrings & Legs", hi: "हैमस्ट्रिंग और पैर" },
            { key: "pain:chest", en: "Chest & Breathing", hi: "छाती और श्वास" },
            { key: "pain:face", en: "Facial Tension & Glow", hi: "फेस योग और ग्लो" },
            { key: "pain:full_body", en: "Full Body Stiffness", hi: "पूरे शरीर की जकड़न" },
        ],
    },
    {
        id: "medical",
        enLabel: "Health & Medical Conditions",
        hiLabel: "स्वास्थ्य और मेडिकल समस्याएं",
        enSub: "PCOS, Thyroid, Diabetes, High BP & more",
        hiSub: "PCOS, थायरॉइड, डायबिटीज, हाई BP आदि",
        enPrompt: "Which condition would you like therapeutic support for?",
        hiPrompt: "आप किस स्वास्थ्य स्थिति के लिए योग थेरेपी चाहते हैं?",
        options: [
            { key: "medical:pcos", en: "PCOS & Hormonal Balance", hi: "PCOS और हार्मोन संतुलन" },
            { key: "medical:thyroid", en: "Thyroid Care", hi: "थायरॉइड केयर" },
            { key: "medical:diabetes", en: "Diabetes & Blood Sugar", hi: "डायबिटीज और ब्लड शुगर" },
            { key: "medical:high_bp", en: "High Blood Pressure", hi: "हाई ब्लड प्रेशर (High BP)" },
            { key: "medical:arthritis", en: "Arthritis & Joint Care", hi: "गठिया (Arthritis) और जोड़" },
            { key: "medical:digestion", en: "Digestion, Gas & Bloating", hi: "पाचन, गैस और एसिडिटी" },
            { key: "medical:migraine", en: "Migraine & Headache", hi: "माइग्रेन और सिरदर्द" },
            { key: "medical:sinus", en: "Sinus, Cold & Allergies", hi: "साइनस और सर्दी-जुकाम" },
            { key: "medical:scoliosis", en: "Scoliosis & Curved Spine", hi: "स्कोलियोसिस (रीढ़ का झुकाव)" },
        ],
    },
    {
        id: "pregnancy",
        enLabel: "Pregnancy & Postnatal",
        hiLabel: "गर्भावस्था और डिलीवरी के बाद",
        enSub: "Trimester-wise prenatal & postpartum recovery",
        hiSub: "तिमाही के अनुसार सुरक्षित प्रसव-पूर्व और पोस्टनेटल योग",
        enPrompt: "Select your current stage for safe, guided care:",
        hiPrompt: "सुरक्षित अभ्यास के लिए अपना वर्तमान चरण चुनें:",
        options: [
            { key: "pregnancy:trimester_1", en: "1st Trimester (Months 1–3)", hi: "पहली तिमाही (1–3 महीने)" },
            { key: "pregnancy:trimester_2", en: "2nd Trimester (Months 4–6)", hi: "दूसरी तिमाही (4–6 महीने)" },
            { key: "pregnancy:trimester_3", en: "3rd Trimester (Months 7–9)", hi: "तीसरी तिमाही (7–9 महीने)" },
            { key: "pregnancy:postpartum", en: "Postnatal Recovery (After Delivery)", hi: "डिलीवरी के बाद रिकवरी" },
        ],
    },
    {
        id: "general",
        enLabel: "Daily Wellness, Stress & Weight",
        hiLabel: "दैनिक सेहत, तनाव और वजन",
        enSub: "Stress relief, weight loss, sleep & focus",
        hiSub: "तनाव मुक्ति, वेट लॉस, गहरी नींद और फोकस",
        enPrompt: "What is your main daily wellness goal?",
        hiPrompt: "आपका मुख्य दैनिक स्वास्थ्य लक्ष्य क्या है?",
        options: [
            { key: "general:general_relaxation_relief", en: "Stress, Anxiety & Deep Sleep", hi: "तनाव मुक्ति और गहरी नींद" },
            { key: "general:general_weight_loss", en: "Weight Loss & Metabolism", hi: "वजन घटाना और मेटाबॉलिज्म" },
            { key: "general:general_health_wellness", en: "Daily Morning Full-Body Energy", hi: "रोज़ाना सुबह की ताज़गी और ऊर्जा" },
            { key: "general:general_strength_correction", en: "Core Strength & Straight Posture", hi: "कोर मजबूती और सीधा पॉश्चर" },
            { key: "general:general_energy_focus", en: "Instant Focus & Concentration", hi: "एकाग्रता और मानसिक फोकस" },
        ],
    },
    {
        id: "mobility",
        enLabel: "Seniors & Chair Mobility",
        hiLabel: "बुजुर्ग और चेयर योग",
        enSub: "Gentle seated routines & joint mobility",
        hiSub: "कुर्सी पर बैठकर किए जाने वाले सुरक्षित और आसान अभ्यास",
        enPrompt: "Gentle, supported movement for every age:",
        hiPrompt: "हर उम्र के लिए कोमल और सुरक्षित गतिशीलता:",
        options: [
            { key: "mobility:mobility", en: "Chair Yoga & Joint Mobility", hi: "चेयर योग और जोड़ों की गतिशीलता" },
        ],
    },
] as const;