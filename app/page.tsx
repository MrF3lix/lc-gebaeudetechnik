import { Button, LinkButton } from "@/components/Button";
import { FireIcon, HomeModernIcon, RocketLaunchIcon, SunIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { WrenchIcon } from "@heroicons/react/24/outline";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Feature } from "@/components/home/features"
import { Person } from "@/components/home/person"
import { Project } from "@/components/home/project"

export default function Home() {
  return (
    <>
      <section className="w-full flex justify-center py-16 px-8">
        <div className="flex flex-col gap-4 text-center max-w-[550px]">
          <h1 className="text-4xl">Wärme, Präzision, Exzellenz<br /><span className="font-bold">L&C Gebäudetechnik</span></h1>
          <p className="text-lg">
            Langjährige Erfahrungen und ein fundiertes Know-how.
            <br />
            Mit unseren Dienstleistungen erhalten Sie innovative und nachhaltige Lösungen für Ihre Heizungsanlage, Ihr Badezimmer,
            <br />
            Ihre Lüftungs- und Klimaanlage und Ihre Solaranlage.
          </p>

          <LinkButton href="mailto:info@lc-gebaeudetechnik.ch" className="self-center mt-2">
            Jetzt Offerte Einholen
          </LinkButton>
        </div>
      </section>
      <section className="w-full rounded-xl max-w-[1200px] my-16 px-8">
        <div className="relative w-full h-96">
          <Image
            className="rounded-xl w-full"
            src="/assets/images/elco_sept20_092.jpg"
            quality={80}
            priority={false}
            fill={true}
            style={{ objectFit: "cover", objectPosition: "top" }}
            placeholder="blur"
            blurDataURL="data:image/png;base64,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"
            alt="Title Image"
          />

        </div>
      </section>
      <section id="dienstleistung" className="bg-white dark:bg-black w-full flex flex-col gap-16 items-center justify-center py-16 px-8">
        <div className="flex flex-col items-center gap-4 text-center max-w-[550px]">
          <BuildingOfficeIcon className="w-8 h-8 text-center" />
          <h2 className="text-2xl font-extrabold">Unsere Dienstleistungen</h2>
          <p>
            Unser umfassendes Angebot an professionellen Dienstleistungen richtet sich an eine vielfältige Klientel, die vom Eigenheimbesitzer bis zum gewerblichen Bauträger reicht.
          </p>
        </div>
        <div className="flex gap-8 max-w-[1200px] justify-center flex-wrap">
          <Feature
            icon={<FireIcon className="w-6 h-6" />}
            title="Heizung"
            description="Energieberatungen, digitale Heizungsplanung und Ausführung sämtlicher Installationsarbeiten im Bereich Heizung. Spezialist für Heizungssanierungen mit erneuerbarer Energie."
          />
          <Feature
            icon={<WrenchIcon className="w-6 h-6" />}
            title="Sanitär"
            description="Ausführung sämtlicher Installationsarbeiten im Bereich Wasser, Abfluss, Gas und Druckluft sowie Service- und Unterhaltsarbeiten."
          />
          <Feature
            icon={<HomeModernIcon className="w-6 h-6" />}
            title="Kälte & Klima"
            description="Planung und Installation von Klimaanlagen im Wohnbereich, in Büroräumen und bei kleinen Serveranlagen. Neuanlagen, Reparaturen und Ersatz bestehender Anlagen."
          />
          <Feature
            icon={<SunIcon className="w-6 h-6" />}
            title="Solar"
            description="Planung und Ausführung von thermischen Solaranlagen und Photovoltaikanlagen. Optimale Integration von Eigenverbrauchsoptimierungen bei Photovoltaikanlagen und Wärmepumpen."
          />
        </div>
      </section>
      {/* <section className="bg-black dark:bg-white w-full flex flex-col gap-16 items-center justify-center py-32 px-8">
        <div className="flex flex-col items-center gap-8 text-center max-w-[550px]">
          <h2 className="sm:text-4xl text-3xl font-extrabold italic text-white dark:text-black text-center">“Für schnelle, zuverlässige Heizungsreparaturen ist L&C Gebäudetechnik meine erste Wahl!”</h2>
          <p className="text-white dark:text-black">
            A. Schmidth
            <br />
            <span className="text-sm text-gray-500">Einer von vielen zufriedenen Kunden</span>
          </p>
        </div>
      </section> */}

      <section id="ueber-uns" className="w-full flex flex-col gap-16 items-center justify-center py-16 px-8">
        <div className="flex flex-col items-center gap-4 text-center max-w-[550px]">
          <RocketLaunchIcon className="w-8 h-8 text-center" />
          <h2 className="text-2xl font-extrabold">Unsere Projekte</h2>
          <p>
            Ein Überblick über einige unserer erfolgreich abgeschlossenen Projekte in den Bereichen Heizung, Sanitär, Kälte- und Klimatechnik sowie Solarinstallationen. Jedes Projekt spiegelt unser Engagement für Qualität und Innovation wider, von Heizungssarnierung bis hin zur Installation von Sonnenkollektoren.
          </p>
        </div>
        <div className="max-w-[1200px] w-full">
          <div className="overflow-x-auto flex gap-12 py-8 snap-proximity snap-x">
            <Project 
              image={
                <Image
                  src="/assets/images/project_aadorf_friedauweg.png"
                  priority={false}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  alt="Title Image"
                />
              }
              title="Friedauweg 2+4, Aadorf"
              description="Installation Sonnenkollektoren für die Warmwasser gewinnung."
            />
            <Project 
              image={
                <Image
                  src="/assets/images/project_degersheim_bergstrasse_29.png"
                  priority={false}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  alt="Title Image"
                />
              }
              title="Bergstrasse 29, Degersheim"
              description="Heizungssarnierung"
            />
            <Project 
              image={
                <Image
                  src="/assets/images/project_degersheim_kähbachstrasse_11.png"
                  priority={false}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  alt="Title Image"
                />
              }
              title="Kähbachstrasse 11, Degersheim"
              description="Waschtisch Umbau"
            />
            <Project 
              image={
                <Image
                  src="/assets/images/project_kornhausstrasse_25.png"
                  priority={false}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  alt="Title Image"
                />
              }
              title="Kornhausstrasse 25, St. Gallen"
              description="Energieagentur St. Gallen"
            />
            <Project 
              image={
                <Image
                  src="/assets/images/project_windeggstrasse_12.png"
                  priority={false}
                  fill={true}
                  style={{ objectFit: "cover" }}
                  alt="Title Image"
                />
              }
              title="Windeggstrasse 12, Degersheim"
              description="Heizungssarnierung Gas zu Gas"
            />
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="bg-white dark:bg-black w-full flex flex-col gap-16 items-center justify-center py-16 px-8">
        <div className="flex flex-col items-center gap-4 text-center max-w-[550px]">
          <UserGroupIcon className="w-8 h-8 text-center" />
          <h2 className="text-2xl font-extrabold">Über uns</h2>
          <p>
            Wir sind ein kleines Team mit grossem Know-how und bringen zusammen 50 Jahre Erfahrung in der Gebäudetechnikbranche mit. Unser Fachwissen und unsere Leidenschaft für Technik ermöglichen es uns, massgeschneiderte Lösungen für jeden Kunden zu entwickeln.
          </p>
        </div>
        <div className="flex gap-12 max-w-[1200px] lg:flex-nowrap flex-wrap justify-center">
          <Person
            image="/assets/images/leonardo_salvatore.png"
            name="Leonardo Salvatore"
            position="Inhaber & Leiter Installation"
            phone="+41 79 892 94 76"
            email="l.salvatore@lc-gebäudetechnik.ch"
            description="Vertrauen Sie uns, um Ihre Heizsysteme wieder zum Leben zu erwecken. Wir stellen Wärme und Funktionalität wieder her und sorgen dafür, dass Ihr Raum gemütlich bleibt."
          />
          <Person
            image="/assets/images/cosimo_ardito.png"
            name="Cosimo Ardito"
            position="Inhaber & Leiter Verkauf"
            phone="+41 78 303 07 09"
            email="c.ardito@lc-gebäudetechnik.ch"
            description="Regelmässige Wartung ist der Schlüssel zur optimalen Leistung. Unsere gründlichen Inspektionen sorgen dafür, dass Ihre Systeme das ganze Jahr über reibungslos laufen."
          />
        </div>
      </section>

      <section id="kontakt" className="w-full flex flex-col gap-16 items-center justify-center py-16 pb-0 px-8">
        <div className="bg-white dark:bg-black w-full relative rounded-xl max-w-[1200px] p-12 flex flex-col gap-4">
          <h2 className="text-4xl font-light">Kontakt</h2>

          <div className="flex flex-col">
            <p>L&C Gebäudetechnik</p>
            <p>Schuppisstrasse 6</p>
            <p>9016 St. Gallen</p>
            <a className="text-sky-700 dark:text-sky-300 underline" href="tel:+41 71 252 55 45">+41 71 252 55 45</a>
            <Link href="mailto:info@lc-gebaeudetechnik.ch" className="text-sky-700 dark:text-sky-300 underline">info@lc-gebaeudetechnik.ch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
