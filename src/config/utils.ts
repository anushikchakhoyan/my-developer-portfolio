import type { Locale } from "@/config/data";

export type Filter = "all" | Locale;

export interface BlogFilterOption {
    id: Filter;
    label: string;
    lang?: Locale;
}

export const FILTERS: BlogFilterOption[] = [
    { id: "all", label: "All" },
    { id: "en", label: "English", lang: "en" },
    { id: "hy", label: "Հայերեն", lang: "hy" },
];

export const MONTHS: Record<Locale, string[]> = {
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    hy: [
        "հունվար",
        "փետրվար",
        "մարտ",
        "ապրիլ",
        "մայիս",
        "հունիս",
        "հուլիս",
        "օգոստոս",
        "սեպտեմբեր",
        "հոկտեմբեր",
        "նոյեմբեր",
        "դեկտեմբեր",
    ],
};

export function formatDate(iso: string, lang: Locale): string {
    const [year, month] = iso.split("-").map(Number);
    const monthIndex = month - 1;
    const monthLabel = MONTHS[lang]?.[monthIndex];

    if (!year || !monthLabel) {
        return iso;
    }

    return `${monthLabel} ${year}`;
}