import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'themed';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style. `primary` is the main action, `secondary` the supporting one. `themed` follows the light/dark theme. */
    variant?: ButtonVariant;
    /** Padding and font size */
    size?: ButtonSize;
    /** Icon before the label */
    leftIcon?: ReactNode;
    /** Icon after the label */
    rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        variant = 'primary',
        size = 'md',
        leftIcon,
        rightIcon,
        type = 'button',
        className,
        children,
        ...rest
    },
    ref,
) {
    const classes = [styles.btn, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(' ');

    return (
        <button ref={ref} type={type} className={classes} {...rest}>
            {leftIcon && <span className={styles.icon} aria-hidden="true">{leftIcon}</span>}
            {children}
            {rightIcon && <span className={styles.icon} aria-hidden="true">{rightIcon}</span>}
        </button>
    );
});