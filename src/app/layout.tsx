import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne-google",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta-google",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kylian Mathurin · Portfolio",
  description:
    "Portfolio de Kylian Mathurin, développeur système & IA à Nice. Projets en C, Rust et Python, du bas niveau aux modèles de langage.",
  authors: [{ name: "Kylian Mathurin" }],
  openGraph: {
    title: "Kylian Mathurin · Portfolio",
    description:
      "Développeur système & IA à Nice. Projets en C, Rust et Python, du bas niveau aux modèles de langage.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${syne.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
