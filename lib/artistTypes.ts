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
