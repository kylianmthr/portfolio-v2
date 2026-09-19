import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

/** Display face: hero wordmark, section and card titles. */
const display = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-display-google",
  display: "swap",
});

/** Body face. Inter is drawn for small sizes on screen: tall x-height,
 *  open apertures, and letterforms that stay distinct at 13-15px. */
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-google",
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
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
