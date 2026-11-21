"use client";

import type { ElementType, ComponentPropsWithoutRef } from "react";
import { useField } from "formik";

interface InputFieldProps {
    name: string;
    label: string;
    as?: ElementType;
    placeholder?: string;
    type?: string;
    className?: string;
    rows?: number;
}

export default function InputField({
    name,
    label,
    as: Component = "input",
    className = "",
    ...props
}: InputFieldProps & Omit<ComponentPropsWithoutRef<"input">, keyof InputFieldProps>) {
    const [field, meta] = useField(name);
    const hasError = Boolean(meta.touched && meta.error);

    return (
        <div className="w-full">
            <label
                htmlFor={name}
                className="block font-mono text-[0.7rem] uppercase tracking-wider text-(--color-text-dim) mb-1.5"
            >
                {label}
            </label>

            <Component
                id={name}
                {...field}
                {...props}
                className={`w-full rounded-md border bg-(--color-surface-hover) px-3.5 py-2.5 text-sm text-(--color-text) placeholder:text-(--color-text-dim) focus:outline-none transition-colors ${
                    hasError
                        ? "border-red-500/70 focus:border-red-500"
                        : "border-(--color-border) focus:border-(--color-primary)"
                } ${className}`}
            />

            {hasError && (
                <p className="mt-1 text-xs text-red-400" role="alert">
                    {meta.error}
                </p>
            )}
        </div>
    );
}