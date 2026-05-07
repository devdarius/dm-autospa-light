"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Sparkles } from "lucide-react";
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
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        padding: scrolled ? "0.75rem 0" : "1.25rem 0",
        background: scrolled
          ? "rgba(8,8,8,0.95)"
          : "linear-gradient(to bottom, rgba(8,8,8,0.9), transparent)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(201,168,76,0.15)"
          : "1px solid transparent",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "linear-gradient(135deg, #a07830, #c9a84c)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 16px rgba(201,168,76,0.4)",
          }}>
            <Sparkles size={18} color="#080808" />
          </div>
          <div>
            <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.35rem", fontWeight: 700, color: "#f5f5f5", letterSpacing: "0.04em" }}>
              DM <span style={{ color: "var(--gold)" }}>Auto</span>SPA
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "0.5rem 1rem",
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: pathname === link.href ? "var(--gold)" : "var(--text-secondary)",
                borderRadius: "6px",
                transition: "all 0.2s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => { if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = "#f5f5f5"; }}
              onMouseLeave={(e) => { if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
            >
              {link.label}
              {pathname === link.href && (
                <span style={{
                  position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
                  width: "20px", height: "2px",
                  background: "var(--gold)", borderRadius: "2px",
                }} />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Phone */}
        <a
          href={`tel:+48${COMPANY.contact.phone}`}
          className="btn-primary desktop-nav"
          style={{ padding: "0.6rem 1.25rem", fontSize: "0.9rem" }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <Phone size={15} />
            {COMPANY.contact.phoneDisplay}
          </span>
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "var(--text-primary)", display: "none",
            padding: "0.5rem",
          }}
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(8,8,8,0.98)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          padding: "1.5rem",
          display: "flex", flexDirection: "column", gap: "0.5rem",
        }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "0.875rem 1rem",
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 600,
                fontSize: "1.1rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: pathname === link.href ? "var(--gold)" : "var(--text-primary)",
                borderRadius: "6px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:+48${COMPANY.contact.phone}`}
            className="btn-primary"
            style={{ marginTop: "1rem", justifyContent: "center" }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Phone size={16} />
              {COMPANY.contact.phoneDisplay}
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
