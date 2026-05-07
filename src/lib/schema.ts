import { COMPANY, SERVICES } from "./constants";

export function generateSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "AutoBodyShop"],
        "@id": `${COMPANY.siteUrl}/#business`,
        name: COMPANY.name,
        description:
          "Premium auto detailing z dojazdem do klienta w Polańczyku i Bieszczadach. Powłoki ceramiczne, folia PPF, korekta lakieru.",
        url: COMPANY.siteUrl,
        telephone: `+48${COMPANY.contact.phone}`,
        email: COMPANY.contact.email,
        image: `${COMPANY.siteUrl}/og-image.jpg`,
        logo: {
          "@type": "ImageObject",
          url: `${COMPANY.siteUrl}/logo.png`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY.address.street,
          postalCode: COMPANY.address.postalCode,
          addressLocality: COMPANY.address.city,
          addressRegion: "Podkarpacie",
          addressCountry: COMPANY.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: COMPANY.geo.lat,
          longitude: COMPANY.geo.lng,
        },
        openingHoursSpecification: COMPANY.hours.schema.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days.split(",").map((d) => `https://schema.org/${d}`),
          opens: h.opens,
          closes: h.closes,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Usługi Auto Detailingu",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.description,
              url: `${COMPANY.siteUrl}/uslugi/${s.slug}`,
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "PLN",
              price: s.priceFrom,
            },
            position: i + 1,
          })),
        },
        areaServed: [
          { "@type": "City", name: "Polańczyk" },
          { "@type": "City", name: "Lesko" },
          { "@type": "City", name: "Sanok" },
          { "@type": "City", name: "Ustrzyki Dolne" },
          { "@type": "AdministrativeArea", name: "Bieszczady" },
        ],
        priceRange: "$$",
        paymentAccepted: "Cash, Bank Transfer",
        currenciesAccepted: "PLN",
        sameAs: [COMPANY.social.facebook, COMPANY.social.instagram],
      },
      {
        "@type": "WebSite",
        "@id": `${COMPANY.siteUrl}/#website`,
        url: COMPANY.siteUrl,
        name: COMPANY.name,
        publisher: { "@id": `${COMPANY.siteUrl}/#business` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${COMPANY.siteUrl}/uslugi?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}
