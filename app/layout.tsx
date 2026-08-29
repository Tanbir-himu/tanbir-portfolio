import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";
import profile from "@/data/profile.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.site.url),
  title: profile.site.title,
  description: profile.site.description,
  keywords: [
    "AI Data Specialist",
    "Data Annotation",
    "LLM Evaluation",
    "Prompt Engineering",
    "Quality Analyst",
    "Bangladesh",
  ],
  authors: [{ name: "Md Tanbir Hossen Joy" }],
  creator: "Md Tanbir Hossen Joy",
  openGraph: {
    type: "website",
    url: profile.site.url,
    title: profile.site.title,
    description: profile.site.description,
    siteName: profile.site.name,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.site.title,
    description: profile.site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md Tanbir Hossen Joy",
    alternateName: "Tanbir",
    jobTitle: "AI Data Specialist",
    description: profile.site.description,
    url: profile.site.url,
    email: profile.contact.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "Bangladesh",
    },
    sameAs: [profile.socials.linkedin],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-bg-primary text-text-primary`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <CursorGlow />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
