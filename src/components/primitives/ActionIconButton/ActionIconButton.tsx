import React from "react";

export interface ActionIconButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon: React.ReactNode;
    label: string;
}

export const ActionIconButton: React.FC<ActionIconButtonProps> = ({ icon, label, ...props }) => {
    return (
        <a
            {...props}
            aria-label={label}
            title={label}
            className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer bg-[oklch(0.11_0.012_255)] text-white border border-[rgba(255,255,255,0.22)] shadow-[0_4px_14px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 hover:border-transparent hover:text-[var(--color-primary)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.7),0_0_16px_var(--color-primary-glow)] after:content-[''] after:absolute after:-inset-[1px] after:rounded-full after:p-[1px] after:bg-gradient-to-br after:from-[oklch(0.80_0.16_var(--brand-hue))] after:to-[oklch(0.78_0.15_var(--accent-hue))] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:pointer-events-none"
        >
            <span className="relative z-10">{icon}</span>
        </a>
    );
};