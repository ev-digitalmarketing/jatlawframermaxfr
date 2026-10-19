"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef, type PointerEvent, type ReactNode } from "react";

type SceneProps = { children: ReactNode; className?: string; max?: number; sway?: boolean };

const config = { stiffness: 90, damping: 14, mass: 0.8 };

/** A perspective stage: slow idle sway plus pointer-following rotation. */
export function Scene3D({ children, className = "", max = 18, sway = true }: SceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), config);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max * 0.6, -max * 0.6]), config);

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType === "touch") return;
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    px.set((e.clientX - box.left) / box.width - 0.5);
    py.set((e.clientY - box.top) / box.height - 0.5);
  }

  function onLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className={`perspective-1400 ${className}`}>
      <motion.div
        className="preserve-3d h-full w-full"
        animate={reduce || !sway ? undefined : { rotateY: [-9, 9, -9] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div className="preserve-3d relative h-full w-full" style={{ rotateX, rotateY }}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
