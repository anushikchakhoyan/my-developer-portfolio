"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { SKILL_GROUPS } from "@/config/data";

export const ArchitectureGrid: React.FC = () => {
    const t = useTranslations("skills");

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
                <div
                    key={group.key}
                    className="gradient-border-hover flex flex-col justify-between rounded-lg border border-(--color-border) bg-(--color-surface) p-5"
                >
                    <div>
                        <span
                            className="mb-2 block font-mono text-xs font-semibold tracking-wider"
                            style={{ color: group.color }}
                        >
                            {t(`groups.${group.key}.step`)}
                        </span>
                        <h3 className="text-base font-bold text-(--color-text)">
                            {t(`groups.${group.key}.title`)}
                        </h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-(--color-text-muted)">
                            {t(`groups.${group.key}.desc`)}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};