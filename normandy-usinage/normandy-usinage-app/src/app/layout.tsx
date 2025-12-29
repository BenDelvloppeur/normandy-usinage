import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Normandy Usinage | Usinage Industriel & Mécanique de Précision à Granville",
  description: "Normandy Usinage, expert en tournage, fraisage, réfection de moteurs et fabrication de pièces métalliques à Granville (50). Service pour professionnels et particuliers.",
  keywords: ["usinage Granville", "tournage fraisage Manche", "mécanique précision Normandie", "réfection moteur 50", "Normandy Usinage"],
  authors: [{ name: "Normandy Usinage" }],
  creator: "Normandy Usinage",
  publisher: "Normandy Usinage",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Normandy Usinage | Expert Mécanique de Précision",
    description: "Atelier d'usinage à Granville : Tournage, Fraisage, Réparation Moteurs. Devis gratuit.",
    locale: "fr_FR",
    type: "website",
    siteName: "Normandy Usinage",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-slate-950 font-sans antialiased text-slate-100 selection:bg-orange-600 selection:text-white",
        inter.variable,
        oswald.variable
      )}>
        {children}
      </body>
    </html>
  );
}
