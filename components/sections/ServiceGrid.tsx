import Link from "next/link";
import { Slab } from "@/components/three-d/Slab";
import { Coin } from "@/components/ui/Coin";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { services, type Service } from "@/lib/services";

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group block h-full">
      <Slab className="flex h-full flex-col gap-3 p-6 pt-9">
        <Coin icon={service.icon} className="translate-z-20" />
        <div>
          <h3 className="text-xl">{service.title}</h3>
          <p className="mt-0.5 text-sm font-semibold text-[color:var(--accent)]">{service.kicker}</p>
        </div>
        <p className="text-[15px] leading-7 opacity-85">{service.summary}</p>
        <span className="mt-auto pt-2 font-heading text-sm font-semibold underline decoration-gold-500 decoration-2 underline-offset-4 transition-all group-hover:decoration-4">
          View this service
        </span>
      </Slab>
    </Link>
  );
}

export function ServiceGrid() {
  return (
    <Stagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <StaggerItem key={service.slug} className="h-full">
          <ServiceCard service={service} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
