type Props = {
  priceEuro: number;
  maxParticipants?: number;
  minParticipants?: number;
  audience?: string;
};

export default function LabPriceInfo({
  priceEuro,
  maxParticipants,
  minParticipants,
  audience,
}: Props) {
  const audienceLine = typeof audience === "string" ? audience.trim() : "";
  const participantLines: string[] = [];

  if (typeof minParticipants === "number") {
    participantLines.push(`Min ${minParticipants} partecipanti`);
  }
  if (typeof maxParticipants === "number") {
    participantLines.push(`Max ${maxParticipants} partecipanti`);
  }

  return (
    <div className="mb-8 border-t border-black/40 pt-6 text-left md:mb-10 md:pt-8">
      <p className="m-0 text-[9px] font-medium uppercase tracking-[0.3em] text-black/50 md:text-[10px]">
        Listino
      </p>
      <p className="mt-3 m-0 text-2xl font-normal tabular-nums leading-none text-black md:text-3xl">
        {priceEuro} €
      </p>
      {participantLines.length > 0 || audienceLine ? (
        <p className="mt-3 m-0 text-sm font-normal leading-relaxed text-black/80 md:text-base">
          {participantLines.map((line, index) => (
            <span key={line}>
              {index > 0 ? (
                <span aria-hidden className="mx-1.5 text-black/35">
                  ·
                </span>
              ) : null}
              {line}
            </span>
          ))}
          {audienceLine ? (
            <>
              {participantLines.length > 0 ? (
                <span aria-hidden className="mx-1.5 text-black/35">
                  ·
                </span>
              ) : null}
              {audienceLine}
            </>
          ) : null}
        </p>
      ) : null}
    </div>
  );
}
