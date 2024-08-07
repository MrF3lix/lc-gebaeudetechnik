import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import { Logo } from "@/components/Logo";
import { MetaData } from "@/components/MetaData";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "L&C Gebäudetechnik GmbH",
  description: "Langjährige Erfahrung und fundiertes Know-how. Mit unseren Dienstleistungen erhalten Sie innovative und nachhaltige Lösungen für Ihre Heizungsanlage, Ihr Badezimmer, Ihre Lüftungs- und Klimaanlage sowie Ihre Solaranlage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Analytics />
      <MetaData />
      <body className="flex flex-col gap-16 pt-4 pb-0 bg-gray-50 dark:bg-gray-950 min-h-[100vh]">
        <header>
          <div className="flex max-w-[1200px] mx-auto justify-between items-center gap-4 text-gray-800 dark:text-gray-200">
            <Link href="/" className="font-bold text-xl px-4 flex gap-4 items-center">
              <div className="w-10 h-10 bg-transparent rounded-full">
                <Logo />
              </div>
              L&C Gebäudetechnik
            </Link>

            <nav className="hidden md:flex gap-2 font-semibold">
              <NavLink elementId="dienstleistung">Dienstleistungen</NavLink>
              <NavLink elementId="ueber-uns">Über uns</NavLink>
              <NavLink elementId="kontakt">Kontakt</NavLink>
            </nav>
          </div>
        </header>
        <main className="flex flex-1 flex-col items-center w-full mx-auto">
          {children}
        </main>
        <footer className="bg-white dark:bg-black">
          <div className="max-w-[1200px] mx-auto flex justify-between items-end gap-8 py-8 px-8 lg:flex-nowrap flex-wrap">
            <div className="max-w-96">
              <h2 className="font-bold text-sm">L&C Gebäudetechnik</h2>
              <p className="text-sm text-gray-600">
              Langjährige Erfahrung und fundiertes Know-how.
              Mit unseren Dienstleistungen erhalten Sie innovative und nachhaltige Lösungen für Ihre Heizungsanlage, Ihr Badezimmer, Ihre Lüftungs- und Klimaanlage sowie Ihre Solaranlage.
              </p>
            </div>
            <div>
              <ul className="flex gap-8 text-gray-800 dark:text-gray-200 text-sm sm:flex-nowrap flex-wrap">
                {/* <li><Link href="/agb">AGB & Rechtliches</Link></li> */}
                <li><Link href="/impressum">Impressum</Link></li>
                <li><Link href="/datenschutz">Datenschutz</Link></li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
