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
      "Il laboratorio propone di far entrare, a piccoli passi, chiunque abbia voglia di cimentarsi nelle basi della musica ascoltata e suonata, con l'obiettivo di acquisire maggiore consapevolezza nell'ascolto, rivolgendosi a un'utenza di qualsiasi livello.",
  },
  {
    id: "architetture-dell-anima",
    slug: "architetture-dell-anima",
    title: "ARCHITETTURE DELL'ANIMA",
    curator: "Schasa Ricci",
    description:
      "Architetture dell'anima a cura di Schasa Ricci: il progetto nasce dalla volontà di esplorare il concetto di \"Casa\" oltre la sua dimensione materiale. La casa è qui intesa come metafora del Sé: un territorio emotivo, un archivio di ricordi e un confine necessario tra il mondo interno e quello esterno. Attraverso l'uso di linguaggi artistici figurativi, i partecipanti sono invitati a dare forma visibile alle proprie sensazioni, in un ambiente protetto e stimolante.",
  },
  {
    id: "editoria-creativa",
    slug: "editoria-creativa",
    title: "EDITORIA CREATIVA",
    curator: "Giulia Veneziale",
    description:
      "Editoria Creativa a cura di Giulia Veneziale: il laboratorio esplora l'editoria come spazio di equilibrio tra libertà espressiva e struttura tecnica. Attraverso esercizi pratici, i partecipanti saranno guidati nella costruzione di un progetto editoriale, lavorando su impaginazione, ritmo visivo e relazione tra testo e immagine. L'approccio è intuitivo ma fondato su regole compositive, per sviluppare una consapevolezza progettuale capace di unire spontaneità e precisione.",
  },
  {
    id: "viaggi-nei-ritmi-del-sud",
    slug: "viaggi-nei-ritmi-del-sud",
    title: "VIAGGIO NEI RITMI DEL SUD",
    curator: "Maria Martino",
    description:
      "Viaggi nei ritmi del sud: un percorso aperto a tuttə alla scoperta delle danze tradizionali del Centro-Sud Italia, in particolare pizzica e spallata. Attraverso più incontri, i partecipanti saranno guidati in un viaggio fatto di ritmo, ascolto e condivisione, riscoprendo il legame tra corpo, musica e territorio. Il laboratorio non richiede alcuna esperienza pregressa ed è pensato per accogliere persone di tutte le età, valorizzando l'incontro tra generazioni e differenze.",
  },
  {
    id: "cacciatori-di-ombre",
    slug: "cacciatori-di-ombre",
    title: "CACCIATORI DI OMBRE",
    curator: "Raffaella Mastrogiuseppe",
    description:
      "Stattə al Sole - Cacciatori di Ombre: applica il design e le tecniche di stampa analogica come la cianotipia, alla riscoperta del territorio molisano. L'obiettivo è insegnare ai bambini il valore della sosta creativa: fermarsi per osservare un dettaglio, raccogliere una memoria e trasformarla in un segno indelebile attraverso la luce.",
  },
  {
    id: "l-arte-del-re-design",
    slug: "l-arte-del-re-design",
    title: "TAGLIA, CUCI E TRASFORMA / RE-DESIGN",
    curator: "Giusi Cornacchione",
    description:
      "L'Arte del Re-Design: questo laboratorio è un invito a scoprire il fascino della moda e le sue infinite possibilità espressive, partendo dalle basi della modellistica e del moulage. Inizieremo esplorando insieme come il tessuto può essere modellato direttamente sul manichino, trasformandosi da semplice materia a forma tridimensionale capace di dialogare con il corpo. È un'esperienza pensata per chiunque voglia avvicinarsi a questo mondo: non servono competenze pregresse o una formazione specifica, ma solo la voglia di sperimentare e guardare ai vestiti con occhi nuovi.",
  },
  {
    id: "costruire-immagini",
    slug: "costruire-immagini",
    title: "COSTRUIRE IMMAGINI",
    curator: "Marco Di Prisco",
    description:
      "Costruire immagini - collage e territorio: laboratorio di collage analogico e digitale incentrato sulla costruzione di un immaginario visivo personale legato al territorio di Larino. Attraverso momenti di osservazione, raccolta e sperimentazione, i partecipanti saranno guidati nella creazione di immagini a partire da materiali eterogenei: fotografie, riviste, carte dipinte, texture raccolte nello spazio urbano e elementi digitali.",
  },
  {
    id: "draw-drink",
    slug: "draw-drink",
    title: "DRINK 'N' DROW",
    curator: "Denny Vitulli e La stozza",
    description:
      "Drink 'n' Draw: il lab consisterà nello studio narrativo ed illustrativo delle storie a fumetti, entrando in un mondo molto simile a quello del cinema, andando ad approfondire concetti come sceneggiatura, inquadrature ecc.",
  },
  {
    id: "musichiamo",
    slug: "musichiamo",
    title: "MUSICHIAMO",
    curator: "Giada Fiore e Davide Cistriani",
    description:
      "Musichiamo a cura di Giada Fiore e Davide Cistriani: musica è gioco. Un percorso musicale che immerge i bambini nel linguaggio sonoro, proponendo la musica come un gioco e come mezzo di espressione, comunicazione e relazione. Si partirà da immagini, filastrocche e ninna nanne del territorio molisano, con l'obiettivo di avvicinare i bambini al patrimonio culturale locale in un'esperienza attiva e coinvolgente. Attraverso il gioco e l'esplorazione, i bambini si confronteranno con questi materiali, rielaborando in modo ludico e creativo, sperimentando la musica come occasione di scoperta e di divertimento.",
  },
  {
    id: "spazio-vivo",
    slug: "spazio-vivo",
    title: "SPAZIO VIVO",
    curator: "Annarita Iammarone",
    description:
      "SpazioVivo a cura di Annarita Iammarone: studio dal vivo di particolari architettonici e paesaggistici – laboratorio creativo en plein air. Il progetto \"Riproduzione di particolari architettonici\" è un laboratorio esperienziale e inclusivo pensato per coinvolgere persone di tutte le età — bambini, ragazzi e adulti — in un'attività artistica e manuale a contatto diretto con l'ambiente.",
  },
  {
    id: "pittura-magica",
    slug: "pittura-magica",
    title: "PITTURA MAGICA",
    curator: "Giada Iannetta",
    description:
      "Pittura Magica: un piccolo viaggio tra arte e meraviglia, dove i bambini scopriranno come creare colori, quasi per magia. Un'esperienza giocosa e sorprendente, che avvicina i bambini alla natura attraverso il colore, la scoperta e la fantasia.",
  },
];

/**
 * Elenco home (#lab): un laboratorio = una riga.
 */
export const labSchedule = [
  { id: "s-150610", slug: "la-visione-della-musica" },
  { id: "s-150616", slug: "architetture-dell-anima" },
  { id: "s-160610", slug: "editoria-creativa" },
  { id: "s-160616", slug: "viaggi-nei-ritmi-del-sud" },
  { id: "s-170617", slug: "cacciatori-di-ombre" },
  { id: "s-190610", slug: "l-arte-del-re-design" },
  { id: "s-190616", slug: "costruire-immagini" },
  { id: "s-210617", slug: "draw-drink" },
  { id: "s-220614", slug: "musichiamo" },
  { id: "s-220616", slug: "spazio-vivo" },
  { id: "s-250614", slug: "pittura-magica" },
];

/** Alias per compatibilità: ordine di visualizzazione come in `labSchedule`. */
export const labScheduleSorted = labSchedule;

export default labs;
