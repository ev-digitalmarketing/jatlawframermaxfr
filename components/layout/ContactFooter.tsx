import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/layout/ContactForm";
import { Hours } from "@/components/ui/Hours";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { mapsHref, nav, site } from "@/lib/site";

/** The footer on every page is the contact section: business details on the side, form beside them. */
export function ContactFooter() {
  const row = "flex items-start gap-3 transition-colors hover:text-gold-300";
  const icon = "mt-0.5 h-5 w-5 shrink-0 text-gold-400";

  return (
    <footer>
      <Section tone="navy" id="contact-form" label="Contact us">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <Reveal className="lg:col-span-2">
            <Image
              src="/logo-light.png"
              alt={`${site.short}, ${site.descriptor}`}
              width={900}
              height={373}
              className="h-14 w-auto"
            />
            <h2 className="mt-6 text-3xl sm:text-4xl">Talk to a lawyer about your matter</h2>
            <p className="mt-3 text-[color:var(--muted)]">
              Your first consultation is free. Tell us what is happening and we will explain your options.
            </p>
            <ul className="mt-6 space-y-4 text-[15px]">
              <li>
                <a href={site.phone.href} className={row}>
                  <Icon name="phone" className={icon} />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={row}>
                  <Icon name="mail" className={icon} />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={mapsHref} target="_blank" rel="noopener noreferrer" className={row}>
                  <Icon name="pin" className={icon} />
                  <span>
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.line3}
                  </span>
                </a>
              </li>
            </ul>
            <div className="mt-6 border-t border-[color:var(--line)] pt-5">
              <Hours />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      <div className="bg-[#041322] text-sm text-ivory/70">
        <div className="container-page flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> {site.name}. All rights reserved.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {[...nav, { href: "/consultation", label: "Free consultation" }].map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-gold-300">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="container-page border-t border-white/10 py-4 text-xs text-ivory/55">
          The information on this website is general in nature and is not legal advice. Contacting us does not create a
          solicitor-client relationship until we confirm that we have been retained.
        </p>
      </div>
    </footer>
  );
}
