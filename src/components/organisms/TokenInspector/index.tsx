"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/primitives/Button";

export const TokenInspector: React.FC = () => {
    const t = useTranslations("tokenInspector");
    const [hue, setHue] = useState<number>(307); // Default hue value

    const handleHueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        setHue(val);
        document.documentElement.style.setProperty("--brand-hue", val.toString());
    };

    return (
        <div className="rounded-lg border border-(--color-border) bg-(--color-surface) p-6 md:p-8 max-w-4xl mx-auto w-full">
            <div className="mb-6 p-4 rounded-md bg-(--color-surface-hover) border-l-4 border-(--color-primary)">
                <h3 className="font-bold text-base text-(--color-text) mb-1">
                    {t("heading")}
                </h3>
                <p className="text-xs md:text-sm text-(--color-text-muted)">
                    {t("description")}
                </p>
            </div>
            <div className="flex items-center gap-4 mb-6 p-4 rounded-md border border-(--color-border) bg-(--color-bg)">
                <label
                    htmlFor="brand-hue"
                    className="font-mono text-sm text-(--color-primary) font-semibold whitespace-nowrap"
                >
                    {t("hueLabel")}: <output htmlFor="brand-hue">{hue}</output>
                </label>
                <input
                    id="brand-hue"
                    type="range"
                    min="0"
                    max="360"
                    value={hue}
                    onChange={handleHueChange}
                    className="w-full accent-(--color-primary) cursor-pointer"
                />
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
                <Button variant="primary">{t("buttons.primary")}</Button>
                <Button variant="outline">{t("buttons.outline")}</Button>
            </div>
            <div className="overflow-x-auto rounded-md border border-(--color-border)">
                <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-(--color-surface-hover) border-b border-(--color-border) text-(--color-text-dim) uppercase tracking-wider">
                        <tr>
                            <th className="p-3">{t("table.headers.name")}</th>
                            <th className="p-3">{t("table.headers.value")}</th>
                            <th className="p-3">{t("table.headers.swatch")}</th>
                            <th className="p-3">{t("table.headers.role")}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-(--color-border) text-(--color-text)">
                        <tr>
                            <td className="p-3 font-semibold text-(--color-primary)">
                                --color-primary
                            </td>
                            <td className="p-3">oklch(0.80 0.16 {hue})</td>
                            <td className="p-3">
                                <span
                                    className="inline-block w-6 h-6 rounded border border-(--color-border)"
                                    style={{ background: `oklch(0.80 0.16 ${hue})` }}
                                />
                            </td>
                            <td className="p-3 text-(--color-accent)">
                                {t("table.roles.primary")}
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-semibold text-(--color-primary)">
                                --color-accent
                            </td>
                            <td className="p-3">oklch(0.78 0.15 220)</td>
                            <td className="p-3">
                                <span
                                    className="inline-block w-6 h-6 rounded border border-(--color-border)"
                                    style={{ background: "oklch(0.78 0.15 220)" }}
                                />
                            </td>
                            <td className="p-3 text-(--color-accent)">
                                {t("table.roles.accent")}
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-semibold text-(--color-primary)">
                                --color-bg
                            </td>
                            <td className="p-3">oklch(0.12 0.012 255)</td>
                            <td className="p-3">
                                <span
                                    className="inline-block w-6 h-6 rounded border border-(--color-border)"
                                    style={{ background: "oklch(0.12 0.012 255)" }}
                                />
                            </td>
                            <td className="p-3 text-(--color-text-dim)">
                                {t("table.roles.bg")}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TokenInspector;