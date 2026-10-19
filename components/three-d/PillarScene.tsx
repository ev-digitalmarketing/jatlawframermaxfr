"use client";

import { motion } from "framer-motion";
import { Extrude } from "@/components/three-d/Extrude";
import { Scene3D } from "@/components/three-d/Scene3D";

const LETTERS = ["J", "A", "T"];

/** The three gold pillars from the logo, rebuilt as real 3D objects that rise, float and follow the pointer. */
export function PillarScene({ className = "" }: { className?: string }) {
  return (
    <Scene3D className={`mx-auto aspect-[5/4] w-full max-w-[540px] ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-x-[4%] bottom-[6%] h-[7%] rounded-[50%] bg-black/55 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-[1%] bottom-[10.5%] h-[1.4%] bg-gradient-to-r from-transparent via-gold-500 to-transparent"
      />
      {LETTERS.map((letter, i) => (
        <motion.div
          key={letter}
          className="preserve-3d absolute bottom-[11%] h-[72%] w-[28%]"
          style={{ left: `${5 + i * 33}%`, transformOrigin: "50% 100%" }}
          initial={{ scaleY: 0.04 }}
          animate={{ scaleY: 1 }}
          transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.2 + i * 0.15 }}
        >
          <motion.div
            className="preserve-3d h-full w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5 + i * 0.9, repeat: Infinity, ease: "easeInOut" }}
          >
            <Extrude
              shape="pillar"
              depth={20}
              step={3.5}
              faceClass="bg-gradient-to-br from-gold-200 via-gold-500 to-gold-700"
              className="grid place-items-center"
            >
              <span
                aria-hidden="true"
                className="mt-[22%] font-heading text-[clamp(3rem,9vw,5.5rem)] font-bold text-ivory drop-shadow-md"
              >
                {letter}
              </span>
            </Extrude>
          </motion.div>
        </motion.div>
      ))}
    </Scene3D>
  );
}
