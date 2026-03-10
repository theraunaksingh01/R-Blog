"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = ["Writing", "About", "Archive"];

const PenIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(17,16,16,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            The Canvas
          </span>
          <span
            style={{
              width: "6px", height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
              marginBottom: "2px",
              transition: "transform 0.2s",
            }}
            className="group-hover:scale-150"
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link key={l} href={`/${l.toLowerCase()}`} className="nav-link">
              {l}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#newsletter" className="btn-accent" style={{ padding: "9px 20px", fontSize: "0.78rem" }}>
             Subscribe
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-5 flex flex-col gap-4 border-t"
          style={{ borderColor: "var(--border)", background: "var(--bg-dark)" }}
        >
          {LINKS.map((l) => (
            <Link
              key={l}
              href={`/${l.toLowerCase()}`}
              className="nav-link py-1"
              onClick={() => setOpen(false)}
            >
              {l}
            </Link>
          ))}
          <a href="#newsletter" className="btn-accent w-fit" onClick={() => setOpen(false)}>
            Subscribe
          </a>
        </div>
      )}
    </header>
  );
}