"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function KontaktPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <div style={{ paddingTop: "6rem" }}>
      <section style={{ padding: "4rem 0 2rem", background: "linear-gradient(to bottom, #0a0a0a, var(--bg-primary))", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <span className="section-label">Skontaktuj się</span>
          <h1>Umów wizytę <span className="gold-gradient">DM AutoSPA</span></h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 540, lineHeight: 1.8 }}>
            Zadzwoń lub wypełnij formularz – oddzwonimy w ciągu kilku godzin, ustalimy termin i przyjedziemy bezpośrednio do Ciebie.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem", alignItems: "start" }}>
            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="card">
                <h3 style={{ marginBottom: "1.5rem" }}>Dane kontaktowe</h3>
                {[
                  { icon: <Phone size={18} />, label: "Telefon", value: COMPANY.contact.phoneDisplay, href: `tel:+48${COMPANY.contact.phone}` },
                  { icon: <Mail size={18} />, label: "E-mail", value: COMPANY.contact.email, href: `mailto:${COMPANY.contact.email}` },
                  { icon: <MapPin size={18} />, label: "Adres bazy", value: COMPANY.address.full, href: `https://maps.google.com/?q=${COMPANY.geo.lat},${COMPANY.geo.lng}` },
                  { icon: <Clock size={18} />, label: "Godziny pracy", value: `Pn–Pt: ${COMPANY.hours.weekdays}`, href: undefined },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", paddingBottom: "1.25rem", marginBottom: "1.25rem", borderBottom: i < 3 ? "1px solid var(--border)" : "none" }}>
                    <div style={{ width: 42, height: 42, borderRadius: "10px", background: "rgba(201,168,76,0.08)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--gold)" }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith("https") ? "_blank" : undefined} rel="noopener noreferrer"
                          style={{ color: "var(--text-primary)", transition: "color 0.2s", wordBreak: "break-all" }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--gold)"}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"}>
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ color: "var(--text-primary)" }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed placeholder */}
              <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border)", aspectRatio: "4/3", position: "relative", background: "var(--bg-card)" }}>
                <iframe
                  title="Lokalizacja DM AutoSPA – Bereżnica Wyżna, Polańczyk, Bieszczady"
                  src={`https://maps.google.com/maps?q=${COMPANY.geo.lat},${COMPANY.geo.lng}&z=13&output=embed`}
                  style={{ width: "100%", height: "100%", border: "none", filter: "grayscale(80%) invert(90%) contrast(90%)" }}
                  loading="lazy"
                />
              </div>

              <div style={{ padding: "1.25rem", background: "rgba(201,168,76,0.05)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)" }}>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                  📍 <strong style={{ color: "var(--gold)" }}>Obsługujemy</strong> cały region Bieszczad: Polańczyk, Lesko, Sanok, Ustrzyki Dolne, Solina i okolice.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="card" style={{ position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--gold-dark), var(--gold))" }} />

              {sent ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem", textAlign: "center", gap: "1rem" }}>
                  <CheckCircle size={56} style={{ color: "var(--gold)" }} />
                  <h3>Wiadomość wysłana!</h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    Dziękujemy za kontakt. Oddzwonimy lub odpiszemy w ciągu kilku godzin w dni robocze.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}
                    className="btn-outline" style={{ marginTop: "1rem" }}>
                    Wyślij kolejną wiadomość
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ marginBottom: "0.5rem" }}>Formularz kontaktowy</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "2rem" }}>Bezpłatna wycena – odpowiadamy do 24h</p>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">Imię i nazwisko *</label>
                        <input id="name" className="form-input" type="text" required placeholder="Jan Kowalski"
                          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Telefon *</label>
                        <input id="phone" className="form-input" type="tel" required placeholder="500 000 000"
                          value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">E-mail</label>
                      <input id="email" className="form-input" type="email" placeholder="jan@example.com"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="service">Interesująca usługa</label>
                      <select id="service" className="form-input" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                        style={{ appearance: "none", cursor: "pointer" }}>
                        <option value="">Wybierz usługę...</option>
                        <option value="ceramika">Powłoka ceramiczna</option>
                        <option value="ppf">Folia PPF</option>
                        <option value="korekta">Korekta lakieru</option>
                        <option value="pakiet">Pakiet kompleksowy</option>
                        <option value="inne">Inne / nie wiem</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Wiadomość</label>
                      <textarea id="message" className="form-input" rows={4} placeholder="Opisz swoje auto, stan lakieru i czego potrzebujesz..."
                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                        style={{ resize: "vertical", fontFamily: "inherit" }} />
                    </div>

                    <button type="submit" className="btn-primary" disabled={loading}
                      style={{ marginTop: "0.5rem", justifyContent: "center", opacity: loading ? 0.7 : 1 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        {loading ? "Wysyłanie..." : <><Send size={15} /> Wyślij wiadomość</>}
                      </span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
