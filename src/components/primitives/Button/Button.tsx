import React, { forwardRef } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "themed" | "primary" | "outline";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = "themed", size = "md", icon, className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={clsx(styles.btn, styles[variant], styles[size], className)}
                {...props}
            >
                {children}
                {icon && <span className="inline-flex items-center text-current">{icon}</span>}
            </button>
        );
    }
);

Button.displayName = "Button";