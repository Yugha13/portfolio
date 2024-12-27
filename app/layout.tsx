import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yugha | Expert Copywriter for High-Converting Content | Saas",
  description:
    "Transform your business with Yugha's copywriting expertise. Specializing in email campaigns, sales copy, and landing pages that drive results.",
  keywords: [
    "Copywriter",
    "Copywriter Portfolio",
    "Copywriter Portfolio Template",
    "Copywriter Portfolio Example",
    "Email Copywriting",
    "SAAS",
    "Portfolio Template",
    "Landing Pages",
    "Sales Funnels",
    "SEO Copy",
    "Content Marketing",
    "High-Converting Copy",
    "Digital Marketing",
  ],
  authors: [{ name: "Yugha" }],
  openGraph: {
    title: "Yugha | Copywriter for Results-Driven Content",
    description:
      "Partner with Yugha to create engaging and persuasive content. Specializing in email sequences, landing pages, and sales copy.",
    url: "https://www.yughacopywriter.com",
    siteName: "Yugha Copywriter",
    images: [
      {
        url: "https://www.yughacopywriter.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yugha Copywriter Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YughaWrites",
    title: "Yugha | Expert Copywriter for High-Converting Content",
    description:
      "Transform your business with Yugha's copywriting expertise. Specializing in email campaigns, sales copy, and landing pages that drive results.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
        <Analytics/>
      </body>
    </html>
  );
}
