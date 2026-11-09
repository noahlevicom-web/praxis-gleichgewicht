"use client";

import { useEffect, useState } from "react";
import { HOURS, fmt } from "./data";

type Now = { day: number; min: number };

function berlinNow(): Now {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, min: Number(get("hour")) * 60 + Number(get("minute")) };
}

function status({ day, min }: Now) {
  const open = HOURS[day].slots.find(([a, b]) => min >= a && min < b);
  if (open) return { open: true, text: `Jetzt geöffnet · bis ${fmt(open[1])} Uhr` };

  const later = HOURS[day].slots.find(([a]) => a > min);
  if (later) return { open: false, text: `Geschlossen · öffnet heute um ${fmt(later[0])} Uhr` };

  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const first = HOURS[d].slots[0];
    if (first) {
      const when = i === 1 ? "morgen" : HOURS[d].day;
      return { open: false, text: `Geschlossen · öffnet ${when} um ${fmt(first[0])} Uhr` };
    }
  }
  return { open: false, text: "Geschlossen" };
}

function useNow() {
  const [now, setNow] = useState<Now | null>(null);
  useEffect(() => {
    const tick = () => setNow(berlinNow());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export function OpenStatus({ dark = false }: { dark?: boolean }) {
  const now = useNow();
  const s = now ? status(now) : null;
  return (
    <span
      className={`inline-flex min-h-8 items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-opacity duration-500 ${
        dark ? "bg-white/10 text-white" : "bg-canvas text-ink"
      } ${s ? "opacity-100" : "opacity-0"}`}
      aria-live="polite"
    >
      <span
        className={`size-2 rounded-full ${s?.open ? "bg-mint" : dark ? "bg-white/40" : "bg-subtle"}`}
        aria-hidden
      />
      {s?.text ?? " "}
    </span>
  );
}

export function HoursTable() {
  const now = useNow();
  const week = [1, 2, 3, 4, 5, 6, 0].map((i) => ({ ...HOURS[i], index: i }));
  return (
    <ul className="divide-y divide-line/70">
      {week.map((d) => {
        const today = now?.day === d.index;
        return (
          <li
            key={d.day}
            className={`flex items-baseline justify-between gap-6 py-4 ${
              d.slots.length ? "" : "text-subtle"
            }`}
          >
            <span className={`flex items-center gap-3 ${today ? "font-semibold" : ""}`}>
              {d.day}
              {today && (
                <span className="rounded-full bg-mint-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
                  Heute
                </span>
              )}
            </span>
            <span
              className={`flex flex-col items-end gap-1 tabular-nums sm:flex-row sm:gap-0 ${
                today ? "font-semibold" : ""
              }`}
            >
              {d.slots.length
                ? d.slots.map(([a, b], i) => (
                    <span key={a} className="whitespace-nowrap">
                      {i > 0 && <span className="hidden px-2 text-subtle sm:inline">·</span>}
                      {fmt(a)}–{fmt(b)}
                    </span>
                  ))
                : "Geschlossen"}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
