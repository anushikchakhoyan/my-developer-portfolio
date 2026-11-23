import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";

import "../globals.css";

export const metadata: Metadata = {
    title: siteConfig.title,
    description: "Lead UI architect and frontend engineer specializing in enterprise design systems, design tokens, and scalable React.js architecture. 7+ years building for complex products.",
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
       apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180" },
      ],
    },
    openGraph: {
       title: siteConfig.title,
       description:
           "I'm a UI Architect & Frontend Engineer with 7+ years building responsive, production interfaces for platforms across iGaming, e-commerce, admin tooling, and edtech. My focus is turning fast-moving product requirements into clean, maintainable component architecture — with design-system consistency, accessibility, and testing built in from the start.",
       url: siteConfig.url,
       siteName: siteConfig.name,
       images: [
          {
            url: "/og-image.png", 
            width: 1200,
            height: 630,
            alt: siteConfig.title,
         },
       ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
       card: "summary_large_image",
       title: siteConfig.title,
       description: "I'm a UI Architect & Frontend Engineer with 7+ years building responsive, production interfaces for platforms across iGaming, e-commerce, admin tooling, and edtech. My focus is turning fast-moving product requirements into clean, maintainable component architecture — with design-system consistency, accessibility, and testing built in from the start.",
       images: ["/og-image.png"],
    },
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages();
    
    return (
        <html lang={locale} suppressHydrationWarning data-theme="dark" data-scroll-behavior="smooth" data-scribe-recorder-ready="true">
            <body suppressHydrationWarning className="antialiased selection:bg-(--color-primary) selection:text-black">
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
