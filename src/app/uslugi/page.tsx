import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Usługi Auto Detailingu – Polańczyk & Bieszczady | DM AutoSPA",
  description:
    "Kompleksowe usługi auto detailingu z dojazdem: powłoki ceramiczne, folia PPF, korekta lakieru. Polańczyk i cały region Bieszczad. Tel: 733 028 686.",
  alternates: { canonical: `${COMPANY.siteUrl}/uslugi` },
};

export default function UslugiPage() {
  return (
    <div style={{ paddingTop: "6rem" }}>
      {/* Page header */}
      <section style={{ padding: "4rem 0 2rem", background: "linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="section-label">Nasza oferta</span>
          <h1 style={{ marginBottom: "1rem" }}>Usługi detailingowe<br /><span className="gold-gradient">z dojazdem do klienta</span></h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 600, lineHeight: 1.8 }}>
            Oferujemy trzy kluczowe usługi premium auto detailingu w Polańczyku i całym regionie Bieszczad. Przyjeżdżamy bezpośrednio do Ciebie – do domu, biura lub garażu.
          </p>
        </div>
      </section>

      {/* Services detailed */}
      <section className="section">
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {SERVICES.map((service, i) => (
            <article
              key={service.slug}
              className="card"
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                gap: "3rem",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Accent top */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--gold-dark), var(--gold))" }} />

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "2.5rem" }}>{service.icon}</span>
                  <div>
                    <span className="badge" style={{ marginBottom: "0.4rem", display: "block" }}>od {service.priceFrom.toLocaleString("pl-PL")} zł</span>
                    <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>{service.name}</h2>
                  </div>
                </div>

                <p style={{ color: "var(--gold)", fontStyle: "italic", marginBottom: "1rem", fontSize: "0.95rem" }}>{service.tagline}</p>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{service.longDescription}</p>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href={`/uslugi/${service.slug}`} className="btn-primary">
                    <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      Szczegóły i wycena <ArrowRight size={15} />
                    </span>
                  </Link>
                </div>
              </div>

              <div>
                <div style={{ background: "var(--bg-secondary)", borderRadius: "var(--radius-md)", padding: "1.75rem", border: "1px solid var(--border)" }}>
                  <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>Co obejmuje usługa:</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {service.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                        <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(192,57,43,0.08)", border: "1px solid rgba(192,57,43,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Check size={12} style={{ color: "var(--gold)" }} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(192,57,43,0.04)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                      <span>⏱ Czas realizacji: <strong style={{ color: "var(--text-secondary)" }}>{service.duration}</strong></span>
                      <span>📍 Z dojazdem</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`@media(max-width:768px){article{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
