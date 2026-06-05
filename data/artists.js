/**
 * Artisti in residenza: definizioni uniche (pagine /artista/[slug]) + elenco home.
 * L'ordine di visualizzazione è sempre alfabetico per nome.
 * Un artista ha una pagina dedicata (e nome cliccabile) quando ha una `bio`.
 *
 * @typedef {{ platform: string; handle: string; url?: string }} ArtistSocial
 * @typedef {{ name: string; slug: string; bio?: string; portfolioUrl?: string; socials?: ArtistSocial[] }} Artist
 */

const artistsSource = [
  { name: "Marcello Caruso", slug: "marcello-caruso" },
  { name: "Marta Ant", slug: "marta-ant" },
  { name: "Martina Rotella", slug: "martina-rotella" },
  { name: "Mozzarella Light", slug: "mozzarella-light" },
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
