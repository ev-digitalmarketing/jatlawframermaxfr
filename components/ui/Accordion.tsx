"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { spring } from "@/lib/motion";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        return (
          <div
            key={item.q}
            className="border border-l-4 border-[color:var(--line)] border-l-gold-500 bg-[color:var(--card)] text-[color:var(--card-fg)] shadow-md"
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-semibold"
              >
                {item.q}
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={spring}>
                  <Icon name="down" className="h-5 w-5" />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-[15px] leading-7 opacity-85">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
