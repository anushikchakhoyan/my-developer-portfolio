import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-[var(--color-border)] bg-[oklch(from_var(--color-bg)_l_c_h_/_0.95)] px-6 md:px-16 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[var(--color-text-dim)]">
            <div>
                &copy; 2026 Anush Chakhoyan. Built with Next.js App Router &amp; OKLCH tokens.
            </div>
            <div className="flex gap-6">
                <Link href="#slide-3" className="hover:text-[var(--color-primary)] transition-colors">
                    Experience
                </Link>
                <Link href="#slide-4" className="hover:text-[var(--color-primary)] transition-colors">
                    Testimonials
                </Link>
                <Link href="#slide-7" className="hover:text-[var(--color-primary)] transition-colors">
                    Contact
                </Link>
            </div>
        </footer>
    );
};