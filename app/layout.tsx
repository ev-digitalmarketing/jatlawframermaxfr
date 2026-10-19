import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { ContactFooter } from "@/components/layout/ContactFooter";
import { Header } from "@/components/layout/Header";
import { PageGuide } from "@/components/layout/PageGuide";
import { Providers } from "@/components/layout/Providers";
import { hours, site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap" });

const description =
  "Jat Law Professional Corporation provides real estate, litigation, corporate, wills and estates, and uncontested divorce services in Mississauga, Ontario. Book a free consultation.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Barrister & Solicitor in Mississauga`,
    template: `%s | ${site.short}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: site.name,
    title: `${site.name} | Barrister & Solicitor in Mississauga`,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.short}, ${site.descriptor}` }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#133A62" };

const pad = (n: number) => String(n).padStart(2, "0");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  url: site.url,
  image: `${site.url}/og.png`,
  telephone: "+1-647-748-3279",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: "CA",
  },
  openingHoursSpecification: hours
    .filter((h) => h.open !== null && h.close !== null)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: `${pad(h.open ?? 0)}:00`,
      closes: `${pad(h.close ?? 0)}:00`,
    })),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold-500 focus:px-4 focus:py-2 focus:font-heading focus:font-semibold focus:text-navy-950"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <ContactFooter />
          <PageGuide />
        </Providers>
      </body>
    </html>
  );
}
