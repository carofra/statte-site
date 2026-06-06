/**
 * Artisti in residenza: definizioni uniche (pagine /artista/[slug]) + elenco home.
 * L'ordine di visualizzazione è sempre alfabetico per nome.
 * Un artista ha una pagina dedicata (e nome cliccabile) quando ha bio, portfolio o social.
 *
 * @typedef {{ platform: string; handle: string; url?: string }} ArtistSocial
 * @typedef {{ name: string; slug: string; bio?: string; portfolioUrl?: string; socials?: ArtistSocial[] }} Artist
 */

const artistsSource = [
  {
    name: "Marcello Caruso",
    slug: "marcello-caruso",
    bio: "Marcello Caruso è un illustratore e scrittore italo-sudafricano. Cresciuto in Sudafrica, si è laureato in Engineering Design prima di trasferirsi in Italia, dove ha conseguito la laurea magistrale in Discipline Grafiche ed Editoriali presso l'Accademia di Belle Arti di Firenze. Il suo lavoro esplora la relazione tra testo, spazio e simbolo attraverso un approccio visivo che privilegia l'atmosfera e la narrazione degli ambienti. Traendo ispirazione dalle palette cromatiche della natura, realizza immagini che uniscono ricerca, leggibilità e significato. Nel corso della sua carriera ha partecipato a numerose mostre e workshop, collaborando con realtà culturali e artistiche in contesti nazionali e internazionali.",
  },
  {
    name: "Marta Ant",
    slug: "marta-ant",
    bio: "Nata nel 1987, Marta Ant è un'artista multidisciplinare italiana che fonde immagini surreali e inconsce con un'espressione visiva, materica e corporea. Attingendo alla danza contemporanea, al teatro fisico, alla commedia e all'improvvisazione, il suo lavoro sfuma i confini tra realtà e finzione attraverso immaginazione, colore, energia collettiva, forza femminile e gioco. Ha collaborato con artisti internazionali tra cui Jeremy Shaw, Leila Hekmat e Dafna Maimon, e realizzato performance come Radici, Honey Blood and Milk, Liquid Machine e Anamnesi. Il video di Honey, Blood and Milk è stato presentato nella mostra \"Women by women\", curata da Vogue alla Pinacoteca di Brera (2026); tra i suoi lavori video figurano anche Haut, premiato a Cannes (2023), e Transformation, vincitore al Festival Breaking8 (Cagliari).",
    socials: [
      {
        platform: "Instagram",
        handle: "@marta_ant_",
        url: "https://www.instagram.com/marta_ant_/",
      },
    ],
  },
  {
    name: "Martina Rotella",
    slug: "martina-rotella",
    bio: "Classe 1995, Martina Rotella si forma all'Accademia di Belle Arti di Firenze in Pittura e Scenografia. Co-fondatrice di ARTiglieria, spazio multidisciplinare fiorentino, ha lavorato nel settore pubblicitario come scenografa e attrezzista. La sua ricerca artistica nasce dal recupero di materiale organico: un dialogo silenzioso con la materia, che nel tempo si è trasformato da processo additivo a processo sottrattivo. Gli elementi naturali lasciano la loro memoria sulla superficie della tela, prima che la pittura intervenga a rivelarne le più disparate profondità, in un processo solitario e meditativo, che esplora l'effimero e la trasparenza. Attualmente sta lavorando alla serie Miraggi.",
    portfolioUrl: "/portfolio/martina-rotella.pdf",
    socials: [
      {
        platform: "Instagram",
        handle: "@martirotels",
        url: "https://www.instagram.com/martirotels/",
      },
    ],
  },
  {
    name: "Mozzarella Light",
    slug: "mozzarella-light",
    bio: "Mozzarella Light è il duo artistico italiano formato da Giulia Ciappi e Marco Frassinelli. La loro ricerca si sviluppa attraverso una pratica condivisa che attraversa mostre, residenze e percorsi di formazione nelle arti visive e nella scultura. Nel 2025 partecipano alla residenza \"Pensare come una montagna\", a cura di GAMeC. Dal 2018 hanno preso parte a progetti di residenza in Italia e all'estero, tra cui Torino, Finlandia, Grecia e California. Il loro percorso espositivo include mostre personali e collettive tra il 2019 e il 2025, con progetti come Calligraphy bird, To fade in, Puramente immaginabile e Cassandra.",
    portfolioUrl: "/portfolio/mozzarella-light.pdf",
  },
  { name: "Rickyboy", slug: "rickyboy" },
  {
    name: "Tommasina Giuliasi",
    slug: "tommasina-giuliasi",
    bio: "È un'artista multimediale la cui ricerca si concentra su pratiche partecipative. Attraverso luce, tecniche di stampa antica e videomapping, sviluppa interventi poetici e politici. Il suo lavoro si articola in forme diffuse e performative, volte a coinvolgere attivamente le comunità e rendere i luoghi, pubblici o privati, spazi di relazione.",
    portfolioUrl: "https://canva.link/x7rh6ady5ehulu8",
    socials: [
      {
        platform: "Instagram",
        handle: "@tommasinagiuliasi",
        url: "https://www.instagram.com/tommasinagiuliasi/",
      },
      { platform: "Facebook", handle: "Tommasina Giuliasi" },
    ],
  },
];

/** Elenco artisti: ordine alfabetico per nome (italiano). */
export const artists = [...artistsSource].sort((a, b) =>
  a.name.localeCompare(b.name, "it", { sensitivity: "base" }),
);

/** Solo i nomi (per il marquee scorrevole), già in ordine alfabetico. */
export const artistNames = artists.map((artist) => artist.name);

export default artists;
