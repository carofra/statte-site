import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ScrollGatedGlobalWatermark from "@/components/ScrollGatedGlobalWatermark";
import { ScrollRotationProvider } from "@/components/ScrollRotationProvider";
import ScrollToTopOnReload from "@/components/ScrollToTopOnReload";

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
        <Script
          id="scroll-top-on-reload"
          strategy="beforeInteractive"
        >{`(function(){try{var n=performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];var r=n&&n.type==="reload";var l=typeof performance!=="undefined"&&performance.navigation&&performance.navigation.type===1;if(r||l){if("scrollRestoration"in history)history.scrollRestoration="manual";window.scrollTo(0,0);}}catch(_){}})();`}</Script>
        <ScrollToTopOnReload />
        <ScrollRotationProvider>
          <ScrollGatedGlobalWatermark />
          {children}
        </ScrollRotationProvider>
      </body>
    </html>
  );
}
