export type ArtistSocial = {
  platform: string;
  handle: string;
  url?: string;
};

export type Artist = {
  name: string;
  slug: string;
  bio?: string;
  portfolioUrl?: string;
  socials?: ArtistSocial[];
};

/** Un artista ha una pagina dedicata (e nome cliccabile) se ha bio, portfolio o social. */
export function artistHasPage(artist: Artist): boolean {
  return Boolean(
    artist.bio || artist.portfolioUrl || (artist.socials && artist.socials.length > 0),
  );
}
