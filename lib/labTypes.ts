export type Workshop = {
  id: string;
  slug: string;
  title: string;
  curator: string;
  description: string;
  priceEuro: number;
  maxParticipants: number;
  schedule?: string[];
  audience?: string;
  bookingEmail?: string;
  bookingNotice?: string;
};
