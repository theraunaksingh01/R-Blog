import Image from "next/image";
import Link from "next/link";

export default function AboutSnippet() {
  return (
    <section style={{
      borderTop: "1px solid var(--c-border)",
      borderBottom: "1px solid var(--c-border)",
      padding: "72px 0",
    }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(32px, 6vw, 72px)",
        }}>

          {/* Avatar */}
          <div style={{ flexShrink: 0, position: "relative", width: 130, height: 130 }}>
            {/* offset decorative ring */}
            <div style={{
              position: "absolute", inset: 0,
              borderRadius: "50%",
              border: "1px solid var(--c-red)",
              transform: "translate(8px, 8px)",
              opacity: 0.35,
            }} />
            <div style={{
              position: "relative", width: "100%", height: "100%",
              borderRadius: "50%", overflow: "hidden",
              border: "2px solid var(--c-border-s)",
            }}>
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=280&q=80"
                alt="Author"
                fill
                sizes="130px"
                style={{ objectFit: "cover", filter: "grayscale(100%)" }}
              />
            </div>
          </div>

          {/* Bio */}
          <div style={{ flex: 1, minWidth: 260 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>The Writer</div>
            <h2 className="type-heading" style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)", marginBottom: 14 }}>
              Hey — I&apos;m the person<br />behind The Canvas.
            </h2>
            <p className="type-body" style={{ fontSize: "0.9rem", maxWidth: 460, marginBottom: 24 }}>
              I write about things I find interesting — ideas, books, moments from life,
              half-formed opinions, and the occasional travel story. No niche, no brand.
              Just honest words.
            </p>
            <Link href="/about" className="btn-outline">
              More about me
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", flexDirection: "column", gap: 28,
            paddingLeft: "clamp(24px, 4vw, 48px)",
            borderLeft: "1px solid var(--c-border)",
            flexShrink: 0,
          }} className="hidden lg:flex">
            {[
              { n: "24+", label: "Posts Written" },
              { n: "6",   label: "Categories" },
              { n: "2025",label: "Since" },
            ].map(({ n, label }) => (
              <div key={label} style={{ textAlign: "right" }}>
                <p className="type-hero" style={{ fontSize: "2.2rem", color: "var(--c-text)" }}>{n}</p>
                <p className="type-label" style={{ marginTop: 4 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}