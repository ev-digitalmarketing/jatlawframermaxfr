import type { ReactNode } from "react";
import { Extrude } from "@/components/three-d/Extrude";
import { Tilt } from "@/components/three-d/Tilt";

type SlabProps = {
  children: ReactNode;
  className?: string;
  /** swap to the section's inverse surface (high-contrast card) */
  inverse?: boolean;
  max?: number;
  depth?: number;
  edge?: "gold" | "navy";
};

/** The site's standard card: a tilting, extruded slab with a gold slanted cap and a soft lift shadow. */
export function Slab({ children, className = "", inverse = false, max = 7, depth = 5, edge = "gold" }: SlabProps) {
  return (
    <div className="h-full drop-shadow-slab transition-[filter] duration-300 hover:drop-shadow-slab-hover">
      <Tilt max={max} className="h-full">
        <Extrude
          depth={depth}
          edge={edge}
          faceClass={inverse ? "bg-[color:var(--inv)]" : "bg-[color:var(--card)]"}
          className={`${inverse ? "text-[color:var(--inv-fg)]" : "text-[color:var(--card-fg)]"} ${className}`}
        >
          {children}
        </Extrude>
      </Tilt>
    </div>
  );
}
