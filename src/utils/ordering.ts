export function isAumAudio(audio: { slug?: string; title?: string }): boolean {
    const slugTokens = (audio.slug || "").toLowerCase().split(/[-_\s]+/);
    const title = (audio.title || "").toLowerCase();
    return (
        slugTokens.includes("aum") ||
        slugTokens.includes("om") ||
        /\b(aum|om)\b/i.test(title) ||
        title.includes("ओम") ||
        title.includes("ॐ")
    );
}

export function deprioritizeAumAudios<T extends { slug?: string; title?: string }>(
    audios: readonly T[],
): T[] {
    const primary: T[] = [];
    const deprioritized: T[] = [];
    for (const item of audios) {
        if (isAumAudio(item)) {
            deprioritized.push(item);
        } else {
            primary.push(item);
        }
    }
    return [...primary, ...deprioritized];
}

export function hashSeed(seedStr: string): number {
    let h = 2166136261;
    for (let i = 0; i < seedStr.length; i++) {
        h ^= seedStr.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}

export function seededShuffle<T>(items: readonly T[], seedStr: string): T[] {
    const arr = items.slice();
    let a = hashSeed(seedStr) || 1;
    const rand = () => {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
