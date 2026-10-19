import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section tone="gold" id="top" slant={false}>
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl">We could not find that page</h1>
        <p className="mt-4 text-lg text-[color:var(--muted)]">
          The link may be out of date, or the page may have moved. Try one of these instead.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="navy">
            Go to the home page
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
