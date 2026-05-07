"use client";
export const dynamic = "force-dynamic";
import { useState, useRef } from "react";
import Image from "next/image";
import { Upload, Trash2, Plus, Edit2, Save, X, LogOut, Image as ImageIcon, DollarSign } from "lucide-react";

const ADMIN_KEY = "dmautospa2025";
const CATS = ["Powłoki ceramiczne", "Folia PPF", "Korekta lakieru"];

type GalleryItem = { id: string; src: string; alt: string; cat: string; createdAt: string };
type PricingItem = { id: string; category: string; name: string; price: string; duration: string };

function useAdminFetch() {
  const headers = { "x-admin-key": ADMIN_KEY };
  const get = (url: string) => fetch(url, { headers }).then((r) => r.json());
  const del = (url: string) => fetch(url, { method: "DELETE", headers });
  const post = (url: string, body: object) => fetch(url, { method: "POST", headers: { ...headers, "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const put = (url: string, body: object) => fetch(url, { method: "PUT", headers: { ...headers, "Content-Type": "application/json" }, body: JSON.stringify(body) });
  return { get, del, post, put };
}

export default function AdminDashboard() {
  const [tab, setTab] = useState<"gallery" | "pricing">("gallery");
  const { get, del, post, put } = useAdminFetch();

  // Gallery state
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [galLoaded, setGalLoaded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [newAlt, setNewAlt] = useState("");
  const [newCat, setNewCat] = useState(CATS[0]);
  const fileRef = useRef<HTMLInputElement>(null);

  // Pricing state
  const [pricing, setPricing] = useState<PricingItem[]>([]);
  const [priceLoaded, setPriceLoaded] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newPrice, setNewPrice] = useState({ category: CATS[0], name: "", price: "", duration: "" });
  const [editBuf, setEditBuf] = useState<Partial<PricingItem>>({});

  const loadGallery = async () => { const d = await get("/api/admin/gallery"); setGallery(d); setGalLoaded(true); };
  const loadPricing = async () => { const d = await get("/api/admin/pricing"); setPricing(d); setPriceLoaded(true); };

  if (tab === "gallery" && !galLoaded) loadGallery();
  if (tab === "pricing" && !priceLoaded) loadPricing();

  const uploadPhoto = async () => {
    const file = fileRef.current?.files?.[0];
    if (!file || !newAlt) return alert("Dodaj zdjęcie i opis alt!");
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("alt", newAlt);
    fd.append("cat", newCat);
    const res = await fetch("/api/admin/gallery", { method: "POST", headers: { "x-admin-key": ADMIN_KEY }, body: fd });
    if (res.ok) {
      const item = await res.json();
      setGallery([item, ...gallery]);
      setNewAlt(""); setNewCat(CATS[0]);
      if (fileRef.current) fileRef.current.value = "";
    }
    setUploading(false);
  };

  const deletePhoto = async (id: string) => {
    if (!confirm("Usunąć zdjęcie?")) return;
    await del(`/api/admin/gallery?id=${id}`);
    setGallery(gallery.filter((i) => i.id !== id));
  };

  const addPricing = async () => {
    if (!newPrice.name || !newPrice.price) return alert("Uzupełnij nazwę i cenę!");
    const res = await post("/api/admin/pricing", newPrice);
    if (res.ok) { const item = await res.json(); setPricing([...pricing, item]); setNewPrice({ category: CATS[0], name: "", price: "", duration: "" }); }
  };

  const savePricing = async (id: string) => {
    await put("/api/admin/pricing", { id, ...editBuf });
    setPricing(pricing.map((i) => i.id === id ? { ...i, ...editBuf } : i));
    setEditingId(null);
  };

  const deletePricing = async (id: string) => {
    if (!confirm("Usunąć pozycję?")) return;
    await del(`/api/admin/pricing?id=${id}`);
    setPricing(pricing.filter((i) => i.id !== id));
  };

  const logout = async () => { await fetch("/api/admin/auth", { method: "DELETE" }); window.location.href = "/admin"; };

  const tabBtn = (t: "gallery" | "pricing", label: string, icon: React.ReactNode) => (
    <button onClick={() => setTab(t)} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", border: "none", borderRadius: "8px", cursor: "pointer", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.06em", background: tab === t ? "rgba(201,168,76,0.12)" : "transparent", color: tab === t ? "var(--gold)" : "var(--text-secondary)", borderBottom: tab === t ? "2px solid var(--gold)" : "2px solid transparent", transition: "all 0.2s" }}>
      {icon}{label}
    </button>
  );

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)", paddingTop: "5rem" }}>
      {/* Admin header */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: "rgba(8,8,8,0.97)", borderBottom: "1px solid var(--border)", backdropFilter: "blur(20px)", padding: "0.875rem 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ fontSize: "1.2rem" }}>🛠️ Panel Admina – <span className="gold-text">DM AutoSPA</span></h1>
          <button onClick={logout} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", background: "rgba(192,57,43,0.1)", border: "1px solid rgba(192,57,43,0.3)", borderRadius: "6px", color: "#e74c3c", cursor: "pointer", fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "0.875rem" }}>
            <LogOut size={14} /> Wyloguj
          </button>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "1rem" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", borderBottom: "1px solid var(--border)", marginBottom: "2rem" }}>
          {tabBtn("gallery", "Galeria", <ImageIcon size={16} />)}
          {tabBtn("pricing", "Cennik", <DollarSign size={16} />)}
        </div>

        {/* GALLERY TAB */}
        {tab === "gallery" && (
          <div>
            {/* Upload form */}
            <div className="card" style={{ marginBottom: "2rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--gold-dark), var(--gold))" }} />
              <h3 style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><Upload size={18} style={{ color: "var(--gold)" }} /> Dodaj nowe zdjęcie</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: "1rem", alignItems: "end" }}>
                <div>
                  <label className="form-label">Zdjęcie (JPG/PNG/WebP)</label>
                  <input ref={fileRef} type="file" accept="image/*" className="form-input" style={{ cursor: "pointer" }} />
                </div>
                <div>
                  <label className="form-label">Opis ALT (SEO)</label>
                  <input className="form-input" value={newAlt} onChange={e => setNewAlt(e.target.value)} placeholder="Powłoka ceramiczna na [model] – DM AutoSPA" />
                </div>
                <div>
                  <label className="form-label">Kategoria</label>
                  <select className="form-input" value={newCat} onChange={e => setNewCat(e.target.value)}>
                    {CATS.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <button onClick={uploadPhoto} className="btn-primary" disabled={uploading} style={{ whiteSpace: "nowrap", height: "48px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Plus size={15} />{uploading ? "Wysyłanie..." : "Dodaj"}
                  </span>
                </button>
              </div>
              <p style={{ marginTop: "0.75rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>✅ Zdjęcia są automatycznie kompresowane do formatu WebP (jakość 82%, max 1200px)</p>
            </div>

            {/* Gallery grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
              {gallery.map((item) => (
                <div key={item.id} className="card" style={{ padding: "0", overflow: "hidden", position: "relative" }}>
                  <div style={{ position: "relative", aspectRatio: "4/3" }}>
                    <Image src={item.src} alt={item.alt} fill style={{ objectFit: "cover" }} sizes="220px" />
                    <button onClick={() => deletePhoto(item.id)}
                      style={{ position: "absolute", top: "0.5rem", right: "0.5rem", background: "rgba(192,57,43,0.85)", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div style={{ padding: "0.75rem" }}>
                    <span className="badge" style={{ marginBottom: "0.5rem", display: "inline-block", fontSize: "0.7rem" }}>{item.cat}</span>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.4 }}>{item.alt}</p>
                  </div>
                </div>
              ))}
              {gallery.length === 0 && <p style={{ color: "var(--text-muted)", gridColumn: "1/-1", textAlign: "center", padding: "3rem" }}>Brak zdjęć. Dodaj pierwsze!</p>}
            </div>
          </div>
        )}

        {/* PRICING TAB */}
        {tab === "pricing" && (
          <div>
            {/* Add form */}
            <div className="card" style={{ marginBottom: "2rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--gold-dark), var(--gold))" }} />
              <h3 style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><Plus size={18} style={{ color: "var(--gold)" }} /> Dodaj pozycję cennika</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr 1fr auto", gap: "1rem", alignItems: "end" }}>
                <div>
                  <label className="form-label">Kategoria</label>
                  <select className="form-input" value={newPrice.category} onChange={e => setNewPrice({ ...newPrice, category: e.target.value })}>
                    {CATS.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Nazwa usługi</label>
                  <input className="form-input" value={newPrice.name} onChange={e => setNewPrice({ ...newPrice, name: e.target.value })} placeholder="Np. Powłoka ceramiczna 3 lata" />
                </div>
                <div>
                  <label className="form-label">Cena</label>
                  <input className="form-input" value={newPrice.price} onChange={e => setNewPrice({ ...newPrice, price: e.target.value })} placeholder="od 1500 zł" />
                </div>
                <div>
                  <label className="form-label">Czas</label>
                  <input className="form-input" value={newPrice.duration} onChange={e => setNewPrice({ ...newPrice, duration: e.target.value })} placeholder="1–2 dni" />
                </div>
                <button onClick={addPricing} className="btn-primary" style={{ height: "48px", whiteSpace: "nowrap" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}><Plus size={15} />Dodaj</span>
                </button>
              </div>
            </div>

            {/* Pricing table */}
            <div className="card" style={{ overflow: "hidden", padding: 0 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
                    {["Kategoria", "Nazwa usługi", "Cena", "Czas", "Akcje"].map(h => (
                      <th key={h} style={{ padding: "1rem 1.25rem", textAlign: "left", fontFamily: "'Rajdhani'", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((item) => (
                    <tr key={item.id} style={{ borderBottom: "1px solid var(--border)" }}>
                      {editingId === item.id ? (
                        <>
                          <td style={{ padding: "0.75rem 1.25rem" }}><select className="form-input" style={{ padding: "0.4rem 0.75rem" }} value={editBuf.category || item.category} onChange={e => setEditBuf({ ...editBuf, category: e.target.value })}>{CATS.map(c => <option key={c}>{c}</option>)}</select></td>
                          <td style={{ padding: "0.75rem 1.25rem" }}><input className="form-input" style={{ padding: "0.4rem 0.75rem" }} value={editBuf.name ?? item.name} onChange={e => setEditBuf({ ...editBuf, name: e.target.value })} /></td>
                          <td style={{ padding: "0.75rem 1.25rem" }}><input className="form-input" style={{ padding: "0.4rem 0.75rem" }} value={editBuf.price ?? item.price} onChange={e => setEditBuf({ ...editBuf, price: e.target.value })} /></td>
                          <td style={{ padding: "0.75rem 1.25rem" }}><input className="form-input" style={{ padding: "0.4rem 0.75rem" }} value={editBuf.duration ?? item.duration} onChange={e => setEditBuf({ ...editBuf, duration: e.target.value })} /></td>
                          <td style={{ padding: "0.75rem 1.25rem" }}>
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                              <button onClick={() => savePricing(item.id)} style={{ padding: "0.4rem 0.75rem", background: "rgba(39,174,96,0.15)", border: "1px solid rgba(39,174,96,0.4)", borderRadius: "6px", color: "#27ae60", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem" }}><Save size={13} />Zapisz</button>
                              <button onClick={() => setEditingId(null)} style={{ padding: "0.4rem 0.75rem", background: "transparent", border: "1px solid var(--border)", borderRadius: "6px", color: "var(--text-muted)", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem" }}><X size={13} /></button>
                            </div>
                          </td>
                        </>
                      ) : (
                        <>
                          <td style={{ padding: "1rem 1.25rem" }}><span className="badge" style={{ fontSize: "0.7rem" }}>{item.category}</span></td>
                          <td style={{ padding: "1rem 1.25rem", color: "var(--text-primary)", fontSize: "0.875rem" }}>{item.name}</td>
                          <td style={{ padding: "1rem 1.25rem", color: "var(--gold)", fontFamily: "'Rajdhani'", fontWeight: 700 }}>{item.price}</td>
                          <td style={{ padding: "1rem 1.25rem", color: "var(--text-muted)", fontSize: "0.85rem" }}>{item.duration}</td>
                          <td style={{ padding: "1rem 1.25rem" }}>
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                              <button onClick={() => { setEditingId(item.id); setEditBuf({}); }} style={{ padding: "0.4rem 0.75rem", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "6px", color: "var(--gold)", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem" }}><Edit2 size={13} />Edytuj</button>
                              <button onClick={() => deletePricing(item.id)} style={{ padding: "0.4rem 0.75rem", background: "rgba(192,57,43,0.1)", border: "1px solid rgba(192,57,43,0.3)", borderRadius: "6px", color: "#e74c3c", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem" }}><Trash2 size={13} /></button>
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                  {pricing.length === 0 && (
                    <tr><td colSpan={5} style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>Brak pozycji. Dodaj pierwszą!</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
