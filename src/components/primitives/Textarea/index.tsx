import type { ComponentPropsWithoutRef } from "react";

export function Textarea({
    className = "",
    ...props
}: ComponentPropsWithoutRef<"textarea">) {
    return (
        <textarea
            {...props}
            className={`w-full rounded-md border border-(--color-border) bg-(--color-surface-hover) px-3.5 py-2.5 text-sm text-(--color-text) placeholder:text-(--color-text-dim) focus:border-(--color-primary) focus:outline-none transition-colors ${className}`}
        />
    );
}