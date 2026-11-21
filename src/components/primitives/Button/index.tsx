import React, { forwardRef } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

type Variant = "themed" | "primary" | "outline";
type Size = "sm" | "md" | "lg";

type OwnProps = {
    icon?: React.ReactNode;
    iconOnly?: boolean;
    filled?: boolean;
    variant?: Variant;
    size?: Size;
    className?: string;
};

// Renders a < button > when there's no href
type AsButton = OwnProps &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof OwnProps> & {
        href?: undefined;
    };

// Renders an <a> when href is provided
type AsLink = OwnProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof OwnProps> & {
        href: string;
    };

export type ButtonProps = AsButton | AsLink;

type ButtonImplProps = OwnProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    (props, ref) => {
        const {
            icon,
            iconOnly = false,
            filled,
            variant = "themed",
            size = "md",
            className,
            children,
            href,
            target,
            rel,
            ...rest
        } = props as ButtonImplProps;

        const classes = iconOnly
            ? clsx(styles.iconBtn, filled && styles.filled, className)
            : clsx(styles.btn, styles[variant], styles[size], className);

        const content = iconOnly ? (
            icon ?? children
        ) : (
            <>
                {icon && <span className="inline-flex items-center text-current">{icon}</span>}
                {children}
            </>
        );

        if (href != null) {
            const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;
            return (
                <a
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    href={href}
                    target={target}
                    rel={safeRel}
                    className={classes}
                    {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                >
                    {content}
                </a>
            );
        }

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={classes}
                {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
                {content}
            </button>
        );
    }
);

Button.displayName = "Button";