"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ background: "#080e1a", borderTop: "3px solid #c0392b" }}>
      <div className="container" style={{ padding: "4rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #0d1b2a, #1a3050)", border: "2px solid #c0392b", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 12px rgba(192,57,43,0.3)" }}>
                <svg width="20" height="12" viewBox="0 0 48 22" fill="none">
                  <path d="M4 16 C8 16, 10 8, 20 7 C28 6, 36 6, 40 8 C44 10, 45 14, 45 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <line x1="3" y1="16" x2="46" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="17.5" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
                  <circle cx="36" cy="17.5" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.04em", color: "white" }}>
                DM <span style={{ color: "#c0392b" }}>Auto</span>SPA
              </span>
            </Link>
            <p style={{ color: "rgba(160,185,220,0.75)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: 260, marginBottom: "1.5rem" }}>
              Premium auto detailing z dojazdem do klienta w Polańczyku i Bieszczadach. Powłoki ceramiczne, folia PPF, korekta lakieru.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook"
                style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(192,57,43,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(160,185,220,0.6)", transition: "all 0.2s", fontSize: "0.85rem", fontWeight: 700 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#c0392b"; (e.currentTarget as HTMLElement).style.color = "#c0392b"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,57,43,0.3)"; (e.currentTarget as HTMLElement).style.color = "rgba(160,185,220,0.6)"; }}>
                f
              </a>
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" title="Instagram"
                style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(192,57,43,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(160,185,220,0.6)", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#c0392b"; (e.currentTarget as HTMLElement).style.color = "#c0392b"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,57,43,0.3)"; (e.currentTarget as HTMLElement).style.color = "rgba(160,185,220,0.6)"; }}>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c0392b", marginBottom: "1.25rem" }}>Menu</h4>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}
                style={{ display: "block", color: "rgba(160,185,220,0.7)", fontSize: "0.875rem", marginBottom: "0.75rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#c0392b"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(160,185,220,0.7)"}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c0392b", marginBottom: "1.25rem" }}>Usługi</h4>
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/uslugi/${s.slug}`}
                style={{ display: "block", color: "rgba(160,185,220,0.7)", fontSize: "0.875rem", marginBottom: "0.75rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#c0392b"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(160,185,220,0.7)"}>
                {s.name}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c0392b", marginBottom: "1.25rem" }}>Kontakt</h4>
            {[
              { icon: <Phone size={14} />, text: COMPANY.contact.phoneDisplay, href: `tel:+48${COMPANY.contact.phone}` },
              { icon: <Mail size={14} />, text: COMPANY.contact.email, href: `mailto:${COMPANY.contact.email}` },
              { icon: <MapPin size={14} />, text: `${COMPANY.address.city}, ${COMPANY.address.region}`, href: undefined },
              { icon: <Clock size={14} />, text: `Pn–Pt: ${COMPANY.hours.weekdays}`, href: undefined },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.875rem", color: "rgba(160,185,220,0.7)", fontSize: "0.85rem" }}>
                <span style={{ color: "#c0392b", flexShrink: 0, marginTop: "0.15rem" }}>{item.icon}</span>
                {item.href ? (
                  <a href={item.href} style={{ color: "inherit", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#c0392b"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(160,185,220,0.7)"}>
                    {item.text}
                  </a>
                ) : <span>{item.text}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <p style={{ color: "rgba(160,185,220,0.4)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} {COMPANY.name}. Wszelkie prawa zastrzeżone.
          </p>
          <p style={{ color: "rgba(160,185,220,0.4)", fontSize: "0.8rem" }}>
            {COMPANY.address.city}, {COMPANY.address.region}, Polska
          </p>
        </div>
      </div>
    </footer>
  );
}
