import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Anush — Lead UI Architect & Frontend Engineer",
    description: "Enterprise portfolio featuring design tokens, Storybook 8 isolation, and Next.js App Router."
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="dark">
        <body className="antialiased selection:bg-(--color-primary) selection:text-black">
        {children}
        </body>
        </html>
    );
}
