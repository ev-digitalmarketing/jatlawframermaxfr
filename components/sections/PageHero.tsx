import type { ReactNode } from "react";
import { Emblem } from "@/components/three-d/Emblem";
import { Reveal } from "@/components/ui/Reveal";
import { Section, type Tone } from "@/components/ui/Section";

type PageHeroProps = {
  tone: Extract<Tone, "navy" | "blue" | "gold">;
  title: ReactNode;
  text: ReactNode;
  icon: string;
  emblemLabel?: string;
  crumb?: ReactNode;
  children?: ReactNode;
};

/** First section of every inner page: headline on the left, a 3D emblem pillar on the right. */
export function PageHero({ tone, title, text, icon, emblemLabel, crumb, children }: PageHeroProps) {
  return (
    <Section tone={tone} id="top" label="Overview" slant={false}>
      <div className="grid items-center gap-8 md:grid-cols-[1.35fr_0.65fr]">
        <div>
          {crumb && <div className="mb-3 text-sm text-[color:var(--muted)]">{crumb}</div>}
          <Reveal>
            <h1 className="text-4xl sm:text-5xl">{title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-lg text-[color:var(--muted)]">{text}</p>
          </Reveal>
          {children && (
            <Reveal delay={0.2} className="mt-6 flex flex-wrap gap-3">
              {children}
            </Reveal>
          )}
        </div>
        <div className="hidden md:block">
          <Emblem icon={icon} label={emblemLabel} navy={tone === "gold"} />
        </div>
      </div>
    </Section>
  );
}
