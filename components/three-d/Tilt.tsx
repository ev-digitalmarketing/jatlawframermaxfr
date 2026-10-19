"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type PointerEvent, type ReactNode } from "react";
import { spring } from "@/lib/motion";

const follow = { stiffness: 220, damping: 22, mass: 0.6 };

type TiltProps = { children: ReactNode; className?: string; max?: number; glare?: boolean };

/** Pointer-driven 3D tilt with a light sheen. Touch and reduced-motion users get a static card. */
export function Tilt({ children, className = "", max = 7, glare = true }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), follow);
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), follow);
  const gx = useTransform(x, (v) => `${v * 100}%`);
  const gy = useTransform(y, (v) => `${v * 100}%`);
  const sheen = useMotionTemplate`radial-gradient(360px circle at ${gx} ${gy}, rgba(255,255,255,0.3), transparent 60%)`;

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType === "touch") return;
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    x.set((e.clientX - box.left) / box.width);
    y.set((e.clientY - box.top) / box.height);
  }

  function onLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <div className={`perspective-1200 ${className}`}>
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        whileHover={reduce ? undefined : { y: -6 }}
        transition={spring}
        style={{ rotateX, rotateY }}
        className="group preserve-3d relative h-full"
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden="true"
            style={{ backgroundImage: sheen }}
            className="slab-shape pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </motion.div>
    </div>
  );
}
