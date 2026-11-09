export const PRAXIS = {
  name: "Praxis Gleichgewicht",
  tagline: "Physiotherapie & Podologie",
  phone: "02778 6999340",
  phoneHref: "tel:+4927786999340",
  email: "praxis_gleichgewicht@t-online.de",
  street: "Eisemrother Straße 9a",
  city: "35768 Siegbach-Oberndorf",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Eisemrother+Stra%C3%9Fe+9a+35768+Siegbach",
};

/** Zeitfenster in Minuten ab Mitternacht. Index 0 = Sonntag. */
type Slot = [number, number];
const h = (hours: number) => hours * 60;

export const HOURS: { day: string; short: string; slots: Slot[] }[] = [
  { day: "Sonntag", short: "So", slots: [] },
  { day: "Montag", short: "Mo", slots: [[h(8), h(12)], [h(14), h(18)]] },
  { day: "Dienstag", short: "Di", slots: [[h(8), h(12)], [h(14), h(19)]] },
  { day: "Mittwoch", short: "Mi", slots: [[h(8), h(12)]] },
  { day: "Donnerstag", short: "Do", slots: [[h(8), h(12)], [h(14), h(19)]] },
  { day: "Freitag", short: "Fr", slots: [[h(8), h(13)]] },
  { day: "Samstag", short: "Sa", slots: [] },
];

export const fmt = (min: number) =>
  `${Math.floor(min / 60)}:${String(min % 60).padStart(2, "0")}`;

export const SERVICES = [
  {
    title: "Physiotherapie",
    text: "Gezielte Behandlung bei Schmerzen, nach Verletzungen und Operationen – damit Sie sich wieder frei bewegen.",
    items: ["Krankengymnastik", "Manuelle Lymphdrainage", "Massagetherapie"],
    icon: "physio" as const,
  },
  {
    title: "Podologie",
    text: "Medizinische Fußpflege, die über Kosmetik hinausgeht – besonders wichtig bei Diabetes und empfindlicher Haut.",
    items: ["Podologische Komplexbehandlung", "Medizinische Fußbehandlung"],
    icon: "foot" as const,
  },
];

export const TEAM = [
  { name: "Dominik Dumbeck", role: "Physiotherapeut & Mitgründer", initials: "DD" },
  { name: "Torsten Achenbach", role: "Physiotherapeut & Mitgründer", initials: "TA" },
];
