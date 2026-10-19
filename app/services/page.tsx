import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Real estate transactions, real estate litigation, general litigation, corporate law, wills and estates, and simple divorces in Mississauga.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tone="blue"
        icon="briefcase"
        emblemLabel="Six practice areas"
        title="Legal services for property, business and family matters"
        text="Six practice areas, each handled with careful preparation and plain-language communication."
      >
        <ButtonLink href="/consultation">Book a free consultation</ButtonLink>
        <ButtonLink href={site.phone.href} variant="ghost" icon="phone">
          {site.phone.display}
        </ButtonLink>
      </PageHero>

      <Section tone="ivory" id="practice-areas" label="Practice areas">
        <ServiceGrid />
      </Section>

      <CtaBand
        title="Not sure which service you need?"
        text="Tell us what is happening and we will point you in the right direction. Your first consultation is free."
      />
    </>
  );
}
