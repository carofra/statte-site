export type Workshop = {
  id: string;
  slug: string;
  title: string;
  curator: string;
  description: string;
  priceEuro: number;
  maxParticipants?: number;
  minParticipants?: number;
  schedule?: string[];
  /** Requisiti / cosa serve sapere o indossare per partecipare. */
  requirements?: string;
  /** Materiali o strumenti che il partecipante deve portare con sé. */
  materials?: string[];
  /** Se true, il form di prenotazione mostra il menu di scelta. */
  bookingSessionSelect?: boolean;
  /** Opzioni mostrate nel menu di prenotazione (se assenti, usa `schedule`). */
  bookingSessions?: string[];
  /** Etichetta del campo di scelta nel form (default "Data e orario"). */
  bookingSessionLabel?: string;
  audience?: string;
  bookingEmail?: string;
  bookingNotice?: string;
};
