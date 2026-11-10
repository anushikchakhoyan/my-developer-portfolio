import React from "react";
import clsx from "clsx";

type Status = "open" | "limited" | "closed";

interface AvailabilityBadgeProps {
    children?: React.ReactNode;
    status?: Status;
    size?: string;
    className?: string;
}

const DOT_COLORS: Record<Status, { dot: string; border: string }> = {
    open: { dot: "bg-emerald-400", border: "border-emerald-400/40" },
    limited: { dot: "bg-amber-400", border: "border-amber-400/40" },
    closed: { dot: "bg-rose-500", border: "border-rose-500/40" },
};

export function AvailabilityBadge({
    children = "Currently Open for Senior UI / Frontend Engineering Roles",
    status = "open",
    size = "h-2.5 w-2.5",
    className,
}: AvailabilityBadgeProps) {
    const { dot, border } = DOT_COLORS[status];

    return (
        <div
            className={clsx(
                "p-3.5 rounded-md border bg-(--color-surface) flex items-center gap-3 mb-2",
                border,
                className
            )}
        >
            <span className={clsx("relative flex", size)}>
                <span
                    className={clsx(
                        "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                        dot
                    )}
                />
                <span className={clsx("relative inline-flex rounded-full", size, dot)} />
            </span>
            <span className="font-mono text-xs font-semibold text-(--color-text)">
                {children}
            </span>
        </div>
    );
}