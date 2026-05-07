import type { Metadata } from "next";
import "./globals.css";
import { generateSchema } from "@/lib/schema";
import { COMPANY } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  title: {
    default: "DM AutoSPA | Detailing Polańczyk z dojazdem – Bieszczady",
    template: "%s – DM AutoSPA",
  },
  description:
    "Premium auto detailing z dojazdem do klienta w Polańczyku i Bieszczadach. Powłoki ceramiczne, folia PPF, korekta lakieru. Umów się: 733 028 686.",
  keywords: [
    "auto detailing Polańczyk",
    "powłoka ceramiczna Bieszczady",
    "folia PPF Polańczyk",
    "korekta lakieru Bieszczady",
    "detailing z dojazdem",
    "DM AutoSPA",
  ],
  authors: [{ name: "David Matuszewski" }],
  creator: "DM AutoSPA",
  publisher: "DM AutoSPA",
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: COMPANY.siteUrl,
    siteName: COMPANY.name,
    title: "DM AutoSPA | Detailing Polańczyk z dojazdem – Bieszczady",
    description:
      "Premium auto detailing z dojazdem do klienta w Polańczyku i Bieszczadach. Powłoki ceramiczne, folia PPF, korekta lakieru.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DM AutoSPA – Premium Auto Detailing Polańczyk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DM AutoSPA | Detailing Polańczyk z dojazdem",
    description:
      "Premium auto detailing z dojazdem do klienta w Polańczyku i Bieszczadach.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: COMPANY.siteUrl,
  },
  other: {
    "og:type": "business.business",
    "business:contact_data:street_address": COMPANY.address.street,
    "business:contact_data:locality": COMPANY.address.city,
    "business:contact_data:postal_code": COMPANY.address.postalCode,
    "business:contact_data:country_name": "Poland",
    "business:contact_data:phone_number": `+48 ${COMPANY.contact.phoneDisplay}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = generateSchema();
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#080808" />
        <meta name="geo.region" content="PL-PK" />
        <meta name="geo.placename" content="Polańczyk" />
        <meta name="geo.position" content="49.351667;22.359167" />
        <meta name="ICBM" content="49.351667, 22.359167" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
