"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Sparkles, ExternalLink } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#060606", borderTop: "1px solid var(--border)", paddingTop: "4rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem", paddingBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #a07830, #c9a84c)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles size={16} color="#080808" />
              </div>
              <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.04em" }}>
                DM <span style={{ color: "var(--gold)" }}>Auto</span>SPA
              </span>
            </Link>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 260 }}>
              Premium auto detailing z dojazdem do klienta w Polańczyku i Bieszczadach. Powłoki ceramiczne, folia PPF, korekta lakieru.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook"
                style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", transition: "all 0.2s", fontSize: "0.8rem", fontWeight: 700, fontFamily: "sans-serif" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}>
                f
              </a>
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" title="Instagram"
                style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>Nawigacja</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "var(--text-secondary)", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>Usługi</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/uslugi/${s.slug}`} style={{ color: "var(--text-secondary)", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>Kontakt</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li><a href={`tel:+48${COMPANY.contact.phone}`} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-secondary)", fontSize: "0.9rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"}>
                <Phone size={15} style={{ color: "var(--gold)", flexShrink: 0 }} />
                {COMPANY.contact.phoneDisplay}
              </a></li>
              <li><a href={`mailto:${COMPANY.contact.email}`} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-secondary)", fontSize: "0.9rem", transition: "color 0.2s", wordBreak: "break-all" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"}>
                <Mail size={15} style={{ color: "var(--gold)", flexShrink: 0 }} />
                {COMPANY.contact.email}
              </a></li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                <MapPin size={15} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <span>{COMPANY.address.full}<br />Usługi z dojazdem – cały region Bieszczad</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                <Clock size={15} style={{ color: "var(--gold)", flexShrink: 0 }} />
                Pn–Pt: {COMPANY.hours.weekdays}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--border)", padding: "1.5rem 0", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
            © {year} DM AutoSPA – David Matuszewski. Wszelkie prawa zastrzeżone.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
            Bereżnica Wyżna 36, 38-610 Polańczyk | NIP do faktury na życzenie
          </p>
        </div>
      </div>
    </footer>
  );
}
