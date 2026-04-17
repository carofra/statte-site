import type { ReactNode } from "react";

export default function WideContainer({
  children,
  centered = false,
}: {
  children: ReactNode;
  centered?: boolean;
}) {
  return (
    <div
      className={[
        "w-full max-w-[min(1680px,calc(100vw-2rem))] px-4 md:px-8",
        centered ? "mx-auto" : "ml-0 mr-auto",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
