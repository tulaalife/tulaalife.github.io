export const YOGA_UI = {
    en: {
        title: "Yoga Plans",
        description: "Expert-guided routines for pain relief, hormonal health, and prenatal care.",
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
        heroBody: "Simple, safe routines for back & neck pain, PCOS, pregnancy, thyroid, diabetes, and joint care.",
        ctaLabel: "Explore All Yoga Plans",
    },
    hi: {
        title: "योग प्लान",
        description: "दर्द से राहत, हार्मोन संतुलन और प्रेगनेंसी के लिए आसान और सुरक्षित योग प्लान।",
        filterLabel: "ज़रूरत के हिसाब से चुनें:",
        filterAll: "सभी प्लान",
        filterGeneral: "रोज़ाना सेहत",
        filterSeniors: "बुजुर्ग और शुरुआती",
        filterMedical: "मेडिकल समस्याएं",
        filterWomens: "महिलाओं की सेहत",
        view: "प्लान देखें",
        prev: "पिछला",
        next: "अगला",
        metaPage: "पेज",
        heroTitleTop: "हर उम्र के लिए योग,",
        heroTitleBottom: "आपकी ज़रूरत के हिसाब से।",
        heroBody: "कमर व गर्दन दर्द, PCOS, प्रेगनेंसी, थायरॉइड, डायबिटीज और जोड़ों के दर्द के लिए आसान और सुरक्षित योग।",
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
    enTitleTop: string;
    enTitleBottom: string;
    hiTitleTop: string;
    hiTitleBottom: string;
    options: readonly FinderOption[];
}

export const PLAN_FINDER_BRANCHES: readonly FinderBranch[] = [
    {
        id: "pain",
        enLabel: "Body Pain & Chair Yoga",
        hiLabel: "शरीर का दर्द और चेयर योग",
        enSub: "Back, neck, joints, posture & senior chair yoga",
        hiSub: "कमर, गर्दन, जोड़ और बुजुर्गों के लिए चेयर योग",
        enTitleTop: "Where do you feel",
        enTitleBottom: "pain or stiffness?",
        hiTitleTop: "आपको कहाँ दर्द या",
        hiTitleBottom: "जकड़न महसूस होती है?",
        options: [
            { key: "pain:lower_back", en: "Lower Back & Tailbone", hi: "निचली कमर और टेलबोन" },
            { key: "pain:neck", en: "Neck Stiffness", hi: "गर्दन की जकड़न" },
            { key: "pain:shoulders", en: "Shoulders", hi: "कंधों का दर्द" },
            { key: "pain:upper_back", en: "Upper Back & Posture", hi: "ऊपरी पीठ और पॉश्चर" },
            { key: "pain:knees", en: "Knees & Walking", hi: "घुटनों का दर्द" },
            { key: "pain:hips", en: "Hips & Sciatica", hi: "कूल्हे और साइटिका" },
            { key: "pain:spine", en: "Spine Alignment", hi: "कमर और रीढ़ की जकड़न" },
            { key: "pain:head", en: "Headache & Tension", hi: "सिरदर्द और तनाव" },
            { key: "pain:eyes", en: "Tired Eyes (Screen Strain)", hi: "आँखों की थकान" },
            { key: "pain:wrist_and_hands", en: "Wrists & Hands", hi: "कलाई और हाथ" },
            { key: "pain:ankles_and_feet", en: "Ankles & Feet", hi: "टखने और पैर" },
            { key: "pain:pelvic_floor", en: "Pelvic Floor", hi: "पेल्विक फ्लोर" },
            { key: "pain:core", en: "Core & Abs", hi: "कोर और पेट" },
            { key: "pain:hamstrings", en: "Hamstrings & Legs", hi: "हैमस्ट्रिंग और पैर" },
            { key: "pain:chest", en: "Chest & Breathing", hi: "छाती और सांस" },
            { key: "pain:face", en: "Facial Tension & Glow", hi: "फेस योग और ग्लो" },
            { key: "pain:full_body", en: "Full Body Stiffness", hi: "पूरे शरीर की जकड़न" },
            { key: "mobility:mobility", en: "Chair Yoga & Senior Mobility", hi: "चेयर योग और जोड़ों का आराम" },
        ],
    },
    {
        id: "medical",
        enLabel: "Health & Medical Care",
        hiLabel: "सेहत से जुड़ी समस्याएं",
        enSub: "PCOS, Thyroid, Diabetes, High BP & more",
        hiSub: "PCOS, थायरॉइड, डायबिटीज, हाई BP आदि",
        enTitleTop: "Which health concern",
        enTitleBottom: "needs support?",
        hiTitleTop: "किस समस्या के लिए",
        hiTitleBottom: "योग प्लान चाहिए?",
        options: [
            { key: "medical:pcos", en: "PCOS & Hormonal Balance", hi: "PCOS और हार्मोन संतुलन" },
            { key: "medical:thyroid", en: "Thyroid Care", hi: "थायरॉइड केयर" },
            { key: "medical:diabetes", en: "Diabetes & Blood Sugar", hi: "डायबिटीज और ब्लड शुगर" },
            { key: "medical:high_bp", en: "High Blood Pressure", hi: "हाई ब्लड प्रेशर (High BP)" },
            { key: "medical:arthritis", en: "Arthritis & Joint Care", hi: "जोड़ों का दर्द और गठिया" },
            { key: "medical:digestion", en: "Digestion, Gas & Bloating", hi: "पाचन, गैस और एसिडिटी" },
            { key: "medical:migraine", en: "Migraine & Headache", hi: "माइग्रेन और सिरदर्द" },
            { key: "medical:sinus", en: "Sinus, Cold & Allergies", hi: "साइनस और सर्दी-जुकाम" },
            { key: "medical:scoliosis", en: "Scoliosis & Curved Spine", hi: "स्कोलियोसिस (रीढ़ का झुकाव)" },
        ],
    },
    {
        id: "pregnancy",
        enLabel: "Pregnancy & Postnatal",
        hiLabel: "प्रेगनेंसी और डिलीवरी के बाद",
        enSub: "Trimester-wise prenatal & postpartum care",
        hiSub: "हर महीने के हिसाब से सुरक्षित प्रेगनेंसी योग",
        enTitleTop: "Which stage of",
        enTitleBottom: "pregnancy are you in?",
        hiTitleTop: "प्रेगनेंसी के किस",
        hiTitleBottom: "महीने में हैं आप?",
        options: [
            { key: "pregnancy:trimester_1", en: "1st Trimester (Months 1–3)", hi: "पहली तिमाही (1–3 महीने)" },
            { key: "pregnancy:trimester_2", en: "2nd Trimester (Months 4–6)", hi: "दूसरी तिमाही (4–6 महीने)" },
            { key: "pregnancy:trimester_3", en: "3rd Trimester (Months 7–9)", hi: "तीसरी तिमाही (7–9 महीने)" },
            { key: "pregnancy:postpartum", en: "Postnatal Recovery (After Delivery)", hi: "डिलीवरी के बाद रिकवरी" },
        ],
    },
    {
        id: "general",
        enLabel: "Daily Fitness, Stress & Weight",
        hiLabel: "रोज़ाना फिटनेस, तनाव और वजन",
        enSub: "Stress relief, weight loss, sleep & focus",
        hiSub: "तनाव से राहत, वजन घटाना, गहरी नींद और फोकस",
        enTitleTop: "What is your main",
        enTitleBottom: "daily goal?",
        hiTitleTop: "आप रोज़ाना किस चीज़ के लिए",
        hiTitleBottom: "योग करना चाहते हैं?",
        options: [
            { key: "general:general_relaxation_relief", en: "Stress, Anxiety & Deep Sleep", hi: "तनाव से राहत और गहरी नींद" },
            { key: "general:general_weight_loss", en: "Weight Loss & Metabolism", hi: "वजन घटाना और मेटाबॉलिज्म" },
            { key: "general:general_health_wellness", en: "Daily Morning Full-Body Energy", hi: "सुबह की ताज़गी और एनर्जी" },
            { key: "general:general_strength_correction", en: "Core Strength & Straight Posture", hi: "कोर मजबूती और सीधा पॉश्चर" },
            { key: "general:general_energy_focus", en: "Instant Focus & Concentration", hi: "ध्यान और फोकस बढ़ाना" },
        ],
    },
] as const;
