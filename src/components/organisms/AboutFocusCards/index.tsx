"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FiArrowUpRight } from "react-icons/fi";

import { Button } from "@/components/primitives/Button";

export const AboutFocusCards: React.FC = () => {
    const t = useTranslations("aboutFocus");

    return (
        <div className="grid grid-cols-1 gap-8">
            <div className="rounded-lg border border-(--color-border) bg-(--color-surface) p-8">
                <h3 className="font-serif text-3xl text-(--color-primary) mb-1">
                    {t("greeting")}
                </h3>
                <p className="text-(--color-text-muted) mb-8 text-md leading-relaxed">
                    {t("tagline")}
                </p>
                <p className="text-sm leading-relaxed mb-4 text-(--color-text)">
                    {t("paragraph1")}
                </p>
                <p className="text-sm leading-relaxed mb-4 text-(--color-text)">
                    {t("paragraph2")}
                </p>
                <p className="text-sm leading-relaxed mb-10 text-(--color-text)">
                    {t("paragraph3")}
                </p>

                <div className="flex flex-col items-start sm:items-center gap-4">
                    <Link href="#contact">
                        <Button variant="primary" icon={<FiArrowUpRight size={14} />}>
                            {t("cta")}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutFocusCards;