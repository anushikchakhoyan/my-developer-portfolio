import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-(--color-border) bg-[oklch(from_var(--color-bg)_l_c_h/0.95)] px-6 md:px-16 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-(--color-text-dim)">
            <div>
                &copy; 2026 Anush Chakhoyan. Built with Love.
            </div>
            <div className="flex gap-6">
                <Link href="#career" className="hover:text-(--color-primary) transition-colors">
                    Career
                </Link>
                <Link href="#testimonials" className="hover:text-(--color-primary) transition-colors">
                    Testimonials
                </Link>
                <Link href="#contact" className="hover:text-(--color-primary) transition-colors">
                    Contact
                </Link>
            </div>
        </footer>
    );
};