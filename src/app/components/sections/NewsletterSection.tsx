"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async () => {
    if (!email.includes("@")) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setDone(true);
    setLoading(false);
  };

  return (
    <section id="newsletter" style={{ padding: "80px 32px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 18,
          background: "var(--c-bg-card)",
          border: "1px solid var(--c-border)",
          padding: "clamp(40px, 7vw, 72px) clamp(32px, 6vw, 80px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(32px, 6vw, 72px)",
        }}>

          {/* Decorative glow */}
          <div style={{
            position: "absolute",
            top: "-80px", right: "-80px",
            width: 360, height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,67,45,0.14) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            bottom: "-60px", left: "-60px",
            width: 260, height: 260,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,67,45,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Text side */}
          <div style={{ flex: 1, minWidth: 260, position: "relative", zIndex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Newsletter</div>
            <h2 className="type-heading" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", marginBottom: 16 }}>
              New posts,<br />straight to your inbox.
            </h2>
            <p className="type-body" style={{ fontSize: "0.9rem", maxWidth: 360 }}>
              No spam. Just an email when I publish something new — roughly
              once or twice a month.
            </p>
          </div>

          {/* Form side */}
          <div style={{ width: "min(100%, 340px)", flexShrink: 0, position: "relative", zIndex: 1 }}>
            {done ? (
              <div style={{
                padding: "28px 24px",
                borderRadius: 12,
                background: "rgba(232,67,45,0.1)",
                border: "1px solid rgba(232,67,45,0.25)",
                textAlign: "center",
              }}>
                <p style={{ fontSize: "2rem", marginBottom: 8 }}>✉️</p>
                <p className="type-heading" style={{ fontSize: "1.1rem", color: "#fff", marginBottom: 6 }}>You&apos;re in!</p>
                <p className="type-label">Watch your inbox.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input
                  type="email"
                  className="input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && submit()}
                />
                <button
                  className="btn-red"
                  onClick={submit}
                  disabled={loading}
                  style={{ width: "100%", opacity: loading ? 0.75 : 1 }}
                >
                  {loading ? "Subscribing…" : "Subscribe — it's free"}
                </button>
                <p className="type-label" style={{ textAlign: "center", fontSize: "0.6rem" }}>
                  Unsubscribe any time. No spam, ever.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}