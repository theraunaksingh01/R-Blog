import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/lib/posts";

export default function HeroSection() {
  const post = POSTS.find(p => p.featured) ?? POSTS[0];

  return (
    <section style={{ maxWidth: 1080, margin: "0 auto", padding: "60px 32px 48px" }}>

      {/* ── Eyebrow ── */}
      <div className="eyebrow fade-up d1" style={{ marginBottom: 20 }}>
        Personal Blog
      </div>

      {/* ── Giant title — same as reference image ── */}
      <h1
        className="type-hero fade-up d2"
        style={{ fontSize: "clamp(5rem, 13vw, 11rem)", marginBottom: 28 }}
      >
        THE<br />CANVAS
      </h1>

      {/* ── Tagline ── */}
      <p
        className="type-body fade-up d3"
        style={{ fontSize: "1rem", maxWidth: 420, marginBottom: 56 }}
      >
        Writing about life, ideas, books, travel, and everything in between.
        Honest words, no algorithm.
      </p>

      {/* ── Featured post ── */}
      <div className="fade-up d4">
        <div className="eyebrow" style={{ marginBottom: 20 }}>Featured Post</div>

        <Link href={`/blog/${post.slug}`} className="group" style={{ display: "block" }}>
          <div style={{
            position: "relative",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid var(--c-border)",
            background: "var(--c-bg-card)",
          }}>
            {/* Image */}
            <div style={{ position: "relative", width: "100%", height: "clamp(280px, 44vw, 540px)" }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1080px) 100vw, 1080px"
                style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
                className="group-hover:scale-[1.03]"
              />
              {/* Gradient overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(17,16,16,0.97) 0%, rgba(17,16,16,0.55) 45%, rgba(17,16,16,0.08) 100%)",
              }} />

              {/* Text overlay */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(24px, 5vw, 52px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span className="tag">{post.category}</span>
                  <span className="type-label">{post.date}</span>
                  <span className="type-label" style={{ opacity: 0.4 }}>·</span>
                  <span className="type-label">{post.readTime}</span>
                </div>

                <h2 className="type-heading" style={{
                  fontSize: "clamp(1.4rem, 3.2vw, 2.6rem)",
                  maxWidth: 640,
                  marginBottom: 16,
                  color: "#fff",
                }}>
                  {post.title}
                </h2>

                <p className="type-body hidden md:block" style={{
                  fontSize: "0.92rem",
                  maxWidth: 500,
                  marginBottom: 24,
                }}>
                  {post.excerpt}
                </p>

                <span className="read-more">
                  Read Post
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}