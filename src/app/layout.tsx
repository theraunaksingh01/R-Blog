import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Canvas — Blog about Art, Music & Design",
  description: "Exploring art, music, and design through stories, artist spotlights, and cultural commentary.",
  openGraph: {
    title: "The Canvas",
    description: "Blog about art, music & design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}