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

export const labCurators: string[] = Array.from(
  new Set(
    [
      "Giulia Veneziale",
      "Raffaella Mastrogiuseppe",
      "Marco Di Prisco",
      "Maria Martino",
      "Giusi Cornacchione",
      "Lorenzo Mastrogiuseppe",
      "Paolo Giarrusso",
      "Denny Vitulli",
      "Annarita Iammarone",
      "Burgi Stellar",
    ].filter(Boolean),
  ),
);

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
};

export const mostraFinale = {
  title: "MOSTRA FINALE",
  dates: "Sabato 27 e domenica 28 Giugno",
  description:
    "Una restituzione finale in cui le pratiche dei laboratori diventano segni, gesti e immagini: un incontro tra ricerca, comunità e visione.",
};

export const guestLogos: string[] = ["Le Fonticelle", "Sagra Futuro", "manoAmano"];

export const manifestoPhrases: string[] = [
  "Stattə è l'impegno di restare, per costruire insieme il futuro culturale del Molise.",
  "Restare significa mettere radici per far germogliare nuove idee.",
  "È un'esortazione alla sosta creativa: un invito a rallentare il passo per ascoltare meglio.",
  "Valorizzare il territorio molisano attraverso l’arte contemporanea: non come slogan, ma come pratica quotidiana.",
  "Stattə è resistenza dolce: restare non è fermarsi, è tenere ferma l'attenzione.",
  "Un tempo condiviso in cui le pratiche diventano relazioni e le relazioni diventano forma.",
  "Il Molise come luogo di ascolto: meno slogan, più presenza, più cura del dettaglio.",
  "Gli artisti non sono ospiti: sono abitanti temporanei di un presente che si costruisce insieme.",
  "Un impegno di restare per far crescere un futuro culturale radicato, lento e autentico.",
];

