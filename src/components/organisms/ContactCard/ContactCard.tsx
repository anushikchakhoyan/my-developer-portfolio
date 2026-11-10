"use client";

import React, { useState } from "react";

import { BsGithub, BsCalendar2DateFill } from "react-icons/bs";
import { FiDownload, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { IoMdMailUnread } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

import { AvailabilityBadge } from "@/components/atoms/AvailabilityBadge/AvailabilityBadge";
import { Button } from "@/components/atoms/Button/Button";
import { Toast } from "@/components/atoms/Toast/Toast";

export const ContactCard: React.FC = () => {
    const [toastVisible, setToastVisible] = useState(false);

    const handleDownloadCv = () => {
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3500);
        window.location.href =
            "mailto:hello@anushui.dev?subject=Request%20for%20Anush%20Chakhoyan%20CV&body=Hi%20Anush,%0A%0APlease%20share%20your%20latest%20CV.";
    };

    return (
        <>
            <Toast message="CV requested — Opening direct email draft..." isVisible={toastVisible} />

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 rounded-lg border border-(--color-border) bg-(--color-surface) p-8 md:p-12 max-w-4xl mx-auto w-full">
                {/* Left Column: Pitch & Actions */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="font-serif text-3xl md:text-4xl text-(--color-text) mb-4 leading-tight">
                            Let's build something exceptional together.
                        </h3>
                        <p className="text-sm text-(--color-text-muted) mb-6 leading-relaxed">
                            Whether you're scaling a design system from scratch or optimizing component performance across engineering teams, let's talk.
                        </p>

                        <AvailabilityBadge className="mb-0">Currently Open for Senior UI / Frontend Engineering Roles</AvailabilityBadge>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a href="mailto:hello@anushui.dev?subject=Engineering%20Inquiry%20for%20Anush">
                            <Button variant="outline" rightIcon={<FiArrowUpRight size={14} />}>Hire Me / Inquire</Button>
                        </a>
                        <a href="https://calendly.com/anush-chakhoyan-dev" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" rightIcon={<BsCalendar2DateFill size={14} />}>
                                Schedule a Call
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Right Column: Channels */}
                <div className="space-y-4 pt-6 lg:pt-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-(--color-border)">
                    <h4 className="font-bold text-base text-(--color-text) mb-3">Direct Channels</h4>

                    {/* Email */}
                    <div className="flex items-center gap-3 py-2 border-b border-(--color-border)">
                        <div className="w-10 h-10 rounded-full bg-(--color-surface-hover) border border-(--color-border) flex items-center justify-center text-(--color-primary)">
                            <IoMdMailUnread size={16} />
                        </div>
                        <div>
                            <div className="font-mono text-[0.7rem] uppercase text-(--color-text-dim)">Direct Email</div>
                            <a href="mailto:hello@anushui.dev" className="text-sm font-semibold text-(--color-text) hover:text-(--color-primary)">
                                hello@anushui.dev
                            </a>
                        </div>
                    </div>

                    {/* Response Window */}
                    <div className="flex items-center gap-3 py-2 border-b border-(--color-border)">
                        <div className="w-10 h-10 rounded-full bg-(--color-surface-hover) border border-(--color-border) flex items-center justify-center text-(--color-primary)">
                            <FaClock size={16} />
                        </div>
                        <div>
                            <div className="font-mono text-[0.7rem] uppercase text-(--color-text-dim)">Response Window</div>
                            <div className="text-sm font-semibold text-(--color-text)">Under 24 Hours</div>
                        </div>
                    </div>

                    {/* Locations */}
                    <div className="flex items-start gap-3 py-2 border-b border-(--color-border)">
                        <div className="w-10 h-10 rounded-full bg-(--color-surface-hover) border border-(--color-border) flex items-center justify-center text-(--color-primary) mt-1">
                            <FiMapPin size={16} />
                        </div>
                        <div className="flex-1">
                            <div className="font-mono text-[0.7rem] uppercase text-(--color-text-dim) mb-1">Location &amp; Work Mode</div>
                            <div className="space-y-1 text-xs text-(--color-text)">
                                <div className="flex justify-between items-center">
                                    <span>Worldwide</span>
                                    <span className="font-mono text-[0.68rem] px-1.5 py-0.5 rounded bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-accent)">Remote</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>United Arab Emirates (UAE)</span>
                                    <span className="font-mono text-[0.68rem] px-1.5 py-0.5 rounded bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-accent)">Hybrid</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Armenia</span>
                                    <span className="font-mono text-[0.68rem] px-1.5 py-0.5 rounded bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-accent)">Onsite</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Icons: Download CV, LinkedIn, GitHub */}
                    <div className="flex gap-2.5 pt-2">
                        <Button
                            variant="outline"
                            rightIcon={<FiDownload size={15} />}
                            aria-label="Download CV"
                            onClick={handleDownloadCv}
                        />
                        <Button variant="outline" href="https://linkedin.com" aria-label="LinkedIn Profile" rightIcon={<FaLinkedinIn size={18} />} />
                        <Button variant="outline" href="https://github.com" aria-label="GitHub Profile" rightIcon={<BsGithub size={18} />} />
                    </div>
                </div>
            </div>
        </>
    );
};