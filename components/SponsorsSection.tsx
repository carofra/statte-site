import Image from "next/image";
import LabProgramFrame from "@/components/lab/LabProgramFrame";
import {
  type SponsorTier,
  sponsorTierLabels,
  sponsors,
} from "@/lib/stantteData";

/** Cella logo unica per tutti i tier: stessa altezza/larghezza, contenuto centrato. */
const logoCellClass =
  "flex h-24 w-[10.5rem] shrink-0 items-center justify-center md:h-28 md:w-[12.5rem] lg:h-32 lg:w-[14rem]";

const logoImageClass = "max-h-full max-w-full object-contain";

const sponsorRows: Array<
  | { tiers: [SponsorTier, SponsorTier]; layout: "split" }
  | { tiers: [SponsorTier]; layout: "full" }
> = [
  { tiers: ["patrocinio", "partner"], layout: "split" },
  { tiers: ["main-sponsor"], layout: "full" },
  { tiers: ["sponsor"], layout: "full" },
];

const rowGridClass =
  "grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start md:gap-x-6 lg:gap-x-8";

function SponsorLogoItem({
  sponsor,
}: {
  sponsor: (typeof sponsors)[number];
}) {
  return (
    <li className="flex flex-col items-center">
      <div className={logoCellClass}>
        <Image
          src={sponsor.src}
          alt={sponsor.name}
          width={sponsor.width}
          height={sponsor.height}
          sizes="(max-width: 768px) 160px, 200px"
          className={logoImageClass}
        />
      </div>
      {sponsor.caption ? (
        <p className="mt-1.5 w-[10.5rem] text-center font-serif text-[10px] font-normal uppercase leading-none tracking-[0.05em] text-[#1d1d1b] md:w-[12.5rem] md:text-[11px] lg:w-[14rem]">
          {sponsor.caption.prefix}
          <span className="font-bold">{sponsor.caption.emphasis}</span>
        </p>
      ) : null}
    </li>
  );
}

function SponsorTierBlock({ tier }: { tier: SponsorTier }) {
  const tierSponsors = sponsors.filter((sponsor) => sponsor.tier === tier);
  if (tierSponsors.length === 0) return null;

  const isSponsorRow = tier === "sponsor";

  return (
    <div className="flex min-w-0 flex-col">
      <h3 className="text-[10px] font-normal uppercase leading-none tracking-[0.16em] text-[#1d1d1b]/50 md:text-[11px] lg:text-xs">
        {sponsorTierLabels[tier]}
      </h3>
      <ul
        className={`mt-8 flex md:mt-10 ${
          isSponsorRow
            ? "flex-wrap items-start gap-x-3 gap-y-6 md:flex-nowrap md:gap-x-4 lg:gap-x-5"
            : "flex-wrap items-start gap-x-5 gap-y-6 md:gap-x-6 lg:gap-x-8"
        }`}
      >
        {tierSponsors.map((sponsor) => (
          <SponsorLogoItem key={sponsor.src} sponsor={sponsor} />
        ))}
      </ul>
    </div>
  );
}

export default function SponsorsSection() {
  const hasSponsors = sponsors.length > 0;
  if (!hasSponsors) return null;

  return (
    <section
      id="network"
      className="scroll-mt-20 border-t border-[#1d1d1b] bg-background pb-20 pt-20 text-[#1d1d1b] md:pb-28 md:pt-28 lg:pb-32 lg:pt-32"
    >
      <LabProgramFrame>
        <div className="flex flex-col gap-14 md:gap-16 lg:gap-20">
          {sponsorRows.map((row) => {
            const visibleTiers = row.tiers.filter((tier) =>
              sponsors.some((sponsor) => sponsor.tier === tier),
            );
            if (visibleTiers.length === 0) return null;

            const rowClass =
              row.layout === "split" ? rowGridClass : "grid grid-cols-1";

            return (
              <div key={row.tiers.join("-")} className={rowClass}>
                {visibleTiers.map((tier) => (
                  <SponsorTierBlock key={tier} tier={tier} />
                ))}
              </div>
            );
          })}
        </div>
      </LabProgramFrame>
    </section>
  );
}
