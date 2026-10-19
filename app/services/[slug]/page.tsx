import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { ReviewGrid } from "@/components/sections/Reviews";
import { Steps } from "@/components/sections/Steps";
import { Slab } from "@/components/three-d/Slab";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { Coin } from "@/components/ui/Coin";
import { Icon } from "@/components/ui/Icon";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { reviewsFor } from "@/lib/reviews";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        tone="navy"
        icon={service.icon}
        emblemLabel={service.kicker}
        title={service.title}
        text={service.tagline}
        crumb={
          <nav aria-label="Breadcrumb">
            <Link href="/services" className="underline decoration-gold-500 underline-offset-4 hover:text-gold-300">
              Services
            </Link>{" "}
            / {service.title}
          </nav>
        }
      >
        <ButtonLink href="/consultation">Book a free consultation</ButtonLink>
        <ButtonLink href={site.phone.href} variant="ghost" icon="phone">
          {site.phone.display}
        </ButtonLink>
      </PageHero>

      <Section tone="ivory" id="overview" label="Overview">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <SectionHeading title={`${service.title}: ${service.kicker.toLowerCase()}`} />
            <Reveal delay={0.1} className="mt-5 max-w-2xl space-y-4 text-[17px] leading-8">
              {service.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Slab inverse max={5}>
              <div className="p-6 pt-9">
                <Coin icon={service.icon} />
                <h3 className="mt-4 text-xl">Talk to us about {service.title.toLowerCase()}</h3>
                <p className="mt-2 text-[15px] leading-7 opacity-85">
                  Your first consultation is free. Explain your situation and we will outline your options.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink href="/consultation">Book now</ButtonLink>
                  <ButtonLink href={site.phone.href} variant="ghost" icon="phone">
                    Call us
                  </ButtonLink>
                </div>
              </div>
            </Slab>
          </Reveal>
        </div>
      </Section>

      <Section tone="blue" id="what-we-handle" label="What we handle">
        <SectionHeading title="What we handle" intro="The work most clients ask us for in this area." />
        <Stagger className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {service.handle.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <Slab className="flex items-start gap-4 p-5 pt-8">
                <span className="translate-z-16 mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-500 text-navy-950 shadow-coin">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-1 text-[15px] leading-7 opacity-85">{item.text}</p>
                </div>
              </Slab>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="champagne" id="process" label="Our process">
        <SectionHeading title="How it works" intro="Four steps, with updates along the way." />
        <div className="mt-8">
          <Steps steps={service.steps} />
        </div>
      </Section>

      <Section tone="navy" id="reviews" label="Client reviews">
        <SectionHeading title="What clients say" intro="Reviews from Google, shown as they were written." />
        <div className="mt-8">
          <ReviewGrid items={reviewsFor(service.slug)} />
        </div>
      </Section>

      <Section tone="ivory" id="faq" label="FAQ">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              title="Common questions"
              intro="Can’t find your answer? Call or send us a message and we’ll help."
            />
            <Reveal delay={0.1} className="mt-6">
              <ButtonLink href="#contact-form" variant="navy">
                Ask us directly
              </ButtonLink>
            </Reveal>
          </div>
          <Accordion items={service.faqs} />
        </div>
      </Section>

      <Section tone="gold" id="other-services" label="Other services">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <Reveal className="shrink-0">
            <h2 className="text-xl sm:text-2xl">Other ways we can help</h2>
          </Reveal>
          <Stagger className="flex flex-wrap gap-2.5">
            {others.map((s) => (
              <StaggerItem key={s.slug}>
                <ButtonLink href={`/services/${s.slug}`} variant="navy" size="sm">
                  {s.title}
                </ButtonLink>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>
    </>
  );
}
