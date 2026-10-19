"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Item = { id: string; label: string };

/** A slim rail that lists the sections of the current page and highlights where you are. */
export function PageGuide() {
  const pathname = usePathname();
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[data-guide]"));
    setItems(sections.map((s) => ({ id: s.id, label: s.dataset.guide ?? "" })));
    setActive(sections[0]?.id ?? "");

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  if (items.length < 3) return null;

  return (
    <nav
      aria-label="Page guide"
      className="fixed right-2 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex"
    >
      {items.map((item) => {
        const on = item.id === active;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-label={`Jump to ${item.label}`}
            aria-current={on ? "true" : undefined}
            className="group relative flex items-center"
          >
            <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded bg-navy-950 px-2.5 py-1 font-heading text-xs font-semibold text-ivory opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {item.label}
            </span>
            <span
              className={`block rotate-45 border-2 border-navy-950 bg-gold-400 transition-all duration-300 ${
                on ? "h-3.5 w-3.5" : "h-2.5 w-2.5 opacity-70 group-hover:opacity-100"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
