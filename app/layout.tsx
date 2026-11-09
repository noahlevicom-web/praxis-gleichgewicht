import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Inter lokal eingebunden – keine Verbindung zu Google Fonts (DSGVO)
const inter = localFont({
  src: "./fonts/InterVariable-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praxis Gleichgewicht – Physiotherapie & Podologie in Siegbach-Oberndorf",
  description:
    "Physiotherapie und Podologie unter einem Dach in Siegbach-Oberndorf: Krankengymnastik, Manuelle Lymphdrainage, Massage, medizinische Fußbehandlung und mehr.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
