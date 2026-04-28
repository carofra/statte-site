import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ScrollGatedGlobalWatermark from "@/components/ScrollGatedGlobalWatermark";
import { ScrollRotationProvider } from "@/components/ScrollRotationProvider";
import ScrollToTopOnReload from "@/components/ScrollToTopOnReload";

export const metadata: Metadata = {
  /** Schwa (ə) nel titolo scheda/SERP; nel sito visibile resta ð per Providence Sans. */
  title: "Stattə - Residenza Artistica",
  description:
    "Stattð è una residenza artistica in Molise (15-28 giugno 2026): ascolto, dialogo e produzione artistica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full antialiased">
      <head>
        <link
          rel="preload"
          href="/fonts/ProvidenceSans-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/fonts/ProvidenceSans-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="grain-page min-h-full flex flex-col bg-background text-foreground font-sans">
        <Script
          id="scroll-top-on-reload"
          strategy="beforeInteractive"
        >{`(function(){try{var n=performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];var r=n&&n.type==="reload";var l=typeof performance!=="undefined"&&performance.navigation&&performance.navigation.type===1;if(r||l){if("scrollRestoration"in history)history.scrollRestoration="manual";if(window.location.hash){history.replaceState(null,"",window.location.pathname+window.location.search);}window.scrollTo(0,0);}}catch(_){}})();`}</Script>
        <ScrollToTopOnReload />
        <ScrollRotationProvider>
          <ScrollGatedGlobalWatermark />
          {children}
        </ScrollRotationProvider>
      </body>
    </html>
  );
}
