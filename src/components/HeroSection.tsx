"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown, Shield, Star, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const STATS = [
  { value: "200+", label: "Realizacji" },
  { value: <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>5<Star size={26} fill="currentColor" style={{ marginLeft: "2px", marginBottom: "3px" }} /></span>, label: "Ocena Google" },
  { value: "10+", label: "Lat doświadczenia" },
  { value: "100%", label: "Satysfakcji" },
];

export default function HeroSection() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* BG Image – full bleed, high contrast car */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/hero-bg.jpg"
          alt="DM AutoSPA premium detailing Polańczyk Bieszczady"
          fill priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* White overlay – heavier on left, fading right */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(95deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 40%, rgba(255,255,255,0.6) 65%, rgba(255,255,255,0.15) 100%)" }} />
      </div>

      {/* Decorative red vertical line */}
      <div style={{ position: "absolute", left: "calc(clamp(1.5rem, 6vw, 7rem) - 1.5rem)", top: "15%", height: "70%", width: "3px", background: "linear-gradient(to bottom, transparent, #c0392b 20%, #c0392b 80%, transparent)", zIndex: 2 }} />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "5rem", paddingBottom: "2rem", maxWidth: 700 }}>

        {/* Location live-dot badge */}
        <div style={{ marginBottom: "1.75rem" }}>
          <span className="live-dot">Polańczyk · Bieszczady · Dojazd do klienta</span>
        </div>

        {/* H1 */}
        <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.0, marginBottom: "1.5rem", color: "#0d1b2a", letterSpacing: "-0.02em" }}>
          DM AutoSPA<br />
          <span style={{ color: "#c0392b" }}>Auto Detailing</span><br />
          <span style={{ fontSize: "0.65em", fontWeight: 500, color: "#3b4b5e", letterSpacing: 0 }}>z dojazdem do Ciebie</span>
        </h1>

        {/* H2 */}
        <p style={{ fontSize: "1.1rem", color: "#3b4b5e", maxWidth: 480, marginBottom: "2.5rem", lineHeight: 1.75, fontFamily: "'Inter', sans-serif" }}>
          Powłoki ceramiczne, folia PPF i korekta lakieru w Twoim garażu – bez wychodzenia z domu. Obsługujemy cały region Bieszczad.
        </p>

        {/* Feature badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginBottom: "2.5rem" }}>
          {[
            { icon: <Shield size={13} />, text: "Bezpłatna wycena" },
            { icon: <Star size={13} />, text: "Certyfikowane powłoki" },
            { icon: <MapPin size={13} />, text: "Dojazd gratis" },
          ].map((b, i) => (
            <span key={i} className="badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ color: "#c0392b" }}>{b.icon}</span>{b.text}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3.5rem" }}>
          <a href={`tel:+48${COMPANY.contact.phone}`}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "1rem 2rem", background: "#c0392b", color: "white", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: "6px", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(192,57,43,0.35)", transition: "all 0.3s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(192,57,43,0.45)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(192,57,43,0.35)"; }}>
            <Phone size={16} /> {COMPANY.contact.phoneDisplay}
          </a>
          <Link href="/uslugi"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "1rem 2rem", background: "transparent", color: "#0d1b2a", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: "6px", border: "2px solid #0d1b2a", transition: "all 0.3s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0d1b2a"; (e.currentTarget as HTMLElement).style.color = "white"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#0d1b2a"; }}>
            Zobacz usługi
          </Link>
        </div>
      </div>

      {/* Stats bar – navy */}
      <div style={{ position: "relative", zIndex: 3, background: "#0d1b2a", padding: "1.5rem 0" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "0", justifyContent: "space-around" }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "0 1.5rem", borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "2rem", fontWeight: 700, color: "#c0392b", lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontSize: "0.72rem", color: "rgba(200,215,230,0.7)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.25rem" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: "6rem", right: "5%", zIndex: 4, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", animation: "bounce 2s infinite" }}>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", writingMode: "vertical-rl" }}>Przewiń</span>
        <ChevronDown size={18} style={{ color: "#c0392b" }} />
      </div>

      <style>{`
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      `}</style>
    </section>
  );
}
