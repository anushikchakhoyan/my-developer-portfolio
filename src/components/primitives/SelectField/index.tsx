"use client";

import { useField } from "formik";
import { FiChevronDown } from "react-icons/fi";

interface SelectOption {
    value: string;
    label: string;
}

interface SelectFieldProps {
    name: string;
    label: string;
    options: SelectOption[];
    placeholder?: string;
}

export default function SelectField({
    name,
    label,
    options,
    placeholder = "Select an option",
}: SelectFieldProps) {
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

            <div className="relative">
                <select
                    id={name}
                    {...field}
                    className={`w-full appearance-none rounded-md border bg-(--color-surface-hover) px-3.5 py-2.5 pr-9 text-sm text-(--color-text) focus:outline-none transition-colors ${
                        hasError
                            ? "border-red-500/70 focus:border-red-500"
                            : "border-(--color-border) focus:border-(--color-primary)"
                    }`}
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>

                <FiChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-(--color-text-dim)"
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