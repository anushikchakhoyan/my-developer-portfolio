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
            className="btn filled shadow-sm">
            <span className="relative z-10">{icon}</span>
        </a>
    );
};