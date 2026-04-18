import { Fragment } from "react";
import { artists } from "@/lib/stantteData";

function MarqueeStrip() {
  return (
    <div className="flex w-max items-baseline gap-10 md:gap-14 lg:gap-16 whitespace-nowrap px-10 md:px-16">
      <span className="text-[9px] md:text-[10px] tracking-[0.42em] uppercase font-normal text-foreground">
        15-28 GIUGNO 2026
      </span>
      <span aria-hidden="true" className="select-none text-[11px] md:text-sm font-normal text-foreground">
        ·
      </span>
      <span className="text-[9px] md:text-[10px] tracking-[0.38em] uppercase font-normal text-foreground">
        MOLISE
      </span>
      {artists.map((name) => (
        <Fragment key={name}>
          <span aria-hidden="true" className="select-none text-[11px] md:text-sm font-normal text-foreground">
            ·
          </span>
          <span className="text-[12px] md:text-[15px] lg:text-base tracking-[0.1em] md:tracking-[0.12em] font-normal text-foreground">
            {name}
          </span>
        </Fragment>
      ))}
    </div>
  );
}

export default function RunningMarquee() {
  return (
    <div className="bg-background text-foreground overflow-hidden py-5 md:py-6 border-y border-foreground">
      <div className="running-marquee-track flex w-max will-change-transform items-baseline">
        <MarqueeStrip />
        <MarqueeStrip />
      </div>
    </div>
  );
}
