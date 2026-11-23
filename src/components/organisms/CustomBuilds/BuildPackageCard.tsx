"use client";

import { useTranslations } from "next-intl";
import { BuildPackage } from "@/config/data";
import { BsArrowDownRight, BsCheck2 } from "react-icons/bs";

interface BuildPackageCardProps {
    pkg: BuildPackage;
    isSelected: boolean;
    onSelect: (pkg: BuildPackage) => void;
}

export function BuildPackageCard({
    pkg,
    isSelected,
    onSelect,
}: BuildPackageCardProps) {
    const t = useTranslations("packages");
    const slug = pkg.slug;

    const title = t(`${slug}.title`);
    const subtitle = t(`${slug}.subtitle`);
    const price = t(`${slug}.price`);
    const turnaround = t(`${slug}.turnaround`);
    const badge = t(`${slug}.badge`);
    const ctaLabel = t(`${slug}.ctaLabel`);
    const selectedLabel = t(`${slug}.selectedLabel`);
    const includedTitle = t(`${slug}.includedTitle`);
    const features = t.raw(`${slug}.features`) as string[];

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
            className={`group flex flex-col justify-between rounded-lg border p-6 transition-all cursor-pointer ${
                isSelected
                    ? "border-(--color-primary) bg-(--color-surface-hover)"
                    : "border-(--color-border) bg-(--color-surface) hover:border-(--color-primary) hover:bg-(--color-surface-hover)"
            }`}
        >
            <div>
                {/* Top Meta Row: Tag / Badge + Price & Turnaround Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[0.68rem] uppercase tracking-wider text-(--color-text-dim)">
                        {badge || pkg.slug}
                    </span>
                    <div className="flex items-center gap-1.5">
                        {price && (
                            <span className="font-mono text-[0.68rem] font-semibold px-2 py-0.5 rounded border border-(--color-border) bg-(--color-surface) text-(--color-text)">
                                {price}
                            </span>
                        )}
                        <span className="font-mono text-[0.68rem] px-2 py-0.5 rounded bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-accent)">
                            {turnaround}
                        </span>
                    </div>
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-2.5 mb-2.5">
                    <h3 className="font-serif text-xl text-(--color-text)">
                        {title}
                    </h3>
                </div>

                <p className="text-xs text-(--color-text-muted) leading-relaxed mb-5">
                    {subtitle}
                </p>

                {/* What's Included List */}
                <div className="border-t border-(--color-border) pt-4 mb-6">
                    <div className="font-mono text-[0.66rem] uppercase tracking-wider text-(--color-text-dim) mb-2.5">
                        {includedTitle}
                    </div>
                    <ul className="space-y-2">
                        {features.map((item) => (
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
                <span>{isSelected ? selectedLabel : ctaLabel}</span>
                <BsArrowDownRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
            </div>
        </article>
    );
}