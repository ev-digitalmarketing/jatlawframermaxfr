import { Slab } from "@/components/three-d/Slab";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

/** A true sequence, so numbering is meaningful here. */
export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <Stagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <StaggerItem key={step.title} className="h-full">
          <Slab className="p-6 pt-9">
            <span className="translate-z-20 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 font-heading text-lg font-bold text-navy-950 shadow-coin">
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-7 opacity-85">{step.text}</p>
          </Slab>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
