import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

const description =
  "MEDITA Jóga – letisztult, modern jógastúdió Csongrádon. Hatha, yin és női jóga, reformer és talaj pilates, meditáció és mozgásórák mindenkinek. Nyitás: 2026 augusztusában.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MEDITA Jóga – Jógastúdió Csongrádon",
    template: "%s | MEDITA Jóga Csongrád",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "/",
    siteName: "MEDITA Jóga",
    title: "MEDITA Jóga – Jógastúdió Csongrádon",
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "MEDITA Jóga – jógastúdió Csongrádon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEDITA Jóga – Jógastúdió Csongrádon",
    description,
    images: ["/og.png"],
  },
};

/* Strukturált adat (schema.org) – helyi vállalkozás, jógastúdió */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: site.name,
  description,
  url: site.url,
  email: site.email,
  telephone: site.phone.replace(/\s/g, ""),
  image: `${site.url}/og.png`,
  logo: `${site.url}/logo/logo-portrait.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fő utca 6–10., 1. emelet 42. ajtó",
    addressLocality: "Csongrád",
    postalCode: "6640",
    addressCountry: "HU",
  },
  sameAs: [] as string[],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
