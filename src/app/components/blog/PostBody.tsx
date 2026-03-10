import Image from "next/image";
import type { ContentBlock } from "@/lib/posts";

export default function PostBody({ content }: { content: ContentBlock[] }) {
  return (
    <article style={{
      maxWidth: 680,
      margin: "0 auto",
      padding: "56px 32px 80px",
    }}>
      {content.map((block, i) => {
        switch (block.type) {

          case "paragraph":
            return (
              <p key={i} style={{
                fontFamily: "var(--f-body)",
                fontSize: "1.05rem",
                lineHeight: 1.82,
                color: "rgba(240,237,232,0.78)",
                marginBottom: "1.6em",
              }}>
                {block.text}
              </p>
            );

          case "heading":
            return (
              <h2 key={i} className="type-heading" style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                color: "var(--c-text)",
                marginTop: "2.4em",
                marginBottom: "0.7em",
              }}>
                {block.text}
              </h2>
            );

          case "subheading":
            return (
              <h3 key={i} style={{
                fontFamily: "var(--f-display)",
                fontSize: "1.15rem",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "var(--c-text)",
                marginTop: "2em",
                marginBottom: "0.5em",
              }}>
                {block.text}
              </h3>
            );

          case "quote":
            return (
              <blockquote key={i} style={{
                margin: "2.4em 0",
                padding: "28px 32px",
                background: "var(--c-bg-card)",
                border: "none",
                borderLeft: "4px solid var(--c-red)",
                borderRadius: "0 12px 12px 0",
                position: "relative",
              }}>
                {/* Large quote mark */}
                <span style={{
                  position: "absolute",
                  top: 10, left: 20,
                  fontFamily: "var(--f-display)",
                  fontSize: "4rem",
                  lineHeight: 1,
                  color: "var(--c-red)",
                  opacity: 0.2,
                  userSelect: "none",
                }}>
                  "
                </span>
                <p style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "1.15rem",
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  color: "var(--c-text)",
                  margin: 0,
                  position: "relative",
                  zIndex: 1,
                }}>
                  {block.text}
                </p>
                {block.attribution && (
                  <p style={{
                    fontFamily: "var(--f-mono)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--c-muted)",
                    marginTop: 16,
                    marginBottom: 0,
                    position: "relative",
                    zIndex: 1,
                  }}>
                    — {block.attribution}
                  </p>
                )}
              </blockquote>
            );

          case "image":
            return (
              <figure key={i} style={{ margin: "2.8em 0", padding: 0 }}>
                <div style={{
                  position: "relative",
                  width: "100%",
                  height: "clamp(200px, 40vw, 440px)",
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid var(--c-border)",
                }}>
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="(max-width: 680px) 100vw, 680px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {block.caption && (
                  <figcaption style={{
                    fontFamily: "var(--f-mono)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.08em",
                    color: "var(--c-muted)",
                    textAlign: "center",
                    marginTop: 12,
                  }}>
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "divider":
            return (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                margin: "3em 0",
              }}>
                {[0,1,2].map(d => (
                  <div key={d} style={{
                    width: d === 1 ? 8 : 4,
                    height: d === 1 ? 8 : 4,
                    borderRadius: "50%",
                    background: d === 1 ? "var(--c-red)" : "var(--c-border-s)",
                    flexShrink: 0,
                  }} />
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </article>
  );
}