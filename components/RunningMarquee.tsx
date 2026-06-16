import { Fragment } from "react";
import Image from "next/image";
import { sponsorTierLabels, sponsorTierOrder, sponsors } from "@/lib/stantteData";

const separatorClass =
  "select-none text-[11px] font-normal text-foreground md:text-sm";
const metaClass =
  "text-[9px] font-normal uppercase tracking-[0.42em] text-foreground md:text-[10px]";
const labelClass =
  "text-[9px] font-normal uppercase tracking-[0.34em] text-foreground/60 md:text-[10px]";

function Separator() {
  return (
    <span aria-hidden="true" className={separatorClass}>
      ·
    </span>
  );
}

function MarqueeStrip() {
  return (
    <div className="flex w-max items-center gap-10 whitespace-nowrap px-10 md:gap-14 md:px-16 lg:gap-16">
      <span className={metaClass}>15-28 GIUGNO 2026</span>
      <Separator />
      <span className={metaClass}>MOLISE</span>
      {sponsorTierOrder.map((tier) => {
        const tierSponsors = sponsors.filter((sponsor) => sponsor.tier === tier);
        if (tierSponsors.length === 0) return null;

        return (
          <Fragment key={tier}>
            <Separator />
            <span className={labelClass}>{sponsorTierLabels[tier]}</span>
            {tierSponsors.map((sponsor) => (
              <Image
                key={sponsor.src}
                src={sponsor.src}
                alt={sponsor.name}
                width={sponsor.width}
                height={sponsor.height}
                sizes="(max-width: 768px) 90px, 130px"
                className="h-9 w-auto max-w-[7.5rem] object-contain md:h-11 md:max-w-[9.5rem] lg:h-12 lg:max-w-[11rem]"
              />
            ))}
          </Fragment>
        );
      })}
    </div>
  );
}

export default function RunningMarquee() {
  return (
    <div className="overflow-hidden border-y border-foreground bg-background py-4 text-foreground md:py-5">
      <div className="running-marquee-track flex w-max will-change-transform items-center">
        <MarqueeStrip />
        <MarqueeStrip />
      </div>
    </div>
  );
}
