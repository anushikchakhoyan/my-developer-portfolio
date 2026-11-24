"use client";

import { useTranslations } from "next-intl";

import Marquee from "@/components/primitives/Marquee";
import { SKILL_GROUPS } from "@/config/data";

import { ArchitectureGrid } from "../ArchitectureGrid";

// Marquee rows: groups 1-3 scroll left, groups 4-6 scroll right.
const ROW_ONE = SKILL_GROUPS.slice(0, 3).flatMap((g) => g.skills);
const ROW_TWO = SKILL_GROUPS.slice(3).flatMap((g) => g.skills);

export const Skills: React.FC = () => {
    const t = useTranslations("skills");

    return (
        <div className="mx-auto w-full max-w-5xl space-y-10">
            <ArchitectureGrid />

            {/* Every skill, scrolling */}
            <div className="w-full" aria-label={t("marqueeAriaLabel")}>
                <Marquee items={ROW_ONE} direction="left" />
                <Marquee items={ROW_TWO} direction="right" />
            </div>

            {/* Education */}
            <div className="gradient-border-hover flex flex-col gap-2 rounded-lg border border-(--color-border) bg-(--color-surface) p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <span className="mb-2 block font-mono text-xs font-semibold tracking-wider text-(--color-primary)">
                        {t("education.eyebrow")}
                    </span>
                    <h3 className="text-lg font-bold text-(--color-text)">
                        {t("education.degree")}
                    </h3>
                    <p className="mt-1 text-xs text-(--color-text-muted)">
                        {t("education.institution")}
                    </p>
                </div>
                <span className="font-mono text-xs text-(--color-text-muted)">
                    {t("education.period")}
                </span>
            </div>
        </div>
    );
};

export default Skills;