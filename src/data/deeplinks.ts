export interface DeeplinkEntry {
    slug: string;
    appScheme: string;
    en: {
        badge: string;
        title: string;
        description: string;
        keywords: string;
    };
    hi: {
        badge: string;
        title: string;
        description: string;
        keywords: string;
    };
}

export const DEEPLINK_PAGES: readonly DeeplinkEntry[] = [
    {
        slug: "water",
        appScheme: "tulaa://water",
        en: {
            badge: "Daily Hydration",
            title: "Daily Water Tracker · Tulaa",
            description:
                "Track your daily water intake effortlessly with gentle reminders. 100% private, offline, and free in the Tulaa app.",
            keywords: "water tracker, daily hydration tracker, drink water reminder, free water app, Tulaa",
        },
        hi: {
            badge: "दैनिक वॉटर ट्रैकर",
            title: "रोज़ाना पानी ट्रैकर · Tulaa",
            description:
                "रोज़ पर्याप्त पानी पीने की आसान आदत बनाएं। बिना लॉगिन, 100% निजी और फ्री — Tulaa ऐप में।",
            keywords: "वॉटर ट्रैकर, पानी पीने का रिमाइंडर, water tracker hindi, Tulaa",
        },
    },
    {
        slug: "cycle",
        appScheme: "tulaa://cycle",
        en: {
            badge: "100% Private On-Device",
            title: "Private Period & Cycle Tracker · Tulaa",
            description:
                "Log your periods, cycle phases, and symptoms privately on your phone. No login, no cloud sync, and zero ads.",
            keywords: "private period tracker, cycle diary, offline period tracker, no login period app, Tulaa",
        },
        hi: {
            badge: "100% निजी और सुरक्षित",
            title: "निजी पीरियड व साइकिल ट्रैकर · Tulaa",
            description:
                "अपने पीरियड्स और लक्षणों का रिकॉर्ड सिर्फ़ अपने फोन में सुरक्षित रखें। न कोई लॉगिन, न विज्ञापन।",
            keywords: "पीरियड ट्रैकर, मासिक चक्र डायरी, private period tracker hindi, Tulaa",
        },
    },
    {
        slug: "fasting",
        appScheme: "tulaa://fasting",
        en: {
            badge: "Intermittent Fasting",
            title: "Intermittent Fasting Timer · Tulaa",
            description:
                "Simple 16:8 and custom intermittent fasting timer with zero ads, no sign-up, and 100% on-device privacy.",
            keywords: "intermittent fasting timer, 16:8 fasting app, free fasting tracker, Tulaa",
        },
        hi: {
            badge: "इंटरमिटेंट फास्टिंग",
            title: "इंटरमिटेंट फास्टिंग टाइमर · Tulaa",
            description:
                "16:8 और अपनी पसंद के समय के लिए आसान फास्टिंग टाइमर। बिना विज्ञापन और बिना लॉगिन के।",
            keywords: "फास्टिंग टाइमर, इंटरमिटेंट फास्टिंग ऐप, intermittent fasting hindi, Tulaa",
        },
    },
    {
        slug: "mood",
        appScheme: "tulaa://mood",
        en: {
            badge: "Mood & Gratitude",
            title: "Private Mood & Gratitude Journal · Tulaa",
            description:
                "Check in with your mood and write daily gratitude notes privately on your device. No account required.",
            keywords: "mood tracker, private gratitude journal, daily mood log, Tulaa",
        },
        hi: {
            badge: "मूड और जर्नल",
            title: "निजी मूड और ग्रेटिट्यूड जर्नल · Tulaa",
            description:
                "रोज़ अपने मूड और मन की बातें सिर्फ़ अपने फोन में लिखें। 100% सुरक्षित और बिना लॉगिन।",
            keywords: "मूड ट्रैकर, ग्रेटिट्यूड जर्नल, mood tracker hindi, Tulaa",
        },
    },
    {
        slug: "rhythm",
        appScheme: "tulaa://rhythm",
        en: {
            badge: "Daily Habits",
            title: "Daily Rhythm & Habit Tracker · Tulaa",
            description:
                "Build calm, lasting daily yoga, water, breathing, and wellness habits with Tulaa's gentle Rhythm tracker.",
            keywords: "daily habit tracker, wellness rhythm, yoga streak, Tulaa",
        },
        hi: {
            badge: "दैनिक आदतें",
            title: "दैनिक रिदम और हैबिट ट्रैकर · Tulaa",
            description:
                "रोज़ योग, पानी और प्राणायाम की अच्छी आदतें बनाएं Tulaa के आसान रिदम ट्रैकर के साथ।",
            keywords: "हैबिट ट्रैकर, रोज़ाना योग आदत, habit tracker hindi, Tulaa",
        },
    },
    {
        slug: "journey",
        appScheme: "tulaa://journey",
        en: {
            badge: "Your Progress",
            title: "Your Wellness Journey · Tulaa",
            description:
                "See your yoga practice, breathing sessions, and daily health milestones privately on your device.",
            keywords: "wellness journey, yoga progress tracker, personal health log, Tulaa",
        },
        hi: {
            badge: "आपकी प्रगति",
            title: "आपकी सेहत की यात्रा · Tulaa",
            description:
                "अपने योग अभ्यास, ध्यान और रोज़ाना की सेहत की प्रगति एक ही जगह देखें — 100% निजी।",
            keywords: "योग प्रगति, सेहत ट्रैकर, wellness journey hindi, Tulaa",
        },
    },
    {
        slug: "blogs",
        appScheme: "tulaa://blogs",
        en: {
            badge: "Wellness Articles",
            title: "Yoga & Wellness Articles · Tulaa",
            description:
                "Easy-to-read articles on pain relief, posture, sleep, pranayama, and everyday health by Yoga Therapist Latika Bissa.",
            keywords: "yoga articles, wellness blog, back pain tips, sleep tips, Latika Bissa, Tulaa",
        },
        hi: {
            badge: "स्वास्थ्य लेख",
            title: "योग और सेहत से जुड़े लेख · Tulaa",
            description:
                "दर्द से राहत, अच्छी नींद, प्राणायाम और रोज़ाना की सेहत पर लतिका बिस्सा के आसान और उपयोगी लेख।",
            keywords: "योग ब्लॉग, सेहत टिप्स, कमर दर्द उपाय, लतिका बिस्सा, Tulaa",
        },
    },
    {
        slug: "about",
        appScheme: "tulaa://about",
        en: {
            badge: "About Tulaa",
            title: "About Tulaa & Yoga Therapist Latika Bissa",
            description:
                "Meet Latika Bissa (M.Sc. Gold Medalist, 12+ years experience) and learn how Tulaa brings free, private yoga & wellness to your phone.",
            keywords: "about Tulaa, Latika Bissa, YogaWithLatika, yoga therapist, Tulaa app",
        },
        hi: {
            badge: "Tulaa के बारे में",
            title: "Tulaa और योग टीचर लतिका बिस्सा के बारे में",
            description:
                "मिलें लतिका बिस्सा (M.Sc. गोल्ड मेडलिस्ट, 12+ साल अनुभव) से और जानें Tulaa के फ्री व निजी योग ऐप के बारे में।",
            keywords: "Tulaa के बारे में, लतिका बिस्सा, YogaWithLatika, योग थेरेपिस्ट",
        },
    },
    {
        slug: "settings",
        appScheme: "tulaa://settings",
        en: {
            badge: "App Settings",
            title: "App Settings & Privacy Controls · Tulaa",
            description:
                "Customize your Tulaa experience—themes, fonts, language, reminders, and local data backup—all on your device.",
            keywords: "Tulaa settings, app preferences, local data backup, Tulaa",
        },
        hi: {
            badge: "ऐप सेटिंग्स",
            title: "ऐप सेटिंग्स और प्राइवेसी · Tulaa",
            description:
                "Tulaa ऐप में थीम, फॉन्ट, भाषा, रिमाइंडर और अपने लोकल डेटा का बैकअप आसानी से सेट करें।",
            keywords: "Tulaa सेटिंग्स, ऐप प्राइवेसी, लोकल बैकअप",
        },
    },
    {
        slug: "theme",
        appScheme: "tulaa://themes",
        en: {
            badge: "30+ Calming Themes",
            title: "Calming Color Themes · Tulaa",
            description:
                "Personalize Tulaa with 30+ soothing light and dark color themes designed for eye comfort and daily calm.",
            keywords: "Tulaa themes, calming app themes, dark mode yoga app, Tulaa",
        },
        hi: {
            badge: "30+ शांत थीम्स",
            title: "शांत और सुंदर कलर थीम्स · Tulaa",
            description:
                "आँखों को आराम देने वाली 30+ लाइट और डार्क थीम्स में से अपनी पसंदीदा थीम चुनें।",
            keywords: "Tulaa थीम्स, डार्क मोड योग ऐप, कलर थीम",
        },
    },
    {
        slug: "themes",
        appScheme: "tulaa://themes",
        en: {
            badge: "30+ Calming Themes",
            title: "Calming Color Themes · Tulaa",
            description:
                "Personalize Tulaa with 30+ soothing light and dark color themes designed for eye comfort and daily calm.",
            keywords: "Tulaa themes, calming app themes, dark mode yoga app, Tulaa",
        },
        hi: {
            badge: "30+ शांत थीम्स",
            title: "शांत और सुंदर कलर थीम्स · Tulaa",
            description:
                "आँखों को आराम देने वाली 30+ लाइट और डार्क थीम्स में से अपनी पसंदीदा थीम चुनें।",
            keywords: "Tulaa थीम्स, डार्क मोड योग ऐप, कलर थीम",
        },
    },
    {
        slug: "font",
        appScheme: "tulaa://fonts",
        en: {
            badge: "Easy Reading",
            title: "Readable Font Settings · Tulaa",
            description:
                "Choose comfortable font styles and text sizes in Tulaa for effortless reading at any age.",
            keywords: "Tulaa fonts, readable text size, accessible yoga app, Tulaa",
        },
        hi: {
            badge: "आसान पढ़ाई",
            title: "फॉन्ट और टेक्स्ट साइज़ सेटिंग्स · Tulaa",
            description:
                "हर उम्र के लिए आराम से पढ़ने लायक फॉन्ट और टेक्स्ट साइज़ चुनें।",
            keywords: "Tulaa फॉन्ट, टेक्स्ट साइज़, आसान योग ऐप",
        },
    },
    {
        slug: "fonts",
        appScheme: "tulaa://fonts",
        en: {
            badge: "Easy Reading",
            title: "Readable Font Settings · Tulaa",
            description:
                "Choose comfortable font styles and text sizes in Tulaa for effortless reading at any age.",
            keywords: "Tulaa fonts, readable text size, accessible yoga app, Tulaa",
        },
        hi: {
            badge: "आसान पढ़ाई",
            title: "फॉन्ट और टेक्स्ट साइज़ सेटिंग्स · Tulaa",
            description:
                "हर उम्र के लिए आराम से पढ़ने लायक फॉन्ट और टेक्स्ट साइज़ चुनें।",
            keywords: "Tulaa फॉन्ट, टेक्स्ट साइज़, आसान योग ऐप",
        },
    },
    {
        slug: "language",
        appScheme: "tulaa://language",
        en: {
            badge: "English & हिंदी",
            title: "Language Settings (English & Hindi) · Tulaa",
            description:
                "Switch seamlessly between English and Hindi anytime inside the Tulaa app.",
            keywords: "Tulaa language, Hindi yoga app, English yoga app, Tulaa",
        },
        hi: {
            badge: "English और हिंदी",
            title: "भाषा सेटिंग्स (हिंदी और English) · Tulaa",
            description:
                "Tulaa ऐप में कभी भी अपनी सुविधा से हिंदी या English भाषा चुनें।",
            keywords: "Tulaa भाषा, हिंदी योग ऐप, Hindi yoga app",
        },
    },
    {
        slug: "languages",
        appScheme: "tulaa://language",
        en: {
            badge: "English & हिंदी",
            title: "Language Settings (English & Hindi) · Tulaa",
            description:
                "Switch seamlessly between English and Hindi anytime inside the Tulaa app.",
            keywords: "Tulaa language, Hindi yoga app, English yoga app, Tulaa",
        },
        hi: {
            badge: "English और हिंदी",
            title: "भाषा सेटिंग्स (हिंदी और English) · Tulaa",
            description:
                "Tulaa ऐप में कभी भी अपनी सुविधा से हिंदी या English भाषा चुनें।",
            keywords: "Tulaa भाषा, हिंदी योग ऐप, Hindi yoga app",
        },
    },
] as const;
