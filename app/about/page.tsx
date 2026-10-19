import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Slab } from "@/components/three-d/Slab";
import { ButtonLink } from "@/components/ui/Button";
import { Coin } from "@/components/ui/Coin";
import { Icon } from "@/components/ui/Icon";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { highlights } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jat Law Professional Corporation is a Mississauga law practice focused on clear advice, prompt communication and careful follow-through.",
};

const audiences = [
  {
    icon: "building",
    title: "Home buyers and sellers",
    text: "First-time buyers, move-up buyers, investors and anyone refinancing or renewing a mortgage.",
    href: "/services/real-estate-transactions",
  },
  {
    icon: "briefcase",
    title: "Business owners",
    text: "Founders and companies that need the right structure, solid contracts or help with a dispute.",
    href: "/services/corporate-law",
  },
  {
    icon: "scroll",
    title: "Families",
    text: "Wills, powers of attorney, estates and uncontested divorces, handled with care.",
    href: "/services/wills-and-estates",
  },
  {
    icon: "gavel",
    title: "People in a dispute",
    text: "Plaintiffs and defendants in property and civil claims who need a clear plan.",
    href: "/services/general-litigation",
  },
];

const glance = [
  { icon: "pin", text: "West Tower, 14th floor, Mississauga" },
  { icon: "scale", text: "Six practice areas" },
  { icon: "phone", text: "Direct access by phone and email" },
  { icon: "calendar", text: "Free initial consultation" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tone="blue"
        icon="scale"
        emblemLabel="Barrister & Solicitor"
        title="A Mississauga law practice built on clear advice and follow-through"
        text="Jat Law Professional Corporation helps individuals, families and businesses with real estate, litigation, corporate, estate and family matters."
      >
        <ButtonLink href="/consultation">Book a free consultation</ButtonLink>
        <ButtonLink href="/services" variant="ghost">
          Our services
        </ButtonLink>
      </PageHero>

      <Section tone="ivory" id="how-we-work" label="How we work">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <SectionHeading title="How we work" />
            <Reveal delay={0.1} className="mt-5 max-w-2xl space-y-4 text-[17px] leading-8">
              <p>
                Legal problems rarely arrive at a convenient time. Whether you are closing on a home, facing a dispute,
                starting a company or planning your estate, you deserve a lawyer who explains what is happening and
                keeps things moving.
              </p>
              <p>
                We keep our practice focused on six areas of law and give each matter careful preparation, prompt
                communication and a straightforward conversation about fees. Clients tell us the difference is simple:
                they always know where their matter stands.
              </p>
              <p>We meet clients in person at our Mississauga office, and by phone and email whenever that is easier.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Slab max={5}>
              <div className="p-6 pt-9">
                <h3 className="text-xl">At a glance</h3>
                <ul className="mt-4 space-y-3">
                  {glance.map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-[15px]">
                      <Coin icon={item.icon} size="sm" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </Slab>
          </Reveal>
        </div>
      </Section>

      <Section tone="navy" id="who-we-help" label="Who we help">
        <SectionHeading
          title="Who we help"
          intro="People and businesses across Mississauga and the GTA, at the moments when the legal details matter most."
        />
        <Stagger className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <StaggerItem key={a.title} className="h-full">
              <Link href={a.href} className="group block h-full">
                <Slab className="flex h-full flex-col gap-3 p-6 pt-9">
                  <Coin icon={a.icon} className="translate-z-20" />
                  <h3 className="text-lg">{a.title}</h3>
                  <p className="text-[15px] leading-7 opacity-85">{a.text}</p>
                  <span className="mt-auto pt-1 font-heading text-sm font-semibold underline decoration-gold-500 decoration-2 underline-offset-4 transition-all group-hover:decoration-4">
                    See the service
                  </span>
                </Slab>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="gold" id="in-their-words" label="In clients’ words">
        <SectionHeading
          title="In our clients’ words"
          intro="A few lines from the Google reviews our clients have left."
        />
        <Stagger className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <StaggerItem key={h.name} className="h-full">
              <Slab inverse className="flex h-full flex-col p-6 pt-9">
                <Icon name="quote" className="h-7 w-7 text-gold-400" />
                <p className="mt-3 font-heading text-base font-semibold leading-snug">{h.quote}</p>
                <p className="mt-auto pt-5 text-sm opacity-75">{h.name}, Google review</p>
              </Slab>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.1} className="mt-6">
          <ButtonLink href="/testimonials" variant="navy">
            Read all reviews
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
