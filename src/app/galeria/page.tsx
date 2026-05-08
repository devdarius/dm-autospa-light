"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const ALL_IMAGES = [
  { src: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb6d37?w=900&q=80", alt: "Powłoka ceramiczna na BMW M4 – efekt głębokiego połysku, realizacja DM AutoSPA Polańczyk", cat: "Powłoki ceramiczne" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80", alt: "Folia PPF na Porsche 911 – ochrona lakieru przed odpryskami kamieni, realizacja DM AutoSPA Polańczyk", cat: "Folia PPF" },
  { src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&q=80", alt: "Korekta lakieru na Audi RS6 – usunięcie swirlmarków hologramów, realizacja DM AutoSPA Polańczyk", cat: "Korekta lakieru" },
  { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80", alt: "Detailing premium Ferrari – powłoka ceramiczna 5 lat, realizacja DM AutoSPA Bieszczady", cat: "Powłoki ceramiczne" },
  { src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80", alt: "Montaż folii PPF na Lamborghini – realizacja DM AutoSPA Polańczyk Bieszczady", cat: "Folia PPF" },
  { src: "https://images.unsplash.com/photo-1626668011687-8a114cf5a34c?w=900&q=80", alt: "Aplikacja powłoki ceramicznej ceramika na Mercedesie AMG – DM AutoSPA Polańczyk", cat: "Powłoki ceramiczne" },
  { src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80", alt: "Detailing wnętrza BMW – czyszczenie tapicerki skórzanej, realizacja DM AutoSPA Bieszczady", cat: "Korekta lakieru" },
  { src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=900&q=80", alt: "Powłoka ceramiczna na Dodge Challenger – realizacja DM AutoSPA Polańczyk", cat: "Powłoki ceramiczne" },
  { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80", alt: "Folia PPF full front na sportowym Audi – ochrona całego przodu, realizacja DM AutoSPA", cat: "Folia PPF" },
];

const CATS = ["Wszystkie", "Powłoki ceramiczne", "Folia PPF", "Korekta lakieru"];

export default function GalleryClient() {
  const [activecat, setActiveCat] = useState("Wszystkie");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activecat === "Wszystkie" ? ALL_IMAGES : ALL_IMAGES.filter((i) => i.cat === activecat);

  return (
    <div style={{ paddingTop: "6rem" }}>
      {/* Header */}
      <section style={{ padding: "4rem 0 2rem", background: "linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="section-label">Nasze realizacje</span>
          <h1>Galeria <span className="gold-gradient">DM AutoSPA</span></h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 560, lineHeight: 1.8 }}>
            Dokumentujemy każdą realizację – efekty przed i po, detale wykonania i zadowolone auto. Zobacz, co robimy w Polańczyku i Bieszczadach.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ padding: "2rem 0", borderBottom: "1px solid var(--border)", position: "sticky", top: "70px", background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", zIndex: 100 }}>
        <div className="container" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {CATS.map((cat) => (
            <button key={cat} onClick={() => setActiveCat(cat)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "100px",
                border: activecat === cat ? "1px solid var(--gold)" : "1px solid var(--border)",
                background: activecat === cat ? "rgba(192,57,43,0.08)" : "transparent",
                color: activecat === cat ? "var(--gold)" : "var(--text-secondary)",
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                letterSpacing: "0.06em",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container">
          <div style={{ columns: "3 300px", gap: "1rem" }}>
            {filtered.map((img, i) => (
              <div key={i} onClick={() => setLightbox(ALL_IMAGES.indexOf(img))}
                style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border)", cursor: "zoom-in", marginBottom: "1rem", breakInside: "avoid", display: "block" }}>
                <Image src={img.src} alt={img.alt} width={600} height={400} loading="lazy" style={{ objectFit: "cover", width: "100%", height: "auto", display: "block", transition: "transform 0.4s ease" }}
                  className="gal-img" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", transition: "background 0.3s", display: "flex", alignItems: "center", justifyContent: "center" }} className="gal-overlay">
                  <ZoomIn size={28} style={{ color: "white", opacity: 0, transition: "opacity 0.3s" }} className="gal-zoom" />
                </div>
                <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem" }}>
                  <span className="badge" style={{ fontSize: "0.7rem" }}>{img.cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out", padding: "2rem" }}>
          <button onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", width: 44, height: 44, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
            <X size={20} />
          </button>
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh", borderRadius: "var(--radius-md)", overflow: "hidden" }} onClick={e => e.stopPropagation()}>
            <Image src={ALL_IMAGES[lightbox].src} alt={ALL_IMAGES[lightbox].alt} width={1200} height={800}
              style={{ objectFit: "contain", maxHeight: "85vh", width: "auto" }} />
          </div>
          <p style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", textAlign: "center", maxWidth: "60%" }}>
            {ALL_IMAGES[lightbox].alt}
          </p>
        </div>
      )}

      <style>{`
        .gal-img:hover { transform: scale(1.04); }
        .gal-overlay:hover { background: rgba(0,0,0,0.35) !important; }
        .gal-overlay:hover .gal-zoom { opacity: 1 !important; }
      `}</style>
    </div>
  );
}
