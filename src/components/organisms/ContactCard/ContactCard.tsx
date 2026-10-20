"use client";

import React, { useState } from "react";
import { Mail, Clock, MapPin, Calendar, Download } from "lucide-react";
import { Button } from "@/components/primitives/Button/Button";
import { ActionIconButton } from "@/components/primitives/ActionIconButton/ActionIconButton";
import { Toast } from "@/components/primitives/Toast/Toast";

// Custom SVG Icons for LinkedIn and GitHub to avoid missing export errors
const LinkedInIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
);

const GitHubIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
);

export const ContactCard: React.FC = () => {
    const [toastVisible, setToastVisible] = useState(false);

    const handleDownloadCv = () => {
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3500);
        window.location.href =
            "mailto:hello@anush.tech?subject=Request%20for%20Anush%20Chakhoyan%20CV&body=Hi%20Anush,%0A%0APlease%20share%20your%20latest%20CV.";
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

                        {/* Availability Banner */}
                        <div className="p-3.5 rounded-md border border-[oklch(0.78_0.16_140/0.4)] bg-(--color-surface-hover) flex items-center gap-3 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[oklch(0.78_0.16_140)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[oklch(0.78_0.16_140)]" />
              </span>
                            <span className="font-mono text-xs font-semibold text-(--color-text)">
                Currently Open for Senior UI / Frontend Engineering Roles
              </span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a href="mailto:hello@anush.tech?subject=Engineering%20Inquiry%20for%20Anush">
                            <Button variant="outline">Hire Me / Inquire ↗</Button>
                        </a>
                        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" icon={<Calendar size={14} />}>
                                Schedule a Call ↗
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
                            <Mail size={16} />
                        </div>
                        <div>
                            <div className="font-mono text-[0.7rem] uppercase text-(--color-text-dim)">Direct Email</div>
                            <a href="mailto:hello@anush.tech" className="text-sm font-semibold text-(--color-text) hover:text-(--color-primary)">
                                hello@anush.tech
                            </a>
                        </div>
                    </div>

                    {/* Response Window */}
                    <div className="flex items-center gap-3 py-2 border-b border-(--color-border)">
                        <div className="w-10 h-10 rounded-full bg-(--color-surface-hover) border border-(--color-border) flex items-center justify-center text-(--color-primary)">
                            <Clock size={16} />
                        </div>
                        <div>
                            <div className="font-mono text-[0.7rem] uppercase text-(--color-text-dim)">Response Window</div>
                            <div className="text-sm font-semibold text-(--color-text)">Under 24 Hours</div>
                        </div>
                    </div>

                    {/* Locations */}
                    <div className="flex items-start gap-3 py-2 border-b border-(--color-border)">
                        <div className="w-10 h-10 rounded-full bg-(--color-surface-hover) border border-(--color-border) flex items-center justify-center text-(--color-primary) mt-1">
                            <MapPin size={16} />
                        </div>
                        <div className="flex-1">
                            <div className="font-mono text-[0.7rem] uppercase text-(--color-text-dim) mb-1">Location &amp; Work Mode</div>
                            <div className="space-y-1 text-xs text-(--color-text)">
                                <div className="flex justify-between items-center">
                                    <span>Worldwide Remote</span>
                                    <span className="font-mono text-[0.68rem] px-1.5 py-0.5 rounded bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-accent)">Remote</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>United Arab Emirates (UAE)</span>
                                    <span className="font-mono text-[0.68rem] px-1.5 py-0.5 rounded bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-accent)">Hybrid</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Yerevan, Armenia</span>
                                    <span className="font-mono text-[0.68rem] px-1.5 py-0.5 rounded bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-accent)">Onsite</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Icons: Download CV, LinkedIn, GitHub */}
                    <div className="flex gap-2.5 pt-2">
                        <ActionIconButton
                            icon={<Download size={15} />}
                            label="Download CV"
                            onClick={handleDownloadCv}
                        />
                        <ActionIconButton
                            icon={<LinkedInIcon />}
                            label="LinkedIn Profile"
                            href="https://linkedin.com"
                            target="_blank"
                        />
                        <ActionIconButton
                            icon={<GitHubIcon />}
                            label="GitHub Profile"
                            href="https://github.com"
                            target="_blank"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};