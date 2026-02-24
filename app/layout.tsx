import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import PageTransition from "@/components/ui/PageTransition";

/* ============================= */
/* Font Configuration */
/* ============================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ============================= */
/* SEO Metadata */
/* ============================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://zubinmehta.ai"),

  title: {
    default: "Zubin Mehta | Strategic AI Systems Architect",
    template: "%s | Zubin Mehta",
  },

  description:
    "Lead AI/ML Engineer specializing in multi-agent systems, enterprise AI architecture, LLM orchestration, and intelligent automation.",

  keywords: [
    "Zubin Mehta",
    "AI Engineer",
    "LLM Architect",
    "LangGraph",
    "Multi-agent systems",
    "Enterprise AI",
    "AI Consulting",
  ],

  openGraph: {
    title: "Zubin Mehta | Strategic AI Systems Architect",
    description:
      "Designing enterprise-grade AI systems aligned with measurable business outcomes.",
    url: "https://zubinmehta.ai",
    siteName: "Zubin Mehta",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zubin Mehta | Strategic AI Systems Architect",
    description:
      "Enterprise AI architecture, multi-agent systems, and intelligent automation.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ============================= */
/* Root Layout */
/* ============================= */

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}