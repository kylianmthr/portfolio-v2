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
  title: "Kylian · Portfolio",
  description:
    "Portfolio de Kylian, développeur système & IA à Nice. Projets en C, C++ et Python, de l'OS aux modèles de langage.",
  openGraph: {
    title: "Kylian · Portfolio",
    description:
      "Développeur système & IA à Nice. Projets en C, C++ et Python, de l'OS aux modèles de langage.",
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
