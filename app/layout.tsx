import type { Metadata } from "next";
import "./globals.css";
import ScrollGatedGlobalWatermark from "@/components/ScrollGatedGlobalWatermark";

export const metadata: Metadata = {
  title: "Stattə - Residenza Artistica",
  description:
    "Stattə è una residenza artistica in Molise (15-28 giugno 2026): ascolto, dialogo e produzione artistica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="grain-page min-h-full flex flex-col bg-background text-foreground font-sans">
        <ScrollGatedGlobalWatermark />
        {children}
      </body>
    </html>
  );
}
