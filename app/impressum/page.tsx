import Link from "next/link";

export default function Impressum() {
  return (
    <div className="text-left w-full max-w-[1200px] px-8">
      <h2 className="text-3xl font-extrabold">Impressum</h2>
      <h3 className="text-2xl font-bold">L&C Gebäudetechnik</h3>
      <br />
      <h4 className="text-xl font-bold">Kontakt</h4>
      <div className="flex flex-col">
        <p>L&C Gebäudetechnik GmbH</p>
        <p>Schuppisstrasse 6</p>
        <p>9016 St. Gallen</p>
        <a className="text-sky-700 dark:text-sky-300 underline" href="tel:+41 71 252 55 45">+41 71 252 55 45</a>
        <Link href="mailto:info@lc-gebaeudetechnik.ch" className="text-sky-700 dark:text-sky-300 underline">info@lc-gebaeudetechnik.ch</Link>
      </div>
      <br />
      <h4 className="text-xl font-bold">Vertreten durch</h4>
      <p>Inhaber & Leiter Installation: Leonardo Salvatore</p>
      <p>Inhaber & Leiter Verkauf: Cosimo Ardito</p>
      <br />
      <h4 className="text-xl font-bold">Haftungsausschluss</h4>
      <p>
        Die L&C Gebäudetechnik übernimmt keine Haftung für die Inhalte externer Links.
        Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.
        Trotz sorgfältiger inhaltlicher Kontrolle übernimmt die L&C Gebäudetechnik keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen.
      </p>
      <br />
      <h4 className="text-xl font-bold">Urheberrecht</h4>
      <p>
        Die durch die L&C Gebäudetechnik erstellten Inhalte und Werke auf dieser Website unterliegen dem Schweizer Urheberrecht.
        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>
      <br />
      <h4 className="text-xl font-bold">Datenschtuz</h4>
      <p>
        Informationen zum Datenschutz finden Sie in unserer <Link href="/datenschutz" className="text-sky-700 dark:text-sky-300 underline">Datenschutzerklärung</Link>.
      </p>
    </div>
  );
}
