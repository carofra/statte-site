type Props = {
  priceEuro: number;
  maxParticipants: number;
  audience?: string;
};

export default function LabPriceInfo({ priceEuro, maxParticipants, audience }: Props) {
  const audienceLine = typeof audience === "string" ? audience.trim() : "";

  return (
    <div className="mb-8 border-t border-black/40 pt-6 text-left md:mb-10 md:pt-8">
      <p className="m-0 text-[9px] font-medium uppercase tracking-[0.3em] text-black/50 md:text-[10px]">
        Listino
      </p>
      <p className="mt-3 m-0 text-2xl font-normal tabular-nums leading-none text-black md:text-3xl">
        {priceEuro} €
      </p>
      <p className="mt-3 m-0 text-sm font-normal leading-relaxed text-black/80 md:text-base">
        Max {maxParticipants} partecipanti
        {audienceLine ? (
          <>
            <span aria-hidden className="mx-1.5 text-black/35">
              ·
            </span>
            {audienceLine}
          </>
        ) : null}
      </p>
    </div>
  );
}
