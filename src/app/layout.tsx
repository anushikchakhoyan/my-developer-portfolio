import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Anush Chakhoyan | Lead UI Architect & Frontend Engineer",
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
};

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="dark" data-scroll-behavior="smooth" data-scribe-recorder-ready="true">
        <body className="antialiased selection:bg-(--color-primary) selection:text-black">
            {children}
        </body>
        </html>
    );
}
