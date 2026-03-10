"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { POSTS, CATEGORIES } from "@/lib/posts";

export default function PostsGrid() {
  const [cat, setCat] = useState("All");
  const nonFeatured = POSTS.filter(p => !p.featured);
  const shown = cat === "All" ? nonFeatured : nonFeatured.filter(p => p.category === cat);

  return (
    <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px 80px" }}>

      {/* Header row */}
      <div style={{
        display: "flex", flexWrap: "wrap", alignItems: "flex-end",
        justifyContent: "space-between", gap: 16, marginBottom: 24,
      }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Archive</div>
          <h2 className="type-heading" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Latest Writing
          </h2>
        </div>

        {/* Category pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`cat-btn${cat === c ? " active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <hr className="rule" style={{ marginBottom: 36 }} />

      {/* Grid */}
      {shown.length === 0 ? (
        <p className="type-label" style={{ textAlign: "center", padding: "60px 0" }}>
          No posts in this category yet.
        </p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 24,
        }}>
          {shown.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="card group fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}>

              {/* Thumbnail */}
              <div style={{ position: "relative", height: 210, overflow: "hidden" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    objectFit: "cover",
                    filter: "grayscale(100%)",
                    transition: "transform 0.5s ease, filter 0.5s ease",
                  }}
                  className="group-hover:scale-105 group-hover:grayscale-0"
                />
                {/* Category badge */}
                <div style={{ position: "absolute", top: 12, left: 12 }}>
                  <span className="tag">{post.category}</span>
                </div>
                {/* Bottom fade */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: 60,
                  background: "linear-gradient(to top, var(--c-bg-card), transparent)",
                }} />
              </div>

              {/* Body */}
              <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="type-label">{post.date}</span>
                  <span className="type-label" style={{ opacity: 0.35 }}>·</span>
                  <span className="type-label">{post.readTime}</span>
                </div>

                <h3 className="type-title"
                  style={{
                    fontSize: "1.05rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#E8432D")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--c-text)")}
                >
                  {post.title}
                </h3>

                <p className="type-body" style={{ fontSize: "0.84rem", flex: 1 }}>
                  {post.excerpt}
                </p>

                <span className="read-more" style={{ marginTop: 4 }}>
                  Read
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}