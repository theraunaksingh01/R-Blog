"use client";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://thecanvas.blog/blog/${slug}`;
  const encoded = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 32px 60px" }}>
      <div style={{
        padding: "28px 32px",
        background: "var(--c-bg-card)",
        border: "1px solid var(--c-border)",
        borderRadius: 14,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
      }}>
        <div>
          <p style={{
            fontFamily: "var(--f-body)",
            fontWeight: 600,
            fontSize: "0.9rem",
            color: "var(--c-text)",
            marginBottom: 4,
          }}>
            Enjoyed this post?
          </p>
          <p className="type-label">Share it with someone who&apos;d appreciate it.</p>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href={`https://twitter.com/intent/tweet?text=${encoded}&url=${encodedUrl}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "9px 18px",
              borderRadius: 999,
              border: "1px solid var(--c-border-s)",
              background: "transparent",
              color: "var(--c-text)",
              fontFamily: "var(--f-body)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "all 0.18s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
            </svg>
            Share on X
          </a>

          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encoded}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "9px 18px",
              borderRadius: 999,
              border: "1px solid var(--c-border-s)",
              background: "transparent",
              color: "var(--c-text)",
              fontFamily: "var(--f-body)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "all 0.18s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>

          <button
            onClick={() => navigator.clipboard?.writeText(url)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "9px 18px",
              borderRadius: 999,
              border: "1px solid var(--c-border-s)",
              background: "transparent",
              color: "var(--c-text)",
              fontFamily: "var(--f-body)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              cursor: "pointer",
              transition: "all 0.18s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}

function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;
  return (
    <section style={{
      borderTop: "1px solid var(--c-border)",
      padding: "64px 32px 80px",
    }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}>Keep Reading</div>
        <h2 className="type-heading" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", marginBottom: 36 }}>
          You might also like
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          gap: 24,
        }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              style={{
                background: "var(--c-bg-card)",
                border: "1px solid var(--c-border)",
                borderRadius: 14,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
              }}
              className="card group"
            >
              <div style={{ position: "relative", height: 180 }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    filter: "grayscale(100%)",
                    transition: "filter 0.4s ease, transform 0.5s ease",
                  }}
                  className="group-hover:grayscale-0 group-hover:scale-105"
                />
                <div style={{ position: "absolute", top: 12, left: 12 }}>
                  <span className="tag">{post.category}</span>
                </div>
              </div>
              <div style={{ padding: "18px 20px 22px" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                  <span className="type-label">{post.date}</span>
                  <span className="type-label" style={{ opacity: 0.3 }}>·</span>
                  <span className="type-label">{post.readTime}</span>
                </div>
                <h3 className="type-title" style={{ fontSize: "1rem", marginBottom: 12 }}>
                  {post.title}
                </h3>
                <span className="read-more">
                  Read
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PostFooter({ post, related }: { post: Post; related: Post[] }) {
  return (
    <>
      <ShareButtons title={post.title} slug={post.slug} />
      <RelatedPosts posts={related} />
    </>
  );
}