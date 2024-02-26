import { Button } from "@/components/Button";
import { ArrowPathIcon, ClipboardDocumentCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { WrenchIcon } from "@heroicons/react/24/outline";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-full flex justify-center py-16">
        <div className="flex flex-col gap-4 text-center max-w-[550px]">
          <h1 className="text-4xl">Wärme, Präzision, Exzellenz<br /><span className="font-bold">L&C Gebäudetechnik</span></h1>
          <p className="text-lg">
            Wir sind auf Heizungs- und Gebäudetechnik Lösungen spezialisiert, die Ihren Komfort und Ihre Effizienz steigern.
            <br />
            Ob Sie Heizungsrestaurierung, Reparaturen, Austausch oder regelmäßige Wartung und Inspektion benötigen, unser Team erfahrener Techniker steht Ihnen zur Verfügung.
          </p>

          <Button className="self-center mt-2">Jetzt Offerte Einholen</Button>
        </div>
      </section>
      <section className="w-full h-96 relative rounded-xl max-w-[1200px] py-16">
        <Image
          className="rounded-xl"
          src="/title-image.jpeg"
          quality={80}
          priority={false}
          fill={true}
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,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"
          alt="Title Image"
        />
      </section>
      <section className="bg-white dark:bg-black w-full flex flex-col gap-16 items-center justify-center py-16">
        <div className="flex flex-col items-center gap-4 text-center max-w-[550px]">
          <BuildingOfficeIcon className="w-8 h-8 text-center" />
          <h2 className="text-2xl font-extrabold">Unsere Dienstleistungen</h2>
          <p>
            Unser umfassendes Angebot an professionellen Dienstleistungen richtet sich an eine vielfältige Klientel, die vom Eigenheimbesitzer bis zum gewerblichen Bauträger reicht.
          </p>
        </div>
        <div className="flex gap-12 max-w-[1200px]">
          <div className="flex flex-col text-left gap-4">
            <WrenchIcon className="w-6 h-6" />
            <h3 className="font-extrabold">Heizungsrestaurierung</h3>
            <p className="">Vertrauen Sie uns, um Ihre Heizsysteme wieder zum Leben zu erwecken. Wir stellen Wärme und Funktionalität wieder her und sorgen dafür, dass Ihr Raum gemütlich bleibt.</p>
          </div>
          <div className="flex flex-col text-left gap-4">
            <ArrowPathIcon className="w-6 h-6" />
            <h3 className="font-extrabold">Reparaturen und Austausch</h3>
            <p className="">Wenn Ihre Heizgeräte nicht mehr einwandfrei funktionieren, sind wir die Experten, die Sie anrufen sollten. Von kleinen Reparaturen bis zum kompletten Austausch sind wir für Sie da.</p>
          </div>
          <div className="flex flex-col text-left gap-4">
            <ClipboardDocumentCheckIcon className="w-6 h-6" />
            <h3 className="font-extrabold">Wartung und Inspektion</h3>
            <p className="">Regelmäßige Wartung ist der Schlüssel zur optimalen Leistung. Unsere gründlichen Inspektionen sorgen dafür, dass Ihre Systeme das ganze Jahr über reibungslos laufen.</p>
          </div>
        </div>
      </section>
      <section className="bg-black dark:bg-white w-full flex flex-col gap-16 items-center justify-center py-32">
        <div className="flex flex-col items-center gap-8 text-center max-w-[550px]">
          <h2 className="text-4xl font-extrabold italic text-white dark:text-black text-center">“Für schnelle, zuverlässige Heizungsreparaturen ist L&C Gebäudetechnik meine erste Wahl!”</h2>

          <p className="text-white dark:text-black">
            A. Schmidth
            <br />
            <p className="text-sm text-gray-500">Einer von vielen zufriedenen Kunden</p>
          </p>
        </div>
      </section>
      <section className="bg-white dark:bg-black w-full flex flex-col gap-16 items-center justify-center py-16">
        <div className="flex flex-col items-center gap-4 text-center max-w-[550px]">
          <UserGroupIcon className="w-8 h-8 text-center" />
          <h2 className="text-2xl font-extrabold">Über uns</h2>
          <p>
            Unser umfassendes Angebot an professionellen Dienstleistungen richtet sich an eine vielfältige Klientel, die vom Eigenheimbesitzer bis zum gewerblichen Bauträger reicht.
          </p>
        </div>
        <div className="flex gap-12 max-w-[1200px]">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-52 h-52 bg-gray-200 rounded-full"></div>
            <h3 className="text-4xl font-bold">L. Salvatore</h3>
            <p className="font-light text-xl">Inhaber & Leiter Verkauf</p>
            <p className="">Vertrauen Sie uns, um Ihre Heizsysteme wieder zum Leben zu erwecken. Wir stellen Wärme und Funktionalität wieder her und sorgen dafür, dass Ihr Raum gemütlich bleibt.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-52 h-52 bg-gray-200 rounded-full"></div>
            <h3 className="text-4xl font-bold">Cosimo Ardito</h3>
            <p className="font-light text-xl">Inhaber & Leiter Installation</p>
            <p className="">Regelmäßige Wartung ist der Schlüssel zur optimalen Leistung. Unsere gründlichen Inspektionen sorgen dafür, dass Ihre Systeme das ganze Jahr über reibungslos laufen.</p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-16 items-center justify-center py-16 pb-0">
        <div className="bg-white dark:bg-black w-full relative rounded-xl max-w-[1200px] p-12 flex flex-col gap-4">
          <h2 className="text-4xl font-light">Kontakt</h2>

          <div className="">
            <p>L&C Gebäudetechnik</p>
            <p>Kähbachstrasse 6</p>
            <p>9113 Degersheim</p>
            <Link href="mailto:info@lc-gebaeudetechnik.ch" className="text-sky-700 dark:text-sky-300 underline">info@lc-gebaeudetechnik.ch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
