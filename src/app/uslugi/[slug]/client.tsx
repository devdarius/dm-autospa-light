"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, Check, ArrowLeft, Clock, MapPin } from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

const SERVICE_IMAGES: Record<string, { src: string; alt: string }[]> = {
  "powloki-ceramiczne": [
    { src: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb6d37?w=900&q=80", alt: "Powłoka ceramiczna na BMW M4 – efekt głębokiego połysku, realizacja DM AutoSPA Polańczyk" },
    { src: "https://images.unsplash.com/photo-1626668011687-8a114cf5a34c?w=900&q=80", alt: "Aplikacja powłoki ceramicznej na lusterko – DM AutoSPA Bieszczady" },
  ],
  "folia-ppf": [
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80", alt: "Folia PPF na Porsche 911 – ochrona lakieru przed odpryskami kamieni, realizacja DM AutoSPA Polańczyk" },
    { src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80", alt: "Montaż folii PPF – proces aplikacji, DM AutoSPA Bieszczady" },
  ],
  "korekta-lakieru": [
    { src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&q=80", alt: "Korekta lakieru na Audi RS6 – usunięcie swirlmarków hologramów, realizacja DM AutoSPA Polańczyk" },
    { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80", alt: "Polerowanie lakieru maszyną rotacyjną – efekt przed i po, DM AutoSPA Bieszczady" },
  ],
};

const FAQ_BY_SLUG: Record<string, { q: string; a: string }[]> = {
  "powloki-ceramiczne": [
    { q: "Ile trwa aplikacja powłoki ceramicznej?", a: "Standardowa aplikacja trwa 1–2 dni, w zależności od stanu lakieru i wybranego pakietu." },
    { q: "Jak długo utrzymuje się powłoka?", a: "Od 1 roku do 5 lat – zależnie od wybranego produktu i warunków eksploatacji." },
    { q: "Czy przyjeżdżacie do klienta?", a: "Tak – obsługujemy cały region Bieszczad i okolice Polańczyka. Wystarczy umówić termin." },
  ],
  "folia-ppf": [
    { q: "Czym różni się PPF od folii oklejania?", a: "PPF chroni lakier mechanicznie (bezbarwna lub satynowa). Folia oklejeniowa zmienia kolor – PPF tego nie robi." },
    { q: "Czy PPF można usunąć?", a: "Tak, bezpiecznie, bez uszkodzenia lakieru, nawet po kilku latach." },
    { q: "Co to jest self-healing?", a: "Właściwość samoistnego zanikania drobnych rys pod wpływem ciepła słońca lub ciepłej wody." },
  ],
  "korekta-lakieru": [
    { q: "Czym różni się korekta 1- od 2-etapowej?", a: "1-etapowa redukuje defekty ~60–70%. 2-etapowa to pełna eliminacja – efekt jak nowy lakier." },
    { q: "Jak przygotować auto przed wizytą?", a: "Nie musisz nic robić – przyjeżdżamy z pełnym zestawem do dekontaminacji i mycia." },
    { q: "Czy korekta niszczy lakier?", a: "Nie przy prawidłowym wykonaniu. Każdą realizację poprzedza pomiar grubości lakieru." },
  ],
};

export default function ServiceDetailPage({ params }: Props) {
  const { slug } = use(params);
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const images = SERVICE_IMAGES[slug] || [];
  const faqs = FAQ_BY_SLUG[slug] || [];
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.longDescription,
    provider: { "@type": "LocalBusiness", name: COMPANY.name, telephone: `+48${COMPANY.contact.phone}` },
    areaServed: { "@type": "AdministrativeArea", name: "Bieszczady" },
    offers: { "@type": "Offer", priceCurrency: "PLN", price: service.priceFrom, availability: "https://schema.org/InStock" },
  };

  return (
    <div style={{ paddingTop: "6rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section style={{ padding: "3rem 0 2rem", background: "linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <Link href="/uslugi" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "1.5rem" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}>
            <ArrowLeft size={14} /> Wróć do usług
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <span style={{ fontSize: "3rem" }}>{service.icon}</span>
            <div>
              <span className="badge" style={{ marginBottom: "0.5rem", display: "inline-block" }}>od {service.priceFrom.toLocaleString("pl-PL")} zł</span>
              <h1>{service.name} – <span className="gold-gradient">Polańczyk & Bieszczady</span></h1>
            </div>
          </div>
          <p style={{ color: "var(--gold)", fontStyle: "italic", fontSize: "1.1rem", marginBottom: "0.75rem" }}>{service.tagline}</p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", color: "var(--text-muted)", fontSize: "0.85rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}><Clock size={13} /> {service.duration}</span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}><MapPin size={13} /> Dojazd door-to-door</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <div className="card" style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>O usłudze</h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.9 }}>{service.longDescription}</p>
              </div>

              {images.length > 0 && (
                <div style={{ marginBottom: "2rem" }}>
                  <h3 style={{ marginBottom: "1.25rem" }}>Realizacje</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    {images.map((img, i) => (
                      <div key={i} style={{ position: "relative", aspectRatio: "4/3", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border)" }}>
                        <Image src={img.src} alt={img.alt} fill loading="lazy" sizes="(max-width:768px) 100vw, 400px" style={{ objectFit: "cover" }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {faqs.length > 0 && (
                <div>
                  <h3 style={{ marginBottom: "1.25rem" }}>Najczęstsze pytania</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {faqs.map((faq, i) => (
                      <div key={i} className="card" style={{ padding: "1.5rem" }}>
                        <h4 style={{ fontSize: "1rem", marginBottom: "0.75rem", color: "var(--gold)" }}>❓ {faq.q}</h4>
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div style={{ position: "sticky", top: "7rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="card">
                <h3 style={{ fontSize: "1.1rem", marginBottom: "1.25rem" }}>Co obejmuje usługa</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {service.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                      <Check size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: "linear-gradient(135deg, rgba(192,57,43,0.06), rgba(13,27,42,0.03))", border: "1px solid var(--border-hover)", borderRadius: "var(--radius-md)", padding: "1.75rem" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>Umów wycenę</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>Bezpłatna wycena, dojazd do klienta, termin ustalamy indywidualnie.</p>
                <a href={`tel:+48${COMPANY.contact.phone}`} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Phone size={15} /> {COMPANY.contact.phoneDisplay}</span>
                </a>
                <Link href="/kontakt" className="btn-outline" style={{ width: "100%", justifyContent: "center", marginTop: "0.75rem" }}>
                  Formularz kontaktowy
                </Link>
              </div>

              <div className="card">
                <h4 style={{ fontFamily: "'Rajdhani'", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Inne usługi</h4>
                {otherServices.map((s) => (
                  <Link key={s.slug} href={`/uslugi/${s.slug}`}
                    style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 0", borderBottom: "1px solid var(--border)", color: "var(--text-secondary)", fontSize: "0.875rem", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"}>
                    <span style={{ fontSize: "1.2rem" }}>{s.icon}</span>
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
