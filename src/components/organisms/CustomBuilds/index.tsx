"use client";

import { Suspense, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import type { Locale } from "@/i18n/routing";
import { BUILD_PACKAGES, BuildPackage, WebsiteType } from "@/config/data";

import ProjectInquirySection from "./ProjectInquiry";
import { BuildPackageCard } from "./BuildPackageCard";

function CustomBuildsContent() {
    const searchParams = useSearchParams();
    const formWrapperRef = useRef<HTMLDivElement>(null);

    const locale = useLocale() as Locale;
    const t = useTranslations("customBuilds");

    const typeParam = searchParams.get("type")?.toLowerCase();
    const emailParam = searchParams.get("email") ?? "";

    const initialType: WebsiteType =
        BUILD_PACKAGES.find((item) => item.slug === typeParam)?.value ?? "Landing Page";

    const [selectedType, setSelectedType] = useState<WebsiteType>(initialType);

    const handleSelectPackage = (pkg: BuildPackage) => {
        setSelectedType(pkg.value);
        formWrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <section
            id="custom-builds"
            className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
        >
            <div className="max-w-5xl w-full">
                <header className="mb-12 text-left">
                    <span className="font-serif text-3xl text-(--color-primary) mr-2">
                        {t("number")}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                        {t("title")}
                    </h2>
                    <p className="text-sm text-(--color-text-muted) mt-1">
                        {t("subtitle")}
                    </p>
                </header>

                <div className="mb-20">
                    <div className="mb-6 border-b border-(--color-border) pb-4">
                        <h3 className="text-xl md:text-2xl font-serif text-(--color-text)">
                            {t("packagesTitle")}
                        </h3>
                        <p className="text-sm text-(--color-text-muted) mt-1">
                            {t("packagesSubtitle")}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {BUILD_PACKAGES.map((pkg) => (
                            <BuildPackageCard
                                key={pkg.value}
                                pkg={pkg}
                                isSelected={selectedType === pkg.value}
                                onSelect={handleSelectPackage}
                            />
                        ))}
                    </div>
                </div>

                <div ref={formWrapperRef}>
                    <ProjectInquirySection
                        selectedType={selectedType}
                        initialEmail={emailParam}
                        onSelectType={setSelectedType}
                    />
                </div>
            </div>
        </section>
    );
}

export function CustomBuilds() {
    return (
        <Suspense
            fallback={
                <div className="w-full max-w-5xl mx-auto h-96 rounded-lg border border-(--color-border) bg-(--color-surface) animate-pulse" />
            }
        >
            <CustomBuildsContent />
        </Suspense>
    );
}

export default CustomBuilds;