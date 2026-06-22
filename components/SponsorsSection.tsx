import Image from "next/image";
import LabProgramFrame from "@/components/lab/LabProgramFrame";
import SponsorLogosGate from "@/components/SponsorLogosGate";
import {
  type SponsorTier,
  sponsorTierLabels,
  sponsors,
} from "@/lib/stantteData";

const logoGridClass =
  "mt-8 grid grid-cols-2 justify-items-start gap-x-3 gap-y-6 md:mt-10 lg:grid-cols-3 lg:gap-x-5";

/** Cella logo unica per tutti i tier: stessa altezza/larghezza, allineata a sinistra. */
const logoCellClass =
  "flex h-24 w-[10.5rem] shrink-0 items-center justify-start md:h-28 md:w-[12.5rem] lg:h-32 lg:w-[14rem]";

const logoImageClass = "max-h-full max-w-full object-contain object-left";

const sponsorRows: Array<
  | { tiers: [SponsorTier, SponsorTier]; layout: "split" }
  | { tiers: [SponsorTier]; layout: "full" }
> = [
  { tiers: ["patrocinio", "partner"], layout: "split" },
  { tiers: ["main-sponsor"], layout: "full" },
  { tiers: ["sponsor"], layout: "full" },
];

const rowGridClass =
  "grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-x-8 lg:gap-x-10";

function SponsorLogoItem({
  sponsor,
}: {
  sponsor: (typeof sponsors)[number];
}) {
  const cellClass = sponsor.logoCellClass ?? logoCellClass;
  const scale = sponsor.logoScale ?? 1;
  const captionWidthClass = sponsor.logoCellClass
    ? "w-[16rem] md:w-[19rem] lg:w-[22rem]"
    : "w-[10.5rem] md:w-[12.5rem] lg:w-[14rem]";

  return (
    <li className="flex flex-col items-start">
      <div className={cellClass}>
        <Image
          src={sponsor.src}
          alt={sponsor.name}
          width={sponsor.width}
          height={sponsor.height}
          sizes="(max-width: 768px) 168px, 224px"
          loading="lazy"
          fetchPriority="low"
          unoptimized
          className={logoImageClass}
          style={
            scale !== 1
              ? { transform: `scale(${scale})`, transformOrigin: "left center" }
              : undefined
          }
        />
      </div>
      {sponsor.caption ? (
        <p
          className={`mt-1.5 text-left font-serif text-[10px] font-normal uppercase leading-none tracking-[0.05em] text-[#1d1d1b] md:text-[11px] ${captionWidthClass}`}
        >
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

  return (
    <div className="flex min-w-0 flex-col">
      <h3 className="text-[10px] font-normal uppercase leading-none tracking-[0.16em] text-[#1d1d1b]/50 md:text-[11px] lg:text-xs">
        {sponsorTierLabels[tier]}
      </h3>
      <ul className={logoGridClass}>
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
      className="scroll-mt-20 border-t border-[#1d1d1b] bg-background pb-20 pt-20 text-[#1d1d1b] [content-visibility:auto] md:pb-28 md:pt-28 lg:pb-32 lg:pt-32"
    >
      <LabProgramFrame>
        <SponsorLogosGate>
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
        </SponsorLogosGate>
      </LabProgramFrame>
    </section>
  );
}
