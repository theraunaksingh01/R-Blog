import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--c-border)", padding: "56px 32px 40px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>

        {/* Big faded title like reference */}
        <div style={{ marginBottom: 40 }}>
          <p className="type-hero" style={{
            fontSize: "clamp(2.5rem, 8vw, 7rem)",
            color: "rgba(240,237,232,0.07)",
            userSelect: "none",
          }}>
            THE CANVAS
          </p>
          <p className="type-label" style={{ marginTop: 8 }}>
            Writing about everything. Apologising for nothing.
          </p>
        </div>

        <hr className="rule" style={{ marginBottom: 28 }} />

        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between",
          gap: 20,
        }}>
          {/* Nav */}
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "8px 28px" }}>
            {[
              { l: "Writing", h: "/writing" },
              { l: "About",   h: "/about" },
              { l: "Archive", h: "/archive" },
              { l: "RSS",     h: "/rss.xml" },
            ].map(({ l, h }) => (
              <Link key={l} href={h} className="type-nav" style={{ fontSize: "0.72rem" }}>{l}</Link>
            ))}
          </nav>

          <p className="type-label" style={{ fontSize: "0.58rem" }}>
            © {new Date().getFullYear()} The Canvas · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}