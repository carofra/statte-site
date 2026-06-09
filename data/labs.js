/**
 * Laboratori: definizioni uniche (pagine /lab/[slug]) + calendario flat (home).
 * Prenotazione: form → Web3Forms (vedi LabBookingForm e .env.local).
 * Se `bookingEmail` manca, si usano `NEXT_PUBLIC_BOOKING_EMAIL` e poi `BOOKING_EMAIL_FALLBACK` in lib/stantteData.ts.
 *
 * @typedef {{ id: string; slug: string; title: string; curator: string; description: string; priceEuro: number; maxParticipants?: number; minParticipants?: number; schedule?: string[]; audience?: string; bookingEmail?: string; bookingNotice?: string }} Workshop
 */

/** Definizioni laboratorio: l'ordine di visualizzazione è sempre alfabetico per titolo. */
const labsSource = [
  {
    id: "le-radici-nel-ritmo",
    slug: "le-radici-nel-ritmo",
    title: "LE RADICI NEL RITMO",
    curator: "Lorenzo M. e Paolo G.",
    priceEuro: 65,
    maxParticipants: 12,
    schedule: [
      "Martedì 16 giugno · 10:00-13:00",
      "Mercoledì 17 giugno · 10:00-13:00",
      "Lunedì 22 giugno · 17:00-19:00",
      "Martedì 23 giugno · 16:00-18:00",
    ],
    description:
      "Il laboratorio accompagna, passo dopo passo, chi desidera avvicinarsi alle basi della musica ascoltata e suonata, per sviluppare maggiore consapevolezza nell'ascolto. È aperto a persone di ogni livello di preparazione.",
  },
  {
    id: "viaggi-nei-ritmi-del-sud",
    slug: "viaggi-nei-ritmi-del-sud",
    title: "VIAGGIO NEI RITMI DEL SUD",
    curator: "Maria Martino",
    priceEuro: 30,
    maxParticipants: 10,
    schedule: [
      "Mercoledì 17 giugno · 14:30-17:00",
      "Giovedì 18 giugno · 16:00-18:00",
      "Martedì 23 giugno · 16:00-18:30",
      "Mercoledì 24 giugno · 16:00-18:30",
    ],
    description:
      "Il laboratorio è un percorso aperto a tuttə sulle danze tradizionali del Centro-Sud Italia, in particolare pizzica e spallata. Nel corso di più incontri, i partecipanti sono guidati in un'esperienza di ritmo, ascolto e condivisione e riscoprono il legame tra corpo, musica e territorio. Non richiede esperienza pregressa e accoglie persone di tutte le età, valorizzando l'incontro tra generazioni e differenze.",
  },
  {
    id: "cacciatori-di-ombre",
    slug: "cacciatori-di-ombre",
    title: "CACCIATORI DI OMBRE",
    curator: "Raffaella Mastrogiuseppe",
    priceEuro: 10,
    maxParticipants: 10,
    schedule: [
      "Mercoledì 17 giugno · 17:30-19:00",
      "Giovedì 18 giugno · 10:00-12:30",
    ],
    description:
      "Il laboratorio unisce design e stampa analogica - la cianotipia - alla riscoperta del territorio molisano. I bambini conoscono il valore della sosta creativa: fermarsi, osservare un dettaglio, raccogliere una memoria e trasformarla in un segno indelebile attraverso la luce.",
  },
  {
    id: "l-arte-del-re-design",
    slug: "l-arte-del-re-design",
    title: "TAGLIA, CUCI E TRASFORMA / RE-DESIGN",
    curator: "Giusi Cornacchione",
    priceEuro: 15,
    maxParticipants: 10,
    schedule: ["Venerdì 19 giugno · 10:00-13:00"],
    description:
      "Il laboratorio invita a scoprire la moda e le sue possibilità espressive, partendo da modellistica e moulage. I partecipanti esplorano insieme come il tessuto si modella sul manichino, da materia semplice a forma tridimensionale che dialoga con il corpo. È pensato per chiunque voglia avvicinarsi al tema: non servono competenze pregresse, solo voglia di sperimentare e di guardare ai vestiti con occhi nuovi.",
  },
  {
    id: "costruire-immagini",
    slug: "costruire-immagini",
    title: "COSTRUIRE IMMAGINI",
    curator: "Marco Di Prisco",
    priceEuro: 60,
    maxParticipants: 12,
    audience: "ragazzi e adulti",
    schedule: [
      "Venerdì 19 giugno · 16:00-19:00",
      "Sabato 20 giugno · 10:00-13:00",
      "Giovedì 25 giugno · 10:00-13:00",
    ],
    description:
      "Il laboratorio pratica collage analogico e digitale per costruire un immaginario visivo personale legato al territorio di Larino. Attraverso osservazione, raccolta e sperimentazione, i partecipanti sono guidati nella creazione di immagini con materiali eterogenei: fotografie, riviste, carte dipinte, texture raccolte nello spazio urbano e elementi digitali.",
  },
  {
    id: "draw-drink",
    slug: "draw-drink",
    title: "DRINK 'N' DROW",
    curator: "Denny Vitulli e La stozza",
    priceEuro: 25,
    maxParticipants: 10,
    schedule: ["Domenica 21 giugno · 17:00-19:00"],
    description:
      "Il laboratorio affronta lo studio narrativo e illustrativo del fumetto, con un approccio affine al cinema: sceneggiatura, inquadrature, sequenza delle immagini e costruzione della storia.",
  },
  {
    id: "musichiamo",
    slug: "musichiamo",
    title: "MUSICHIAMO",
    curator: "Giada Fiore e Davide Cistriani",
    priceEuro: 65,
    maxParticipants: 10,
    audience: "Due gruppi · 3-5 anni e 6-10 anni",
    schedule: [
      "Lunedì 22 giugno · 3-5 anni · 10:00-11:00",
      "Lunedì 22 giugno · 6-10 anni · 11:00-12:00",
      "Martedì 23 giugno · 3-5 anni · 10:00-11:00",
      "Martedì 23 giugno · 6-10 anni · 11:00-12:00",
      "Mercoledì 24 giugno · 3-5 anni · 10:00-11:00",
      "Mercoledì 24 giugno · 6-10 anni · 11:00-12:00",
      "Giovedì 25 giugno · 3-5 anni · 10:00-11:00",
      "Giovedì 25 giugno · 6-10 anni · 11:00-12:00",
      "Venerdì 26 giugno · 3-5 anni · 10:00-11:00",
      "Venerdì 26 giugno · 6-10 anni · 11:00-12:00",
    ],
    description:
      "Il laboratorio propone la musica come gioco, espressione, comunicazione e relazione. I bambini entrano nel linguaggio sonoro partendo da immagini, filastrocche e ninne nanne del Molise e si avvicinano al patrimonio culturale locale in modo attivo e coinvolgente. Attraverso gioco ed esplorazione, i bambini confrontano i materiali, li rielaborano in modo creativo e vivono la musica come scoperta e divertimento. Le attività si svolgono in due gruppi separati, un'ora al giorno per ciascuno: 3-5 anni dalle 10:00 alle 11:00 e 6-10 anni dalle 11:00 alle 12:00.",
  },
  {
    id: "spazio-vivo",
    slug: "spazio-vivo",
    title: "SPAZIO VIVO",
    curator: "Annarita Iammarone",
    priceEuro: 10,
    maxParticipants: 15,
    audience: "adulti e ragazzi",
    schedule: ["Lunedì 22 giugno · 09:30-12:30"],
    description:
      "Il laboratorio è uno studio dal vivo di particolari architettonici e paesaggistici, en plein air. Il progetto \"Riproduzione di particolari architettonici\" è esperienziale e inclusivo: coinvolge bambini, ragazzi e adulti in un'attività artistica e manuale a contatto diretto con l'ambiente.",
  },
  {
    id: "pittura-magica",
    slug: "pittura-magica",
    title: "PITTURA MAGICA",
    curator: "Giada Iannetta",
    priceEuro: 25,
    maxParticipants: 10,
    schedule: [
      "Giovedì 25 giugno · 14:00-18:00",
      "Venerdì 26 giugno · 11:00-13:00",
    ],
    description:
      "Il laboratorio è un viaggio tra arte e meraviglia: i bambini scoprono come nascono i colori, quasi per magia. Esperienza giocosa e sorprendente che li avvicina alla natura attraverso colore, scoperta e fantasia.",
  },
  {
    id: "open-dialogues",
    slug: "open-dialogues",
    title: "OPEN DIALOGUES - DIALOGHI APERTI",
    curator: "Eleonora Moro",
    priceEuro: 25,
    minParticipants: 10,
    schedule: ["Sabato 20 giugno · 09:00"],
    description:
      "Un percorso di pochi km per riscoprire le zone più suggestive di Larino sotto un punto di vista diverso: quello musicale. Attraverseremo la cittadina scoprendo fonti storiche interessanti, leggende, aneddoti, melodie. Una passeggiata che aprirà un dialogo tra presente e passato, tra la musica del sud Italia, la musica dei balcani, la musica araba: tutte culture che a Larino sono passate nel corso dei secoli, lasciando un segno nell'identità locale.",
  },
  {
    id: "ricamo-su-carta",
    slug: "ricamo-su-carta",
    title: "RICAMO SU CARTA",
    curator: "Rebecca Fiore",
    priceEuro: 25,
    maxParticipants: 10,
    schedule: ["Mercoledì 24 giugno · 15:00-19:00"],
    description:
      "Laboratorio creativo di ricamo su carta. Realizzazione di una cornice portafoto composta da cartoncino e fotografia. I partecipanti ricameranno un cartoncino sul quale è stata precedentemente applicata una fotografia ispirata alla regione Molise (paesaggi, elementi culturali, tradizioni, ecc.). Il ricamo (di un disegno e/o di un breve testo) sarà in armonia con la fotografia stessa. Al termine dell'attività il cartoncino ricamato verrà inserito nella cornice portafoto.",
  },
];

/** Pagine laboratorio e elenchi: ordine alfabetico per titolo (italiano). */
export const labs = [...labsSource].sort((a, b) =>
  a.title.localeCompare(b.title, "it", { sensitivity: "base" }),
);

/**
 * Elenco home (#lab): stesso ordine alfabetico del titolo.
 */
export const labSchedule = labs.map((lab) => ({ id: lab.slug, slug: lab.slug }));

/** Alias per compatibilità. */
export const labScheduleSorted = labSchedule;

export default labs;
