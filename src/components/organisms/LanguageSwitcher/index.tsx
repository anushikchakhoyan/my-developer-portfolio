"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
    const locale = useLocale() as Locale;
    const pathname = usePathname();
    const router = useRouter();

    const switchLocale = (nextLocale: Locale) => {
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <div className="flex items-center rounded-md border border-(--color-border) bg-(--color-surface) p-0.5 font-mono text-[0.7rem]">
            {(["en", "hy"] as const).map((code) => (
                <button
                    key={code}
                    type="button"
                    onClick={() => switchLocale(code)}
                    className={`px-2 py-1 rounded-md transition-colors cursor-pointer uppercase ${
                        locale === code
                            ? "bg-(--color-primary) text-black font-semibold"
                            : "text-(--color-text-muted) hover:text-(--color-text)"
                    }`}
                >
                    {code === "en" ? "EN" : "ՀԱՅ"}
                </button>
            ))}
        </div>
    );
}