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
                  <div style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "rgba(192,57,43,0.06)" }}>
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
      <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #080e1a 0%, #0d1b2a 50%, #111f35 100%)", position: "relative", overflow: "hidden" }}>
        {/* Decorative red line top */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent, #c0392b 30%, #c0392b 70%, transparent)" }} />
        {/* Subtle glow */}
        <div style={{ position: "absolute", top: "50%", left: "30%", transform: "translate(-50%,-50%)", width: "500px", height: "300px", background: "radial-gradient(ellipse, rgba(192,57,43,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
          <div>
            <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c0392b", marginBottom: "0.75rem" }}>Umów wizytę</p>
            <h2 style={{ marginBottom: "0.5rem", color: "#ffffff" }}>Gotowy na <span style={{ color: "#c0392b" }}>transformację</span> swojego auta?</h2>
            <p style={{ color: "rgba(160,185,220,0.7)", maxWidth: 480 }}>Skontaktuj się już dziś i umów bezpłatną wycenę. Dojeżdżamy do całego regionu Bieszczad.</p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href={`tel:+48${COMPANY.contact.phone}`}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "#c0392b", color: "white", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: "6px", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(192,57,43,0.4)", transition: "all 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(192,57,43,0.5)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(192,57,43,0.4)"; }}>
              <Phone size={16} />{COMPANY.contact.phoneDisplay}
            </a>
            <Link href="/kontakt"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "transparent", color: "white", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: "6px", border: "2px solid rgba(255,255,255,0.3)", transition: "all 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "white"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
              Wycena online <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        {/* Decorative red line bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(192,57,43,0.4) 30%, rgba(192,57,43,0.4) 70%, transparent)" }} />
      </section>
    </>
  );
}
