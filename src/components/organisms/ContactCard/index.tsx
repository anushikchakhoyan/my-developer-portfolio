"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { BsGithub, BsEnvelopeAtFill, BsCalendar2DateFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { IoMdMailUnread } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

import { AvailabilityBadge } from "@/components/primitives/AvailabilityBadge";
import { Button } from "@/components/primitives/Button";
import { siteConfig } from "@/config/site";

export const ContactCard: React.FC = () => {
    const t = useTranslations("contactCard");

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 rounded-lg border border-(--color-border) bg-(--color-surface) p-8 md:p-12 max-w-5xl mx-auto w-full">
            <div className="flex flex-col justify-between">
                <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-(--color-text) mb-4 leading-tight">
                        {t("heading")}
                    </h3>
                    <p className="text-sm text-(--color-text-muted) mb-6 leading-relaxed">
                        {t("description")}
                    </p>

                    <AvailabilityBadge className="mb-0">
                        {t("availability")}
                    </AvailabilityBadge>
                </div>

                <div className="flex flex-wrap gap-3 pt-6">
                    <a href={siteConfig.links.calendly} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" icon={<BsCalendar2DateFill size={14} />}>
                            {t("scheduleCall")}
                        </Button>
                    </a>
                    <a
                        href={`mailto:${siteConfig.email}?subject=Engineering%20Inquiry%20for%20Anush`}
                    >
                        <Button variant="outline" icon={<BsEnvelopeAtFill size={16} />}>
                            {t("sendMessage")}
                        </Button>
                    </a>
                </div>
            </div>

            {/* Right Column: Channels */}
            <div className="space-y-4 pt-6 lg:pt-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-(--color-border)">
                <h3 className="font-bold text-base text-(--color-text) mb-3">
                    {t("channelsTitle")}
                </h3>

                {/* Email */}
                <div className="flex items-center gap-3 py-2 border-b border-(--color-border)">
                    <div className="w-10 h-10 rounded-full bg-(--color-surface-hover) border border-(--color-border) flex items-center justify-center text-(--color-primary)">
                        <IoMdMailUnread size={16} />
                    </div>
                    <div>
                        <div className="font-mono text-[0.7rem] uppercase text-(--color-text-dim)">
                            {t("directEmailLabel")}
                        </div>
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-sm font-semibold text-(--color-text) hover:text-(--color-primary)"
                        >
                            {siteConfig.email}
                        </a>
                    </div>
                </div>

                {/* Response Window */}
                <div className="flex items-center gap-3 py-2 border-b border-(--color-border)">
                    <div className="w-10 h-10 rounded-full bg-(--color-surface-hover) border border-(--color-border) flex items-center justify-center text-(--color-primary)">
                        <FaClock size={16} />
                    </div>
                    <div>
                        <div className="font-mono text-[0.7rem] uppercase text-(--color-text-dim)">
                            {t("responseWindowLabel")}
                        </div>
                        <div className="text-sm font-semibold text-(--color-text)">
                            {t("responseWindowValue")}
                        </div>
                    </div>
                </div>

                {/* Locations */}
                <div className="flex items-start gap-3 py-2 border-b border-(--color-border)">
                    <div className="w-10 h-10 rounded-full bg-(--color-surface-hover) border border-(--color-border) flex items-center justify-center text-(--color-primary) mt-1">
                        <FiMapPin size={16} />
                    </div>
                    <div className="flex-1">
                        <div className="font-mono text-[0.7rem] uppercase text-(--color-text-dim) mb-1">
                            {t("locationLabel")}
                        </div>
                        <div className="space-y-1 text-xs text-(--color-text)">
                            <div className="flex justify-between items-center">
                                <span>{t("locations.worldwide.region")}</span>
                                <span className="font-mono text-[0.68rem] px-1.5 py-0.5 rounded bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-accent)">
                                    {t("locations.worldwide.mode")}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>{t("locations.uae.region")}</span>
                                <span className="font-mono text-[0.68rem] px-1.5 py-0.5 rounded bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-accent)">
                                    {t("locations.uae.mode")}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>{t("locations.armenia.region")}</span>
                                <span className="font-mono text-[0.68rem] px-1.5 py-0.5 rounded bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-accent)">
                                    {t("locations.armenia.mode")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Icons: LinkedIn, GitHub */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                    <Button
                        href={siteConfig.links.linkedin}
                        aria-label={t("linkedinLabel")}
                        icon={<FaLinkedinIn size={18} />}
                    >
                        {t("linkedin")}
                    </Button>
                    <Button
                        href={siteConfig.links.github}
                        aria-label={t("githubLabel")}
                        icon={<BsGithub size={18} />}
                    >
                        {t("github")}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;