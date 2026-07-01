import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center" : "";

  return (
    <div className={alignClass}>
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-bronze-light">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-content-muted ${align === "center" ? "mx-auto max-w-lg" : "max-w-2xl"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
