import type { CSSProperties, ReactNode } from "react";

type ExtrudeProps = {
  children?: ReactNode;
  /** slab = card with a gold slanted cap, pillar = the tall slanted block from the logo */
  shape?: "slab" | "pillar";
  edge?: "gold" | "navy";
  /** number of stacked layers behind the face, and the gap between them in px */
  depth?: number;
  step?: number;
  faceClass?: string;
  /** classes for the content layer (the face's children) */
  className?: string;
  cap?: boolean;
};

/**
 * Real CSS 3D thickness: a clipped face sits in front of a stack of darker copies pushed back
 * along the Z axis. Tilt the parent and the edge appears. Children may use translate-z-* to pop out.
 * Keep opacity/filter/overflow off ancestors up to the perspective wrapper, or the 3D flattens.
 */
export function Extrude({
  children,
  shape = "slab",
  edge = "gold",
  depth = 5,
  step = 3,
  faceClass = "bg-[color:var(--card)]",
  className = "",
  cap = true,
}: ExtrudeProps) {
  const clip = shape === "slab" ? "slab-shape" : "pillar-shape";

  return (
    <div className="preserve-3d relative h-full">
      {Array.from({ length: depth }, (_, i) => {
        const style: CSSProperties = {
          transform: `translateZ(${-(i + 1) * step}px)`,
          backgroundColor: edge === "gold" ? `hsl(49, 92%, ${33 - i * 1.6}%)` : `hsl(211, 68%, ${24 - i * 1.2}%)`,
        };
        return <div key={i} aria-hidden="true" className={`pointer-events-none absolute inset-0 ${clip}`} style={style} />;
      })}
      <div aria-hidden="true" className={`absolute inset-0 ${clip} ${faceClass}`} />
      {shape === "slab" && cap && (
        <div
          aria-hidden="true"
          className="slab-cap pointer-events-none absolute inset-x-0 top-0 h-[26px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600"
        />
      )}
      <div className={`preserve-3d relative h-full ${className}`}>{children}</div>
    </div>
  );
}
