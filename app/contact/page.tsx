import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ReviewGrid } from "@/components/sections/Reviews";
import { Slab } from "@/components/three-d/Slab";
import { ButtonLink } from "@/components/ui/Button";
import { Coin } from "@/components/ui/Coin";
import { Hours } from "@/components/ui/Hours";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { reviews } from "@/lib/reviews";
import { mapsEmbed, mapsHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, email or visit Jat Law Professional Corporation in Mississauga. West Tower, 90 Burnhamthorpe Rd W, Suite 1400.",
};

const tiles = [
  {
    icon: "phone",
    title: "Call us",
    main: site.phone.display,
    href: site.phone.href,
    external: false,
    note: "Monday to Friday during office hours.",
  },
  {
    icon: "mail",
    title: "Email us",
    main: site.email,
    href: `mailto:${site.email}`,
    external: false,
    note: "Send details of your matter and we will reply as soon as we can.",
  },
  {
    icon: "pin",
    title: "Visit our office",
    main: "West Tower, 14th floor",
    href: mapsHref,
    external: true,
    note: `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postal}`,
  },
];

const featured = reviews.filter((r) => ["nihar-raval", "khalid-elkhazeen", "jara-mae"].includes(r.id));

export default function ContactPage() {
  return (
    <>
      <PageHero
        tone="gold"
        icon="phone"
        emblemLabel="Monday to Friday"
        title="Let’s talk about your matter"
        text="Call, email or visit us in Mississauga, or send a message with the form at the bottom of this page."
      >
        <ButtonLink href="#contact-form" variant="navy">
          Send a message
        </ButtonLink>
        <ButtonLink href={mapsHref} variant="ghost" icon="pin" external>
          Get directions
        </ButtonLink>
      </PageHero>

      <Section tone="navy" id="ways-to-reach-us" label="Ways to reach us">
        <Stagger className="grid gap-7 md:grid-cols-3">
          {tiles.map((tile) => (
            <StaggerItem key={tile.title} className="h-full">
              <Slab inverse className="flex h-full flex-col gap-3 p-6 pt-9">
                <Coin icon={tile.icon} className="translate-z-20" />
                <h3 className="text-lg">{tile.title}</h3>
                <a
                  href={tile.href}
                  {...(tile.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="break-words font-heading text-xl font-bold underline decoration-gold-500 decoration-2 underline-offset-4 hover:decoration-4"
                >
                  {tile.main}
                </a>
                <p className="text-sm leading-6 opacity-80">{tile.note}</p>
              </Slab>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="sky" id="find-us" label="Find us">
        <SectionHeading title="Find us and plan your visit" intro="We are on the 14th floor of the West Tower in Mississauga." />
        <div className="mt-8 grid gap-7 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <div className="drop-shadow-slab">
              <div className="slab-shape relative h-[340px] bg-navy-200 sm:h-[420px]">
                <iframe
                  title="Map showing the Jat Law office"
                  src={mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
                <div
                  aria-hidden="true"
                  className="slab-cap pointer-events-none absolute inset-x-0 top-0 h-[26px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Slab max={5}>
              <div className="p-6 pt-9">
                <h3 className="mb-3 text-xl">Office hours</h3>
                <Hours />
                <p className="mt-4 text-xs opacity-70">Regular hours. Please call ahead around holidays.</p>
                <div className="mt-5">
                  <ButtonLink href={mapsHref} external icon="pin" variant="navy" size="sm">
                    Open in Google Maps
                  </ButtonLink>
                </div>
              </div>
            </Slab>
          </Reveal>
        </div>
      </Section>

      <Section tone="champagne" id="reviews" label="Client reviews">
        <SectionHeading title="What clients say" intro="Reviews from Google, shown as they were written." />
        <div className="mt-8">
          <ReviewGrid items={featured} />
        </div>
      </Section>
    </>
  );
}
