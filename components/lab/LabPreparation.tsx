type Props = {
  requirements?: string;
  materials?: string[];
};

const groupLabelClass =
  "m-0 text-[9px] font-medium uppercase tracking-[0.3em] text-black/50 md:text-[10px]";

export default function LabPreparation({ requirements, materials }: Props) {
  const req = typeof requirements === "string" ? requirements.trim() : "";
  const items = (materials ?? []).map((item) => item.trim()).filter(Boolean);

  if (!req && items.length === 0) return null;

  return (
    <div className="mt-10 border-t border-black/40 pt-8 md:mt-12 md:pt-10">
      {req ? (
        <div>
          <p className={groupLabelClass}>Requisiti</p>
          <p className="mt-3 text-base font-normal leading-relaxed text-black/80 md:text-lg md:leading-relaxed">
            {req}
          </p>
        </div>
      ) : null}

      {items.length > 0 ? (
        <div className={req ? "mt-8 md:mt-10" : ""}>
          <p className={groupLabelClass}>Cosa portare</p>
          <ul className="m-0 mt-3 list-none p-0">
            {items.map((item) => (
              <li
                key={item}
                className="relative pl-5 text-base font-normal leading-relaxed text-black/80 md:text-lg md:leading-relaxed [&+&]:mt-2 before:absolute before:left-0 before:text-black/40 before:content-['-']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
