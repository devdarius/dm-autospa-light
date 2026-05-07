"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Sparkles, Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      const d = await res.json();
      setError(d.error || "Błąd logowania");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #a07830, #c9a84c)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", boxShadow: "0 0 30px rgba(201,168,76,0.3)" }}>
            <Sparkles size={24} color="#080808" />
          </div>
          <h1 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>Panel Admina</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>DM AutoSPA – Zarządzanie treścią</p>
        </div>
        <div className="card" style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--gold-dark), var(--gold))" }} />
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label className="form-label" htmlFor="admin-pw">
                <Lock size={13} style={{ display: "inline", marginRight: 4 }} />Hasło administratora
              </label>
              <div style={{ position: "relative" }}>
                <input id="admin-pw" className="form-input" type={show ? "text" : "password"} value={pw}
                  onChange={(e) => setPw(e.target.value)} placeholder="Wprowadź hasło..." required autoFocus style={{ paddingRight: "3rem" }} />
                <button type="button" onClick={() => setShow(!show)}
                  style={{ position: "absolute", right: "0.875rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", display: "flex" }}>
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            {error && <div style={{ padding: "0.75rem", background: "rgba(192,57,43,0.1)", border: "1px solid rgba(192,57,43,0.3)", borderRadius: "6px", color: "#e74c3c", fontSize: "0.875rem" }}>{error}</div>}
            <button type="submit" className="btn-primary" disabled={loading} style={{ justifyContent: "center" }}>
              <span>{loading ? "Logowanie..." : "Zaloguj się"}</span>
            </button>
          </form>
        </div>
        <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "1.5rem" }}>Dostęp tylko dla właściciela DM AutoSPA</p>
      </div>
    </div>
  );
}
