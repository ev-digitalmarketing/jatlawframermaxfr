import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export type Tone = "navy" | "blue" | "gold" | "ivory" | "champagne" | "sky";

// Full class names (not template strings) so Tailwind can see them.
const TONE: Record<Tone, string> = {
  navy: "tone-navy",
  blue: "tone-blue",
  gold: "tone-gold",
  ivory: "tone-ivory",
  champagne: "tone-champagne",
  sky: "tone-sky",
};

type SectionProps = {
  tone: Tone;
  id: string;
  /** Shown in the page guide. Omit to hide the section from the guide. */
  label?: string;
  /** Slanted top edge (the logo's signature angle). Off for the first section on a page. */
  slant?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

/**
 * Full-bleed colour band. Sections butt directly against each other (no gaps) and
 * each page alternates tones so no two neighbouring sections share a colour.
 */
export function Section({
  tone,
  id,
  label,
  slant = true,
  className = "",
  innerClassName = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      data-guide={label}
      className={`relative ${TONE[tone]} ${slant ? "slant-top" : ""} ${className}`}
    >
      <div className={`container-page ${slant ? "pb-10 pt-5 md:pb-14 md:pt-7" : "py-12 md:py-16"} ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  intro,
  align = "left",
  className = "",
}: {
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <Reveal className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} ${className}`}>
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      <span
        aria-hidden="true"
        className={`mt-4 block h-1.5 w-16 bg-[color:var(--accent)] [clip-path:polygon(0_0,100%_40%,100%_100%,0_100%)] ${centered ? "mx-auto" : ""}`}
      />
      {intro && <p className="mt-4 text-base text-[color:var(--muted)] sm:text-lg">{intro}</p>}
    </Reveal>
  );
}
