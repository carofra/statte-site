export type NavItem = { id: string; label: string };

/**
 * Providence Sans (FontsGeek): la “e” di marchio è nel glifo **ð** (U+00F0), non nella schwa **ə**
 * (U+0259). Nel sito usiamo **ð** ovunque compaia il nome, così resta lo stesso font del resto.
 */
export const navItems: NavItem[] = [
  { id: "cos-e", label: "Cos'è Stattð" },
  { id: "artisti", label: "Artisti" },
  { id: "programma", label: "Programma" },
  { id: "lab", label: "Lab" },
  { id: "talk", label: "Talk" },
  { id: "mostra", label: "Mostra" },
];

export const artists: string[] = [
  "Allison",
  "Francesco Della Pelle",
  "Lucrezia Berardi",
  "Marta Ant",
  "Martina Rotella",
  "Tommasina Giuliasi",
].sort((a, b) => a.localeCompare(b, "it"));

export const talk = {
  title: "Arte e Molise",
  /** Riga data (stesso stile usato in TalkSection). */
  dateLine: "Sabato 20 giugno 2026",
  /** Riga orario. */
  timeLine: "ORE 17:00",
  guests: "Le Fonticelle · Sagra Futuro",
};

export const mostraFinale = {
  title: "MOSTRA FINALE",
  dates: "Sabato 27 e domenica 28 giugno 2026",
  description:
    "Una restituzione finale in cui le pratiche dei laboratori diventano segni, gesti e immagini: un incontro tra ricerca, comunità e visione.",
};

export const guestLogos: string[] = ["Le Fonticelle", "Sagra Futuro", "manoAmano"];

export const manifestoPhrases: string[] = [
  "Stattð è un progetto culturale che nasce dal desiderio di creare uno spazio di ascolto, dialogo e produzione artistica nel cuore del Molise.",
  "Il progetto si fonda su un modello concreto di collaborazione che unisce la ricerca artistica alla formazione aperta a tuttð.",
  "Immaginiamo un Molise in cui la cultura sia un cantiere aperto e pulsante. Il nostro obiettivo è tessere una tela dove l'arte diventa incontro: un dialogo ininterrotto tra le radici dei padri e le intuizioni dei figli, fondendo tecniche e linguaggi in un'unica espressione corale.",
  "Vogliamo abbattere le pareti dei luoghi chiusi per far fluire l'energia creativa tra la gente, rendendo l'intera comunità non solo spettatrice, ma autrice della propria rinascita.",
];
