"use client";

import { useField } from "formik";
import PhoneInput, { type Country } from "react-phone-number-input";

import styles from "./PhoneField.module.css";

interface PhoneFieldProps {
    name: string;
    label: string;
    placeholder?: string;
    defaultCountry?: Country;
}

export default function PhoneField({
    name,         
    label,
    placeholder = "+374 (94) 000-000",
    defaultCountry = "AM",
}: PhoneFieldProps) {
    const [field, meta, helpers] = useField<string>(name);
    const hasError = Boolean(meta.touched && meta.error);

    return (
        <div className="w-full">
            <label
                htmlFor={name}
                className="block font-mono text-[0.7rem] uppercase tracking-wider text-(--color-text-dim) mb-1.5"
            >
                {label}
            </label>

            <div
                className={`w-full rounded-md border bg-(--color-surface-hover) px-3 py-2 text-sm text-(--color-text) transition-colors focus-within:border-(--color-primary) ${
                    hasError ? "border-red-500/70" : "border-(--color-border)"
                }`}
            >
                <PhoneInput
                    id={name}
                    international
                    defaultCountry={defaultCountry}
                    placeholder={placeholder}
                    value={field.value}
                    onChange={(value) => helpers.setValue(value ?? "")}
                    onBlur={() => helpers.setTouched(true)}
                    className={styles.phoneInput}
                />
            </div>

            {hasError && (
                <p className="mt-1 text-xs text-red-400" role="alert">
                    {meta.error}
                </p>
            )}
        </div>
    );
}