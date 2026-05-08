"use client";
import Link from "next/link";
import { Phone, MapPin, Clock, ArrowRight, Car } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const STEPS = [
  { num: "01", title: "Skontaktuj się", desc: "Zadzwoń lub napisz. Wspólnie dobieramy optymalną usługę do Twojego auta i potrzeb." },
  { num: "02", title: "Wybierz termin", desc: "Ustalamy datę i godzinę. Przyjeżdżamy bezpośrednio pod Twój dom lub biuro." },
  { num: "03", title: "Realizacja", desc: "Nasz specjalista wykonuje usługę z najwyższą precyzją. Ty nie musisz nigdzie jechać." },
  { num: "04", title: "Efekt WOW", desc: "Odbiór auta w idealnym stanie. Pełna dokumentacja fotograficzna przed i po." },
];

export default function WhyUsSection() {
  return (
    <>
      {/* Why Us / Process */}
      <section className="section noise-bg" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <span className="section-label">Dlaczego my?</span>
              <h2 style={{ marginBottom: "0.75rem" }}>
                Detailing który przyjeżdża <span className="gold-gradient">do Ciebie</span>
              </h2>
              <div className="divider" />
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Jesteśmy jedynym premium studiem detailingowym w Bieszczadach oferującym kompleksowe usługi z dojazdem door-to-door. Nie musisz tracić czasu na dojazd do warsztatu – my przyjeżdżamy do Ciebie.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                {[
                  { icon: <Car size={16} />, text: "Dojazd door-to-door – cały region Bieszczad" },
                  { icon: <MapPin size={16} />, text: "Baza: Polańczyk, Bereżnica Wyżna" },
                  { icon: <Clock size={16} />, text: "Pn–Pt 8:00–18:00, terminy indywidualne" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem 1.25rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)" }}>
                    <span style={{ color: "var(--gold)" }}>{item.icon}</span>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <a href={`tel:+48${COMPANY.contact.phone}`} className="btn-primary">
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Phone size={16} />
                  Umów wizytę: {COMPANY.contact.phoneDisplay}
                </span>
              </a>
            </div>

            {/* Process steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {STEPS.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "rgba(201,168,76,0.05)" }}>
                    <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "var(--gold)" }}>{step.num}</span>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.35rem" }}>{step.title}</h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.two-col{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: "4rem 0", background: "linear-gradient(135deg, #08111e, #0f1c2e)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
          <div>
            <h2 style={{ marginBottom: "0.5rem" }}>Gotowy na <span className="gold-gradient">transformację</span> swojego auta?</h2>
            <p style={{ color: "var(--text-secondary)" }}>Skontaktuj się już dziś i umów bezpłatną wycenę.</p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href={`tel:+48${COMPANY.contact.phone}`} className="btn-primary">
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={16} />
                {COMPANY.contact.phoneDisplay}
              </span>
            </a>
            <Link href="/kontakt" className="btn-outline">
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                Wycena online <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
