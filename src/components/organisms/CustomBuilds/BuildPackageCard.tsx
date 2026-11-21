"use client";

import { BuildPackage, Locale } from "@/config/data";
import { BsArrowDownRight, BsCheck2 } from "react-icons/bs";

interface BuildPackageCardProps {
    pkg: BuildPackage;
    locale?: Locale;
    isSelected: boolean;
    onSelect: (pkg: BuildPackage) => void;
}

export function BuildPackageCard({
    pkg,
    locale = "en",
    isSelected,
    onSelect,
}: BuildPackageCardProps) {
    const content = pkg.content[locale];

    return (
        <article
            onClick={() => onSelect(pkg)}
            role="button"
            tabIndex={0}
            aria-pressed={isSelected}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(pkg);
                }
            }}
            className={`group flex flex-col justify-between rounded-lg border p-6 transition-all cursor-pointer ${isSelected
                    ? "border-(--color-primary) bg-(--color-surface-hover)"
                    : "border-(--color-border) bg-(--color-surface) hover:border-(--color-primary) hover:bg-(--color-surface-hover)"
                }`}
        >
            <div>
                {/* Top Meta Row: Tag / Badge + Price & Turnaround Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[0.68rem] uppercase tracking-wider text-(--color-text-dim)">
                        {content.tag ?? content.badge ?? pkg.slug}
                    </span>
                    <div className="flex items-center gap-1.5">
                        {content.price && (
                            <span className="font-mono text-[0.68rem] font-semibold px-2 py-0.5 rounded border border-(--color-border) bg-(--color-surface) text-(--color-text)">
                                {content.price}
                            </span>
                        )}
                        <span className="font-mono text-[0.68rem] px-2 py-0.5 rounded bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-accent)">
                            {content.turnaround}
                        </span>
                    </div>
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-2.5 mb-2.5">
                    {pkg.icon && (
                        <div
                            className={`w-8 h-8 rounded-md border flex items-center justify-center shrink-0 transition-colors ${isSelected
                                    ? "border-(--color-primary) bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-primary)"
                                    : "border-(--color-border) bg-(--color-surface-hover) text-(--color-primary) group-hover:border-(--color-primary)"
                                }`}
                        >
                            {pkg.icon}
                        </div>
                    )}
                    <h3 className="font-serif text-xl text-(--color-text)">
                        {content.title}
                    </h3>
                </div>

                <p className="text-xs text-(--color-text-muted) leading-relaxed mb-5">
                    {content.subtitle}
                </p>

                {/* What's Included List */}
                <div className="border-t border-(--color-border) pt-4 mb-6">
                    <div className="font-mono text-[0.66rem] uppercase tracking-wider text-(--color-text-dim) mb-2.5">
                        {content.includedTitle}
                    </div>
                    <ul className="space-y-2">
                        {content.features.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-2 text-xs text-(--color-text-muted) leading-snug"
                            >
                                <BsCheck2
                                    size={14}
                                    className="text-(--color-primary) shrink-0 mt-0.5"
                                />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="flex items-center justify-between pt-3 border-t border-(--color-border)/60 text-xs font-mono uppercase tracking-wider text-(--color-primary)">
                <span>
                    {isSelected
                        ? (content.selectedLabel ?? "Selected Below")
                        : content.ctaLabel}
                </span>
                <BsArrowDownRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
            </div>
        </article>
    );
}