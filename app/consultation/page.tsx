import type { Metadata } from "next";
import { BringList } from "@/components/sections/BringList";
import { PageHero } from "@/components/sections/PageHero";
import { ReviewCarousel } from "@/components/sections/Reviews";
import { Steps } from "@/components/sections/Steps";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free consultation",
  description:
    "Book a free consultation with Jat Law Professional Corporation in Mississauga. Tell us what is happening and we will explain your options.",
};

const expect = [
  { title: "Tell us your story", text: "Explain what is happening and what you hope to achieve." },
  { title: "Understand your options", text: "We outline the legal paths available to you, with realistic timelines." },
  { title: "See the costs", text: "You will get a clear idea of fees before you decide to move forward." },
  { title: "Decide with no pressure", text: "Take the time you need. There is no obligation to hire us." },
];

const faqs = [
  { q: "Is the consultation really free?", a: "Yes. Your initial consultation is free and carries no obligation." },
  {
    q: "How do we meet?",
    a: "In person at our Mississauga office on the 14th floor of the West Tower, or by phone. Tell us which you prefer when you get in touch.",
  },
  {
    q: "How soon can I get an appointment?",
    a: "We are open Monday to Friday. Call or send a message and we will find the earliest time that works for you.",
  },
  { q: "Will I know the cost before I hire you?", a: "Yes. We talk about fees up front so there are no surprises." },
];

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        tone="blue"
        icon="calendar"
        emblemLabel="Free consultation"
        title="Book your free consultation"
        text="A no-pressure conversation about your matter. Tell us what is happening and we will explain your options, timelines and next steps."
      >
        <ButtonLink href="#contact-form">Request a consultation</ButtonLink>
        <ButtonLink href={site.phone.href} variant="ghost" icon="phone">
          {site.phone.display}
        </ButtonLink>
      </PageHero>

      <Section tone="ivory" id="what-to-expect" label="What to expect">
        <SectionHeading title="What happens in your consultation" />
        <div className="mt-8">
          <Steps steps={expect} />
        </div>
      </Section>

      <Section tone="navy" id="what-to-bring" label="What to bring">
        <SectionHeading
          title="What to bring"
          intro="Choose your situation to see the documents that help us most. Bring what you can."
        />
        <div className="mt-8">
          <BringList />
        </div>
      </Section>

      <Section tone="champagne" id="reviews" label="Client reviews">
        <SectionHeading
          title="What clients say about working with us"
          intro="Reviews from Google, shown as they were written."
          align="center"
        />
        <div className="mt-6">
          <ReviewCarousel />
        </div>
      </Section>

      <Section tone="sky" id="faq" label="FAQ">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              title="Questions before you book"
              intro="Still unsure? Call us and we’ll answer before you decide."
            />
            <Reveal delay={0.1} className="mt-6">
              <ButtonLink href={site.phone.href} variant="navy" icon="phone">
                {site.phone.display}
              </ButtonLink>
            </Reveal>
          </div>
          <Accordion items={faqs} />
        </div>
      </Section>
    </>
  );
}
