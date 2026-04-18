export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: "cos-e", label: "Cos'è Stattə" },
  { id: "artisti", label: "Artisti" },
  { id: "programma", label: "Programma" },
  { id: "lab", label: "Lab" },
  { id: "talk", label: "Talk" },
  { id: "mostra", label: "Mostra" },
];

export const artists: string[] = [
  "Allison",
  "Marta Ant",
  "Francesco Della Pelle",
  "Lucrezia Berardi",
  "Tommasina Giuliasi",
];

export const labs: Array<{ title: string; curator: string }> = [
  { title: "EDITORIA CREATIVA", curator: "Giulia Veneziale" },
  { title: "CACCIATORI DI OMBRE", curator: "Raffaella Mastrogiuseppe" },
  { title: "COSTRUIRE IMMAGINI", curator: "Marco Di Prisco" },
  { title: "VIAGGI NEI RITMI DEL SUD", curator: "Maria Martino" },
  { title: "L'ARTE DEL RE-DESIGN", curator: "Giusi Cornacchione" },
  {
    title: "LA VISIONE DELLA MUSICA",
    curator: "Lorenzo Mastrogiuseppe e Paolo Giarrusso",
  },
  { title: "DRAW & DRINK", curator: "Denny Vitulli" },
  { title: "SPAZIO VIVO", curator: "Annarita Iammarone" },
  { title: "OREFICERIA CREATIVA", curator: "Burgi Stellar" },
];

export const talk = {
  title: "Arte e Molise",
  date: "Sabato 20 Giugno",
  guests: "Ospiti - Le Fonticelle - Sagra Futuro",
};

export const mostraFinale = {
  title: "MOSTRA FINALE",
  dates: "Sabato 27 e domenica 28 Giugno",
  description:
    "Una restituzione finale in cui le pratiche dei laboratori diventano segni, gesti e immagini: un incontro tra ricerca, comunità e visione.",
};

export const guestLogos: string[] = ["Le Fonticelle", "Sagra Futuro", "manoAmano"];

export const manifestoPhrases: string[] = [
  "Stattə è un progetto culturale che nasce dal desiderio di creare uno spazio di ascolto, dialogo e produzione artistica nel cuore del Molise.",
  "Il progetto si fonda su un modello concreto di collaborazione che unisce la ricerca artistica alla formazione aperta a tuttə.",
  "Immaginiamo un Molise in cui la cultura sia un cantiere aperto e pulsante. Il nostro obiettivo è tessere una tela dove l'arte diventa incontro: un dialogo ininterrotto tra le radici dei padri e le intuizioni dei figli, fondendo tecniche e linguaggi in un'unica espressione corale.",
  "Vogliamo abbattere le pareti dei luoghi chiusi per far fluire l'energia creativa tra la gente, rendendo l'intera comunità non solo spettatrice, ma autrice della propria rinascita.",
];


