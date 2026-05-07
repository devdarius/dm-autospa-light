"use client";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label" style={{ justifyContent: "center" }}>Co oferujemy</span>
          <h2>Powłoki ceramiczne i folia PPF</h2>
          <div className="divider divider-center" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Specjalizujemy się w kompleksowej ochronie lakieru. Każdą realizację wykonujemy z najwyższą precyzją – z dojazdem bezpośrednio pod Twój dom.
          </p>
        </div>

        <div className="grid-services">
          {SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              href={`/uslugi/${service.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                className="card"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Top accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--gold-dark), var(--gold))" }} />

                {/* Icon */}
                <div style={{ fontSize: "2.5rem", marginBottom: "1.25rem" }}>{service.icon}</div>

                {/* Number */}
                <span style={{ position: "absolute", top: "1.5rem", right: "1.5rem", fontFamily: "'Rajdhani', sans-serif", fontSize: "3rem", fontWeight: 900, color: "rgba(201,168,76,0.06)", lineHeight: 1 }}>0{i + 1}</span>

                <span className="badge" style={{ marginBottom: "1rem", alignSelf: "flex-start" }}>od {service.priceFrom.toLocaleString("pl-PL")} zł</span>

                <h3 style={{ marginBottom: "0.5rem" }}>{service.name}</h3>
                <p style={{ color: "var(--gold)", fontStyle: "italic", fontSize: "0.9rem", marginBottom: "1rem" }}>{service.tagline}</p>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem", flex: 1 }}>
                  {service.description}
                </p>

                {/* Features */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.75rem" }}>
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      <Check size={13} style={{ color: "var(--gold)", flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--gold)", fontWeight: 600, fontSize: "0.9rem", fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Dowiedz się więcej <ArrowRight size={15} />
                </div>

                {/* Duration tag */}
                <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  ⏱ {service.duration}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
