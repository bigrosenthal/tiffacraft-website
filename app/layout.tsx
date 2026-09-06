import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — Soft Minecraft Shorts`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Soft Minecraft Shorts`,
    description: siteConfig.description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} ${siteConfig.handle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Soft Minecraft Shorts`,
    description: siteConfig.description,
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    sameAs: [siteConfig.youtubeUrl],
  };

  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="bg-block-grid flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
