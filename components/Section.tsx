import type { ReactNode } from "react";

export default function Section({
  id,
  kicker,
  title,
  children,
  className = "",
}: {
  id: string;
  kicker?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className="flex flex-col gap-8">
        {(kicker || title) && (
          <div>
            {kicker && (
              <p className="text-xs md:text-sm tracking-[0.22em] uppercase text-foreground">
                {kicker}
              </p>
            )}
            {title && (
              <h2
                className="mt-3 text-3xl md:text-5xl font-normal leading-[1.05] tracking-tight text-foreground"
              >
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

