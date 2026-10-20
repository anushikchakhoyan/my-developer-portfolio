"use client";

import React, { useState } from "react";
import { Button } from "@/components/primitives/Button/Button";

export const TokenInspector: React.FC = () => {
    const [hue, setHue] = useState<number>(350);

    const handleHueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        setHue(val);
        document.documentElement.style.setProperty("--brand-hue", val.toString());
    };

    return (
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8 max-w-4xl mx-auto w-full">
            <div className="mb-6 p-4 rounded-[var(--radius-md)] bg-[var(--color-surface-hover)] border-l-4 border-[var(--color-primary)]">
                <h4 className="font-bold text-base text-[var(--color-text)] mb-1">Live Token Inspector</h4>
                <p className="text-xs md:text-sm text-[var(--color-text-muted)]">
                    This portfolio dynamically computes colors using OKLCH color spaces. Tweak the hue parameter below to inspect dynamic real-time contrast calculations.
                </p>
            </div>

            {/* Hue Range Slider */}
            <div className="flex items-center gap-4 mb-6 p-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)]">
                <label className="font-mono text-sm text-[var(--color-primary)] font-semibold whitespace-nowrap">
                    Brand Hue: {hue}
                </label>
                <input
                    type="range"
                    min="0"
                    max="360"
                    value={hue}
                    onChange={handleHueChange}
                    className="w-full accent-[var(--color-primary)] cursor-pointer"
                />
            </div>

            {/* Button Roles Preview */}
            <div className="flex flex-wrap gap-3 mb-6">
                <Button variant="primary">Primary Action</Button>
                <Button variant="outline">Outline Action</Button>
            </div>

            {/* Tokens Table */}
            <div className="overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border)]">
                <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[var(--color-surface-hover)] border-b border-[var(--color-border)] text-[var(--color-text-dim)] uppercase tracking-wider">
                    <tr>
                        <th className="p-3">Token Name</th>
                        <th className="p-3">Value / Syntax</th>
                        <th className="p-3">Swatch</th>
                        <th className="p-3">Role</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--color-border)] text-[var(--color-text)]">
                    <tr>
                        <td className="p-3 font-semibold text-[var(--color-primary)]">--color-primary</td>
                        <td className="p-3">oklch(0.80 0.16 {hue})</td>
                        <td className="p-3">
                <span
                    className="inline-block w-6 h-6 rounded border border-[var(--color-border)]"
                    style={{ background: `oklch(0.80 0.16 ${hue})` }}
                />
                        </td>
                        <td className="p-3 text-[var(--color-accent)]">Primary Rose Accent &amp; Glows</td>
                    </tr>
                    <tr>
                        <td className="p-3 font-semibold text-[var(--color-primary)]">--color-accent</td>
                        <td className="p-3">oklch(0.78 0.15 220)</td>
                        <td className="p-3">
                <span
                    className="inline-block w-6 h-6 rounded border border-[var(--color-border)]"
                    style={{ background: "oklch(0.78 0.15 220)" }}
                />
                        </td>
                        <td className="p-3 text-[var(--color-accent)]">Secondary Sky Highlight &amp; Badges</td>
                    </tr>
                    <tr>
                        <td className="p-3 font-semibold text-[var(--color-primary)]">--color-bg</td>
                        <td className="p-3">oklch(0.12 0.012 255)</td>
                        <td className="p-3">
                <span
                    className="inline-block w-6 h-6 rounded border border-[var(--color-border)]"
                    style={{ background: "oklch(0.12 0.012 255)" }}
                />
                        </td>
                        <td className="p-3 text-[var(--color-text-dim)]">Canvas &amp; Slide Background</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};