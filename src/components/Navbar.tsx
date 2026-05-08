"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        padding: scrolled ? "0.75rem 0" : "1.25rem 0",
        background: scrolled
          ? "rgba(8,14,26,0.96)"
          : "linear-gradient(to bottom, rgba(8,14,26,0.88), transparent)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(192,57,43,0.18)" : "1px solid transparent",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo – sylwetka auta jak w oryginale */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "linear-gradient(135deg, #0d1b2a, #1a3050)",
            border: "2px solid #c0392b",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 16px rgba(192,57,43,0.35)",
          }}>
            {/* Mini car silhouette SVG */}
            <svg width="24" height="14" viewBox="0 0 48 22" fill="none">
              <path d="M4 16 C8 16, 10 8, 20 7 C28 6, 36 6, 40 8 C44 10, 45 14, 45 16" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <line x1="3" y1="16" x2="46" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="12" cy="17.5" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="36" cy="17.5" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <div>
            <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.35rem", fontWeight: 700, letterSpacing: "0.04em" }}>
              <span style={{ color: "#f0f4f8" }}>DM </span>
              <span style={{ color: "#c0392b" }}>Auto</span>
              <span style={{ color: "#f0f4f8" }}>SPA</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}
              style={{
                padding: "0.5rem 1rem",
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: pathname === link.href ? "#c0392b" : "var(--text-secondary)",
                borderRadius: "6px",
                transition: "all 0.2s ease",
                position: "relative",
              }}
              onMouseEnter={e => { if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = "#f0f4f8"; }}
              onMouseLeave={e => { if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
            >
              {link.label}
              {pathname === link.href && (
                <span style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", width: "20px", height: "2px", background: "#c0392b", borderRadius: "2px" }} />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a href={`tel:+48${COMPANY.contact.phone}`} className="btn-primary desktop-nav" style={{ padding: "0.6rem 1.25rem", fontSize: "0.9rem" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <Phone size={15} />{COMPANY.contact.phoneDisplay}
          </span>
        </a>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn"
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", display: "none", padding: "0.5rem" }}
          aria-label="Menu">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(8,14,26,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(192,57,43,0.18)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}
              style={{ padding: "0.875rem 1rem", fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "1.1rem", letterSpacing: "0.1em", textTransform: "uppercase", color: pathname === link.href ? "#c0392b" : "var(--text-primary)", borderRadius: "6px", borderBottom: "1px solid rgba(192,57,43,0.12)" }}>
              {link.label}
            </Link>
          ))}
          <a href={`tel:+48${COMPANY.contact.phone}`} className="btn-primary" style={{ marginTop: "1rem", justifyContent: "center" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Phone size={16} />{COMPANY.contact.phoneDisplay}
            </span>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
