/**
 * Laboratori: definizioni uniche (pagine /lab/[slug]) + calendario flat (home).
 * @typedef {{ id: string; slug: string; title: string; curator: string; description: string }} Workshop
 */

/** Pagine laboratorio (slug univoci). */
export const labs = [
  {
    id: "la-visione-della-musica",
    slug: "la-visione-della-musica",
    title: "MUSICA VISTA DAL RITMO",
    curator: "Lorenzo M. e Paolo G.",
    description:
      "Un laboratorio tra ascolto e pratica: esplorare il ritmo, la visione sonora e la musica come spazio di ricerca condivisa.",
  },
  {
    id: "architetture-dell-anima",
    slug: "architetture-dell-anima",
    title: "ARCHITETTURE DELL'ANIMA",
    curator: "Schasa Ricci",
    description:
      "Percorsi tra corpo, spazio interiore e forma: costruire architetture simboliche attraverso pratiche guidate.",
  },
  {
    id: "editoria-creativa",
    slug: "editoria-creativa",
    title: "EDITORIA CREATIVA",
    curator: "Giulia Veneziale",
    description:
      "Sperimentare linguaggi editoriali, pieghe del libro e narrazioni visive tra carta, immagine e comunità.",
  },
  {
    id: "viaggi-nei-ritmi-del-sud",
    slug: "viaggi-nei-ritmi-del-sud",
    title: "VIAGGIO NEI RITMI DEL SUD",
    curator: "Maria Martino",
    description:
      "Un viaggio sonoro nel Sud tra memorie, corpi e territori: ascolto, gesto e ritmo come pratiche di ricerca.",
  },
  {
    id: "cacciatori-di-ombre",
    slug: "cacciatori-di-ombre",
    title: "CACCIATORI DI OMBRE",
    curator: "Raffaella Mastrogiuseppe",
    description:
      "Tra luce e assenza: esercizi su immagine, traccia e ombra come linguaggio artistico e collettivo.",
  },
  {
    id: "l-arte-del-re-design",
    slug: "l-arte-del-re-design",
    title: "TAGLIA, CUCI E TRASFORMA / RE-DESIGN",
    curator: "Giusi Cornacchione",
    description:
      "Risignificare materiali e indumenti: taglio, cucito e trasformazione come gesti di cura e rigenerazione.",
  },
  {
    id: "costruire-immagini",
    slug: "costruire-immagini",
    title: "COSTRUIRE IMMAGINI",
    curator: "Marco Di Prisco",
    description:
      "Costruire immagini tra sperimentazione e dialogo: tecniche, sguardi e narrazioni visive nel tempo della residenza.",
  },
  {
    id: "draw-drink",
    slug: "draw-drink",
    title: "DRINK 'N' DROW",
    curator: "Denny Vitulli e La stozza",
    description:
      "Un incontro leggero tra disegno, convivialità e ascolto: pratiche rapide e gioco creativo intorno al tavolo.",
  },
  {
    id: "musichiamo",
    slug: "musichiamo",
    title: "MUSICHIAMO",
    curator: "Giada Fiore e Davide Cistriani",
    description:
      "Fare musica insieme: improvvisazione, corpo e ascolto come strumenti di composizione collettiva.",
  },
  {
    id: "spazio-vivo",
    slug: "spazio-vivo",
    title: "SPAZIO VIVO",
    curator: "Annarita Iammarone",
    description:
      "Occupare lo spazio con presenza e relazione: esercizi tra movimento, voce e dispositivi partecipativi.",
  },
  {
    id: "pittura-magica",
    slug: "pittura-magica",
    title: "PITTURA MAGICA",
    curator: "Giada Iannetta",
    description:
      "Colore, materia e immaginazione: esplorare la pittura come rituale e incontro tra gesti e visioni.",
  },
];

/**
 * Occorrenze in ordine di programma (stessa data può ripetersi più voci).
 * `slug` → pagina lab; `externalHref` → ancore home (talk / mostra).
 */
export const labSchedule = [
  { id: "s-150610", slug: "la-visione-della-musica", dateSort: "2026-06-15", dateDisplay: "15.06.26", timeRange: "10:00 – 13:00" },
  { id: "s-150616", slug: "architetture-dell-anima", dateSort: "2026-06-15", dateDisplay: "15.06.26", timeRange: "16:00 – 18:00" },
  { id: "s-160610", slug: "editoria-creativa", dateSort: "2026-06-16", dateDisplay: "16.06.26", timeRange: "10:00 – 13:00" },
  { id: "s-160616", slug: "viaggi-nei-ritmi-del-sud", dateSort: "2026-06-16", dateDisplay: "16.06.26", timeRange: "16:00 – 18:00" },
  { id: "s-170610", slug: "la-visione-della-musica", dateSort: "2026-06-17", dateDisplay: "17.06.26", timeRange: "10:00 – 13:00" },
  { id: "s-170614", slug: "viaggi-nei-ritmi-del-sud", dateSort: "2026-06-17", dateDisplay: "17.06.26", timeRange: "14:30 – 17:00" },
  { id: "s-170617", slug: "cacciatori-di-ombre", dateSort: "2026-06-17", dateDisplay: "17.06.26", timeRange: "17:30 – 19:00" },
  { id: "s-180609", slug: "architetture-dell-anima", dateSort: "2026-06-18", dateDisplay: "18.06.26", timeRange: "09:00 – 11:00" },
  { id: "s-180611", slug: "cacciatori-di-ombre", dateSort: "2026-06-18", dateDisplay: "18.06.26", timeRange: "11:00 – 13:30" },
  { id: "s-180616", slug: "editoria-creativa", dateSort: "2026-06-18", dateDisplay: "18.06.26", timeRange: "16:00 – 19:00" },
  { id: "s-190610", slug: "l-arte-del-re-design", dateSort: "2026-06-19", dateDisplay: "19.06.26", timeRange: "10:00 – 13:00" },
  { id: "s-190616", slug: "costruire-immagini", dateSort: "2026-06-19", dateDisplay: "19.06.26", timeRange: "16:00 – 18:00" },
  { id: "s-200610", slug: "costruire-immagini", dateSort: "2026-06-20", dateDisplay: "20.06.26", timeRange: "10:00 – 13:00" },
  {
    id: "s-200617-talk",
    externalHref: "/#talk",
    dateSort: "2026-06-20",
    dateDisplay: "20.06.26",
    timeRange: "17:00",
    displayTitle: "TALK",
    displayCurator: "Arte e Molise",
  },
  {
    id: "s-210617",
    slug: "draw-drink",
    dateSort: "2026-06-21",
    dateDisplay: "21.06.26",
    timeRange: "17:00 – 19:00",
  },
  { id: "s-220610", slug: "editoria-creativa", dateSort: "2026-06-22", dateDisplay: "22.06.26", timeRange: "10:00 – 13:00" },
  { id: "s-220614", slug: "musichiamo", dateSort: "2026-06-22", dateDisplay: "22.06.26", timeRange: "14:00 – 16:30" },
  { id: "s-220616", slug: "spazio-vivo", dateSort: "2026-06-22", dateDisplay: "22.06.26", timeRange: "16:30 – 18:00" },
  { id: "s-230610", slug: "musichiamo", dateSort: "2026-06-23", dateDisplay: "23.06.26", timeRange: "10:00 – 13:00" },
  { id: "s-230616a", slug: "la-visione-della-musica", dateSort: "2026-06-23", dateDisplay: "23.06.26", timeRange: "16:00 – 18:00" },
  { id: "s-230616b", slug: "viaggi-nei-ritmi-del-sud", dateSort: "2026-06-23", dateDisplay: "23.06.26", timeRange: "16:00 – 19:00" },
  { id: "s-240610", slug: "musichiamo", dateSort: "2026-06-24", dateDisplay: "24.06.26", timeRange: "10:00 – 13:00" },
  { id: "s-240614", slug: "editoria-creativa", dateSort: "2026-06-24", dateDisplay: "24.06.26", timeRange: "14:00 – 17:00" },
  { id: "s-240616", slug: "viaggi-nei-ritmi-del-sud", dateSort: "2026-06-24", dateDisplay: "24.06.26", timeRange: "16:00 – 19:00" },
  { id: "s-250610", slug: "costruire-immagini", dateSort: "2026-06-25", dateDisplay: "25.06.26", timeRange: "10:00 – 13:00" },
  { id: "s-250614", slug: "pittura-magica", dateSort: "2026-06-25", dateDisplay: "25.06.26", timeRange: "14:00 – 18:00" },
  { id: "s-250616", slug: "musichiamo", dateSort: "2026-06-25", dateDisplay: "25.06.26", timeRange: "16:00 – 18:30" },
  { id: "s-260611", slug: "pittura-magica", dateSort: "2026-06-26", dateDisplay: "26.06.26", timeRange: "11:00 – 13:00" },
  { id: "s-260616", slug: "architetture-dell-anima", dateSort: "2026-06-26", dateDisplay: "26.06.26", timeRange: "16:00 – 18:00" },
  {
    id: "s-270-mostra",
    externalHref: "/#mostra",
    dateSort: "2026-06-27",
    dateDisplay: "27.06.26",
    timeRange: "—",
    displayTitle: "MOSTRA",
    displayCurator: "Finale di residenza",
  },
  {
    id: "s-280-mostra",
    externalHref: "/#mostra",
    dateSort: "2026-06-28",
    dateDisplay: "28.06.26",
    timeRange: "—",
    displayTitle: "MOSTRA",
    displayCurator: "Finale di residenza",
  },
];

/** Calendario in ordine di data e di inserimento nella giornata. */
export const labScheduleSorted = [...labSchedule]
  .map((row, order) => ({ ...row, order }))
  .sort((a, b) => {
    const d = a.dateSort.localeCompare(b.dateSort);
    if (d !== 0) return d;
    return a.order - b.order;
  });

export default labs;
