"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; red: boolean }[] = [];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.35 + 0.1,
        red: Math.random() > 0.55,
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
        ctx.fillStyle = p.red
          ? `rgba(192,57,43,${p.opacity})`
          : `rgba(13,27,42,${p.opacity * 0.4})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "stretch", overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 1 }} />

      {/* LEFT – content (white) */}
      <div style={{
        flex: "0 0 55%", display: "flex", alignItems: "center",
        background: "#ffffff",
        position: "relative", zIndex: 2, paddingTop: "7rem", paddingBottom: "4rem", paddingLeft: "clamp(1.5rem, 6vw, 7rem)", paddingRight: "3rem",
      }}>
        {/* Red left accent */}
        <div style={{ position: "absolute", left: 0, top: "15%", height: "70%", width: "4px", background: "linear-gradient(to bottom, transparent, #c0392b 30%, #c0392b 70%, transparent)", borderRadius: "0 2px 2px 0" }} />

        <div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
            {BADGES.map((b, i) => (
              <span key={i} className="badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                {b.icon}{b.text}
              </span>
            ))}
          </div>

          <div style={{ marginBottom: "0.5rem" }}>
            <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c0392b" }}>Premium Auto Detailing</span>
          </div>

          <h1 style={{ maxWidth: 560, marginBottom: "1.5rem", lineHeight: 1.05, color: "#0d1b2a" }}>
            DM AutoSPA –{" "}
            <span className="gold-gradient">Auto Detailing</span>{" "}
            Polańczyk & Bieszczady
          </h1>

          <h2 style={{ fontWeight: 400, fontSize: "clamp(1rem, 1.5vw, 1.15rem)", color: "#3b4b5e", maxWidth: 480, marginBottom: "2.5rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.75 }}>
            Powłoki ceramiczne, folia PPF i korekta lakieru – przyjeżdżamy do Ciebie na terenie całych Bieszczad.
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3.5rem" }}>
            <a href={`tel:+48${COMPANY.contact.phone}`} className="btn-primary">
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={16} /> Zadzwoń: {COMPANY.contact.phoneDisplay}
              </span>
            </a>
            <Link href="/uslugi" className="btn-outline">
              <span>Zobacz usługi</span>
            </Link>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ borderLeft: "3px solid #c0392b", paddingLeft: "1rem" }}>
                <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "2rem", fontWeight: 700, color: "#c0392b", lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontSize: "0.75rem", color: "#6b7a8d", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.2rem" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT – navy with car image */}
      <div style={{
        flex: "0 0 45%",
        background: "linear-gradient(145deg, #0a1628 0%, #0d1b2a 60%, #162540 100%)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Glow effect */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "80%", height: "80%", background: "radial-gradient(ellipse at center, rgba(192,57,43,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Car image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1616455579100-2ceaa4eb6d37?w=900&q=80"
            alt="Premium auto detailing - DM AutoSPA Polańczyk Bieszczady"
            fill
            priority
            style={{ objectFit: "cover", opacity: 0.35, mixBlendMode: "luminosity" }}
          />
        </div>

        {/* Diagonal left edge overlay matching white bg */}
        <div style={{ position: "absolute", left: -1, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to right, white 0%, transparent 100%)", zIndex: 3 }} />

        {/* Navy content */}
        <div style={{ position: "relative", zIndex: 4, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "2rem 3rem 2rem 4rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ width: 50, height: 2, background: "#c0392b", marginBottom: "1.5rem" }} />
            <h3 style={{ color: "white", fontSize: "1.6rem", fontFamily: "'Rajdhani', sans-serif", marginBottom: "1rem", lineHeight: 1.2 }}>
              Dlaczego DM AutoSPA?
            </h3>
            {[
              "Wyjeżdżamy do Ciebie – brak kosztów dojazdu",
              "Certyfikowane powłoki ceramiczne",
              "Folia PPF z self-healing",
              "Korekta lakieru 1 i 2-etapowa",
              "Dokumentacja fotograficzna każdej realizacji",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.875rem" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#c0392b", flexShrink: 0, marginTop: "0.45rem" }} />
                <p style={{ color: "rgba(200,215,230,0.9)", fontSize: "0.9rem", lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>

          <div style={{ padding: "1.25rem", background: "rgba(192,57,43,0.12)", border: "1px solid rgba(192,57,43,0.3)", borderRadius: "10px" }}>
            <p style={{ color: "#c0392b", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Strefa obsługi</p>
            <p style={{ color: "rgba(200,215,230,0.9)", fontSize: "0.875rem", lineHeight: 1.6 }}>Polańczyk, Lesko, Sanok, Solina, Ustrzyki Dolne i cały region Bieszczad</p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: "2rem", left: "27%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", animation: "bounce 2s infinite" }}>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7a8d" }}>Przewiń</span>
        <ChevronDown size={18} style={{ color: "#c0392b" }} />
      </div>

      <style>{`
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
        @media(max-width:768px){
          section > div:first-of-type { flex: 0 0 100% !important; }
          section > div:last-of-type { display: none !important; }
        }
      `}</style>
    </section>
  );
}
