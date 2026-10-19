import { Extrude } from "@/components/three-d/Extrude";
import { Scene3D } from "@/components/three-d/Scene3D";
import { Icon } from "@/components/ui/Icon";

/** A single 3D pillar carrying a page's icon. Used in inner-page heroes. */
export function Emblem({ icon, label, navy = false }: { icon: string; label?: string; navy?: boolean }) {
  return (
    <Scene3D className="mx-auto h-[300px] w-[236px] lg:h-[340px] lg:w-[264px]" max={16}>
      <Extrude
        shape="pillar"
        depth={22}
        step={3.5}
        edge={navy ? "navy" : "gold"}
        faceClass={
          navy
            ? "bg-gradient-to-br from-navy-600 via-navy-800 to-navy-950"
            : "bg-gradient-to-br from-gold-200 via-gold-500 to-gold-700"
        }
        className="flex flex-col items-center justify-center gap-5 px-4 pt-6 text-center"
      >
        <span
          className={`translate-z-24 grid h-20 w-20 place-items-center rounded-full shadow-coin ${
            navy
              ? "bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 text-navy-950"
              : "bg-gradient-to-br from-navy-600 to-navy-950 text-gold-300"
          }`}
        >
          <Icon name={icon} className="h-9 w-9" />
        </span>
        {label && (
          <span
            className={`font-heading text-sm font-semibold leading-snug ${
              navy ? "text-ivory" : "text-navy-950"
            }`}
          >
            {label}
          </span>
        )}
      </Extrude>
    </Scene3D>
  );
}
