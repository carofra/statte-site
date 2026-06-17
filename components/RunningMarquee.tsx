import { Fragment } from "react";
import { artistNames } from "@/data/artists.js";

const separatorClass =
  "select-none text-[11px] font-normal text-foreground md:text-sm";
const metaClass =
  "text-[9px] font-normal uppercase tracking-[0.42em] text-foreground md:text-[10px]";
const artistClass =
  "text-[12px] font-normal tracking-[0.1em] text-foreground md:text-[15px] md:tracking-[0.12em] lg:text-base";

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
      {artistNames.map((name) => (
        <Fragment key={name}>
          <Separator />
          <span className={artistClass}>{name}</span>
        </Fragment>
      ))}
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
