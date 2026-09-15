import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RouteProgress } from "@/components/RouteProgress";
import { PageTransition } from "@/components/PageTransition";
import { company } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "EPCMT — Mühəndislik, Tikinti və Layihələrin İdarə Edilməsi",
    template: "%s — EPCMT",
  },
  description:
    "EPCMT mühəndislik, tikinti, layihələndirmə və layihələrin idarə edilməsi üzrə peşəkar xidmətlər təqdim edir.",
  keywords: [
    "mühəndislik",
    "tikinti",
    "layihələndirmə",
    "layihələrin idarə olunması",
    "satınalma",
    "podrat",
    "EPCMT",
    "Azərbaycan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "az_AZ",
    siteName: "EPCMT",
    title: "EPCMT — Mühəndislik, Tikinti və Layihələrin İdarə Edilməsi",
    description:
      "EPCMT mühəndislik, tikinti, layihələndirmə və layihələrin idarə edilməsi üzrə peşəkar xidmətlər təqdim edir.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "EPCMT — Mühəndislik, Tikinti və Layihələrin İdarə Edilməsi",
    description:
      "EPCMT mühəndislik, tikinti, layihələndirmə və layihələrin idarə edilməsi üzrə peşəkar xidmətlər təqdim edir.",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EPCMT",
  url: company.siteUrl,
  description:
    "Mühəndislik, tikinti, layihələndirmə və layihələrin idarə edilməsi üzrə xidmətlər.",
  foundingDate: String(company.founded),
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rüstəm Rüstəmov",
    addressLocality: "Bakı",
    postalCode: "1181",
    addressCountry: "AZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <noscript>
          {/* Scroll-reveal starts hidden; without JS it must render visible. */}
          <style>{`.reveal,.reveal-rise,.reveal-clip,.reveal-line{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <RouteProgress />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
