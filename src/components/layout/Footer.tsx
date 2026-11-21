import React from "react";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";

import { siteConfig } from "@/config/site";

const FOOTER_LINKS = [
    { label: "Custom Builds", href: "#custom-builds" },
    { label: "Career", href: "#career" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-(--color-border) bg-[oklch(from_var(--color-bg)_l_c_h/0.95)] backdrop-blur-sm">
            <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
                {/* Main Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-(--color-border)/70">
                    {/* Brand / Editorial Note */}
                    <div className="space-y-1.5">
                        <div className="font-serif text-lg text-(--color-text)">
                            Anush Chakhoyan
                        </div>
                        <p className="font-mono text-xs text-(--color-text-muted)">
                            Frontend engineering, design systems &amp; custom web builds.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        {FOOTER_LINKS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="font-mono text-xs text-(--color-text-muted) hover:text-(--color-primary) transition-colors inline-flex items-center gap-1"
                            >
                                <span>{item.label}</span>
                            </Link>
                        ))}
                        {siteConfig?.email && (
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="font-mono text-xs text-(--color-primary) hover:opacity-85 transition-opacity inline-flex items-center gap-1.5"
                            >
                                <HiOutlineMail size={14} />
                                <span>Email</span>
                                <HiArrowUpRight size={12} />
                            </a>
                        )}
                    </nav>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-(--color-text-dim)">
                    <div>
                        &copy; {currentYear} Anush Chakhoyan. Built with Love.
                    </div>
                    <a
                        href="#top"
                        className="hover:text-(--color-text) transition-colors"
                    >
                        Back to top &uarr;
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;