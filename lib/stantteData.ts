export type NavItem = { id: string; label: string };

/**
 * Providence Sans (FontsGeek): la “e” di marchio è nel glifo **ð** (U+00F0), non nella schwa **ə**
 * (U+0259). Nel sito usiamo **ð** ovunque compaia il nome, così resta lo stesso font del resto.
 */
export const navItems: NavItem[] = [
  { id: "cos-e", label: "Cos'è Stattð" },
  { id: "masterclass", label: "Masterclass" },
  { id: "artisti", label: "Artisti" },
  { id: "programma", label: "Programma" },
  { id: "lab", label: "Lab" },
  { id: "talk", label: "Talk" },
  { id: "mostra", label: "Mostra" },
];

/**
 * Prenotazione laboratori via email (fallback globale).
 * Se manca `bookingEmail` sul singolo lab, usa `NEXT_PUBLIC_BOOKING_EMAIL` e poi questo fallback.
 */
/** Destinatario prenotazioni (produzione: arti.inatto@gmail.com). */
export const BOOKING_EMAIL_FALLBACK = "arti.inatto@gmail.com";

export const masterclass = {
  /** Titolo grande: niente uppercase CSS, così il glifo ð di marchio resta corretto. */
  title: "Diora Madama x Stattð",
  dateLine: "Venerdì 26 giugno 2026",
  timeLine: "09:00-13:00 · 15:00-18:00",
  schedule: ["Venerdì 26 giugno · 09:00-13:00 / 15:00-18:00"],
  bio: "Diora Madama è Angela Radoccia, producer, songwriter e performer abruzzese di base a Milano, in bilico tra attitudine urbana e ricerca sui suoni e le culture musicali mediterranee e sudamericane. Laureata in jazz, muove i primi passi firmando jingle e sigle per cartoni animati, e nel 2022 debutta con l'EP \"2D\". Nel 2024 firma con INRI/Metatron (Universal Music) e nel 2025 pubblica il primo album \"La Morte\"; nello stesso periodo entra nel roster di Waveforms Publishing come resident producer dello studio di Andrea Mariano (Negramaro).",
  description:
    "Una giornata sulla produzione musicale contemporanea: al mattino il processo creativo tra progetti Ableton e differenze tra pop e alternativa; al pomeriggio la creazione di un beat da zero con la classe e un breve set dal vivo.",
  objective:
    "Capire come funziona la produzione nell'industria musicale e quali sono le sue tipologie principali, arrivando a costruire una produzione completa dall'inizio alla fine.",
  program: [
    {
      time: "Mattina · 09:00-13:00",
      title: "Dentro la produzione",
      text: "Si parte dalla differenza tra produzione pop e alternativa, poi Diora Madama apre i suoi progetti Ableton per ripercorrere come sono costruite le tracce e l'intero processo creativo, dalla prima idea all'arrangiamento completo.",
    },
    {
      time: "Pomeriggio · 15:00-18:00",
      title: "Un beat dal vivo",
      text: "Parte interattiva: la classe costruisce un beat da zero insieme all'artista, fino a un breve set dal vivo tra sequenze, canto, strumenti e loop.",
    },
  ],
};

export const talk = {
  title: "Arte e Molise",
  /** Riga data (stesso stile usato in TalkSection). */
  dateLine: "Sabato 20 giugno 2026",
  /** Riga orario. */
  timeLine: "DALLE 19:00",
  /** Luogo dell'evento. */
  location: "Piazzetta Santa Maria · Larino, Centro Storico",
  guests: "",
};

export const mostraFinale = {
  title: "MOSTRA FINALE",
  dates: "Sabato 27 e domenica 28 giugno 2026",
  timeLine: "DALLE 17:00",
  description:
    "Chiusura in forma espositiva della residenza, aperta alla cittadinanza, ai media e alle istituzioni. Presentazione e restituzione pubblica delle pratiche condivise e delle opere realizzate durante le due settimane di permanenza: un percorso site-specific che valorizza i luoghi ospitanti e testimonia l'impatto culturale dell'incontro tra artisti e territorio molisano.",
};

export type SponsorTier = "patrocinio" | "main-sponsor" | "sponsor" | "partner";

export type SponsorLogo = {
  name: string;
  tier: SponsorTier;
  src: string;
  width: number;
  height: number;
};

export const sponsorTierLabels: Record<SponsorTier, string> = {
  patrocinio: "Con il patrocinio di",
  "main-sponsor": "Main sponsor",
  sponsor: "Sponsor",
  partner: "Partner",
};

export const sponsorTierOrder: SponsorTier[] = [
  "patrocinio",
  "main-sponsor",
  "sponsor",
  "partner",
];

export const sponsors: SponsorLogo[] = [
  {
    name: "Patrocinio",
    tier: "patrocinio",
    src: "/sponsors/patrocinio/patrocinio.png",
    width: 600,
    height: 600,
  },
  {
    name: "Main sponsor 1",
    tier: "main-sponsor",
    src: "/sponsors/main-sponsor/mainsponsor1.png",
    width: 600,
    height: 600,
  },
  {
    name: "Main sponsor 2",
    tier: "main-sponsor",
    src: "/sponsors/main-sponsor/mainsponsor2.png",
    width: 600,
    height: 369,
  },
  {
    name: "Sponsor 1",
    tier: "sponsor",
    src: "/sponsors/sponsor/sponsor1.png",
    width: 600,
    height: 398,
  },
  {
    name: "Sponsor 2",
    tier: "sponsor",
    src: "/sponsors/sponsor/sponsor2.png",
    width: 600,
    height: 424,
  },
  {
    name: "Sponsor 3",
    tier: "sponsor",
    src: "/sponsors/sponsor/sponsor3.png",
    width: 600,
    height: 600,
  },
  {
    name: "Sponsor 4",
    tier: "sponsor",
    src: "/sponsors/sponsor/sponsor4.png",
    width: 3308,
    height: 2339,
  },
  {
    name: "Partner",
    tier: "partner",
    src: "/sponsors/partner/partner.png",
    width: 600,
    height: 600,
  },
];

export const manifestoPhrases: string[] = [
  "Stattð è un progetto culturale che nasce dal desiderio di creare uno spazio di ascolto, dialogo e produzione artistica nel cuore del Molise.",
  "Il progetto si fonda su un modello concreto di collaborazione che unisce la ricerca artistica alla formazione aperta a tuttð.",
  "Immaginiamo un Molise in cui la cultura sia un cantiere aperto e pulsante. Il nostro obiettivo è tessere una tela dove l'arte diventa incontro: un dialogo ininterrotto tra le radici dei padri e le intuizioni dei figli, fondendo tecniche e linguaggi in un'unica espressione corale.",
  "Vogliamo abbattere le pareti dei luoghi chiusi per far fluire l'energia creativa tra la gente, rendendo l'intera comunità non solo spettatrice, ma autrice della propria rinascita.",
];
