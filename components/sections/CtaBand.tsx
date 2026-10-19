import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Ready to talk it through?",
  text = "Book a free consultation and we will explain your options in plain language.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <Section tone="gold" id="free-consultation" label="Free consultation">
      <Reveal className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-[color:var(--muted)]">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/consultation" variant="navy">
            Book a free consultation
          </ButtonLink>
          <ButtonLink href={site.phone.href} variant="ghost" icon="phone">
            {site.phone.display}
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
