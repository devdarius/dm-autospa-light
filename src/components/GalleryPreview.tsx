"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PREVIEW_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb6d37?w=800&q=80",
    alt: "Powłoka ceramiczna na BMW M4 – efekt głębokiego połysku, realizacja DM AutoSPA Polańczyk",
    label: "Powłoka ceramiczna – BMW M4",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Folia PPF na Porsche 911 – ochrona lakieru przed odpryskami, realizacja DM AutoSPA Polańczyk",
    label: "Folia PPF – Porsche 911",
  },
  {
    src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
    alt: "Korekta lakieru na Audi RS6 – usunięcie swirlmarków, realizacja DM AutoSPA Polańczyk",
    label: "Korekta lakieru – Audi RS6",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    alt: "Detailing premium Ferrari – powłoka ceramiczna 5 lat, realizacja DM AutoSPA Bieszczady",
    label: "Detailing Premium – Ferrari",
  },
];

export default function GalleryPreview() {
  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label" style={{ justifyContent: "center" }}>Nasze realizacje</span>
          <h2>Galeria projektów</h2>
          <div className="divider divider-center" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 520, margin: "0 auto" }}>
            Każde auto to osobna historia. Efekty mówią same za siebie.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginBottom: "2.5rem" }}>
          {PREVIEW_IMAGES.map((img, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                aspectRatio: i === 0 ? "16/9" : "4/3",
                gridColumn: i === 0 ? "1 / -1" : "auto",
                border: "1px solid var(--border)",
                cursor: "pointer",
              }}
              className="gallery-item"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                className="gallery-img"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                transition: "opacity 0.3s ease",
              }} />
              <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                <span className="badge">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/galeria" className="btn-outline">
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              Zobacz całą galerię <ArrowRight size={15} />
            </span>
          </Link>
        </div>
      </div>

      <style>{`
        .gallery-item:hover .gallery-img { transform: scale(1.04); }
        @media(max-width:600px){ .gallery-item { grid-column: 1/-1 !important; } }
      `}</style>
    </section>
  );
}
