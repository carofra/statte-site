/**
 * Laboratori: definizioni uniche (pagine /lab/[slug]) + calendario flat (home).
 * Prenotazione: su Eventbrite crei un evento (o un ticket type) per laboratorio, copi l’URL pubblico
 * della pagina evento (es. https://www.eventbrite.it/e/... ) e lo metti in `eventbriteUrl` sul lab.
 * Se `eventbriteUrl` manca, si usano `NEXT_PUBLIC_EVENTBRITE_URL` e poi `EVENTBRITE_BOOKING_FALLBACK` in lib/stantteData.ts.
 *
 * @typedef {{ id: string; slug: string; title: string; curator: string; description: string; eventbriteUrl?: string }} Workshop
 */

/** Definizioni laboratorio (ordine nel file libero; `labs` esportato è alfabetico per titolo). */
const labsSource = [
  {
    id: "la-visione-della-musica",
    slug: "la-visione-della-musica",
    title: "MUSICA VISTA DAL RITMO",
    curator: "Lorenzo M. e Paolo G.",
    description:
      "Il laboratorio accompagna, passo dopo passo, chi desidera avvicinarsi alle basi della musica ascoltata e suonata, per sviluppare maggiore consapevolezza nell'ascolto. È aperto a persone di ogni livello di preparazione.",
  },
  {
    id: "architetture-dell-anima",
    slug: "architetture-dell-anima",
    title: "ARCHITETTURE DELL'ANIMA",
    curator: "Schasa Ricci",
    description:
      "Il laboratorio nasce dal desiderio di esplorare il concetto di \"Casa\" oltre la sua dimensione materiale. La casa è qui metafora del Sé: territorio emotivo, archivio di ricordi e confine tra mondo interno ed esterno. Attraverso linguaggi artistici figurativi, i partecipanti danno forma visibile alle proprie sensazioni, in un ambiente protetto e stimolante.",
  },
  {
    id: "editoria-creativa",
    slug: "editoria-creativa",
    title: "EDITORIA CREATIVA",
    curator: "Giulia Veneziale",
    description:
      "Il laboratorio esplora l'editoria come equilibrio tra libertà espressiva e struttura tecnica. Attraverso esercizi pratici, i partecipanti sono guidati nella costruzione di un progetto editoriale e lavorano su impaginazione, ritmo visivo e rapporto tra testo e immagine. L'approccio è intuitivo e si fonda su regole compositive, per una consapevolezza progettuale che unisce spontaneità e precisione.",
  },
  {
    id: "viaggi-nei-ritmi-del-sud",
    slug: "viaggi-nei-ritmi-del-sud",
    title: "VIAGGIO NEI RITMI DEL SUD",
    curator: "Maria Martino",
    description:
      "Il laboratorio è un percorso aperto a tuttə sulle danze tradizionali del Centro-Sud Italia, in particolare pizzica e spallata. Nel corso di più incontri, i partecipanti sono guidati in un'esperienza di ritmo, ascolto e condivisione e riscoprono il legame tra corpo, musica e territorio. Non richiede esperienza pregressa e accoglie persone di tutte le età, valorizzando l'incontro tra generazioni e differenze.",
  },
  {
    id: "cacciatori-di-ombre",
    slug: "cacciatori-di-ombre",
    title: "CACCIATORI DI OMBRE",
    curator: "Raffaella Mastrogiuseppe",
    description:
      "Il laboratorio unisce design e stampa analogica (tra cui la cianotipia) alla riscoperta del territorio molisano. I bambini conoscono il valore della sosta creativa: fermarsi, osservare un dettaglio, raccogliere una memoria e trasformarla in un segno indelebile attraverso la luce.",
  },
  {
    id: "l-arte-del-re-design",
    slug: "l-arte-del-re-design",
    title: "TAGLIA, CUCI E TRASFORMA / RE-DESIGN",
    curator: "Giusi Cornacchione",
    description:
      "Il laboratorio invita a scoprire la moda e le sue possibilità espressive, partendo da modellistica e moulage. I partecipanti esplorano insieme come il tessuto si modella sul manichino, da materia semplice a forma tridimensionale che dialoga con il corpo. È pensato per chiunque voglia avvicinarsi al tema: non servono competenze pregresse, solo voglia di sperimentare e di guardare ai vestiti con occhi nuovi.",
  },
  {
    id: "oreficeria-creativa",
    slug: "oreficeria-creativa",
    title: "OREFICERIA CREATIVA",
    curator: "Burgi Stellar",
    description:
      "La descrizione del laboratorio sarà pubblicata a breve.",
  },
  {
    id: "costruire-immagini",
    slug: "costruire-immagini",
    title: "COSTRUIRE IMMAGINI",
    curator: "Marco Di Prisco",
    description:
      "Il laboratorio pratica collage analogico e digitale per costruire un immaginario visivo personale legato al territorio di Larino. Attraverso osservazione, raccolta e sperimentazione, i partecipanti sono guidati nella creazione di immagini con materiali eterogenei: fotografie, riviste, carte dipinte, texture raccolte nello spazio urbano e elementi digitali.",
  },
  {
    id: "draw-drink",
    slug: "draw-drink",
    title: "DRINK 'N' DROW",
    curator: "Denny Vitulli e La stozza",
    description:
      "Il laboratorio affronta lo studio narrativo e illustrativo del fumetto, con un approccio affine al cinema: sceneggiatura, inquadrature, sequenza delle immagini e costruzione della storia.",
  },
  {
    id: "musichiamo",
    slug: "musichiamo",
    title: "MUSICHIAMO",
    curator: "Giada Fiore e Davide Cistriani",
    description:
      "Il laboratorio propone la musica come gioco, espressione, comunicazione e relazione. I bambini entrano nel linguaggio sonoro partendo da immagini, filastrocche e ninne nanne del Molise e si avvicinano al patrimonio culturale locale in modo attivo e coinvolgente. Attraverso gioco ed esplorazione, i bambini confrontano i materiali, li rielaborano in modo creativo e vivono la musica come scoperta e divertimento.",
  },
  {
    id: "spazio-vivo",
    slug: "spazio-vivo",
    title: "SPAZIO VIVO",
    curator: "Annarita Iammarone",
    description:
      "Il laboratorio è uno studio dal vivo di particolari architettonici e paesaggistici, en plein air. Il progetto \"Riproduzione di particolari architettonici\" è esperienziale e inclusivo: coinvolge bambini, ragazzi e adulti in un'attività artistica e manuale a contatto diretto con l'ambiente.",
  },
  {
    id: "pittura-magica",
    slug: "pittura-magica",
    title: "PITTURA MAGICA",
    curator: "Giada Iannetta",
    description:
      "Il laboratorio è un viaggio tra arte e meraviglia: i bambini scoprono come nascono i colori, quasi per magia. Esperienza giocosa e sorprendente che li avvicina alla natura attraverso colore, scoperta e fantasia.",
  },
];

/** Pagine laboratorio, ordine alfabetico per titolo (italiano). */
export const labs = [...labsSource].sort((a, b) => a.title.localeCompare(b.title, "it"));

/**
 * Elenco home (#lab): stesso ordine alfabetico del titolo.
 */
export const labSchedule = labs.map((lab) => ({ id: lab.slug, slug: lab.slug }));

/** Alias per compatibilità. */
export const labScheduleSorted = labSchedule;

export default labs;
