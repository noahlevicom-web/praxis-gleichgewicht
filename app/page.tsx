"use client";import Image from "next/image";
import { useState } from "react";

function MapEmbed() {
  const [accepted, setAccepted] = useState(false);

  if (!accepted) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-gray-50 h-64 flex flex-col items-center justify-center gap-4 text-center px-6">
        <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-2xl">
          🗺️
        </div>
        <div>
          <p className="text-gray-700 font-medium mb-1">Karte anzeigen</p>
          <p className="text-gray-400 text-sm max-w-sm">
            Mit dem Klick auf "Karte laden" stimmen Sie der Übertragung von Daten an Google Maps zu.
          </p>
        </div>
        <button
          onClick={() => setAccepted(true)}
          className="bg-teal-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-teal-700 transition-colors"
        >
          Karte laden
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 w-full h-64">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.2!2d8.4114162!3d50.7484438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc6a35066bbf3b%3A0x5bfb57fc94a6acdc!2sEisemrother+Str.+9A%2C+35768+Siegbach!5e0!3m2!1sde!2sde!4v1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}export default function Home() {
  return (
    <main className="min-h-screen font-sans">

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
  src="/logo.jpg"
  alt="Praxis Gleichgewicht Logo"
  width={40}
  height={40}
  className="rounded-full"
/>
            <div>
              <div className="text-teal-600 font-semibold text-sm leading-tight">Praxis Gleichgewicht</div>
              <div className="text-gray-400 text-xs">Physiotherapie & Podologie</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#leistungen" className="text-gray-600 hover:text-teal-600 text-sm transition-colors">Leistungen</a>
            <a href="#team" className="text-gray-600 hover:text-teal-600 text-sm transition-colors">Über uns</a>
            <a href="#oeffnungszeiten" className="text-gray-600 hover:text-teal-600 text-sm transition-colors">Öffnungszeiten</a>
            <a href="#kontakt" className="text-gray-600 hover:text-teal-600 text-sm transition-colors">Kontakt</a>
          </div>
          <a href="tel:027786999340" className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition-colors">
            Termin anfragen
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-teal-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-lg">
            <h1 className="text-4xl font-semibold leading-tight mb-4">
              Ihre Gesundheit<br />in besten Händen
            </h1>
            <p className="text-teal-100 text-lg leading-relaxed mb-8">
              Physiotherapie & Podologie in Siegbach-Oberndorf. Persönliche Betreuung, professionelle Behandlung – wir helfen Ihnen zurück in Balance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:027786999340" className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-teal-50 transition-colors">
                Jetzt anrufen
              </a>
              <a href="#leistungen" className="border border-white/60 text-white px-6 py-3 rounded-lg text-center hover:bg-white/10 transition-colors">
                Leistungen entdecken
              </a>
            </div>
          </div>
          <div className="bg-white/15 border border-white/30 rounded-2xl p-6 min-w-64">
            <h3 className="text-white/70 text-xs uppercase tracking-wider mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-8">
                <span className="text-white/70">Montag</span>
                <span className="text-white">8–12 & 14–18 Uhr</span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-white/70">Dienstag</span>
                <span className="text-white">8–12 & 14–19 Uhr</span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-white/70">Mittwoch</span>
                <span className="text-white">8–12 Uhr</span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-white/70">Donnerstag</span>
                <span className="text-white">8–12 & 14–19 Uhr</span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-white/70">Freitag</span>
                <span className="text-white">8–13 Uhr</span>
              </div>
            </div>
            <div className="border-t border-white/20 mt-4 pt-4 text-sm">
              <span className="text-white/70">📞 </span>
              <span className="text-white">02778 6999340</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Unsere Leistungen</h2>
          <p className="text-gray-400 mb-12">Professionelle Behandlung für Ihr Wohlbefinden</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-100 rounded-2xl p-8">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-teal-600 text-2xl">🏃</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Physiotherapie</h3>
              <ul className="space-y-3">
                {["Krankengymnastik", "Manuelle Lymphdrainage", "Massagetherapie", "… und vieles mehr"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-100 rounded-2xl p-8">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-teal-600 text-2xl">🦶</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Podologie</h3>
              <ul className="space-y-3">
                {["Podologische Komplexbehandlung", "Medizinische Fußbehandlung", "… und vieles mehr"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Ihr Team</h2>
          <p className="text-gray-400 mb-12">Erfahren, engagiert und immer für Sie da</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Dominik Dumbeck", role: "Physiotherapeut & Mitgründer", initials: "DD" },
              { name: "Torsten Achenbach", role: "Physiotherapeut & Mitgründer", initials: "TA" },
            ].map((person) => (
              <div key={person.name} className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                  {person.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{person.name}</h4>
                  <p className="text-gray-400 text-sm mt-1">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Öffnungszeiten & Kontakt */}
      <section id="oeffnungszeiten" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Öffnungszeiten</h2>
            <div className="space-y-3">
              {[
                { tag: "Montag", zeit: "8–12 & 14–18 Uhr" },
                { tag: "Dienstag", zeit: "8–12 & 14–19 Uhr" },
                { tag: "Mittwoch", zeit: "8–12 Uhr" },
                { tag: "Donnerstag", zeit: "8–12 & 14–19 Uhr" },
                { tag: "Freitag", zeit: "8–13 Uhr" },
              ].map((row) => (
                <div key={row.tag} className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-500">{row.tag}</span>
                  <span className="text-gray-800 font-medium">{row.zeit}</span>
                </div>
              ))}
            </div>
          </div>
          <div id="kontakt">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Kontakt & Anfahrt</h2>
            <div className="space-y-4">
              <a href="tel:027786999340" className="flex items-center gap-4 py-3 border-b border-gray-100 text-gray-600 hover:text-teal-600 transition-colors">
                <span className="text-xl">📞</span>
                <span>02778 6999340</span>
              </a>
              <a href="mailto:praxis_gleichgewicht@t-online.de" className="flex items-center gap-4 py-3 border-b border-gray-100 text-gray-600 hover:text-teal-600 transition-colors">
                <span className="text-xl">✉️</span>
                <span>praxis_gleichgewicht@t-online.de</span>
              </a>
              <div className="flex items-center gap-4 py-3 border-b border-gray-100 text-gray-600">
                <span className="text-xl">📍</span>
                <span>Eisemrother Straße 9a, 35768 Siegbach-Oberndorf</span>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Google Maps DSGVO-konform */}
<div className="mt-16">
  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Anfahrt</h2>
  <MapEmbed />
</div>
      {/* CTA */}
      <section className="bg-teal-600 py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">Termin vereinbaren</h2>
            <p className="text-teal-100 mt-2">Rufen Sie uns an oder schreiben Sie uns – wir freuen uns auf Sie!</p>
          </div>
          <a href="tel:027786999340" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors whitespace-nowrap">
            02778 6999340
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-teal-200 text-sm">© 2025 Praxis Gleichgewicht · Siegbach-Oberndorf</p>
          <div className="flex gap-6">
            <a href="/impressum" className="text-teal-200 text-sm hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-teal-200 text-sm hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>

    </main>
  );
}