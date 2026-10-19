"use client";

import { useEffect, useState } from "react";
import { hours } from "@/lib/site";

type Now = { day: string; open: boolean };

/** Works out "open now" in the office's own time zone, after mount (no hydration mismatch). */
function useOpenNow(): Now | null {
  const [now, setNow] = useState<Now | null>(null);

  useEffect(() => {
    const tick = () => {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Toronto",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hourCycle: "h23",
      }).formatToParts(new Date());
      const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
      const day = get("weekday");
      const minutes = Number(get("hour")) * 60 + Number(get("minute"));
      const row = hours.find((h) => h.day === day);
      const open =
        !!row && row.open !== null && row.close !== null && minutes >= row.open * 60 && minutes < row.close * 60;
      setNow({ day, open });
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  return now;
}

export function Hours({ compact = false }: { compact?: boolean }) {
  const now = useOpenNow();
  const dot = now ? (now.open ? "bg-emerald-400" : "bg-red-400") : "bg-gold-400";

  return (
    <div>
      <p className="mb-2 flex items-center gap-2 font-heading text-sm font-semibold" aria-live="polite">
        <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        {now ? (now.open ? "Open now" : "Closed right now") : "Office hours"}
      </p>
      <ul className="divide-y divide-[color:var(--line)] text-sm">
        {hours.map((h) => (
          <li
            key={h.day}
            className={`flex justify-between gap-4 py-1.5 ${now?.day === h.day ? "font-semibold text-[color:var(--accent)]" : ""}`}
          >
            <span>{compact ? h.short : h.day}</span>
            <span>{h.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
