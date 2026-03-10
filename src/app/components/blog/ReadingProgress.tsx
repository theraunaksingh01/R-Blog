"use client";
import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0,
      height: 3, zIndex: 100,
      background: "rgba(240,237,232,0.06)",
    }}>
      <div style={{
        height: "100%",
        width: `${progress}%`,
        background: "var(--c-red)",
        transition: "width 0.1s linear",
        boxShadow: "0 0 10px rgba(232,67,45,0.6)",
      }} />
    </div>
  );
}