import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostHero({ post }: { post: Post }) {
  return (
    <div>
      {/* Back link */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 32px 0" }}>
        <Link href="/" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "var(--f-body)", fontSize: "0.75rem",
          fontWeight: 500, letterSpacing: "0.07em",
          textTransform: "uppercase", color: "var(--c-muted)",
          textDecoration: "none", transition: "color 0.15s",
        }}
        className="hover-red-text"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          All Posts
        </Link>
      </div>

      {/* Post header */}
      <header style={{ maxWidth: 760, margin: "0 auto", padding: "40px 32px 48px" }}>
        {/* Meta row */}
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
          <span className="tag">{post.category}</span>
          <span className="type-label">{post.date}</span>
          <span className="type-label" style={{ opacity: 0.35 }}>·</span>
          <span className="type-label">{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="type-heading" style={{
          fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)",
          color: "var(--c-text)",
          marginBottom: 24,
          lineHeight: 1.1,
        }}>
          {post.title}
        </h1>

        {/* Excerpt */}
        <p style={{
          fontFamily: "var(--f-body)",
          fontSize: "1.1rem",
          color: "var(--c-muted)",
          lineHeight: 1.7,
          borderLeft: "3px solid var(--c-red)",
          paddingLeft: 20,
          margin: "0 0 40px",
        }}>
          {post.excerpt}
        </p>

        {/* Author row */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          paddingTop: 24,
          borderTop: "1px solid var(--c-border)",
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            overflow: "hidden", flexShrink: 0,
            border: "1px solid var(--c-border-s)",
            position: "relative",
          }}>
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80"
              alt="Author"
              fill
              sizes="40px"
              style={{ objectFit: "cover", filter: "grayscale(1)" }}
            />
          </div>
          <div>
            <p style={{ fontFamily: "var(--f-body)", fontSize: "0.85rem", fontWeight: 600, color: "var(--c-text)" }}>
              The Canvas
            </p>
            <p className="type-label" style={{ marginTop: 2 }}>Personal Blog</p>
          </div>
        </div>
      </header>

      {/* Cover image — full bleed */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "clamp(260px, 42vw, 580px)",
        marginBottom: 0,
        overflow: "hidden",
      }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        {/* Bottom fade into page bg */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 120,
          background: "linear-gradient(to bottom, transparent, var(--c-bg))",
        }} />
      </div>
    </div>
  );
}