type Props = {
  sessions: string[];
};

export default function LabScheduleInfo({ sessions }: Props) {
  const lines = sessions.map((line) => line.trim()).filter(Boolean);
  if (lines.length === 0) return null;

  return (
    <div className="mb-8 border-t border-black/40 pt-6 text-left md:mb-10 md:pt-8">
      <p className="m-0 text-[9px] font-medium uppercase tracking-[0.3em] text-black/50 md:text-[10px]">
        Date e orari
      </p>
      <ul className="m-0 mt-3 list-none p-0">
        {lines.map((line) => (
          <li
            key={line}
            className="text-sm font-normal leading-relaxed text-black/80 md:text-base [&+&]:mt-2"
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
