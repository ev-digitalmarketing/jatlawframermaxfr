import { PillarScene } from "@/components/three-d/PillarScene";
import { Slab } from "@/components/three-d/Slab";
import { ReviewCarousel } from "@/components/sections/Reviews";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Steps } from "@/components/sections/Steps";
import { ButtonLink } from "@/components/ui/Button";
import { Coin } from "@/components/ui/Coin";
import { Icon } from "@/components/ui/Icon";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site, values } from "@/lib/site";

const quickLinks = [
  { label: "Buying or selling a home", slug: "real-estate-transactions" },
  { label: "Mortgage refinance or renewal", slug: "real-estate-transactions" },
  { label: "A property dispute", slug: "real-estate-litigation" },
  { label: "A lawsuit or claim", slug: "general-litigation" },
  { label: "Starting or selling a business", slug: "corporate-law" },
  { label: "A will or estate", slug: "wills-and-estates" },
  { label: "An uncontested divorce", slug: "simple-divorce" },
];

const journey = [
  { title: "Free consultation", text: "Tell us what is happening. We listen, answer your questions and outline your options." },
  { title: "A clear plan and quote", text: "You will know the steps, the likely timeline and the cost before the work begins." },
  { title: "We do the work", text: "We prepare, file, negotiate and advocate, and keep you updated by phone or email." },
  { title: "Resolution and follow-up", text: "We see your matter through to closing or resolution, and we are here if questions come up later." },
];

export default function HomePage() {
  return (
    <>
      <Section tone="navy" id="top" label="Welcome" slant={false} className="overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_65%_at_76%_46%,rgba(201,169,4,0.2),transparent_72%)]"
        />
        <div className="relative grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl">Legal guidance that’s clear, careful and personal</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg text-[color:var(--muted)]">
                {site.name} is a Mississauga law practice helping individuals, families and business owners with real
                estate, litigation, corporate, estate and family matters.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/consultation">Book a free consultation</ButtonLink>
              <ButtonLink href={site.phone.href} variant="ghost" icon="phone">
                {site.phone.display}
              </ButtonLink>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {["Free first consultation", "Phone, email or in person", "Plain-language advice"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500 text-navy-950">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <PillarScene />
        </div>
      </Section>

      <Section tone="gold" id="find-your-service" label="Find your service">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <Reveal className="shrink-0">
            <h2 className="text-xl sm:text-2xl lg:max-w-[11rem]">What do you need help with?</h2>
          </Reveal>
          <Stagger className="flex flex-wrap gap-2.5">
            {quickLinks.map((link) => (
              <StaggerItem key={link.label}>
                <ButtonLink href={`/services/${link.slug}`} variant="navy" size="sm">
                  {link.label}
                </ButtonLink>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section tone="ivory" id="services" label="Services">
        <SectionHeading
          title="How we can help"
          intro="Choose the area that fits your situation. Each page explains what we handle and what to expect."
        />
        <div className="mt-8">
          <ServiceGrid />
        </div>
      </Section>

      <Section tone="blue" id="why-jat-law" label="Why Jat Law">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              title="A lawyer who explains, responds and follows through"
              intro="Clients tell us the same things again and again: they understood what was happening, they could reach us, and the details were handled."
            />
            <Reveal delay={0.15} className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/about">About Jat Law</ButtonLink>
              <ButtonLink href="/testimonials" variant="ghost">
                Read client reviews
              </ButtonLink>
            </Reveal>
          </div>
          <Stagger className="grid gap-7 sm:grid-cols-2">
            {values.map((value) => (
              <StaggerItem key={value.title} className="h-full">
                <Slab className="p-5 pt-8">
                  <Coin icon={value.icon} size="sm" className="translate-z-16" />
                  <h3 className="mt-3 text-lg">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 opacity-85">{value.text}</p>
                </Slab>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section tone="champagne" id="how-it-works" label="How it works">
        <SectionHeading
          title="From first call to finished matter"
          intro="Here is what working with us looks like, so there are no surprises along the way."
        />
        <div className="mt-8">
          <Steps steps={journey} />
        </div>
      </Section>

      <Section tone="sky" id="testimonials" label="Client reviews">
        <SectionHeading
          title="What clients say about working with us"
          intro="Reviews from Google, shown as they were written."
          align="center"
        />
        <div className="mt-6">
          <ReviewCarousel />
        </div>
      </Section>
    </>
  );
}
