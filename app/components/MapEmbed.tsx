"use client";

import { useState } from "react";
import { PinIcon } from "./icons";
import { PRAXIS } from "./data";

/** Google Maps lädt erst nach Zustimmung (DSGVO). */
export default function MapEmbed() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return (
      <div className="h-full min-h-80 w-full overflow-hidden rounded-3xl bg-white">
        <iframe
          title="Karte: Praxis Gleichgewicht"
          src="https://www.google.com/maps?q=Eisemrother+Stra%C3%9Fe+9a,+35768+Siegbach&z=16&output=embed"
          className="h-full min-h-80 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-80 flex-col items-center justify-center gap-5 rounded-3xl bg-white px-8 py-12 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-mint-soft text-accent">
        <PinIcon className="size-7" />
      </span>
      <div>
        <p className="font-semibold">{PRAXIS.street}</p>
        <p className="text-muted">{PRAXIS.city}</p>
      </div>
      <p className="max-w-xs text-sm text-muted">
        Mit dem Laden der Karte werden Daten an Google übertragen.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setAccepted(true)}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Karte laden
        </button>
        <a
          href={PRAXIS.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-mint-soft"
        >
          In Google Maps öffnen
        </a>
      </div>
    </div>
  );
}
