import Image from "next/image";
import RevealObserver from "./components/Reveal";
import MapEmbed from "./components/MapEmbed";
import { HoursTable, OpenStatus } from "./components/Hours";
import { PRAXIS, SERVICES, TEAM } from "./components/data";
import {
  ChevronIcon,
  FootIcon,
  MailIcon,
  PhoneIcon,
  PhysioIcon,
  PinIcon,
} from "./components/icons";

const NAV = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#team", label: "Team" },
  { href: "#zeiten", label: "Öffnungszeiten" },
  { href: "#kontakt", label: "Kontakt" },
];

function SectionHead({
  eyebrow,
  title,
  sub,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <div className="reveal mx-auto mb-16 max-w-3xl text-center">
      <p className={`mb-3 text-[17px] font-semibold ${dark ? "text-mint" : "text-accent"}`}>
        {eyebrow}
      </p>
      <h2 className="text-[40px] leading-[1.08] font-semibold tracking-[-0.02em] text-balance sm:text-[56px]">
        {title}
      </h2>
      {sub && (
        <p
          className={`mx-auto mt-5 max-w-[34rem] text-[19px] leading-relaxed text-pretty ${
            dark ? "text-[#a1a1a6]" : "text-muted"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <RevealObserver />

      {/* Navigation */}
      <header className="glass fixed inset-x-0 top-0 z-50 border-b border-black/[0.06]">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Zur Startseite">
            <Image
              src="/logo-mark.png"
              alt=""
              width={28}
              height={28}
            />
            <span className="text-[15px] font-semibold tracking-[-0.01em]">{PRAXIS.name}</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[13px] text-ink/80 transition-colors hover:text-ink"
              >
                {n.label}
              </a>
            ))}
          </div>
          <a
            href={PRAXIS.phoneHref}
            className="rounded-full bg-accent px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Anrufen
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="px-4 pt-32 pb-24 sm:px-6 sm:pt-40 sm:pb-32">
          <div className="mx-auto max-w-5xl text-center">
            <div className="reveal">
              <OpenStatus />
            </div>
            <h1 className="reveal mt-8 text-[48px] leading-[1.04] font-semibold tracking-[-0.025em] text-balance sm:text-[80px]">
              Wieder im Gleichgewicht.
            </h1>
            <p className="reveal mx-auto mt-6 max-w-[36rem] text-[19px] leading-relaxed text-muted text-pretty sm:text-[21px]">
              Physiotherapie und Podologie unter einem Dach – mitten in Siegbach-Oberndorf.
            </p>
            <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={PRAXIS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[17px] font-medium text-white transition-colors hover:bg-accent-hover"
              >
                <PhoneIcon className="size-5" />
                Termin vereinbaren
              </a>
              <a
                href="#leistungen"
                className="group inline-flex items-center gap-1 px-4 py-3.5 text-[17px] text-accent"
              >
                Leistungen ansehen
                <ChevronIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Visual: das Logo erklärt die Praxis */}
          <div className="reveal mx-auto mt-20 max-w-5xl overflow-hidden rounded-[32px] bg-canvas">
            <div className="grid grid-cols-2 items-start gap-x-4 gap-y-10 px-6 py-12 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:px-14 md:py-20">
              <div className="order-2 text-center md:order-1 md:text-right">
                <p className="text-[21px] font-semibold tracking-[-0.015em] sm:text-[24px]">Podologie</p>
                <p className="mt-1 text-muted">Für Ihre Füße.</p>
              </div>
              <div className="order-1 col-span-2 flex justify-center md:order-2 md:col-span-1">
                <Image
                  src="/logo-mark.png"
                  alt="Logo der Praxis Gleichgewicht: Fuß, Wirbelsäule und G"
                  width={415}
                  height={415}
                  preload
                  className="size-44 sm:size-56"
                />
              </div>
              <div className="order-3 text-center md:text-left">
                <p className="text-[21px] font-semibold tracking-[-0.015em] sm:text-[24px]">Physiotherapie</p>
                <p className="mt-1 text-muted">Für Rücken, Gelenke und Muskeln.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="bg-canvas px-4 py-24 sm:px-6 sm:py-36">
          <div className="mx-auto max-w-5xl">
            <SectionHead
              eyebrow="Leistungen"
              title="Zwei Fachbereiche. Ein Ziel."
              sub="Dass Sie sich wieder schmerzfrei und sicher bewegen – vom Rücken bis zum Fuß."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="reveal flex flex-col rounded-3xl bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:p-10"
                >
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-mint-soft text-accent">
                    {s.icon === "physio" ? (
                      <PhysioIcon className="size-7" />
                    ) : (
                      <FootIcon className="size-7" />
                    )}
                  </span>
                  <h3 className="mt-8 text-[28px] font-semibold tracking-[-0.015em]">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
                  <ul className="mt-8 divide-y divide-line/70 border-t border-line/70">
                    {s.items.map((item) => (
                      <li key={item} className="py-3.5">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[15px] text-muted">
                    Weitere Leistungen auf Anfrage.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="bg-black px-4 py-24 text-white sm:px-6 sm:py-36">
          <div className="mx-auto max-w-5xl">
            <SectionHead
              dark
              eyebrow="Über uns"
              title="Von Therapeuten gegründet."
              sub="Hinter der Praxis stehen zwei Physiotherapeuten, die sie gemeinsam aufgebaut haben."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {TEAM.map((p) => (
                <div
                  key={p.name}
                  className="reveal flex flex-col items-center rounded-3xl bg-[#1d1d1f] px-8 py-12 text-center"
                >
                  <span className="flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-mint to-accent text-[28px] font-semibold tracking-[-0.01em]">
                    {p.initials}
                  </span>
                  <h3 className="mt-6 text-[24px] font-semibold tracking-[-0.015em]">{p.name}</h3>
                  <p className="mt-1 text-[#a1a1a6]">{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Öffnungszeiten */}
        <section id="zeiten" className="px-4 py-24 sm:px-6 sm:py-36">
          <div className="mx-auto max-w-5xl">
            <SectionHead
              eyebrow="Öffnungszeiten"
              title="Montag bis Freitag für Sie da."
              sub="Termine vereinbaren Sie am einfachsten telefonisch."
            />
            <div className="reveal mx-auto max-w-xl">
              <div className="mb-6 flex justify-center">
                <OpenStatus />
              </div>
              <HoursTable />
            </div>
          </div>
        </section>

        {/* Kontakt & Anfahrt */}
        <section id="kontakt" className="bg-canvas px-4 py-24 sm:px-6 sm:py-36">
          <div className="mx-auto max-w-5xl">
            <SectionHead eyebrow="Kontakt" title="So erreichen Sie uns." />
            <div className="grid gap-6 lg:grid-cols-[2fr_3fr]">
              <div className="reveal flex flex-col gap-4">
                {[
                  {
                    icon: <PhoneIcon className="size-6" />,
                    label: "Telefon",
                    value: PRAXIS.phone,
                    href: PRAXIS.phoneHref,
                  },
                  {
                    icon: <MailIcon className="size-6" />,
                    label: "E-Mail",
                    value: PRAXIS.email,
                    href: `mailto:${PRAXIS.email}`,
                  },
                  {
                    icon: <PinIcon className="size-6" />,
                    label: "Adresse",
                    value: `${PRAXIS.street}, ${PRAXIS.city}`,
                    href: PRAXIS.mapsLink,
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    {...(c.label === "Adresse"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex flex-1 items-center gap-5 rounded-3xl bg-white p-6 transition-shadow hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-mint-soft text-accent">
                      {c.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[13px] text-muted">{c.label}</span>
                      <span className="block font-medium break-words">{c.value}</span>
                    </span>
                    <ChevronIcon className="ml-auto size-4 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
              <div className="reveal">
                <MapEmbed />
              </div>
            </div>
          </div>
        </section>

        {/* Abschluss-CTA */}
        <section className="px-4 py-24 text-center sm:px-6 sm:py-36">
          <div className="reveal mx-auto max-w-3xl">
            <h2 className="text-[40px] leading-[1.08] font-semibold tracking-[-0.02em] sm:text-[56px]">
              Termin vereinbaren.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[19px] text-muted">
              Rufen Sie uns an. Wir finden einen Termin, der zu Ihnen passt.
            </p>
            <a
              href={PRAXIS.phoneHref}
              className="mt-10 inline-block text-[36px] font-semibold tracking-[-0.02em] text-accent tabular-nums transition-colors hover:text-accent-hover sm:text-[48px]"
            >
              {PRAXIS.phone}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-canvas px-4 py-8 text-[12px] text-muted sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {PRAXIS.name} · {PRAXIS.tagline} · Siegbach-Oberndorf
          </p>
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-ink">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-ink">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
