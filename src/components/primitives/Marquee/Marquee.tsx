import React from "react";

type MarqueeProps = {
    items: string[];
    direction?: "left" | "right";
};

export const Marquee: React.FC<MarqueeProps> = ({ items, direction = "left" }) => {
    const animation =
        direction === "left" ? "animate-scroll-linear-left" : "animate-scroll-linear-right";

    // Rendered twice for a seamless loop; the copy is hidden from assistive tech.
    const track = (hidden: boolean) => (
        <ul
            aria-hidden={hidden || undefined}
            className={[
                "flex min-w-full shrink-0 items-center gap-3 pr-3",
                animation,
                // pause the row under the cursor
                "group-hover/row:[animation-play-state:paused]",
                // reduced motion: no scrolling, pills wrap into centered rows
                "motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center",
                hidden ? "motion-reduce:hidden" : "",
            ].join(" ")}
        >
            {items.map((skill) => (
                <li
                    key={skill}
                    className="gradient-border-hover shrink-0 cursor-default whitespace-nowrap rounded-2xl border border-(--color-border) bg-(--color-surface) px-5 py-3 text-sm font-medium text-(--color-text)"
                >
                    {skill}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="group/row flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            {track(false)}
            {track(true)}
        </div>
    );
};

export default Marquee;