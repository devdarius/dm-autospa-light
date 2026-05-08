"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, ChevronDown, Shield, Star, Zap } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const STATS = [
  { value: "200+", label: "Realizacji" },
  { value: "5★", label: "Ocena klientów" },
  { value: "10+", label: "Lat doświadczenia" },
  { value: "100%", label: "Satysfakcji" },
];

const BADGES = [
  { icon: <Shield size={14} />, text: "Dojazd do klienta" },
  { icon: <Star size={14} />, text: "Premium Detailing" },
  { icon: <Zap size={14} />, text: "Polańczyk & Bieszczady" },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);

    // Mieszanka cząsteczek: czerwone + granatowo-białe
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; red: boolean }[] = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.4,
        opacity: Math.random() * 0.45 + 0.08,
        red: Math.random() > 0.6, // 40% czerwone, 60% niebieskawe
      });
    }

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // czerwone lub niebieskawo-białe
        ctx.fillStyle = p.red
          ? `rgba(192,57,43,${p.opacity * 0.5})`
          : `rgba(13,27,42,${p.opacity * 0.25})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        // Granatowy gradient – jak tło logo
        background: "linear-gradient(145deg, #f4f7f9 0%, #ffffff 45%, #f8f9fa 75%, #ffffff 100%)",
      }}
    >
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 0 }} />

      {/* Czerwona poświata centralna */}
      <div style={{ position: "absolute", top: "38%", left: "50%", transform: "translate(-50%,-50%)", width: "60vw", height: "60vh", background: "radial-gradient(ellipse at center, rgba(192,57,43,0.05) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

      {/* Granatowa poświata z prawej */}
      <div style={{ position: "absolute", top: "10%", right: "-5%", width: "40vw", height: "80vh", background: "radial-gradient(ellipse at center, rgba(13,27,42,0.04) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

      {/* Linia akcentowa lewa */}
      <div style={{ position: "absolute", left: 0, top: "20%", height: "60%", width: "3px", background: "linear-gradient(to bottom, transparent, #c0392b, transparent)", zIndex: 1 }} />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "7rem", paddingBottom: "4rem" }}>
        {/* Badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
          {BADGES.map((b, i) => (
            <span key={i} className="badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              {b.icon}{b.text}
            </span>
          ))}
        </div>

        {/* H1 */}
        <h1 style={{ maxWidth: 780, marginBottom: "1.5rem", lineHeight: 1.1 }}>
          <span style={{ display: "block", color: "var(--text-muted)", fontSize: "0.6em", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Premium Auto Detailing</span>
          DM AutoSPA –{" "}
          <span className="gold-gradient">Auto Detailing</span>{" "}
          Polańczyk & Bieszczady
        </h1>

        {/* H2 */}
        <h2 style={{ fontWeight: 400, fontSize: "clamp(1rem, 2vw, 1.3rem)", color: "var(--text-secondary)", maxWidth: 560, marginBottom: "2.5rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
          Usługi detailingowe z dojazdem do klienta – powłoki ceramiczne,&nbsp;folia PPF i korekta lakieru w Twoim garażu.
        </h2>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "4rem" }}>
          <a href={`tel:+48${COMPANY.contact.phone}`} className="btn-primary">
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Phone size={16} /> Zadzwoń: {COMPANY.contact.phoneDisplay}
            </span>
          </a>
          <Link href="/uslugi" className="btn-outline">
            <span>Zobacz usługi</span>
          </Link>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ borderLeft: "2px solid #c0392b", paddingLeft: "1rem" }}>
              <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "2rem", fontWeight: 700, color: "#c0392b", lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.25rem" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", animation: "bounce 2s infinite" }}>
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>Przewiń</span>
        <ChevronDown size={18} style={{ color: "#c0392b" }} />
      </div>

      <style>{`
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
      `}</style>
    </section>
  );
}
