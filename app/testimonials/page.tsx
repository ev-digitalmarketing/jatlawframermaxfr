import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { ReviewGrid } from "@/components/sections/Reviews";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what clients say about working with Jat Law Professional Corporation in Mississauga.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        tone="navy"
        icon="quote"
        emblemLabel="Client reviews"
        title="What our clients say"
        text="Reviews from clients across the GTA, reproduced as they were written on Google."
      >
        <ButtonLink href="/consultation">Book a free consultation</ButtonLink>
        <ButtonLink href={site.phone.href} variant="ghost" icon="phone">
          {site.phone.display}
        </ButtonLink>
      </PageHero>

      <Section tone="ivory" id="reviews" label="All reviews">
        <SectionHeading
          title="Every review, as written"
          intro="Home closings, a mortgage refinance and more, in the words of the people we have worked with."
        />
        <div className="mt-8">
          <ReviewGrid />
        </div>
        <Reveal className="mt-8 max-w-3xl text-sm text-[color:var(--muted)]">
          <p>
            Reviews are reproduced from Google. Every matter is different, and past experiences do not guarantee a
            particular outcome.
          </p>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
