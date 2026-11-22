import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TABLES = {
    plans: 'plans',
    plan_translations: 'plan_translations',
    audios: 'guided_audio_sessions',
    tips: 'health_tips',
    posts: 'posts',
};
const N_TIPS = 10;
const RECOMMENDATIONS_URL =
    process.env.RECOMMENDATIONS_URL ||
    'https://brantixrbsafnboysqmp.supabase.co/storage/v1/object/public/app-data/manual_recommendations.json';

const { PREVIEW_VISIBILITIES = 'public' } = process.env;
const ALLOWED_VIS = PREVIEW_VISIBILITIES.split(',').map(s => s.trim()).filter(Boolean);

const toAbs = (s) => (s ?? '').toString().trim();
const ensureHttps = (u) => (u && /^https?:\/\//i.test(u) ? u : '');

const parseJsonSafe = (val, fallback) => {
    if (val === null || val === undefined) return fallback;
    if (typeof val === 'object') return val;
    if (typeof val === 'string') {
        try {
            return JSON.parse(val);
        } catch {
            return fallback;
        }
    }
    return fallback;
};

const formatBenefits = (insightsRaw) => {
    let benefits = '';
    try {
        const insightsJson = parseJsonSafe(insightsRaw, []);
        if (Array.isArray(insightsJson)) {
            const parts = insightsJson.map((it) =>
                typeof it === 'string' ? it : (it?.text ?? it?.title ?? it?.value ?? '')
            ).filter(Boolean);
            benefits = parts.join(' · ').slice(0, 320);
        }
    } catch { }
    return benefits;
};

const outBanner = (ts) => `// AUTO-GENERATED FILE. DO NOT EDIT.
${ts}
`;

const seededShuffle = (arr, seed) => {
    const a = arr.slice();
    let x = seed || 1;
    const rand = () => {
        x ^= x << 13; x ^= x >>> 17; x ^= x << 5;
        return (x >>> 0) / 0xffffffff;
    };
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const { SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env;
if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error('[fetch-content] Missing SUPABASE_URL / SUPABASE_SERVICE_KEY in env');
    process.exit(1);
}
const sb = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, { auth: { persistSession: false } });

async function loadPlans() {
    const { data, error } = await sb
        .from(TABLES.plans)
        .select(`
            id,
            slug, 
            title, 
            subtitle, 
            description, 
            insights, 
            cautions,
            image_url, 
            visibility,
            goal_ids,
            suitable_time_of_day,
            practice_frequency,
            min_meal_gap,
            category,
            tags,
            intensity,
            contraindications,
            plan_translations (
                lang, title, subtitle, description, insights, cautions
            )
        `)
        .in('visibility', ALLOWED_VIS)
        .not('slug', 'is', null)
        .order('title', { ascending: true });

    if (error) throw error;

    const results = [];

    (data ?? []).forEach((r) => {
        const id = toAbs(r.id);
        const baseSlug = toAbs(r.slug);
        const baseImage = ensureHttps(toAbs(r.image_url));
        const goals = parseJsonSafe(r.goal_ids, []);
        const tags = parseJsonSafe(r.tags, {});
        const suitableTimeOfDay = parseJsonSafe(r.suitable_time_of_day, []);
        const contraindications = parseJsonSafe(r.contraindications, []);
        const category = toAbs(r.category);
        const intensity = toAbs(r.intensity) || 'beginner';
        const practiceFrequency = toAbs(r.practice_frequency);
        const minMealGap = toAbs(r.min_meal_gap);

        if (!baseSlug || !baseImage) return;

        results.push({
            id,
            slug: baseSlug,
            language: 'en',
            title: toAbs(r.title),
            subtitle: toAbs(r.subtitle),
            description: toAbs(r.description),
            benefits: formatBenefits(r.insights),
            cautions: toAbs(r.cautions),
            image: baseImage,
            deeplink: `tulaa://en/yoga/${baseSlug}`,
            goals,
            category,
            tags,
            intensity,
            practiceFrequency,
            suitableTimeOfDay,
            minMealGap,
            contraindications,
        });

        if (Array.isArray(r.plan_translations)) {
            r.plan_translations.forEach((tr) => {
                if (!tr.title || !tr.lang) return;

                results.push({
                    id,
                    slug: baseSlug,
                    language: tr.lang,
                    title: toAbs(tr.title),
                    subtitle: toAbs(tr.subtitle),
                    description: toAbs(tr.description),
                    benefits: formatBenefits(tr.insights) || formatBenefits(r.insights),
                    cautions: toAbs(tr.cautions) || toAbs(r.cautions),
                    image: baseImage,
                    deeplink: `tulaa://${tr.lang}/yoga/${baseSlug}`,
                    goals,
                    category,
                    tags,
                    intensity,
                    practiceFrequency,
                    suitableTimeOfDay,
                    minMealGap,
                    contraindications,
                });
            });
        }
    });

    return results;
}

async function loadRecommendations() {
    const res = await fetch(RECOMMENDATIONS_URL, {
        headers: { Accept: 'application/json' },
    });
    if (!res.ok) {
        throw new Error(`[fetch-content] Failed to fetch recommendations (${res.status} ${res.statusText})`);
    }
    const json = await res.json();
    if (!json || typeof json.overrides !== 'object') {
        throw new Error('[fetch-content] Invalid manual_recommendations.json schema');
    }
    return {
        version: toAbs(json.version || '1.0'),
        updated_at: toAbs(json.updated_at || new Date().toISOString()),
        overrides: json.overrides,
    };
}

async function loadAudios() {
    const { data, error } = await sb
        .from(TABLES.audios)
        .select('slug, language, title, subtitle, description, image_url, updated_at, translation_group_id')
        .not('slug', 'is', null)
        .not('image_url', 'is', null)
        .order('title', { ascending: true });

    if (error) throw error;

    return (data ?? []).map((r) => {
        const lang = r.language || 'en';
        const slug = toAbs(r.slug);
        return {
            slug: slug,
            language: lang,
            translation_group_id: r.translation_group_id,
            title: toAbs(r.title),
            subtitle: toAbs(r.subtitle),
            description: toAbs(r.description),
            image: ensureHttps(toAbs(r.image_url)),
            deeplink: `tulaa://audio/${slug}`,
        };
    }).filter(a => a.slug && a.image);
}

async function loadAllTips() {
    const { data, error } = await sb
        .from(TABLES.tips)
        .select('slug,tip,benefit,precaution,category,icon,updated_at')
        .not('slug', 'is', null)
        .order('slug', { ascending: true });

    if (error) throw error;

    return (data ?? []).map((r) => ({
        slug: toAbs(r.slug),
        tip: toAbs(r.tip),
        benefit: toAbs(r.benefit),
        precaution: toAbs(r.precaution),
        category: toAbs(r.category),
        icon: toAbs(r.icon),
        deeplink: `tulaa://app/tips/${toAbs(r.slug)}`,
    })).filter(t => t.slug && t.tip && t.benefit);
}

async function loadPosts() {
    const { data, error } = await sb
        .from(TABLES.posts)
        .select(`
            slug, 
            title, 
            excerpt, 
            cover_image_url, 
            status, 
            published_at, 
            language, 
            translation_group_id,
            seo_title, 
            seo_description, 
            content, 
            goal_ids, 
            suitable_time_of_day,
            cta_link, 
            cta_text
        `)
        .eq('status', 'published')
        .not('slug', 'is', null)
        .order('published_at', { ascending: false });

    if (error) throw error;

    return (data ?? []).map((r) => {
        const metaTitle = r.seo_title || r.title;
        const metaDesc = r.seo_description || r.excerpt || '';

        return {
            slug: toAbs(r.slug),
            language: r.language || 'en',
            translation_group_id: r.translation_group_id,
            title: toAbs(r.title),
            excerpt: toAbs(r.excerpt),
            image: ensureHttps(toAbs(r.cover_image_url)),
            date: r.published_at,
            metaTitle: toAbs(metaTitle),
            metaDescription: toAbs(metaDesc),
            content: r.content,
            cta: (r.cta_link && r.cta_text) ? { link: r.cta_link, text: r.cta_text } : null,
            goals: r.goal_ids || [],
            timeOfDay: r.suitable_time_of_day || [],
        };
    });
}

function toTsArray(varName, arr) {
    const json = JSON.stringify(arr, null, 2);
    return `export const ${varName} = ${json} as const;`;
}

function toTsConst(varName, typeName, obj) {
    const json = JSON.stringify(obj, null, 2);
    return `export const ${varName}: ${typeName} = ${json} as const;`;
}

async function run() {
    const [plans, audios, tipsAll, posts, recommendations] = await Promise.all([
        loadPlans(),
        loadAudios(),
        loadAllTips(),
        loadPosts(),
        loadRecommendations(),
    ]);

    const daySeed = Number(new Date().toISOString().slice(0, 10).replaceAll('-', ''));
    const tips = seededShuffle(tipsAll, daySeed).slice(0, N_TIPS);

    const ts = `import type { YogaPlanPreview, GuidedAudioPreview, TipPreview, ManualRecommendations } from './types';

${toTsArray('yogaPlans', plans)}
${toTsConst('manualRecommendations', 'ManualRecommendations', recommendations)}
${toTsArray('guidedAudios', audios)}
${toTsArray('tips', tips)}
${toTsArray('allTips', tipsAll)}
${toTsArray('blogPosts', posts)}
`;

    const outDir = path.join(__dirname, '..', 'src', 'data');
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'generated.ts'), outBanner(ts), 'utf8');

    console.log(
        `[fetch-content] Wrote src/data/generated.ts with ${plans.length} plans, ${Object.keys(recommendations.overrides).length} recommendation overrides, ${audios.length} audios, ${tipsAll.length} tips & ${posts.length} posts.`
    );
}

run().catch((e) => {
    console.error('[fetch-content] ERROR:', e);
    process.exit(1);
});