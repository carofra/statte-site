Loghi sponsor / partner / patrocini
====================================

1. Metti qui i file dei loghi, preferibilmente in PNG con sfondo TRASPARENTE.
   (Il JPEG funziona ma ha sfondo pieno; il PDF non è utilizzabile sul web.)

2. Usa nomi file semplici, minuscoli, senza spazi né accenti. Esempi:
   - comune-larino.png
   - regione-molise.png
   - le-fonticelle.png
   - sagra-futuro.png
   - manoamano.png

3. Per ogni logo serve sapere:
   - il nome da mostrare (testo alternativo / accessibilità)
   - la categoria: patrocinio | main | sponsor | partner
   - (facoltativo) un link al sito dello sponsor

4. I loghi vengono poi elencati in lib/stantteData.ts (export `sponsors`)
   e mostrati nella barra scorrevole (components/RunningMarquee.tsx),
   raggruppati per categoria nell'ordine definito in `sponsorTierOrder`.

Suggerimento: loghi con altezza simile (es. ~200-300px di altezza) rendono
la barra più uniforme; il ridimensionamento finale è gestito via CSS.
