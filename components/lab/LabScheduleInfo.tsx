"use client";

import { useMemo, useState } from "react";

type Props = {
  sessions: string[];
};

type ScheduleGroup = {
  label: string;
  items: string[];
};

/**
 * Se ogni riga è nel formato "giorno · gruppo · orario" (es. Musichiamo, con
 * fasce d'età), restituisce i gruppi per mostrarli in tab. Altrimenti null e
 * si usa la lista semplice.
 */
function groupSessions(lines: string[]): ScheduleGroup[] | null {
  const parsed = lines.map((line) => line.split("·").map((part) => part.trim()));
  if (!parsed.every((parts) => parts.length === 3 && parts.every(Boolean))) {
    return null;
  }

  const groups: ScheduleGroup[] = [];
  for (const [day, label, time] of parsed) {
    let group = groups.find((g) => g.label === label);
    if (!group) {
      group = { label, items: [] };
      groups.push(group);
    }
    group.items.push(`${day} · ${time}`);
  }

  return groups.length >= 2 ? groups : null;
}

export default function LabScheduleInfo({ sessions }: Props) {
  const lines = useMemo(
    () => sessions.map((line) => line.trim()).filter(Boolean),
    [sessions],
  );
  const groups = useMemo(() => groupSessions(lines), [lines]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (lines.length === 0) return null;

  return (
    <div className="mb-8 border-t border-black/40 pt-6 text-left md:mb-10 md:pt-8">
      <p className="m-0 text-[9px] font-medium uppercase tracking-[0.3em] text-black/50 md:text-[10px]">
        Date e orari
      </p>

      {groups ? (
        <>
          <div
            role="tablist"
            aria-label="Fasce d'età"
            className="mt-4 flex flex-wrap gap-2"
          >
            {groups.map((group, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={group.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] transition-colors md:text-[11px] ${
                    isActive
                      ? "border-black bg-[#1d1d1b] text-white"
                      : "border-black/40 bg-transparent text-black/60 hover:border-black hover:text-black"
                  }`}
                >
                  {group.label}
                </button>
              );
            })}
          </div>

          <ul className="m-0 mt-4 list-none p-0">
            {groups[activeIndex].items.map((item) => (
              <li
                key={item}
                className="text-sm font-normal leading-relaxed text-black/80 md:text-base [&+&]:mt-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      ) : (
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
      )}
    </div>
  );
}
