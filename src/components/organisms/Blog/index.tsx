"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import { siteConfig } from "@/config/site";
import { Article, ARTICLES } from "@/config/data";
import { FILTERS, formatDate, type Filter } from "@/config/utils";

const LANG = {
    en: {
        badge: "EN",
        cta: "Read on Medium",
        minutes: (n: number) => `${n} min read`,
        locale: "en-US",
        color: "var(--color-primary)",
    },
    hy: {
        badge: "ՀԱՅ",
        cta: "Կարդալ Medium-ում",
        minutes: (n: number) => `${n} րոպե`,
        locale: "hy-AM",
        color: "var(--color-accent)",
    },
} as const;

const CARD_GAP = 16;

export const Blog: React.FC<{ articles?: Article[] }> = ({ articles = ARTICLES }) => {
    const [filter, setFilter] = useState<Filter>("all");
    const [active, setActive] = useState(0);
    const [touched, setTouched] = useState(false);
    const [inView, setInView] = useState(false);

    const rootRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLUListElement>(null);

    const sorted = useMemo(
        () => [...articles].sort((a, b) => b.date.localeCompare(a.date)),
        [articles]
    );
    const visible = useMemo(
        () => (filter === "all" ? sorted : sorted.filter((a) => a.lang === filter)),
        [sorted, filter]
    );
    const counts = useMemo(
        () => ({
            all: sorted.length,
            en: sorted.filter((a) => a.lang === "en").length,
            hy: sorted.filter((a) => a.lang === "hy").length,
        }),
        [sorted]
    );

    // Reveal cards once when the section scrolls into view
    useEffect(() => {
        const el = rootRef.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    // Back to the first card when the filter changes
    useEffect(() => {
        trackRef.current?.scrollTo({ left: 0 });
        setActive(0);
    }, [filter]);

    const onScroll = () => {
        const el = trackRef.current;
        const first = el?.children[0] as HTMLElement | undefined;
        if (!el || !first) return;

        if (el.scrollLeft > 8) setTouched(true);

        const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
        const index = atEnd
            ? visible.length - 1
            : Math.round(el.scrollLeft / (first.offsetWidth + CARD_GAP));
        setActive(Math.max(0, Math.min(index, visible.length - 1)));
    };

    const goTo = (index: number) => {
        const el = trackRef.current;
        const first = el?.children[0] as HTMLElement | undefined;
        if (!el || !first) return;
        el.scrollTo({ left: index * (first.offsetWidth + CARD_GAP), behavior: "smooth" });
    };

    return (
        <div ref={rootRef} className="mx-auto w-full max-w-5xl">
            {/* Toolbar: language filter + Medium profile */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div
                    role="group"
                    aria-label="Filter articles by language"
                    className="inline-flex rounded-full border border-(--color-border) bg-(--color-surface) p-1"
                >
                    {FILTERS.map((f) => {
                        const selected = filter === f.id;
                        return (
                            <button
                                key={f.id}
                                type="button"
                                aria-pressed={selected}
                                lang={f.lang}
                                onClick={() => setFilter(f.id)}
                                className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary) ${
                                    selected
                                        ? "bg-(--color-primary) text-(--color-bg)"
                                        : "text-(--color-text-muted) hover:text-(--color-text)"
                                }`}
                            >
                                {f.label}
                                <span className="ml-1.5 font-mono text-[10px] opacity-70">{counts[f.id]}</span>
                            </button>
                        );
                    })}
                </div>

                <a
                    href={siteConfig.links.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-(--color-text-muted) transition-colors hover:text-(--color-primary)"
                >
                    All articles on Medium ↗
                </a>
            </div>

            <p className="sr-only" aria-live="polite">
                Showing {visible.length} {visible.length === 1 ? "article" : "articles"}
            </p>

            {/* Mobile: swipeable carousel. md+: grid. */}
            <ul
                ref={trackRef}
                onScroll={onScroll}
                className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pt-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:px-0 md:pt-0 md:pb-0 lg:grid-cols-3"
            >
                {visible.map((article, i) => {
                    const cfg = LANG[article.lang];
                    return (
                        <li
                            key={article.id}
                            className={`w-[82%] shrink-0 snap-start transition-all duration-500 ease-out motion-reduce:transition-none sm:w-[55%] md:w-auto ${
                                inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                            }`}
                            style={{ transitionDelay: inView ? `${Math.min(i, 5) * 70}ms` : "0ms" }}
                        >
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${article.title} (opens on Medium in a new tab)`}
                                className="group gradient-border-hover flex h-full flex-col rounded-lg border border-(--color-border) bg-(--color-surface) p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)"
                            >
                                <div className="mb-3 flex items-center gap-2 font-mono text-xs">
                                    <span
                                        lang={article.lang}
                                        className="rounded-md border border-current px-1.5 py-0.5 font-semibold tracking-wider"
                                        style={{ color: cfg?.color ?? "inherit" }}
                                    >
                                        {cfg?.badge}
                                    </span>
                                    <span className="text-(--color-text-dim)">
                                        {formatDate(article.date, article.lang)}
                                    </span>
                                    <span className="text-(--color-text-dim)" aria-hidden>
                                        ·
                                    </span>
                                    <span lang={article.lang} className="text-(--color-text-dim)">
                                        {cfg?.minutes(article.readTime)}
                                    </span>
                                </div>

                                <h3
                                    lang={article.lang}
                                    className="mb-2 text-lg leading-snug font-bold text-(--color-text)"
                                >
                                    {article.title}
                                </h3>
                                <p
                                    lang={article.lang}
                                    className="mb-5 text-xs leading-relaxed text-(--color-text-muted)"
                                >
                                    {article.excerpt}
                                </p>

                                <div className="mt-auto flex flex-col items-start gap-3">
                                    <ul className="flex flex-wrap gap-1.5" aria-label="Topics">
                                        {article.tags?.map((tag) => (
                                            <li
                                                key={tag}
                                                className="rounded-md border border-(--color-border) px-2 py-0.5 font-mono text-[11px] text-(--color-text-muted)"
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                    <span
                                        lang={article.lang}
                                        className="shrink-0 text-xs font-semibold whitespace-nowrap"
                                        style={{ color: cfg?.color ?? "inherit" }}
                                    >
                                        {cfg?.cta}{" "}
                                        <span
                                            aria-hidden
                                            className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        >
                                            ↗
                                        </span>
                                    </span>
                                </div>
                            </a>
                        </li>
                    );
                })}
            </ul>

            {visible.length === 0 && (
                <p className="py-10 text-center text-sm text-(--color-text-muted)">
                    No articles in this language yet.
                </p>
            )}

            {/* Mobile only: position dots + swipe hint */}
            {visible.length > 1 && (
                <div className="mt-1 flex items-center justify-between md:hidden">
                    <div className="flex items-center gap-1.5">
                        {visible.map((a, i) => (
                            <button
                                key={a.id}
                                type="button"
                                aria-label={`Go to article ${i + 1} of ${visible.length}`}
                                aria-current={i === active}
                                onClick={() => goTo(i)}
                                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                                    i === active ? "w-6 bg-(--color-primary)" : "w-1.5 bg-(--color-border)"
                                }`}
                            />
                        ))}
                    </div>
                    <span
                        aria-hidden
                        className={`font-mono text-xs text-(--color-text-dim) transition-opacity duration-300 ${
                            touched ? "opacity-0" : "animate-pulse opacity-100"
                        }`}
                    >
                        Swipe →
                    </span>
                </div>
            )}
        </div>
    );
};

export default Blog;
