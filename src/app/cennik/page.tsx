import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { PRICING, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cennik Auto Detailingu – Polańczyk & Bieszczady",
  description:
    "Cennik usług auto detailingu: powłoki ceramiczne od 800 zł, folia PPF od 2500 zł, korekta lakieru od 800 zł. Bezpłatna wycena z dojazdem – Polańczyk, Bieszczady.",
  alternates: { canonical: `${COMPANY.siteUrl}/cennik` },
};

export default function CennikPage() {
  return (
    <div style={{ paddingTop: "6rem" }}>
      <section style={{ padding: "4rem 0 2rem", background: "linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="section-label">Transparentne ceny</span>
          <h1 style={{ marginBottom: "1rem" }}>
            Cennik usług <span className="gold-gradient">DM AutoSPA</span>
          </h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 580, lineHeight: 1.8 }}>
            Podane ceny są cenami orientacyjnymi. Ostateczna wycena zależy od wielkości pojazdu, stanu lakieru i zakresu usługi. Każdą realizację poprzedza bezpłatna inspekcja i wycena.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {PRICING.map((cat) => (
            <div key={cat.category}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "1.5rem" }}>{cat.category}</h2>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
                {cat.items.map((item, i) => (
                  <div key={i} className="card" style={{ display: "flex", flexDirection: "column", gap: "0.5rem", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, var(--gold-dark), var(--gold))" }} />
                    <p style={{ fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4, paddingRight: "3rem" }}>{item.name}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
                      <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)" }}>{item.price}</span>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>⏱ {item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note + CTA */}
      <section style={{ padding: "3rem 0 5rem" }}>
        <div className="container">
          <div style={{ background: "linear-gradient(135deg, rgba(192,57,43,0.06), rgba(13,27,42,0.04))", border: "1px solid var(--border-hover)", borderRadius: "var(--radius-lg)", padding: "3rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "2rem" }}>
            <div>
              <h3 style={{ marginBottom: "0.75rem" }}>Nie wiesz, czego potrzebujesz?</h3>
              <p style={{ color: "var(--text-secondary)", maxWidth: 460 }}>
                Zadzwoń – ocenimy stan Twojego auta i zaproponujemy optymalny pakiet. Wycena jest zawsze bezpłatna, dojazd wliczony w cenę usługi.
              </p>
            </div>
            <a href={`tel:+48${COMPANY.contact.phone}`} className="btn-primary">
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={16} /> Bezpłatna wycena: {COMPANY.contact.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
