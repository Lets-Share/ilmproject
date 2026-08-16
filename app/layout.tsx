import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import AdsterraScript from "./components/AdsterraScript";

export const metadata: Metadata = {
  title: "ILM HUB - Digital Islamic Library",
  description: "The ultimate mobile library for seekers of knowledge. Access thousands of Islamic texts, books, and resources. Read anywhere, anytime, offline.",
  keywords: ["Islamic library", "Islamic books", "Quran", "Hadith", "Seerah", "Fiqh", "mobile app", "APK", "offline reading"],
  authors: [{ name: "ILM HUB" }],
  openGraph: {
    title: "ILM HUB - Digital Islamic Library",
    description: "Access thousands of Islamic texts, books, and resources. Read anywhere, anytime, offline.",
    type: "website",
    locale: "en_US",
    siteName: "ILM HUB",
  },
  twitter: {
    card: "summary_large_image",
    title: "ILM HUB - Digital Islamic Library",
    description: "Access thousands of Islamic texts, books, and resources. Read anywhere, anytime, offline.",
  },
  icons: {
    icon: "/favicon.webp",
    apple: "/favicon.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-parchment">
        <Navbar />
        {children}
        
        {/* Analytics Placeholder */}
        {/* Replace with your actual analytics code, e.g., Google Analytics, Plausible, etc. */}
        <Script
          id="analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Your analytics code here
              // Example: Google Analytics
              // window.dataLayer = window.dataLayer || [];
              // function gtag(){dataLayer.push(arguments);}
              // gtag('js', new Date());
              // gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />

        <AdsterraScript />
      </body>
    </html>
  );
}